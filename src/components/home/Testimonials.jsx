"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviewsData = [
  { name: "Tyler1", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler", review: "Okay buddy, you might not be 6'5 and 255 lbs like me, but you got someone who is that jacked coaching you, aka ME. You got this!" },
  { name: "Emiru", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emiru", review: "NX Media helped me transform my brand. The team is incredible and results speak for themselves!" },
  { name: "Jankos", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jankos", review: "From zero to hero! My website got insane traffic after working with NX Media. Highly recommend!" },
  { name: "Faker", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Faker", review: "Absolutely amazing experience. My engagement skyrocketed thanks to NX Media!" },
  { name: "Caps", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Caps", review: "Professional, fast, and creative. My brand feels alive now!" },
  { name: "Rekkles", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rekkles", review: "They nailed the strategy and design. My clients love it!" },
  { name: "Doublelift", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Doublelift", review: "NX Media is a game changer. I can't recommend them enough." },
  { name: "Sneaky", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneaky", review: "Top-notch quality and cinematic results. Love it!" },
  { name: "Bjergsen", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bjergsen", review: "Smooth, creative, and effective. Truly next-level." },
  { name: "Uzi", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Uzi", review: "NX Media exceeded my expectations. Everything looks amazing!" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const reviewRef = useRef(null);
  const carouselRef = useRef(null);
  const autoSlide = useRef(null);

  // Auto change every 3s
  useEffect(() => {
    autoSlide.current = setInterval(() => changeReview("next"), 3000);
    return () => clearInterval(autoSlide.current);
  }, [current]);

  const changeReview = (direction) => {
    const total = reviewsData.length;
    let nextIndex = current;

    if (direction === "next") nextIndex = current === total - 1 ? 0 : current + 1;
    else if (direction === "prev") nextIndex = current === 0 ? total - 1 : current - 1;
    else nextIndex = direction;

    // Animate review box
    gsap.to(reviewRef.current, {
      opacity: 0,
      y: -30,
      scale: 0.95,
      duration: 0.35,
      onComplete: () => {
        setCurrent(nextIndex);
        gsap.fromTo(
          reviewRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
        );
      },
    });

    // Animate left carousel to center active user
    const leftColumnWidth = 300; // fixed max width
    const userWidth = 80; // each user badge including gap
    const container = carouselRef.current;
    const totalVisible = Math.floor(leftColumnWidth / userWidth);
    let offset = nextIndex - Math.floor(totalVisible / 2);
    if (offset < 0) offset = 0;
    if (offset > reviewsData.length - totalVisible) offset = reviewsData.length - totalVisible;
    gsap.to(container, { x: -offset * userWidth, duration: 0.7, ease: "power3.inOut" });
  };

  return (
    <div className="bg-black flex items-center justify-center p-6 font-sans min-h-screen">
      <div className="max-w-7xl w-full bg-black rounded-[30px] p-12 flex flex-col lg:flex-row items-center gap-12 overflow-hidden border border-white/5">

        {/* Left Column */}
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
          <div>
            <span className="px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-xs md:text-sm font-medium text-white">
              Clients Speech
            </span>

            <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4 mt-6 font-bricolage">
              What Our Users Say
            </h1>

            {/* New Subtitle */}
            <p className="text-gray-300 text-base md:text-lg mb-6">
              See how NX Media helps professionals and creators elevate their brand, grow engagement, and maximize results. Real feedback from real clients.
            </p>

            {/* Key Stats */}
            <div className="flex gap-6 mb-8">
              <div className="flex flex-col items-center">
                <span className="text-red-500 font-bold text-xl">500+</span>
                <span className="text-gray-400 text-sm">Clients Served</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-red-500 font-bold text-xl">4.9/5</span>
                <span className="text-gray-400 text-sm">Satisfaction Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-red-500 font-bold text-xl">10+</span>
                <span className="text-gray-400 text-sm">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Horizontal carousel */}
          <div className="overflow-hidden mt-4">
            <div ref={carouselRef} className="flex gap-4 relative w-max">
              {reviewsData.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => changeReview(idx)}
                  className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-transform ${current === idx ? "scale-110 z-10" : "scale-90 opacity-50"
                    }`}
                >
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full border-2 border-white/20" />
                  <span className="text-white text-sm mt-1">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-8">
            <button onClick={() => changeReview("prev")} className="p-3 bg-[#2e323a] rounded-full hover:bg-[#3a3f49] transition-all text-white">
              <FaArrowLeft />
            </button>
            <button onClick={() => changeReview("next")} className="p-3 bg-[#2e323a] rounded-full hover:bg-[#3a3f49] transition-all text-white">
              <FaArrowRight />
            </button>
          </div>
        </div>


        {/* Right Column */}
        <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover scale-105" src="/testimonial.mp4"></video>
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Floating review box */}
          <div ref={reviewRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-[#0d1a17]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <img src={reviewsData[current].img} alt={reviewsData[current].name} className="w-12 h-12 rounded-full border border-white/10" />
              <span className="text-white font-medium text-lg">{reviewsData[current].name}</span>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">{reviewsData[current].review}</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Testimonials;
