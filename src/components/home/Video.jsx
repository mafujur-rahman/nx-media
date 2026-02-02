"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // when top of section hits top of viewport
        end: "bottom top", // end animation when bottom reaches top
        scrub: true,
        pin: true, // pin the section while animating
        anticipatePin: 1,
      },
      width: "100vw",
      left: 0,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex justify-center items-center overflow-hidden"
    >
      <div
        ref={containerRef}
        className="w-7xl relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
      >
        <video
          src="/service.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  );
}
