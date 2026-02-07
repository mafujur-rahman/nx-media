"use client";

import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Optimization() {
  const redTextRefs = useRef([]);

  useEffect(() => {
    redTextRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { color: "#9ca3af" }, 
        {
          color: "#fee2e2", 
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: 1, 
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        {/* LEFT SIDE: CALENDLY BUTTON */}
        <div className="w-full lg:w-1/3 flex justify-start">
          <button
            className="group relative w-full max-w-xl bg-[#eeeeee] text-gray-600 flex items-center justify-between px-8 py-5 rounded-full transition-all duration-500  shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            <span className="text-sm font-semibold uppercase tracking-wider">
              Book a Service
            </span>
            <FiArrowRight
              size={22}
              className="transition-transform group-hover:translate-x-2"
            />
          </button>
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div className="w-full lg:w-2/3">
          <h2 className="title_text uppercase mb-8">
            <span className="block text-white">Beyond Generic</span>
            <span className="block text-white">
              Training {" "}
              <span
                ref={(el) => redTextRefs.current.push(el)}
              >
                Your
              </span>
            </span>
            <span
              className="block"
              ref={(el) => redTextRefs.current.push(el)}
            >
              Personal Path to
            </span>
            <span
              className="block"
              ref={(el) => redTextRefs.current.push(el)}
            >
              Peak Optimization
            </span>
          </h2>

          <p className="para_text max-w-xl">
            Whether you're chasing your first sub-3 marathon or aiming to
            shatter power records, we've built the ultimate performance
            optimization system for endurance athletes.
          </p>
        </div>
      </div>

      {/* ACCENT DOT */}
      <div className="absolute top-1/2 right-10 w-1 h-1 bg-[#F3D371] rounded-full blur-sm opacity-30" />
    </section>
  );
}
