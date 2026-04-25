"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function HoverSweepButton({ children, className = "", icon }) {
  const btnRef = useRef(null);
  const sweepRef = useRef(null);
  const textRef = useRef(null);

  const handleEnter = () => {
    // Kill any existing tweens and prevent conflicts
    gsap.killTweensOf([sweepRef.current, textRef.current]);

    // Ensure sweep is visible at start
    gsap.set(sweepRef.current, { width: sweepRef.current.offsetWidth || 0 });
    gsap.set(textRef.current, { color: "white" });

    // Sweep animation (slower)
    gsap.to(sweepRef.current, {
      width: "100%",
      duration: 0.7,
      ease: "power3.out",
      overwrite: "auto",
    });

    // Text color animation (faster)
    gsap.to(textRef.current, {
      color: "black",
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleLeave = () => {
    // Kill existing tweens to avoid stuck state
    gsap.killTweensOf([sweepRef.current, textRef.current]);

    // Sweep retract
    gsap.to(sweepRef.current, {
      width: 0,
      duration: 0.5,
      ease: "power3.inOut",
      overwrite: "auto",
    });

    // Text color back to original
    gsap.to(textRef.current, {
      color: "white",
      duration: 0.3,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden flex items-center gap-2 px-2 md:px-8 py-4 rounded-full font-bold ${className}`}
    >
      {/* Sweep background */}
      <span
        ref={sweepRef}
        className="absolute left-0 top-0 h-full w-0 bg-white rounded-full z-0"
      />

      {/* Button content */}
      <span
        ref={textRef}
        className="relative z-10 flex items-center gap-2 transition-colors duration-300"
      >
        {children}
        {icon && (
          <span className="transition-colors duration-300">{icon}</span>
        )}
      </span>
    </button>
  );
}
