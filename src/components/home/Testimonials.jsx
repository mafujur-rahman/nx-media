"use client";

import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

const testimonials = [
  {
    quote:
      "Merchandising with Depict takes 75% less time compared to our previous tool.",
    name: "Benjamin Östgårdh",
    role: "Head of Ecomm at Stiga",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    brand: "STIGA",
  },
  {
    quote: "The workflow efficiency improved drastically after switching platforms.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    brand: "NIKE",
  },
  {
    quote: "Our design and product team collaboration has never been smoother.",
    name: "Michael Chen",
    role: "Product Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    brand: "ADOBE",
  },
  {
    quote: "We reduced launch time significantly while maintaining quality.",
    name: "Emma Williams",
    role: "Brand Manager",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop",
    brand: "ZARA",
  },
  {
    quote: "The most intuitive merchandising platform we have ever used.",
    name: "Daniel Carter",
    role: "Ecommerce Strategist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    brand: "PUMA",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const contentRef = useRef(null);
  const isAnimating = useRef(false);

  const changeSlide = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    // Slide out current
    tl.to(contentRef.current, {
      x: direction === "next" ? -100 : 100,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    // Change content mid animation
    tl.add(() => {
      setIndex((prev) =>
        direction === "next"
          ? (prev + 1) % testimonials.length
          : prev === 0
            ? testimonials.length - 1
            : prev - 1
      );
    });

    // Instantly move to opposite side
    tl.set(contentRef.current, {
      x: direction === "next" ? 100 : -100,
    });

    // Slide in new
    tl.to(contentRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const t = testimonials[index];

  return (
    <div className="bg-black pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0 flex items-center justify-center">

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="flex justify-center  mb-6">
            <span className=" px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium">
              Real clients. Real feedback.
            </span>
          </div>
          <h2 className="title_text text-white max-w-6xl mx-auto">We let the work speak. Sometimes clients speak too.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

          {/* LEFT CARD */}
          <div className="bg-white/5 border border-white/10 rounded-[30px] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden h-[500px]">

            {/* Centered Opposite Quote */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-10">
              <svg
                width="120"
                height="80"
                viewBox="0 0 75 54"
                fill="white"
                className="rotate-180"
              >
                <path d="M0 54V28.2C0 19.0667 2.33333 11.9333 7 6.8C11.8 1.66667 18.2667 -0.666667 26.4 0.133333V11.2C21.4667 11.2 18.2 13.0667 16.6 16.8C15.9333 18.5333 15.6 20.6667 15.6 23.2H27.6V54H0ZM40.8 54V28.2C40.8 19.0667 43.1333 11.9333 47.8 6.8C52.6 1.66667 59.0667 -0.666667 67.2 0.133333V11.2C62.2667 11.2 59 13.0667 57.4 16.8C56.7333 18.5333 56.4 20.6667 56.4 23.2H68.4V54H40.8Z" />
              </svg>
            </div>

            {/* Animated Content Wrapper */}
            <div ref={contentRef} className="relative z-10">
              <h2 className="text-white text-[28px] md:text-[38px] font-bold leading-[1.2] tracking-tight text-center">
                {t.quote}
              </h2>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6">
              <button
                onClick={() => changeSlide("prev")}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={() => changeSlide("next")}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-4">

            {/* Top Left: Image */}
            <div className="h-[280px] md:h-[320px] rounded-[30px] overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover grayscale brightness-90"
              />
            </div>

            {/* Top Right: Brand */}
            <div className="h-[280px] md:h-[320px] bg-white rounded-[30px] flex items-center justify-center p-10">
              <span className="text-black font-black italic text-5xl tracking-tighter">
                {t.brand}
              </span>
            </div>


            <div className="col-span-2 bg-white/5 rounded-[30px] py-12 flex flex-col items-center justify-center border border-white/10">
              <h3 className="text-white text-2xl font-bold tracking-tight">
                {t.name}
              </h3>
              <p className="text-gray-400 text-[12px] font-bold uppercase tracking-[0.1em] mt-2">
                {t.role}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
