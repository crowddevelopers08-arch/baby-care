import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Cross-fades the SS Babysitter lockup (passed in as children) with the
 * Pinkfinger wordmark on a shared 9s loop — CSS only, no JS state.
 * The children stay in normal flow so the box keeps its original size;
 * the Pinkfinger layer is overlaid on top of it.
 */
export default function LogoSwap({
  children,
  className = "",
  secondaryClassName = "",
  sizes = "(max-width: 768px) 260px, 340px",
}: {
  children: ReactNode;
  className?: string;
  secondaryClassName?: string;
  sizes?: string;
}) {
  return (
    <span className={`logo-swap ${className}`}>
      <span className="logo-swap__layer logo-swap__primary">{children}</span>
      <span
        aria-hidden="true"
        className={`logo-swap__layer logo-swap__secondary ${secondaryClassName}`}
      >
        {/* object-cover trims the PNG's generous top/bottom whitespace so the
            wordmark reads at the same height as the lockup it replaces */}
        <Image
          src="https://res.cloudinary.com/xykwtyr0/image/upload/v1789712670/ssanotherlogo.png"
          alt=""
          fill
          sizes={sizes}
          className="object-cover object-center"
        />
      </span>
    </span>
  );
}
