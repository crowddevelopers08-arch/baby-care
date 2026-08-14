import { LeadStatus } from "@/generated/prisma/enums";

export { LeadStatus };

export const LEAD_STATUSES = [
  LeadStatus.NEW,
  LeadStatus.CONTACTED,
  LeadStatus.QUALIFIED,
  LeadStatus.CONVERTED,
  LeadStatus.CLOSED,
] as const;

export const STATUS_LABELS: Record<LeadStatus, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  CONVERTED: "Converted",
  CLOSED: "Closed",
};

/** Tailwind classes for the status pill / select, one entry per status. */
export const STATUS_STYLES: Record<LeadStatus, string> = {
  NEW: "bg-brand/10 text-brand border-brand/30",
  CONTACTED: "bg-azure/10 text-azure border-azure/30",
  QUALIFIED: "bg-sun/10 text-sun border-sun/30",
  CONVERTED: "bg-leaf/10 text-leaf border-leaf/30",
  CLOSED: "bg-mist text-graphite border-line",
};

export function isLeadStatus(value: unknown): value is LeadStatus {
  return typeof value === "string" && value in STATUS_LABELS;
}

export const CSV_HEADERS = [
  "Timestamp",
  "Source",
  "Name",
  "Email",
  "Phone",
  "Description",
  "URL",
  "Status",
  "TeleCRM",
] as const;

export function csvEscape(value: string): string {
  const safeValue = value.replace(/\r?\n/g, " ");
  if (/[",\n]/.test(safeValue)) return `"${safeValue.replace(/"/g, '""')}"`;
  return safeValue;
}

export function toCsvRow(row: readonly string[]): string {
  return row.map(csvEscape).join(",");
}

export function formatIst(date: Date): string {
  return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
}
