import React from "react";
import EnquiryPopupButton from "./EnquiryPopupButton";

const TITLE = "PEACE OF MIND KNOWING YOUR CHILDREN ARE IN SAFE HANDS";

export default function HeroSection() {
  const words = TITLE.split(" ");

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "clamp(420px, 80vh, 720px)",
        backgroundImage: "url('https://res.cloudinary.com/xykwtyr0/image/upload/v1789712668/hero-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 35%, rgba(0,0,0,0.25) 60%, transparent 100%)",
        }}
      />

      {/* Hero Content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center"
        style={{ minHeight: "clamp(420px, 80vh, 720px)", padding: "clamp(24px, 5vw, 80px)" }}
      >
        <div className="w-full max-w-[98%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-xl">

          {/* Subheading — slides in from left */}
          <p
            className="anim-fade-left text-brand mb-3"
            style={
              {
                "--delay": "0.1s",
                fontFamily: "var(--font-dancing-script), cursive",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              } as React.CSSProperties
            }
          >
            We Care Your Baby
          </p>

          {/* Main heading — each word fades up with stagger */}
          <h1
            className="text-white font-black leading-[1.15] mb-6 md:mb-10"
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
            }}
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="anim-fade-up"
                style={
                  {
                    display: "inline-block",
                    marginRight: "0.3em",
                    "--delay": `${0.25 + i * 0.08}s`,
                  } as React.CSSProperties
                }
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Buttons — fade up after all words */}
          <div
            className="anim-fade-up flex flex-wrap gap-3 sm:gap-5"
            style={
              {
                "--delay": `${0.25 + words.length * 0.08 + 0.1}s`,
              } as React.CSSProperties
            }
          >
            <EnquiryPopupButton
              className="inline-block text-white font-semibold rounded-full transition-all hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: "var(--color-sun)",
                padding: "clamp(10px, 2vw, 16px) clamp(24px, 4vw, 36px)",
                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              }}
            >
              Get Started
            </EnquiryPopupButton>
            <EnquiryPopupButton
              className="inline-block text-white font-semibold rounded-full transition-all hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: "var(--color-azure)",
                padding: "clamp(10px, 2vw, 16px) clamp(24px, 4vw, 36px)",
                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              }}
            >
              Learn More
            </EnquiryPopupButton>
          </div>

        </div>
      </div>
    </section>
  );
}
