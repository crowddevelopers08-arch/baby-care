"use client";

import React from "react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Lakshmi",
    profession: "Profession",
    text: "“We needed baby sitter for my babies with budget constraint, as we both are working. We looked into many agencies, comparatively SS Babysitter is the best with the service they provide, with affordable service charge and salary.”",
  },
  {
    name: "Sankari Sudhar",
    profession: "Profession",
    text: " “Very much satisfied with the service they have provided. Asked a nanny for my 8 months old grand daughter.They sent a nanny who is very much understandable and soft-spoken. Their follow-up about their service is a great thing.” ",
  },
  {
    name: "Poorabi",
    profession: "Profession",
    text: "“Sarvavanan and his team are thorough professionals. We have had challenges in finding a good staff. Saravanan has relentlessly helped us in finding good candidates who are amicable to our needs. I wish him and his team lots of success.”",
  },
];

const StarIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="var(--color-brand)" aria-hidden="true">
    <path d="M12 2.5l2.72 5.72 6.28.82-4.6 4.35 1.15 6.23L12 16.58l-5.55 3.04 1.15-6.23L3 9.04l6.28-.82L12 2.5z" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="42" height="36" viewBox="0 0 46 39" fill="none" aria-hidden="true">
    <path
      d="M2.8 18.1V4.4C2.8 2.8 3.8 2 5.5 2h10.4c1.7 0 2.7.8 2.7 2.4v13.3c0 6.1-1.4 10.6-4.2 13.5-2.8 3-6.5 4.8-11.1 5.6L2 31.6c3.1-.7 5.2-1.7 6.4-3.1 1.2-1.4 1.9-3.5 2-6.2H5.5c-1.7 0-2.7-.8-2.7-2.4v-1.8zM27.3 18.1V4.4c0-1.6 1-2.4 2.7-2.4h10.4c1.7 0 2.7.8 2.7 2.4v13.3c0 6.1-1.4 10.6-4.2 13.5-2.8 3-6.5 4.8-11.1 5.6l-1.3-5.2c3.1-.7 5.2-1.7 6.4-3.1 1.2-1.4 1.9-3.5 2-6.2H30c-1.7 0-2.7-.8-2.7-2.4v-1.8z"
      fill="var(--color-brand)"
    />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 19V5M6.5 10.5L12 5l5.5 5.5" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <article  className="testimonial-card relative bg-white px-5 pb-7 pt-7 shadow-[0_18px_45px_rgba(219,48,86,0.10)] transition-transform duration-300 hover:-translate-y-1 sm:px-10 sm:pb-9 sm:pt-10">
      <div className="flex items-start gap-4 sm:gap-7">
        <div className="h-[78px] w-[78px] flex-shrink-0 rounded-full border-[3px] border-dotted border-brand bg-white p-[7px] sm:h-[92px] sm:w-[92px] sm:p-[8px]">
          <div
            className="h-full w-full rounded-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/xykwtyr0/image/upload/v1789712668/testimonial-avatar.jpg')",
            }}
          />
        </div>

        <div className="min-w-0 pt-1">
          <h3
            className="text-xl font-black leading-tight text-ink sm:text-2xl"
          >
            {item.name}
          </h3>
          <p className="mt-1 text-sm font-semibold leading-none text-graphite sm:mt-2 sm:text-base">{item.profession}</p>
          <div className="mt-4 flex gap-[2px] sm:mt-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-7 sm:right-10 sm:top-9">
        <QuoteIcon />
      </div>

      <div className="mt-6 h-px w-full bg-brand/70 sm:mt-8" />

      <p className="mt-4 text-[0.9rem] leading-7 text-muted sm:mt-5 sm:text-[0.97rem] sm:leading-relaxed">
        {item.text}
      </p>
    </article>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = window.setInterval(goToNext, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative w-full overflow-hidden py-8 md:py-14">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/xykwtyr0/image/upload/v1789712667/about-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/90 via-cream/88 to-white/92"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-mist blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-azure/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <div className="inline-block">
            <p
              className="font-bold leading-none text-brand"
              style={{
                fontSize: "1.15rem",
              }}
            >
              Our Testimonials
            </p>
            <svg width="150" height="18" viewBox="0 0 150 18" fill="none" className="mx-auto mt-1" aria-hidden="true">
              <path d="M2 12 Q75 2 148 12" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          <h2
            className="mt-4 font-black leading-tight text-brand"
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
            }}
          >
            What Parents Say:
          </h2>
        </div>

        <div className="mt-10 md:hidden">
          <div className="relative mx-auto max-w-[390px] px-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-[-13px] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-azure text-white shadow-lg shadow-azure/25"
              aria-label="Previous testimonial"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((item, index) => (
                  <div key={`${item.name}-${index}`} className="w-full flex-none px-1">
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-[-10px] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-azure text-white shadow-lg shadow-azure/25"
              aria-label="Next testimonial"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="h-3.5 w-8 rounded-full bg-azure" />
          <span className="h-3.5 w-3.5 rounded-full bg-brand" />
          <span className="h-3.5 w-3.5 rounded-full bg-brand" />
        </div>

        <div className="mt-12 hidden gap-7 md:grid lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>


      <style jsx>{`
        .testimonial-card {
          min-height: 330px;
          border: 1.5px solid #db3056;
          border-radius: 34px 72px 34px 78px / 34px 70px 34px 92px;
        }

        @media (max-width: 767px) {
          .testimonial-card {
            min-height: 0;
            border-radius: 28px 48px 28px 52px / 28px 48px 28px 58px;
          }
        }
      `}</style>
    </section>
  );
}
