"use client";

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export default function SimpleFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-slate-800 text-gray-300 text-sm px-6 py-4 flex flex-col sm:flex-row items-center justify-around gap-2 relative">
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
        className="fixed bottom-6 right-6 w-11 h-11 cursor-pointer rounded-full bg-pink-500 hover:bg-pink-600 transition-colors text-white flex items-center justify-center shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
