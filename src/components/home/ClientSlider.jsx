"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ClientSlider() {
  const sliderRef = useRef(null);

  const logos = [
    "/images/Client logo/1.png",
    "/images/Client logo/2.png",
    "/images/Client logo/3.png",
    "/images/Client logo/4.png",
    "/images/Client logo/5.png",
    "/images/Client logo/6.png",
    "/images/Client logo/7.png",
    "/images/Client logo/8.png",
    "/images/Client logo/9.png",
    "/images/Client logo/10.png",
    "/images/Client logo/11.png",
    "/images/Client logo/12.png",
    "/images/Client logo/13.png",
    "/images/Client logo/17.png",
    
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2; 

    const tween = gsap.to(slider, {
      x: `-${totalWidth}px`,
      duration: 45,
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
          className="flex  w-max items-center will-change-transform"
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative w-32 h-10 "
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
