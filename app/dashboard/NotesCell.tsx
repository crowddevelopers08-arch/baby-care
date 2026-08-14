"use client";

import { useState, useTransition } from "react";

import { updateLeadNotes } from "./actions";

export default function NotesCell({
  leadId,
  notes,
}: {
  leadId: string;
  notes: string | null;
}) {
  const [value, setValue] = useState(notes ?? "");
  const [saved, setSaved] = useState(notes ?? "");
  const [pending, startTransition] = useTransition();

  const commit = () => {
    if (value === saved) return;
    const next = value;
    startTransition(async () => {
      try {
        await updateLeadNotes(leadId, next);
        setSaved(next);
      } catch {
        setValue(saved);
      }
    });
  };

  return (
    <div className="relative">
      <textarea
        value={value}
        rows={2}
        disabled={pending}
        onChange={(event) => setValue(event.target.value)}
        onBlur={commit}
        placeholder="Add a note..."
        className="w-full resize-none rounded-xl border border-line bg-white px-2.5 py-1.5 text-xs font-semibold text-graphite outline-none transition-colors placeholder:text-muted/60 focus:border-azure disabled:opacity-50"
      />
      {value !== saved ? (
        <span className="absolute -bottom-3.5 right-0 text-[10px] font-bold text-muted">
          {pending ? "Saving..." : "Unsaved - click away to save"}
        </span>
      ) : null}
    </div>
  );
}
