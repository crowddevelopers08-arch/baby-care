"use client";

import React from "react";
import EnquiryPopupButton from "./EnquiryPopupButton";

const featureCards = [
  { title: "MULTILINGUAL", accent: "var(--color-brand)", icon: "https://res.cloudinary.com/xykwtyr0/image/upload/v1789712667/languages.png" },
  { title: "TRUST", accent: "var(--color-azure)", icon: "https://res.cloudinary.com/xykwtyr0/image/upload/v1789712668/reliability.png" },
  { title: "AFFORDABLE", accent: "var(--color-sun)", icon: "https://res.cloudinary.com/xykwtyr0/image/upload/v1789712668/money.png" },
  { title: "GUARANTEE", accent: "var(--color-aqua)", icon: "https://res.cloudinary.com/xykwtyr0/image/upload/v1789712667/guarantee-1.png" },
];

const shiftCards = ["10 hrs", "12 hrs", "Night Shift", "Double Shift"];

const shiftAccents = [
  "var(--color-brand)",
  "var(--color-azure)",
  "var(--color-sun)",
  "var(--color-aqua)",
];

const TitleUnderline = ({ align = "center" }: { align?: "center" | "left" }) => (
  <div className={`mt-1 flex ${align === "center" ? "justify-center" : "justify-start"}`} aria-hidden="true">
    <svg width="150" height="18" viewBox="0 0 150 18" fill="none" className="block">
      <path d="M2 12 Q75 2 148 12" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  </div>
);

