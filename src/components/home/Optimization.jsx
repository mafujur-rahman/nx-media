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
          color: "#EF4444",
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
    <section id="about" className="relative bg-black text-white pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0 overflow-hidden">
      <div className="relative z-10 xl:max-w-7xl xl:mx-auto flex flex-col lg:flex-row items-start gap-16">
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
          <h2 className="title_text uppercase mb-4 lg:mb-8">
            <span className="block text-white">Services built</span>
            <span className=" text-white">
              for companies {" "}
              <span
                ref={(el) => redTextRefs.current.push(el)}
              >
                that plan on sticking around
              </span>
            </span>
          </h2>

          <p className="para_text max-w-xl">
            We don’t build brands for businesses that might disappear next year. We build them for founders with real ambitions. Identity systems that scale. Packaging that travels. Websites that convert. If you’re here to build something lasting, you’re in the right place.
          </p>
        </div>
      </div>

      {/* ACCENT DOT */}
      <div className="absolute top-1/2 right-10 w-1 h-1 bg-[#F3D371] rounded-full blur-sm opacity-30" />
    </section>
  );
}
