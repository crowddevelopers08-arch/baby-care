"use client";

import EnquiryPopupButton from "./EnquiryPopupButton";
import { CountUp } from "./StatsSection";

const pillars = [
  {
    number: "01",
    accent: "var(--color-azure)",
    title: "All Over Chennai",
    description:
      "Wherever you live in the city, we place a babysitter close to you. Our network reaches every Chennai neighbourhood, so trusted help is never far from home.",
    chips: [],
  },
  {
    number: "02",
    accent: "var(--color-sun)",
    title: "Two Physical Offices",
    description:
      "We are not an app-only agency. Walk into either office, meet the team face to face, and talk through exactly what your family needs.",
    chips: ["Anna Nagar", "Urapakkam"],
  },
  {
    number: "03",
    accent: "var(--color-aqua)",
    title: "Daycare Partnerships",
    description:
      "Daycare centres and creches partner with us for dependable, background-checked staffing they can rely on every single day.",
    chips: ["Casagrand Creche"],
  },
];

const counters = [
  { target: 15000, suffix: "+", label: "Babysitters In Our Network" },
  { target: 440, suffix: "+", label: "Happy Parents" },
];

const TitleUnderline = () => (
  <div className="mx-auto mt-1 flex items-center justify-center" aria-hidden="true">
    <svg width="150" height="18" viewBox="0 0 150 18" fill="none" className="block">
      <path
        d="M2 12 Q75 2 148 12"
        stroke="var(--color-brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </div>
);

export default function ChennaiPresenceSection() {
  return (
    <section
      id="chennai-presence"
      aria-labelledby="chennai-presence-title"
      className="relative w-full overflow-hidden bg-white py-8 md:py-14"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cream" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-mist" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* ── heading block ── */}
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Chennai&apos;s Own
          </span>

          <h2
            id="chennai-presence-title"
            className="font-black leading-tight text-brand"
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
              fontFamily: "var(--font-nunito, Nunito, sans-serif)",
            }}
          >
            Chennai&apos;s One And Only Babysitting Service
          </h2>

          <TitleUnderline />

          <p className="mx-auto mt-6 max-w-3xl text-[1rem] font-semibold leading-8 text-muted md:text-[1.08rem]">
            No other agency in the city does this and only this. Babysitting is not a side service
            for us &mdash; it is the whole business, backed by real offices, a city-wide network,
            and daycare centres who trust us with their staffing.
          </p>
        </div>

        {/* ── three pillars ── */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group relative overflow-hidden rounded-[28px] border border-mist bg-white p-6 shadow-[0_18px_45px_rgba(219,48,86,0.07)] transition-transform duration-300 hover:-translate-y-1 md:p-7"
            >
              <div
                className="absolute left-0 top-0 h-1.5 w-full"
                style={{ backgroundColor: pillar.accent }}
              />

              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-lg font-black"
                style={{ color: pillar.accent }}
              >
                {pillar.number}
              </span>

              <h3
                className="mt-5 text-xl font-black leading-tight text-ink md:text-2xl"
                style={{ fontFamily: "var(--font-nunito, Nunito, sans-serif)" }}
              >
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm font-semibold leading-7 text-muted md:text-[0.97rem]">
                {pillar.description}
              </p>

              {pillar.chips.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full px-4 py-2 text-xs font-bold tracking-wide text-white"
                      style={{ backgroundColor: pillar.accent }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        {/* ── counters ── */}
        <div className="mt-10 overflow-hidden rounded-[28px] bg-aqua">
          <div className="grid divide-y divide-white/25 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {counters.map(({ target, suffix, label }) => (
              <div key={label} className="flex flex-col items-center justify-center px-6 py-9 text-center">
                <p
                  className="font-black leading-none text-white"
                  style={{
                    fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
                    fontFamily: "var(--font-nunito, Nunito, sans-serif)",
                  }}
                >
                  <CountUp target={target} duration={2200} />
                  <span>{suffix}</span>
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/90 md:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── daycare partnership call to action ── */}
        <div className="mt-8 flex flex-col items-center gap-5 rounded-[28px] border border-mist bg-white px-6 py-8 text-center shadow-[0_18px_45px_rgba(219,48,86,0.07)] md:px-10">
          <h3 className="text-xl font-black leading-tight text-brand md:text-2xl">
            Run a daycare centre? Partner with us.
          </h3>
          <p className="max-w-2xl text-sm font-semibold leading-7 text-muted md:text-[0.97rem]">
            We staff daycare centres and creches across Chennai with trained, background-checked
            babysitters &mdash; and we keep supporting them long after placement.
          </p>
          <EnquiryPopupButton className="inline-flex rounded-full bg-sun px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-sun/25 transition-all hover:-translate-y-0.5 hover:bg-aqua">
            Partner With Us
          </EnquiryPopupButton>
        </div>

      </div>
    </section>
  );
}
