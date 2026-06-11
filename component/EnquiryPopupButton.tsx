"use client";

import { CSSProperties, FormEvent, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

type EnquiryPopupButtonProps = {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  onOpen?: () => void;
  style?: CSSProperties;
};

export default function EnquiryPopupButton({
  ariaLabel,
  children,
  className,
  onOpen,
  style,
}: EnquiryPopupButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      concern: String(formData.get("description") || ""),
      email: String(formData.get("email") || ""),
      name: String(formData.get("name") || ""),
      pageUrl: window.location.href,
      phone: String(formData.get("phone") || ""),
      source: "BabyCare Enquiry Popup",
    };

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry.");
      }

      setOpen(false);
      router.push("/thank-you");
    } catch {
      setSubmitError("Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 px-3 py-4 md:px-4 md:py-6">
      <div className="relative grid max-h-[calc(100svh-2rem)] w-full max-w-[95vw] overflow-hidden rounded-[22px] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.35)] md:max-h-none md:max-w-6xl md:rounded-[28px] md:grid-cols-[1.08fr_1fr]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-xl font-black text-[#1a1f5e] shadow-md transition-colors hover:bg-[#fff0f7] md:right-4 md:top-4 md:h-10 md:w-10 md:text-2xl"
          aria-label="Close enquiry form"
        >
          X
        </button>

        <div className="relative min-h-[115px] overflow-hidden sm:min-h-[145px] md:min-h-[360px]">
          <img src="/hero-img.jpg" alt="Baby care service" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f5e]/75 via-[#1a1f5e]/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-14 text-white md:bottom-8 md:left-8 md:right-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-pink-200 md:text-sm md:tracking-[0.18em]">BabyCare</p>
            <h2 className="mt-1 text-xl font-black leading-tight sm:text-2xl md:mt-3 md:text-4xl">
              Safe hands for your little one.
            </h2>
            <p className="mt-1 hidden text-sm font-semibold leading-6 text-white/85 sm:block md:mt-4 md:text-base md:leading-7">
              Share your requirement and our team will contact you soon.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#e91e8c] md:text-sm md:tracking-[0.18em]">Enquiry Form</p>
          <h2 className="mt-1 text-2xl font-black text-[#1a1f5e] md:mt-2 md:text-3xl">Tell us what you need</h2>
          <p className="mt-1 text-xs font-semibold leading-5 text-gray-500 sm:text-sm sm:leading-6 md:mt-2">
            Fill the details below. We will call you back and explain the next steps clearly.
          </p>

          <form onSubmit={handleSubmit} className="mt-3 grid gap-2.5 md:mt-5 md:gap-3">
            <label className="grid gap-1.5 text-xs font-bold text-[#1a1f5e] md:gap-2 md:text-sm">
              Name
              <input
                name="name"
                type="text"
                required
                className="rounded-xl border border-pink-100 bg-[#fff9fb] px-3 py-2 text-sm font-semibold text-gray-700 outline-none transition-colors focus:border-[#e91e8c] md:rounded-2xl md:px-4 md:py-2.5 md:text-base"
                placeholder="Enter your name"
              />
            </label>

            <label className="grid gap-1.5 text-xs font-bold text-[#1a1f5e] md:gap-2 md:text-sm">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-xl border border-pink-100 bg-[#fff9fb] px-3 py-2 text-sm font-semibold text-gray-700 outline-none transition-colors focus:border-[#e91e8c] md:rounded-2xl md:px-4 md:py-2.5 md:text-base"
                placeholder="Enter your email"
              />
            </label>

            <label className="grid gap-1.5 text-xs font-bold text-[#1a1f5e] md:gap-2 md:text-sm">
              Phone Number
              <input
                name="phone"
                type="tel"
                required
                className="rounded-xl border border-pink-100 bg-[#fff9fb] px-3 py-2 text-sm font-semibold text-gray-700 outline-none transition-colors focus:border-[#e91e8c] md:rounded-2xl md:px-4 md:py-2.5 md:text-base"
                placeholder="Enter your phone number"
              />
            </label>

            <label className="grid gap-1.5 text-xs font-bold text-[#1a1f5e] md:gap-2 md:text-sm">
              Description
              <textarea
                name="description"
                required
                rows={3}
                className="resize-none rounded-xl border border-pink-100 bg-[#fff9fb] px-3 py-2 text-sm font-semibold text-gray-700 outline-none transition-colors focus:border-[#e91e8c] md:rounded-2xl md:px-4 md:py-2.5 md:text-base"
                placeholder="Tell us your baby care requirement"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-1 inline-flex cursor-pointer justify-center rounded-full bg-[#e91e8c] px-7 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-pink-200/70 transition-all hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed md:px-8 md:py-3.5 md:text-sm md:tracking-[0.14em]"
            >
              {submitting ? "Submitting..." : "Submit Enquiry"}
            </button>

            {submitError ? (
              <p className="text-center text-xs font-bold text-red-500">{submitError}</p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
        className={`${className || ""} cursor-pointer`}
        style={style}
        aria-label={ariaLabel}
      >
        {children}
      </button>

      {mounted && open ? createPortal(modal, document.body) : null}
    </>
  );
}
