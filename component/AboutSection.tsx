"use client";

import React from "react";
import Image from "next/image";
import EnquiryPopupButton from "./EnquiryPopupButton";

const AboutTitle = () => (
  <>
    <div className="mb-5">
      <span
        className="font-bold"
        style={{ color: "#e91e8c", fontSize: "1.15rem" }}
      >
        About Us
      </span>
      <svg width="112" height="14" viewBox="0 0 112 14" fill="none" className="block" aria-hidden="true">
        <path d="M2 11 Q56 2 110 11" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>

    <h2
      className="mb-5 font-black leading-tight text-[#1a1f5e]"
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
      {/* pink overlay — reduced opacity so bg image shows through */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(253,240,245,0.72) 0%, rgba(252,232,243,0.68) 50%, rgba(253,245,248,0.72) 100%)" }} />


      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="lg:hidden">
          <AboutTitle />
        </div>

        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — video / image */}
          <div className="relative flex items-center justify-center">
            {/* video thumbnail card */}
            <div className="relative z-10 overflow-hidden rounded-[24px] shadow-2xl" style={{ width: "100%", maxWidth: 480 }}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/hero-img.jpg"
                  alt="Children learning"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
                {/* play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <EnquiryPopupButton
                    ariaLabel="Open enquiry form"
                    className="flex h-16 w-16 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-105"
                    style={{ background: "#e91e8c" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M8 5.5v13l11-6.5L8 5.5z" fill="white" />
                    </svg>
                  </EnquiryPopupButton>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="flex flex-col">

            {/* "About Us" label with curved arc underline — matches screenshot */}
            <div className="mb-5 hidden lg:block">
              <span
                className="font-bold"
                style={{ color: "#e91e8c", fontSize: "1.15rem" }}
              >
                About Us
              </span>
              <svg width="112" height="14" viewBox="0 0 112 14" fill="none" className="block" aria-hidden="true">
                <path d="M2 11 Q56 2 110 11" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* large bold dark navy heading */}
            <h2
              className="mb-5 hidden font-black leading-tight text-[#1a1f5e] lg:block"
              style={{
                fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
                fontFamily: "var(--font-nunito, Nunito, sans-serif)",
              }}
            >
              SS Babysitter — Prime Baby Care 
              &amp; Geriatric Service in Chennai
            </h2>

            {/* paragraph */}
            <p className="mb-6 max-sm:mb-2 leading-relaxed text-gray-700" style={{ fontSize: "0.97rem" }}>
              With our trusted network of 1000+ babysitters all over Chennai, we provide holistic care for your child. So, whether your work demands you to have a regular babysitter or it’s just an occasional necessity, SS Babysitter is the answer to all your baby care needs.
            </p>
            <p className="mb-6 max-sm:mb-2 leading-relaxed text-gray-700" style={{ fontSize: "0.97rem" }}>
              Our childcare and babysitter services cover infants, toddlers, kindergarteners, school-goers, and children with special needs. Our babysitters in Chennai not only tend to your child while you are away but also keep them actively engaged in meaningful activities.
            </p>
            <p className="mb-6 max-sm:mb-5 leading-relaxed text-gray-700" style={{ fontSize: "0.97rem" }}>
              Thanks to our screenings and background-checks, you can rest assured that your nanny is safe and trust-worthy. What’s more, they are trained to provide specialized care to your little one
            </p>


            {/* More Details button */}
            <div>
              <EnquiryPopupButton
                className="inline-block rounded-full px-12 py-4 text-base font-bold tracking-wide text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: "#f5387c",
                  boxShadow: "0 8px 24px rgba(245,56,124,0.5), 0 3px 8px rgba(0,0,0,0.12)",
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
