"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EnquiryPopupButton from "./EnquiryPopupButton";
import LogoSwap from "./LogoSwap";
import SimpleNavbar from "./SimpleNavbar";

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6.08 6.08l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChatIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "What We ", href: "#what-we" },
  { label: "Special Needs", href: "#special-needs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/thank-you" || pathname === "/privacy-policy") {
    return <SimpleNavbar />;
  }

  return (
    <header className="w-full bg-white">

      {/* ── Top Bar — hidden on mobile ── */}
      <div
        className="hidden md:block bg-sun py-4 mx-20"
        style={{ borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px" }}
      >
        <div className="max-w-7xl mx-auto px-2 flex items-center justify-between">
          {/* Left: address | email */}
          <div className="flex items-center gap-4 text-white text-sm font-medium">
            <span className="flex items-center gap-2">
              <LocationIcon />
              No: 10, 1st floor, swamy Nagar, urapakkam
            </span>
            <span className="text-white/50 select-none">|</span>
            <span className="flex items-center gap-2">
              <MailIcon />
              saravanan@ssbabysitter.com
            </span>
          </div>
          {/* Right: social icons */}
          <div className="flex items-center gap-2">
            {[
              { Icon: FacebookIcon, label: "Facebook" },
              { Icon: TwitterIcon, label: "Twitter" },
              { Icon: InstagramIcon, label: "Instagram" },
              { Icon: LinkedInIcon, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: "var(--color-azure)" }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div className="bg-white border-b border-line py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center">
            <LogoSwap>
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
            </LogoSwap>
          </Link>

          {/* Desktop nav links — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href, active }) => (
              <Link
                key={label}
                href={href}
                className={`text-[15px] font-medium transition-colors ${
                  active ? "text-brand" : "text-muted hover:text-azure"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop right — hidden on mobile */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <PhoneIcon />
                <div
                  className="absolute -top-1.5 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-brand)" }}
                >
                  <ChatIcon />
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-brand text-[13px] font-medium">Have any questions?</p>
                <p className="text-ink text-[13px] font-semibold">Free: +91 9884502033</p>
              </div>
            </div>
            <div className="w-px h-10 bg-mist" />
            <EnquiryPopupButton
              ariaLabel="Open enquiry form"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-brand)" }}
            >
              <SearchIcon />
            </EnquiryPopupButton>
          </div>

          {/* Mobile hamburger — visible only on mobile */}
          <button
            className="md:hidden flex cursor-pointer items-center justify-center p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>

        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-mist shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map(({ label, href, active }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-[15px] font-medium border-b border-mist transition-colors ${
                  active ? "text-brand" : "text-muted hover:text-azure"
                }`}
              >
                {label}
              </Link>
            ))}
            <span className="py-3 text-[15px] font-medium text-muted border-b border-mist flex items-center gap-1 cursor-pointer">
              Pages <ChevronDownIcon />
            </span>
            <EnquiryPopupButton
              onOpen={() => setMenuOpen(false)}
              className="py-3 text-[15px] font-medium text-muted hover:text-azure border-b border-mist"
            >
              Contact
            </EnquiryPopupButton>
            {/* Phone info in mobile menu */}
            <div className="pt-4 flex items-center gap-3">
              <div className="relative">
                <PhoneIcon />
                <div
                  className="absolute -top-1.5 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-brand)" }}
                >
                  <ChatIcon />
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-brand text-[13px] font-medium">Have any questions?</p>
                <p className="text-ink text-[13px] font-semibold">Free:+91 9884502033</p>
              </div>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}
