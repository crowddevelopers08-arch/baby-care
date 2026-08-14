/**
 * One-off import of the legacy data/submissions.csv into Neon.
 *
 * Usage: npm run leads:backfill
 *
 * Safe to re-run: a row is skipped when a lead with the same phone and
 * timestamp already exists.
 */
import "dotenv/config";
import * as fs from "node:fs";
import * as path from "node:path";

import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../generated/prisma/client";

const CSV_PATH = path.join(process.cwd(), "data", "submissions.csv");
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

/** Minimal RFC-4180 parser: handles quoted fields and escaped double quotes. */
function parseCsv(content: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < content.length; i += 1) {
    const char = content[i];

    if (inQuotes) {
      if (char === '"') {
        if (content[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((entry) => entry.some((value) => value.trim() !== ""));
}

/**
 * Parses the en-IN timestamps the old route wrote, e.g. "2/6/2026, 1:42:03 pm"
 * (day/month/year, IST). Returns null when the shape is unrecognised.
 */
function parseIstTimestamp(value: string): Date | null {
  const match = value
    .trim()
    .match(/^(\d{1,2})\/(\d{1,2})\/(\d{4}),?\s+(\d{1,2}):(\d{2}):(\d{2})\s*(am|pm)?$/i);
  if (!match) return null;

  const [, day, month, year, hourRaw, minute, second, meridiem] = match;
  let hour = Number(hourRaw);
  if (meridiem) {
    const isPm = meridiem.toLowerCase() === "pm";
    if (isPm && hour !== 12) hour += 12;
    if (!isPm && hour === 12) hour = 0;
  }

  const utcMs = Date.UTC(
    Number(year),
    Number(month) - 1,
    Number(day),
    hour,
    Number(minute),
    Number(second),
  );

  return new Date(utcMs - IST_OFFSET_MS);
}

async function main() {
  if (!fs.existsSync(CSV_PATH)) {
    console.log(`No CSV found at ${CSV_PATH} — nothing to import.`);
    return;
  }

  const rows = parseCsv(fs.readFileSync(CSV_PATH, "utf8"));
  if (rows.length <= 1) {
    console.log("CSV has no data rows — nothing to import.");
    return;
  }

  const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
  });

  let imported = 0;
  let skipped = 0;

  try {
    // Row 0 is the header.
    for (const [index, row] of rows.slice(1).entries()) {
      const [timestamp, source, name, email, phone, description, url, telecrm] = row.map(
        (value) => (value ?? "").trim(),
      );

      if (!name || !phone) {
        console.warn(`Row ${index + 2}: missing name or phone — skipped.`);
        skipped += 1;
        continue;
      }

      const createdAt = parseIstTimestamp(timestamp) ?? new Date();
      if (!parseIstTimestamp(timestamp)) {
        console.warn(`Row ${index + 2}: unparseable timestamp "${timestamp}" — using now.`);
      }

      const existing = await prisma.lead.findFirst({
        where: { phone, createdAt },
        select: { id: true },
      });

      if (existing) {
        skipped += 1;
        continue;
      }

      await prisma.lead.create({
        data: {
          createdAt,
          name,
          email: email || null,
          phone,
          concern: description || "(not provided)",
          source: source || "Website",
          pageUrl: url || null,
          telecrmStatus: telecrm || null,
          telecrmSynced: telecrm.toLowerCase().startsWith("synced"),
        },
      });

      imported += 1;
    }

    console.log(`Backfill complete — ${imported} imported, ${skipped} skipped.`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("Backfill failed:", err);
  process.exit(1);
});
