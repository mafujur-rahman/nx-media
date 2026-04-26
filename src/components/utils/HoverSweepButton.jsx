"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HoverSweepButton({ children, className = "", icon, onClick }) {
  const btnRef = useRef(null);
  const sweepRef = useRef(null);
  const textRef = useRef(null);

  // Initialize GSAP and ensure proper cleanup
  useEffect(() => {
    return () => {
      // Clean up any GSAP animations when component unmounts
      if (sweepRef.current) {
        gsap.killTweensOf(sweepRef.current);
      }
      if (textRef.current) {
        gsap.killTweensOf(textRef.current);
      }
    };
  }, []);

  const handleEnter = () => {
    if (!sweepRef.current || !textRef.current) return;

    // Kill any existing tweens to prevent conflicts
    gsap.killTweensOf([sweepRef.current, textRef.current]);

    // Get the current width to ensure smooth animation from current state
    const currentWidth = sweepRef.current.offsetWidth || 0;
    
    // Ensure sweep is in correct starting position
    gsap.set(sweepRef.current, { 
      width: currentWidth,
      display: "block"
    });
    
    gsap.set(textRef.current, { color: "white" });

    // Sweep animation - from current width to 100%
    gsap.to(sweepRef.current, {
      width: "100%",
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });

    // Text color animation
    gsap.to(textRef.current, {
      color: "#000000",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
      delay: 0.1, // Slight delay for better visual effect
    });
  };

  const handleLeave = () => {
    if (!sweepRef.current || !textRef.current) return;

    // Kill existing tweens
    gsap.killTweensOf([sweepRef.current, textRef.current]);

    // Get current width for smooth retraction
    const currentWidth = sweepRef.current.offsetWidth;

    // Sweep retract animation
    gsap.to(sweepRef.current, {
      width: 0,
      duration: 0.5,
      ease: "power2.inOut",
      overwrite: true,
    });

    // Text color back to white
    gsap.to(textRef.current, {
      color: "#ffffff",
      duration: 0.25,
      ease: "power2.inOut",
      overwrite: true,
    });
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={`relative overflow-hidden flex items-center justify-center gap-2 px-2 md:px-8 py-4 rounded-full font-bold ${className}`}
    >
      {/* Sweep background */}
      <span
        ref={sweepRef}
        className="absolute left-0 top-0 h-full w-0 bg-white rounded-full z-0"
        style={{ display: 'block' }}
      />

      {/* Button content */}
      <span
        ref={textRef}
        className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300"
      >
        {children}
        {icon && (
          <span className="inline-flex items-center transition-colors duration-300">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
}