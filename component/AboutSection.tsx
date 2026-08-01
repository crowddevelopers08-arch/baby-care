"use client";

import React from "react";
import Image from "next/image";
import EnquiryPopupButton from "./EnquiryPopupButton";

const AboutTitle = () => (
  <>
    <div className="mb-5">
      <span
        className="font-bold"
        style={{ color: "var(--color-brand)", fontSize: "1.15rem" }}
      >
        About Us
      </span>
      <svg width="112" height="14" viewBox="0 0 112 14" fill="none" className="block" aria-hidden="true">
        <path d="M2 11 Q56 2 110 11" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>

    <h2
      className="mb-5 font-black leading-tight text-brand"
      style={{
        fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
        fontFamily: "var(--font-nunito, Nunito, sans-serif)",
      }}
    >
      SS Babysitter - Prime Baby Care
      &amp; Geriatric Service in Chennai
    </h2>
  </>
);

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden py-8 md:py-14">
      {/* background image */}
      <Image
        src="/about-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />
      {/* cream overlay — reduced opacity so bg image shows through */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.78) 50%, rgba(255,255,255,0.82) 100%)" }} />


      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="lg:hidden">
          <AboutTitle />
        </div>

        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — parent testimonial video (portrait 9:16 source) */}
          <div className="relative flex items-center justify-center">
            <figure className="relative z-10 flex w-full max-w-[330px] flex-col items-center">
              <div className="w-full overflow-hidden rounded-[24px] border border-mist bg-white p-2 shadow-2xl">
                <div
                  className="relative w-full overflow-hidden rounded-[18px] bg-ink"
                  style={{ aspectRatio: "9 / 16" }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/798118851?autoplay=1&loop=1&muted=1&playsinline=1&controls=1&rel=0&autopause=0&title=0&byline=0&portrait=0"
                    title="Parent testimonial video"
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-center text-sm font-semibold leading-6 text-muted">
                Hear it straight from a parent we work with.
              </figcaption>
            </figure>
          </div>

          {/* RIGHT — content */}
          <div className="flex flex-col">

            {/* "About Us" label with curved arc underline — matches screenshot */}
            <div className="mb-5 hidden lg:block">
              <span
                className="font-bold"
                style={{ color: "var(--color-brand)", fontSize: "1.15rem" }}
              >
                About Us
              </span>
              <svg width="112" height="14" viewBox="0 0 112 14" fill="none" className="block" aria-hidden="true">
                <path d="M2 11 Q56 2 110 11" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* large bold dark heading */}
            <h2
              className="mb-5 hidden font-black leading-tight text-brand lg:block"
              style={{
                fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
                fontFamily: "var(--font-nunito, Nunito, sans-serif)",
              }}
            >
              SS Babysitter — Prime Baby Care 
              &amp; Geriatric Service in Chennai
            </h2>

            {/* paragraph */}
            <p className="mb-6 max-sm:mb-2 leading-relaxed text-muted" style={{ fontSize: "0.97rem" }}>
              With our trusted network of 1000+ babysitters all over Chennai, we provide holistic care for your child. So, whether your work demands you to have a regular babysitter or it’s just an occasional necessity, SS Babysitter is the answer to all your baby care needs.
            </p>
            <p className="mb-6 max-sm:mb-2 leading-relaxed text-muted" style={{ fontSize: "0.97rem" }}>
              Our childcare and babysitter services cover infants, toddlers, kindergarteners, school-goers, and children with special needs. Our babysitters in Chennai not only tend to your child while you are away but also keep them actively engaged in meaningful activities.
            </p>
            <p className="mb-6 max-sm:mb-5 leading-relaxed text-muted" style={{ fontSize: "0.97rem" }}>
              Thanks to our screenings and background-checks, you can rest assured that your nanny is safe and trust-worthy. What’s more, they are trained to provide specialized care to your little one
            </p>


            {/* More Details button */}
            <div>
              <EnquiryPopupButton
                className="inline-block rounded-full px-12 py-4 text-base font-bold tracking-wide text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--color-brand)",
                  boxShadow: "0 8px 24px rgba(219,48,86,0.5), 0 3px 8px rgba(0,0,0,0.12)",
                }}
              >
                More Details
              </EnquiryPopupButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
