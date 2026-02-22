"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Discovery",
  "Strategy",
  "Design",
  "Development",
  "Launch",
];

export default function WorkingProcessScroll() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepsEl = stepsRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      });

      // Animate red dotted progress line
      tl.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          duration: steps.length,
        },
        0
      );

      // Activate steps one by one
      stepsEl.forEach((step, i) => {
        tl.to(
          step,
          {
            color: "#ffffff",
            duration: 0.2,
          },
          i + 0.2
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto relative">

        {/* Base Gray Dotted Line */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t border-dotted border-white/20" />

        {/* Red Animated Dotted Line */}
        <div
          ref={progressRef}
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t-2 border-dotted border-red-500"
          style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
        />

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="px-12 py-5 rounded-full
                         bg-white/[0.03]
                         text-gray-500
                         text-lg font-medium tracking-wide
                         backdrop-blur-md"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}