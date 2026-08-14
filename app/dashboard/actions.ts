"use server";

import { revalidatePath } from "next/cache";

import { isLeadStatus } from "@/lib/leads";
import { prisma } from "@/lib/prisma";

export async function updateLeadStatus(leadId: string, status: string) {
  if (!leadId || !isLeadStatus(status)) {
    throw new Error("Invalid lead status update");
  }

  await prisma.lead.update({
    where: { id: leadId },
    data: { status },
  });

  revalidatePath("/dashboard");
}

export async function updateLeadNotes(leadId: string, notes: string) {
  if (!leadId) throw new Error("Invalid lead");

  await prisma.lead.update({
    where: { id: leadId },
    data: { notes: notes.trim() || null },
  });

  revalidatePath("/dashboard");
}

export async function deleteLead(formData: FormData) {
  const leadId = String(formData.get("leadId") || "");
  if (!leadId) throw new Error("Invalid lead");

  await prisma.lead.delete({ where: { id: leadId } });

  revalidatePath("/dashboard");
}
