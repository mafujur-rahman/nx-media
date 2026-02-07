"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ClientSlider() {
  const sliderRef = useRef(null);

  const logos = [
    "https://via.placeholder.com/150x50?text=Logo+1",
    "https://via.placeholder.com/150x50?text=Logo+2",
    "https://via.placeholder.com/150x50?text=Logo+3",
    "https://via.placeholder.com/150x50?text=Logo+4",
    "https://via.placeholder.com/150x50?text=Logo+5",
    "https://via.placeholder.com/150x50?text=Logo+6",
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2; // width of one set of logos

    const tween = gsap.to(slider, {
      x: `-${totalWidth}px`,
      duration: 28,
      ease: "linear",
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* SLIDER TRACK */}
        <div
          ref={sliderRef}
          className="flex gap-20 w-max items-center will-change-transform"
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative w-32 h-10 opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* EDGE FADE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </div>
  );
}
