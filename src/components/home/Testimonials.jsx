"use client";

import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

// Brand logos 
const brandLogos = {
  "schonert": "/images/review/schonert.jpeg",
  "advertee": "/images/review/advert.jpeg",
  "Searle Interiors": "/images/review/searle.jpeg",
  "La Ebanista": "/images/review/la.png", 
  "Academic Hero": null,
  "Anytask": "/images/review/Anytask.png",
  "elektryk.pro": "/images/review/elyktro.jpeg",
  "Lead the way": null, 
  
};

const testimonials = [
  {
    quote: "The NX Media was great! They worked with me on making changes to the logo and got exactly what I was looking for! Great service! ",
    name: "Josh Smith",
    role: "Founder at Schonert Marketing",
    image:
      "/images/review/josh.jpeg",
    brand: "schonert",
  },
  {
    quote: "This guy is the winner of a huge logo. I was satisfied with his work.",
    name: "Petr Kucera",
    role: "Founder at Advertee",
    image:
      "/images/review/petr.jpeg",
    brand: "advertee",
  },
  {
    quote: "The NX Media was helpful and kind. He understood what we wanted and tweaked the design when asked. He went above and beyond to give us many altered designs until we were happy. Highly recommend! ",
    name: "Suzi Searle",
    role: "Founder at Searle Interiors",
    image:
      "/images/review/suzi.jpeg",
    brand: "Searle Interiors",
  },
  {
    quote:
      "Working with NX Media over the past four years has been seamless, reliable, and consistently impressive.",
    name: "Zenzele Silla",
    role: "Founder & CEO",
    image:
      "/images/review/male.png",
    brand: "La Ebanista",
  },
  {
    quote: "Thank you again, The NX Media. I've worked with you on so many projects and look forward to many more. Thanks for always bringing my vision to reality.",
    name: "Jim",
    role: "Founder",
    image:
      "/images/review/male.png",
    brand: "Academic Hero",
  },
  {
    quote: "Very professional freelancer with great design skills and delivered work very promptly,and accepted revisions when needed. Great experience.",
    name: "Anytask Stef",
    role: "Staff",
    image:
      "/images/review/male.png",
    brand: "Anytask",
  },
  {
    quote: "Wow! Good skills, very fast wiek, good response time, I recommend 10/10.",
    name: "Olsenskce",
    role: "Founder",
    image:
      "/images/review/male.png",
    brand: "elektryk.pro",
  },
  {
    quote: "Above and beyond! The NX Media did a fantastic job with the latest batch of work I sent them. He went above and beyond the job spec and delivered additional files with ease. Thank you, The NX Media!",
    name: "Anytask Jonathan",
    role: "Staff",
    image:
      "/images/review/male.png",
    brand: "Anytask",
  },
  {
    quote: "Good work. Happy with the work produced in the end. The only reason why there is one less star is that I sent an example of a logo I liked, and the seller sent it back to me, but changed the colour. Other than that, I am happy.",
    name: "Emma Gori",
    role: "Founder",
    image:
      "/images/review/female.png",
    brand: "Lead the way",
  },
  
];

// Helper function to truncate text
const truncateText = (text, maxLength = 120) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

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
  const hasBrandLogo = brandLogos[t.brand] !== null;

  // Get truncated quote for display
  const truncatedQuote = truncateText(t.quote, 150);

  return (
    <div className="bg-black pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium">
              Real clients. Real feedback.
            </span>
          </div>
          <h2 className="title_text text-white max-w-6xl mx-auto">We let the work speak. Sometimes clients speak too.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* LEFT CARD */}
          <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden min-h-[400px] md:min-h-[500px]">
            {/* Centered Opposite Quote */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-10">
              <svg
                width="80"
                height="60"
                viewBox="0 0 75 54"
                fill="white"
                className="rotate-180"
              >
                <path d="M0 54V28.2C0 19.0667 2.33333 11.9333 7 6.8C11.8 1.66667 18.2667 -0.666667 26.4 0.133333V11.2C21.4667 11.2 18.2 13.0667 16.6 16.8C15.9333 18.5333 15.6 20.6667 15.6 23.2H27.6V54H0ZM40.8 54V28.2C40.8 19.0667 43.1333 11.9333 47.8 6.8C52.6 1.66667 59.0667 -0.666667 67.2 0.133333V11.2C62.2667 11.2 59 13.0667 57.4 16.8C56.7333 18.5333 56.4 20.6667 56.4 23.2H68.4V54H40.8Z" />
              </svg>
            </div>

            {/* Animated Content Wrapper */}
            <div ref={contentRef} className="relative z-10 overflow-y-auto max-h-[300px] md:max-h-[350px] px-2">
              <h2 className="text-white text-xl md:text-2xl lg:text-[28px] font-bold leading-relaxed tracking-tight text-center">
                {truncatedQuote}
              </h2>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={() => changeSlide("prev")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="Previous testimonial"
              >
                <FaArrowLeft size={16} />
              </button>

              <button
                onClick={() => changeSlide("next")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                aria-label="Next testimonial"
              >
                <FaArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left: Profile Image */}
            <div className="h-[240px] md:h-[280px] lg:h-[320px] rounded-[30px] overflow-hidden bg-white">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
              />
            </div>

            {/* Top Right: Brand (Logo or Text) */}
            <div className="h-[240px] md:h-[280px] lg:h-[320px] bg-white rounded-[30px] flex items-center justify-center p-6 overflow-hidden">
              {hasBrandLogo ? (
                <img 
                  src={brandLogos[t.brand]} 
                  alt={`${t.brand} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-black font-black italic text-3xl md:text-4xl lg:text-5xl tracking-tighter text-center break-words">
                  {t.brand}
                </span>
              )}
            </div>

            {/* Bottom: Name and Role */}
            <div className="col-span-2 bg-white/5 rounded-[30px] py-8 md:py-10 lg:py-12 px-4 flex flex-col items-center justify-center border border-white/10">
              <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight text-center">
                {t.name}
              </h3>
              <p className="text-gray-400 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.1em] mt-2 text-center">
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