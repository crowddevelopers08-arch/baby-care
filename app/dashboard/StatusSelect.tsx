"use client";

import { useState, useTransition } from "react";

import { LEAD_STATUSES, STATUS_LABELS, STATUS_STYLES, type LeadStatus } from "@/lib/leads";

import { updateLeadStatus } from "./actions";

export default function StatusSelect({
  leadId,
  status,
}: {
  leadId: string;
  status: LeadStatus;
}) {
  // Held locally so the pill recolours immediately instead of waiting for the
  // server round-trip and revalidation.
  const [value, setValue] = useState<LeadStatus>(status);
  const [pending, startTransition] = useTransition();

  return (
    <select
      value={value}
      disabled={pending}
      onChange={(event) => {
        const next = event.target.value as LeadStatus;
        const previous = value;
        setValue(next);
        startTransition(async () => {
          try {
            await updateLeadStatus(leadId, next);
          } catch {
            setValue(previous);
          }
        });
      }}
      className={`w-full rounded-full border px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] outline-none transition-opacity disabled:opacity-50 ${STATUS_STYLES[value]}`}
      aria-label="Lead status"
    >
      {LEAD_STATUSES.map((option) => (
        <option key={option} value={option} className="bg-white text-ink">
          {STATUS_LABELS[option]}
        </option>
      ))}
    </select>
  );
}
