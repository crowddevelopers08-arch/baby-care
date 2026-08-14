import type { Metadata } from "next";

import { LEAD_STATUSES, STATUS_LABELS, formatIst, isLeadStatus } from "@/lib/leads";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";

import NotesCell from "./NotesCell";
import StatusSelect from "./StatusSelect";
import { deleteLead } from "./actions";

export const metadata: Metadata = {
  title: "Leads Dashboard | BabyCare",
  // Internal tool: keep it out of search results.
  robots: { index: false, follow: false },
};

const PAGE_SIZE = 25;
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

/** Midnight IST, expressed as the equivalent UTC instant. */
function istMidnight(daysAgo = 0): Date {
  const nowIst = new Date(Date.now() + IST_OFFSET_MS);
  const midnightIst = Date.UTC(
    nowIst.getUTCFullYear(),
    nowIst.getUTCMonth(),
    nowIst.getUTCDate() - daysAgo,
  );
  return new Date(midnightIst - IST_OFFSET_MS);
}

type SearchParams = {
  q?: string;
  status?: string;
  page?: string;
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();
  const statusFilter = isLeadStatus(params.status) ? params.status : null;
  const page = Math.max(1, Number(params.page) || 1);

  const where: Prisma.LeadWhereInput = {
    ...(statusFilter ? { status: statusFilter } : {}),
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

  const [leads, filteredCount, totalCount, todayCount, weekCount, newCount] =
    await Promise.all([
      prisma.lead.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
      }),
      prisma.lead.count({ where }),
      prisma.lead.count(),
      prisma.lead.count({ where: { createdAt: { gte: istMidnight() } } }),
      prisma.lead.count({ where: { createdAt: { gte: istMidnight(6) } } }),
      prisma.lead.count({ where: { status: "NEW" } }),
    ]);

  const totalPages = Math.max(1, Math.ceil(filteredCount / PAGE_SIZE));
  const isFiltered = Boolean(query || statusFilter);

  const pageHref = (targetPage: number) => {
    const search = new URLSearchParams();
    if (query) search.set("q", query);
    if (statusFilter) search.set("status", statusFilter);
    if (targetPage > 1) search.set("page", String(targetPage));
    const qs = search.toString();
    return qs ? `/dashboard?${qs}` : "/dashboard";
  };

  const exportHref = (() => {
    const search = new URLSearchParams();
    if (query) search.set("q", query);
    if (statusFilter) search.set("status", statusFilter);
    const qs = search.toString();
    return qs ? `/api/leads/export?${qs}` : "/api/leads/export";
  })();

  const stats = [
    { label: "Total leads", value: totalCount, accent: "text-brand" },
    { label: "Today", value: todayCount, accent: "text-azure" },
    { label: "Last 7 days", value: weekCount, accent: "text-aqua" },
    { label: "Awaiting contact", value: newCount, accent: "text-sun" },
  ];

  return (
    <main className="flex-1 bg-mist/40 px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand">
              BabyCare
            </p>
            <h1 className="mt-1 text-3xl font-black text-ink md:text-4xl">
              Leads Dashboard
            </h1>
            <p className="mt-1 text-sm font-semibold text-muted">
              Every enquiry submitted through the website, newest first.
            </p>
          </div>

          <a
            href={exportHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-aqua"
          >
            Export CSV
          </a>
        </header>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-black uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </p>
              <p className={`mt-2 text-3xl font-black ${stat.accent}`}>{stat.value}</p>
            </div>
          ))}
        </section>

        <form
          method="get"
          className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm"
        >
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search name, email, phone or requirement"
            className="min-w-[240px] flex-1 rounded-xl border border-line bg-mist px-4 py-2.5 text-sm font-semibold text-graphite outline-none transition-colors focus:border-azure"
          />

          <select
            name="status"
            defaultValue={statusFilter ?? ""}
            className="rounded-xl border border-line bg-mist px-4 py-2.5 text-sm font-bold text-graphite outline-none transition-colors focus:border-azure"
          >
            <option value="">All statuses</option>
            {LEAD_STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="rounded-full bg-ink px-6 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-graphite"
          >
            Filter
          </button>

          {isFiltered ? (
            <a
              href="/dashboard"
              className="text-xs font-black uppercase tracking-[0.12em] text-muted underline-offset-4 hover:text-brand hover:underline"
            >
              Clear
            </a>
          ) : null}
        </form>

        <p className="mt-4 text-sm font-bold text-muted">
          {filteredCount === 0
            ? "No leads found"
            : `Showing ${(page - 1) * PAGE_SIZE + 1}-${Math.min(page * PAGE_SIZE, filteredCount)} of ${filteredCount}`}
          {isFiltered ? " (filtered)" : ""}
        </p>

        {leads.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-line bg-white p-12 text-center">
            <p className="text-base font-black text-ink">
              {isFiltered ? "Nothing matches this filter" : "No leads yet"}
            </p>
            <p className="mt-1 text-sm font-semibold text-muted">
              {isFiltered
                ? "Try a different search term or status."
                : "Submissions from the website enquiry form will appear here."}
            </p>
          </div>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-white shadow-sm">
            <table className="w-full min-w-[1000px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-mist/60">
                  {[
                    "Received",
                    "Contact",
                    "Requirement",
                    "Source",
                    "Status",
                    "Notes",
                    "",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-graphite"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-line/60 align-top transition-colors last:border-0 hover:bg-cream/40"
                  >
                    <td className="whitespace-nowrap px-4 py-4 text-xs font-bold text-graphite">
                      {formatIst(lead.createdAt)}
                    </td>

                    <td className="px-4 py-4">
                      <p className="text-sm font-black text-ink">{lead.name}</p>
                      <a
                        href={`tel:${lead.phone}`}
                        className="mt-0.5 block text-xs font-bold text-azure hover:underline"
                      >
                        {lead.phone}
                      </a>
                      {lead.email ? (
                        <a
                          href={`mailto:${lead.email}`}
                          className="block break-all text-xs font-semibold text-muted hover:underline"
                        >
                          {lead.email}
                        </a>
                      ) : null}
                    </td>

                    <td className="max-w-xs px-4 py-4 text-xs font-semibold leading-5 text-graphite">
                      {lead.concern}
                    </td>

                    <td className="px-4 py-4">
                      <p className="text-xs font-bold text-graphite">{lead.source}</p>
                      <p
                        className={`mt-1 text-[10px] font-black uppercase tracking-[0.1em] ${
                          lead.telecrmSynced ? "text-leaf" : "text-muted"
                        }`}
                        title={lead.telecrmStatus ?? undefined}
                      >
                        CRM: {lead.telecrmSynced ? "synced" : "not synced"}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <StatusSelect leadId={lead.id} status={lead.status} />
                    </td>

                    <td className="min-w-[200px] px-4 py-4">
                      <NotesCell leadId={lead.id} notes={lead.notes} />
                    </td>

                    <td className="px-4 py-4">
                      <form action={deleteLead}>
                        <input type="hidden" name="leadId" value={lead.id} />
                        <button
                          type="submit"
                          className="rounded-full border border-line px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-muted transition-colors hover:border-brand hover:text-brand"
                        >
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {totalPages > 1 ? (
          <nav className="mt-6 flex items-center justify-center gap-3">
            {page > 1 ? (
              <a
                href={pageHref(page - 1)}
                className="rounded-full border border-line bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.1em] text-graphite transition-colors hover:border-brand hover:text-brand"
              >
                Previous
              </a>
            ) : null}

            <span className="text-xs font-black uppercase tracking-[0.1em] text-muted">
              Page {page} of {totalPages}
            </span>

            {page < totalPages ? (
              <a
                href={pageHref(page + 1)}
                className="rounded-full border border-line bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.1em] text-graphite transition-colors hover:border-brand hover:text-brand"
              >
                Next
              </a>
            ) : null}
          </nav>
        ) : null}
      </div>
    </main>
  );
}
