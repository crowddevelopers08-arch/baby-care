import Image from "next/image";
import Link from "next/link";
import EnquiryPopupButton from "./EnquiryPopupButton";

export default function SimpleNavbar() {
  return (
    <header className="w-full border-b border-mist bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-5 md:px-12">
        <Link href="/" className="flex flex-shrink-0 items-center gap-3">
          <Image
            src="/ss-logo.png"
            alt="SS Babysitter"
            width={72}
            height={48}
            priority
            className="h-11 w-auto md:h-12"
          />
          <span
            className="text-2xl font-black leading-none md:text-3xl"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            <span className="text-brand">SS </span>
            <span className="text-ink">Babysitter</span>
          </span>
        </Link>

        <a href="tel:+919884502033"
          className="inline-flex cursor-pointer rounded-full bg-leaf px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-leaf/25 transition-all hover:-translate-y-0.5 hover:bg-aqua sm:px-7 sm:text-sm"
        >
          +91 9884502033
        </a>
      </div>
    </header>
  );
}
