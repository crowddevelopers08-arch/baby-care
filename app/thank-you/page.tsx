import Link from "next/link";
import SimpleFooter from "@/component/SimpleFooter";

export const metadata = {
  title: "Thank You | BabyCare",
  description: "Thank you for contacting BabyCare. Our team will get back to you soon.",
};

export default function ThankYouPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5f8_0%,#ffffff_70%)] px-6 py-20 md:px-12 md:py-16.5">
        <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full border-[32px] border-[#fff0f7]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#fff0f7]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#e91e8c] text-4xl font-black text-white shadow-lg shadow-pink-200/70">
            ✓
          </span>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#e91e8c]">
            Request Received
          </p>
          <h1
            className="font-black leading-tight text-[#1a1f5e]"
            style={{
              fontSize: "clamp(2.3rem, 5vw, 4.5rem)",
              fontFamily: "var(--font-nunito, Nunito, sans-serif)",
            }}
          >
            Thank You!
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-gray-600">
            We have received your enquiry. Our BabyCare team will review your details and contact
            you shortly to understand your babysitting requirement clearly.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-[#e91e8c] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-pink-200/70 transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Back To Home
            </Link>
            <Link
              href="tel:+919884502033"
              className="inline-flex rounded-full border-2 border-[#e91e8c] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#e91e8c] transition-all hover:-translate-y-0.5 hover:bg-[#fff0f7]"
            >
              +919884502033
            </Link>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
