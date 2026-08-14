import { NextRequest, NextResponse } from "next/server";

import { CSV_HEADERS, STATUS_LABELS, formatIst, isLeadStatus, toCsvRow } from "@/lib/leads";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = (searchParams.get("q") ?? "").trim();
    const status = searchParams.get("status");

    const where: Prisma.LeadWhereInput = {
      ...(isLeadStatus(status) ? { status } : {}),
      ...(query
        ? {
            OR: [
              { name: { contains: query, mode: "insensitive" } },
              { email: { contains: query, mode: "insensitive" } },
              { phone: { contains: query, mode: "insensitive" } },
              { concern: { contains: query, mode: "insensitive" } },
              { source: { contains: query, mode: "insensitive" } },
            ],
          }
        : {}),
    };

    const leads = await prisma.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    const lines = [
      toCsvRow(CSV_HEADERS),
      ...leads.map((lead) =>
        toCsvRow([
          formatIst(lead.createdAt),
          lead.source,
          lead.name,
          lead.email ?? "",
          lead.phone,
          lead.concern,
          lead.pageUrl ?? "",
          STATUS_LABELS[lead.status],
          lead.telecrmStatus ?? "",
        ]),
      ),
    ];

    // BOM keeps Excel from mangling non-ASCII names.
    const csv = `﻿${lines.join("\n")}\n`;

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="leads_${Date.now()}.csv"`,
      },
    });
  } catch (err) {
    console.error("Lead export failed:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
