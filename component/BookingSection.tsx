"use client";

import React from "react";
import EnquiryPopupButton from "./EnquiryPopupButton";

const WaveTop = () => (
  <svg className="absolute left-0 top-0 h-8 w-full text-white" viewBox="0 0 1440 44" preserveAspectRatio="none" fill="none" aria-hidden="true">
    <path d="M0 0H1440V13C1312 25 1198 3 1075 11C930 21 835 20 720 10C574-3 485 24 340 13C211 3 115 20 0 9V0Z" fill="currentColor" />
    <path d="M0 29C150 17 258 33 366 24C507 12 614 24 735 28C885 33 976 14 1120 22C1262 30 1335 17 1440 23V44H0V29Z" fill="var(--color-mist)" opacity="0.7" />
  </svg>
);

const WaveBottom = () => (
  <svg className="absolute bottom-0 left-0 h-8 w-full rotate-180 text-white" viewBox="0 0 1440 44" preserveAspectRatio="none" fill="none" aria-hidden="true">
    <path d="M0 0H1440V13C1312 25 1198 3 1075 11C930 21 835 20 720 10C574-3 485 24 340 13C211 3 115 20 0 9V0Z" fill="currentColor" />
    <path d="M0 29C150 17 258 33 366 24C507 12 614 24 735 28C885 33 976 14 1120 22C1262 30 1335 17 1440 23V44H0V29Z" fill="var(--color-mist)" opacity="0.7" />
  </svg>
);

const TitleUnderline = () => (
  <div className="mx-auto mt-1 flex items-center justify-center" aria-hidden="true">
    <svg width="150" height="18" viewBox="0 0 150 18" fill="none" className="block">
      <path d="M2 12 Q75 2 148 12" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  </div>
);

export default function BookingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10">
      <div className="relative overflow-hidden px-6 py-8 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/xykwtyr0/image/upload/v1789712667/about-bg.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/88 to-mist/92"
          aria-hidden="true"
        />
        <WaveTop />
        <WaveBottom />

        <div className="pointer-events-none absolute -left-20 top-16 h-52 w-52 rounded-full bg-brand/10 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-16 h-56 w-56 rounded-full bg-azure/10 blur-2xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Easy Booking
          </span>

          <h2
            className="font-black leading-tight text-brand"
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
              fontFamily: "var(--font-nunito, Nunito, sans-serif)",
            }}
          >
            How to book a babysitter?
          </h2>

          <TitleUnderline />

          <div className="mx-auto mt-5 max-w-4xl space-y-6 rounded-[28px] border border-mist bg-white/80 px-6 py-8 text-[1rem] font-semibold leading-8 text-muted shadow-[0_20px_60px_rgba(219,48,86,0.08)] md:mt-9 md:space-y-8 md:px-10 md:text-[1.08rem]">
            <p>
              First, get in touch with us through a call, a text, or WhatsApp. Upon understanding
              your requirement, we will send you a few Chennai babysitters&apos; profiles to choose
              from. To save them the trouble of commuting, these babysitters will typically be from
              within a radius of 3 km from your residence.
            </p>

            <p>
              To ensure you are content with your babysitter, we provide a free trial of 1 week. We
              also provide replacements wherever necessary.
            </p>
          </div>

          <EnquiryPopupButton
            className="mt-9 inline-flex rounded-full bg-brand px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-aqua"
          >
            Enquire Now
          </EnquiryPopupButton>
        </div>
      </div>
    </section>
  );
}