function FeatureGrid() {
  const scrollingFeatureCards = [...featureCards, ...featureCards];

  return (
    <>
      <div className="overflow-hidden md:hidden">
        <div className="why-feature-scroll flex w-max gap-5 py-1">
        {scrollingFeatureCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="group relative flex min-h-[190px] w-[74vw] max-w-[260px] flex-none flex-col items-center justify-center overflow-hidden rounded-[24px] border border-mist bg-white/90 px-5 py-7 text-center shadow-[0_18px_45px_rgba(219,48,86,0.10)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute left-0 top-0 h-1.5 w-full" style={{ backgroundColor: card.accent }} />
            <div className="rounded-full bg-cream p-4 shadow-inner">
              <img src={card.icon} alt={`${card.title} icon`} className="h-[68px] w-[68px] object-contain" />
            </div>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-wide" style={{ color: card.accent }}>
              {card.title}
            </h3>
          </div>
        ))}
        </div>
      </div>

      <div className="hidden gap-5 md:grid md:grid-cols-2">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-mist bg-white/90 px-5 py-7 text-center shadow-[0_18px_45px_rgba(219,48,86,0.10)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute left-0 top-0 h-1.5 w-full" style={{ backgroundColor: card.accent }} />
            <div className="rounded-full bg-cream p-4 shadow-inner">
              <img src={card.icon} alt={`${card.title} icon`} className="h-[68px] w-[68px] object-contain" />
            </div>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-wide" style={{ color: card.accent }}>
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

function ShiftGrid() {
  const scrollingShiftCards = [...shiftCards, ...shiftCards];

  return (
    <>
      <div className="overflow-hidden md:hidden">
        <div className="why-shift-scroll flex w-max gap-5 py-1">
        {scrollingShiftCards.map((shift, index) => (
          <div
            key={`${shift}-${index}`}
            className="group relative flex min-h-[150px] w-[70vw] max-w-[230px] flex-none flex-col items-center justify-center overflow-hidden rounded-[24px] border border-mist bg-white/90 px-5 py-7 text-center shadow-[0_18px_45px_rgba(219,48,86,0.10)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className="absolute left-0 top-0 h-1.5 w-full"
              style={{ backgroundColor: shiftAccents[index % shiftAccents.length] }}
            />
            <span
              className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream text-lg font-black"
              style={{ color: shiftAccents[index % shiftAccents.length] }}
            >
              {String((index % shiftCards.length) + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl font-black tracking-wide text-ink">{shift}</h3>
          </div>
        ))}
        </div>
      </div>

      <div className="hidden gap-5 md:grid md:grid-cols-2">
        {shiftCards.map((shift, index) => (
          <div
            key={shift}
            className="group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-mist bg-white/90 px-5 py-7 text-center shadow-[0_18px_45px_rgba(219,48,86,0.10)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className="absolute left-0 top-0 h-1.5 w-full"
              style={{ backgroundColor: shiftAccents[index % shiftAccents.length] }}
            />
            <span
              className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream text-lg font-black"
              style={{ color: shiftAccents[index % shiftAccents.length] }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl font-black tracking-wide text-ink">{shift}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-white max-sm:pb-6 py-0 md:py-10">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-white" />
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border-[34px] border-cream" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-64 w-64 rounded-full bg-cream" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Why Choose Us
          </span>

          <h2
            className="font-black leading-tight text-brand"
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
              fontFamily: "var(--font-nunito, Nunito, sans-serif)",
            }}
          >
            Why Choose Us ?
          </h2>

          <TitleUnderline />
        </div>

        <div className="mt-12 max-sm:mt-4 grid items-center max-sm:gap-4 gap-12 rounded-[34px] border border-mist bg-white p-6 shadow-[0_24px_70px_rgba(219,48,86,0.08)] md:p-9 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-lg font-black text-brand">
              01
            </span>
            <h3
              className="max-w-3xl font-black leading-tight text-brand"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              A Babysitter who speaks the language of your choice
            </h3>

            <TitleUnderline align="left" />

            <p className="mt-7 max-w-3xl text-[1rem] font-semibold leading-8 text-muted md:text-[1.08rem]">
              Finding a trusted babysitter is not easy, and it gets harder when you want your
              babysitter to speak in a specific language. So, whether you want to familiarise your
              little one with English or want them to quickly pick up their mother tongue, our
              professional babysitters will help you out. Our nannies speak at least two languages,
              with many of them fluent in English, Telugu, and Malayalam.
            </p>
          </div>

          <FeatureGrid />
        </div>

        <div className="mt-10 max-sm:mt-5 grid items-center max-sm:gap-4 gap-12 rounded-[34px] border border-mist bg-white p-6 shadow-[0_24px_70px_rgba(43,43,43,0.06)] md:p-9 lg:grid-cols-[1.05fr_1fr]">
          <ShiftGrid />

          <div className="relative">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-lg font-black text-brand">
              02
            </span>
            <h3
              className="font-black leading-tight text-brand"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Babysitter Shifts &amp; Timings
            </h3>

            <TitleUnderline align="left" />

            <p className="mt-6 text-[1.55rem] font-black leading-tight text-muted md:text-[2.45rem]">
              Our babysitters have a minimum 8-hour shift.
            </p>

            <p className="mt-5 text-[1rem] font-semibold leading-8 text-muted md:text-[1.08rem]">
              Apart from that, you are free to choose which duration suits you best:
            </p>

            <EnquiryPopupButton
              className="mt-6 inline-flex rounded-full bg-sun px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-sun/25 transition-all hover:-translate-y-0.5 hover:bg-aqua"
            >
              Enquire Now
            </EnquiryPopupButton>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .why-feature-scroll {
          animation: whyFeatureScroll 24s linear infinite;
        }

        .why-shift-scroll {
          animation: whyShiftScroll 24s linear infinite;
        }

        .why-feature-scroll:hover,
        .why-feature-scroll:active,
        .why-feature-scroll:focus-within,
        .why-shift-scroll:hover,
        .why-shift-scroll:active,
        .why-shift-scroll:focus-within {
          animation-play-state: paused;
        }

        @keyframes whyFeatureScroll {
          from {
            transform: translateX(calc(-50% - 10px));
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes whyShiftScroll {
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
