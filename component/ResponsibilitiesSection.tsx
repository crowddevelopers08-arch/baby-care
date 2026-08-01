"use client";

import React from "react";
import Image from "next/image";

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-[3px]" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.22" />
    <path d="M5 10l3.5 3.5L15 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ageGroups = [
  {
    num: "01",
    title: "Newborn",
    subtitle: "0 – 3 Months",
    from: "var(--color-azure)",
    to: "var(--color-aqua)",
    offset: "lg:mt-0",
    image: "https://images.unsplash.com/photo-1552819289-e14fbbcea868?w=600&h=300&fit=crop&q=80",
    items: [
      "Breastfeeding Support",
      "Keeping the baby clean",
      "Engaging with the baby",
      "Ensuring baby-hygiene",
    ],
  },
  {
    num: "02",
    title: "3 – 6 Months",
    subtitle: "Active Explorer",
    from: "var(--color-aqua)",
    to: "var(--color-leaf)",
    offset: "lg:mt-14",
    image: "https://images.unsplash.com/photo-1503284116362-30c49f508156?w=600&h=300&fit=crop&q=80",
    items: [
      "Keeping the play area clean",
      "Engaging with the baby",
      "Ensuring baby-hygiene",
    ],
  },
  {
    num: "03",
    title: "6 – 12 Months",
    subtitle: "Growing Curious",
    from: "var(--color-sun)",
    to: "var(--color-brand)",
    offset: "lg:mt-0",
    image: "https://images.unsplash.com/photo-1758698856229-6f3dfd08fcc7?w=600&h=300&fit=crop&q=80",
    items: [
      "Speaking a lot with the baby",
      "Engaging with the baby",
      "Ensuring baby-hygiene",
      "Keeping the play area clean",
      "Distraction-free feeding",
    ],
  },
  {
    num: "04",
    title: "Above 12 +",
    subtitle: "Little Learner",
    from: "var(--color-brand)",
    to: "var(--color-brand-soft)",
    offset: "lg:mt-14",
    image: "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?w=600&h=300&fit=crop&q=80",
    items: [
      "Teaching to rearrange toys after playing",
      "Teaching personal hygiene",
      "Potty Training",
      "Being Engaged",
    ],
  },
];

export default function ResponsibilitiesSection() {
  const scrollingAgeGroups = [...ageGroups, ...ageGroups];

  return (
    <section id="what-we" className="relative w-full overflow-hidden bg-white py-8 md:py-14">

      {/* subtle decorative bg shapes — no shadow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-white opacity-60" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-mist opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* ── heading block ── */}
        <div className="mb-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            What We Cover
          </span>
          <h2
            className="font-black font-black leading-tight text-brand"
              style={{
                fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
                fontFamily: "var(--font-nunito, Nunito, sans-serif)",
              }}
          >
            Babysitter Responsibilities
          </h2>
          <div className="mx-auto mt-1 flex items-center justify-center gap-2">
             <svg width="112" height="14" viewBox="0 0 112 14" fill="none" className="block" aria-hidden="true">
                <path d="M2 11 Q56 2 110 11" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
          </div>
        </div>

        {/* ── description ── */}
        <p
          className="mx-auto mb-6 max-w-3xl text-center leading-relaxed text-muted"
          style={{ fontSize: "clamp(0.94rem, 1.4vw, 1.04rem)" }}
        >
          Needless to say, babies are needy. But when it comes to baby care, our services cover
          everything under the sun. Our babysitters don&apos;t just mind your babies, feed them, and
          change their diapers when needed. At SS Babysitters, it is so much more than that —
          massaging them, bathing them, washing their clothes, and keeping them meaningfully
          engaged. But above all, it is all about bonding with and safeguarding them.
        </p>

        {/* ── note box ── */}
        <div className="mx-auto mb-16 max-sm:mb-8 flex max-w-5xl items-start gap-4 rounded-2xl border border-line bg-gradient-to-r from-white to-mist px-6 py-5">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-muted" style={{ fontSize: "0.96rem" }}>
            <span className="font-bold text-ink">Note: </span>
            We also provide 1-month personal-habit training, in case there is any specific habit
            you want to inculcate in your child.
          </p>
        </div>

        {/* ── staggered cards grid ── */}
        <div className="-mx-6 overflow-hidden md:hidden">
          <div className="responsibility-scroll flex w-max gap-5 px-6">
          {scrollingAgeGroups.map((group, index) => (
            <div
              key={`${group.num}-${index}`}
              className="group relative w-[78vw] max-w-[320px] flex-none overflow-hidden rounded-[28px]"
              style={{ background: `linear-gradient(160deg, ${group.from}, ${group.to})` }}
            >
              {/* giant watermark number */}
              <span
                className="pointer-events-none absolute right-3 top-1 select-none font-black text-white"
                style={{ fontSize: "6.5rem", lineHeight: 1, opacity: 0.1 }}
                aria-hidden="true"
              >
                {group.num}
              </span>

              <div className="relative p-7">
                {/* card image */}
                <div className="mb-5 overflow-hidden rounded-2xl" style={{ height: 160 }}>
                  <Image
                    src={group.image}
                    alt={group.title}
                    width={400}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* title */}
                <h3
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.55rem)", lineHeight: 1.1 }}
                >
                  {group.title}
                </h3>

                {/* subtitle tag */}
                <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                  {group.subtitle}
                </span>

                {/* divider */}
                <div className="my-5 h-px w-full bg-white/25" />

                {/* checklist */}
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="font-semibold leading-snug text-white" style={{ fontSize: "0.88rem" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="hidden gap-6 md:grid sm:grid-cols-2 lg:grid-cols-4">
          {ageGroups.map((group) => (
            <div
              key={group.num}
              className={`group relative overflow-hidden rounded-[28px] transition-transform duration-300 hover:scale-[1.04] ${group.offset}`}
              style={{ background: `linear-gradient(160deg, ${group.from}, ${group.to})` }}
            >
              <span
                className="pointer-events-none absolute right-3 top-1 select-none font-black text-white"
                style={{ fontSize: "6.5rem", lineHeight: 1, opacity: 0.1 }}
                aria-hidden="true"
              >
                {group.num}
              </span>

              <div className="relative p-7">
                <div className="mb-5 overflow-hidden rounded-2xl" style={{ height: 160 }}>
                  <Image
                    src={group.image}
                    alt={group.title}
                    width={400}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3
                  className="font-black text-white"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.55rem)", lineHeight: 1.1 }}
                >
                  {group.title}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                  {group.subtitle}
                </span>

                <div className="my-5 h-px w-full bg-white/25" />

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="font-semibold leading-snug text-white" style={{ fontSize: "0.88rem" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .responsibility-scroll {
          animation: responsibilityScroll 26s linear infinite;
        }

        .responsibility-scroll:hover,
        .responsibility-scroll:active,
        .responsibility-scroll:focus-within {
          animation-play-state: paused;
        }

        @keyframes responsibilityScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 10px));
          }
        }
      `}</style>
    </section>
  );
}
