"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  target: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { target: 7,     suffix: "+",  label: "Happy Parents",          icon: "" },
  { target: 1680,  suffix: "+",  label: "Registered Babysitters", icon: "" },
  { target: 12000, suffix: "+",  label: "Happy Kids",             icon: "" },
];

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(target);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="w-full bg-white px-4 md:hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-0 divide-y divide-pink-100">
        {stats.map(({ target, suffix, label, icon }, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center py-7 max-sm:py-2 gap-2 group ${
              i === 2 ? "col-span-2 mx-auto w-1/2" : ""
            }`}
          >
            {/* Icon */}
            <span className="text-4xl mb-1 transition-transform duration-300 group-hover:scale-125">
              {icon}
            </span>

            {/* Number */}
            <p
              className="font-black leading-none"
              style={{
                fontSize: "clamp(1.75rem, 8vw, 2.25rem)",
                color: "#e91e8c",
                fontFamily: "var(--font-nunito), Nunito, sans-serif",
              }}
            >
              <CountUp target={target} duration={2200} />
              <span>{suffix}</span>
            </p>

            {/* Label */}
            <p
              className="text-center text-xs font-medium uppercase tracking-wide text-gray-500"
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
