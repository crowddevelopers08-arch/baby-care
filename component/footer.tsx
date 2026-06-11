"use client"

import EnquiryPopupButton from "./EnquiryPopupButton";

const scheduleItems = [
  { day: "Monday", time: "7am to 8pm", closed: false },
  { day: "Tuesday", time: "7am to 8pm", closed: false },
  { day: "Wednes", time: "7am to 8pm", closed: false },
  { day: "Thursday", time: "7am to 8pm", closed: false },
  { day: "Friday", time: "7am to 8pm", closed: false },
  { day: "Saturday", time: "7am to 8pm", closed: false },
  { day: "Sunday", time: "8am to 7pm", closed: true },
];

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-pink-500 mt-0.5 shrink-0">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-pink-500 shrink-0">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-pink-500 shrink-0">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export default function BabyCareFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="font-sans">
      {/* ───────────────── MAIN FOOTER ───────────────── */}
      <footer
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fff0f5 0%, #fce4ec 40%, #f8f0ff 100%)" }}
      >
        {/* Decorative background circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(255,182,193,0.18) 0%, rgba(255,240,245,0.05) 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 max-sm:py-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-sm:gap-5 lg:items-start">

          {/* ── Col 1: Brand + Newsletter ── */}
          <div className="flex max-w-xs flex-col items-start gap-5 max-sm:gap-2">
            <h2 className="text-3xl font-extrabold">
              <span className="text-pink-500">Baby</span>
              <span className="text-gray-800">Care</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.
            </p>
            <EnquiryPopupButton
              className="inline-flex items-center justify-center rounded-full bg-[#e91e8c] px-7 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-pink-200/70 transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Enquire Now
            </EnquiryPopupButton>
          </div>

          {/* ── Col 2: Schedule ── */}
          <div className="flex items-start justify-center">
            <div
              className="border border-pink-300 rounded-3xl px-7 py-6 w-full max-w-xs"
              style={{ background: "rgba(255,255,255,0.35)" }}
            >
                <h3 className="text-pink-500 font-extrabold text-lg tracking-wide uppercase border-b-2 border-pink-400 pb-1 w-fit">Our Hours</h3>
              {scheduleItems.map((item) => (
                <div key={item.day} className="py-1 border-b border-pink-100 last:border-0">
                  <span className="text-gray-700 text-sm">
                    <span className="font-medium">{item.day}:</span>{" "}
                    <span className={item.closed ? "text-red-400" : ""}>{item.time}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Col 3: Location ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-pink-500 font-extrabold text-lg tracking-wide uppercase border-b-2 border-pink-400 pb-1 w-fit">
              Location
            </h3>
            <ul className="flex flex-col gap-3 mt-1">
              <li className="flex items-start gap-3">
                <LocationIcon />
                <span className="text-gray-600 text-sm">No: 10, 1st floor, Swamy Nagar, Urapakkam ( above SBI bank) Chennai -603211</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <span className="text-gray-600 text-sm">+91 9884502033</span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon />
                <span className="text-gray-600 text-sm">rsaravanakumar02@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Map */}
          <div className="flex flex-col gap-4">
            <h3 className="text-pink-500 font-extrabold text-lg tracking-wide uppercase border-b-2 border-pink-400 pb-1 w-fit">
              Find Us
            </h3>
            <div className="mt-1 overflow-hidden rounded-3xl border border-pink-200 bg-white/50 p-2 shadow-[0_14px_35px_rgba(233,30,140,0.10)]">
              <iframe
                title="BabyCare location map"
                src="https://www.google.com/maps?q=No%2010%201st%20floor%20Swamy%20Nagar%20Urapakkam%20Chennai%20603211&output=embed"
                className="h-56 w-full rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=No%2010%201st%20floor%20Swamy%20Nagar%20Urapakkam%20Chennai%20603211"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-pink-500 hover:text-pink-600"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </footer>

      {/* ───────────────── BOTTOM BAR ───────────────── */}
      <div className="bg-slate-800 text-gray-300 text-sm px-6 py-4 flex flex-col sm:flex-row items-center justify-around gap-2 relative max-sm:mb-12">
        <p>
          <span className="text-pink-400 font-semibold">©</span>{" "}
          <span className="text-pink-400 font-semibold">BabyCare</span>, All right reserved.
        </p>
        <p>
          <a href="/privacy-policy" className="cursor-pointer text-pink-400 font-semibold hover:underline">Privacy Policy</a>
        </p>

        {/* Scroll-to-top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 w-11 h-11 cursor-pointer rounded-full bg-pink-500 hover:bg-pink-600 transition-colors text-white flex items-center justify-center shadow-lg md:bottom-6"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon />
        </button>
      </div>

      {/* Mobile fixed buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex w-full overflow-hidden rounded-t-xl border-t border-pink-200 backdrop-blur-sm md:hidden">
        <a
          href="tel:+919884502033"
          className="flex flex-1 items-center justify-center gap-2 bg-[#e91e8c] py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#d7187f] active:translate-y-px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          Call Now
        </a>

        <EnquiryPopupButton
          className="flex flex-1 items-center justify-center gap-2 bg-[#1a1f5e] py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#262d7a] active:translate-y-px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
          </svg>
          Book Now
        </EnquiryPopupButton>
      </div>
    </div>
  );
}
