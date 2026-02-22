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

export default function HowWeBegan() {
  const processWrapperRef = useRef(null);
  const progressRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
  const ctx = gsap.context(() => {

    const totalSteps = steps.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: processWrapperRef.current,
        start: "top top",
        end: "+=" + totalSteps * 400, // 👈 proportional scroll
        scrub: 1, // 👈 smoother scrubbing
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate progress line evenly
    tl.to(progressRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none",
      duration: totalSteps,
    }, 0);

    // Activate each step exactly in sync
    stepsRef.current.forEach((step, i) => {
      tl.to(step, {
        color: "#ffffff",
        duration: 0.3,
      }, i);
    });

  }, processWrapperRef);

  return () => ctx.revert();
}, []);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* ===== OVERVIEW ===== */}
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <h3 className="text-2xl text-white/50">
              How We Began <br />
              <span className="text-white">
                An Accelerated Discovery
              </span>
            </h3>
          </div>

          <div className="md:col-span-9">
            <p className="text-white/60 text-2xl leading-relaxed max-w-4xl">
              Our challenge was to create an experience that simplified data,
              enabling both technical and non-technical executives to communicate
              more effectively. This breakthrough technology paved the way for
              organizations and start-ups to build safer, more reliable products.
            </p>
          </div>
        </div>

        {/* ===== WORKING PROCESS ===== */}
        <div ref={processWrapperRef} className="relative mt-24">
          <div className="relative py-24">

            {/* Base Gray Line */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t border-dotted border-white/20" />

            {/* Red Animated Line */}
            <div
              ref={progressRef}
              className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t-2 border-dotted border-red-500"
              style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
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
        </div>

      </div>
    </section>
  );
}