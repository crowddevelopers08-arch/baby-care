import Link from "next/link";
import EnquiryPopupButton from "./EnquiryPopupButton";

export default function SimpleNavbar() {
  return (
    <header className="w-full border-b border-pink-100 bg-[#fff5f8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-5 md:px-12">
        <Link href="/" className="flex-shrink-0">
          <span
            className="text-3xl font-black leading-none"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            <span className="text-[#e91e8c]">Baby</span>
            <span className="text-[#1a1a6e]">Care</span>
          </span>
        </Link>

        <a href="tel:+919884502033"
          className="inline-flex cursor-pointer rounded-full bg-[#e91e8c] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-pink-200/70 transition-all hover:-translate-y-0.5 hover:opacity-95 sm:px-7 sm:text-sm"
        >
          +91 9884502033
        </a>
      </div>
    </header>
  );
}
