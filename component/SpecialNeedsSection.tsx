"use client";

import React, { useState } from "react";

const needsRows = [
  [
    "Anxiety disorder",
    "Visual impairment",
    "Asthma",
    "Hemophilia",
    "Deaf and hard of hearing",
  ],
  [
    "Language disorder",
    "Food allergies",
    "Physically limited",
    "Sleep disorder",
  ],
  [
    "Attention Deficit Hyperactivity Disorder (ADHD)",
    "Oppositional Defiant Disorder and Conduct Disorders (ODD/CD)"
  ],
  [
    "Epilepsy",
  ],
];

const allNeeds = needsRows.flat();
const DEFAULT_VISIBLE_NEEDS = 6;

const TitleUnderline = () => (
  <div className="mx-auto mt-1 flex items-center justify-center" aria-hidden="true">
    <svg width="150" height="18" viewBox="0 0 150 18" fill="none" className="block">
      <path
        d="M2 12 Q75 2 148 12"
        stroke="#e91e8c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </div>
);

const CheckIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
    <path d="M5 12.2l4 4L19 7" stroke="#e33762" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SpecialNeedsSection() {
  const [showAllNeeds, setShowAllNeeds] = useState(false);
  const visibleNeeds = showAllNeeds ? allNeeds : allNeeds.slice(0, DEFAULT_VISIBLE_NEEDS);

  return (
    <section id="special-needs" className="relative w-full overflow-hidden bg-white py-0 max-sm:pt-6 md:py-10">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#fff2f6]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#f7f9ff]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="mb-4 inline-block rounded-full bg-[#fff0f7] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e91e8c]">
              Special Needs
            </span>

            <h2
              className="font-black leading-tight text-[#1a1f5e]"
              style={{
                fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
                fontFamily: "var(--font-nunito, Nunito, sans-serif)",
              }}
            >
              Babysitter for Special Needs
            </h2>

            <TitleUnderline />
          </div>

          <p className="mx-auto max-sm:mt-3 mt-7 max-w-5xl text-center text-[1rem] font-semibold leading-8 text-gray-500 md:text-[1.08rem]">
            Every child is unique. Some kids need a little extra attention and care. However,
            finding a babysitter capable of caring for your child&apos;s special needs can be
            difficult. This is why the Babysits for Special Needs programme exists - for parents
            who are looking for the right attention and specialised care for their child.
          </p>

          <div className="mt-10 max-sm:mt-5 rounded-[28px] border border-pink-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(227,55,98,0.08)] md:p-8">
            <h3
              className="max-w-5xl font-black leading-tight text-gray-600"
              style={{ fontSize: "clamp(1.55rem, 2.8vw, 2.25rem)" }}
            >
              The Babysits Special Needs Programme: A Suitable Babysitter for Every Home
            </h3>

            <div className="mt-8 border-t border-pink-100 pt-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleNeeds.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-[#fff7fa] px-4 py-3 text-[0.95rem] font-semibold leading-snug text-gray-600 md:text-[1rem]"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllNeeds((current) => !current)}
                  className="cursor-pointer rounded-full bg-[#e91e8c] px-7 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-pink-200/70 transition-all hover:-translate-y-0.5 hover:opacity-95"
                >
                  {showAllNeeds ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
