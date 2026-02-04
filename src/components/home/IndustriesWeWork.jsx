"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesWeWork() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);

  const data = [
    {
      title: "UI/UX Design",
      description:
        "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
      images: [
        { src: "/industry-1.jpg", alt: "Dashboard UI", bg: "#b9e3ff", pos: "left-top" },
        { src: "/industry-2.jpg", alt: "Mobile App UI", bg: "#cfff8f", pos: "right-bottom" },
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Custom mobile app solutions for iOS and Android, ensuring responsive and user-friendly experiences.",
      images: [
        { src: "/industry-2.jpg", alt: "Mobile App", bg: "#cfff8f", pos: "left-top" },
        { src: "/industry-1.jpg", alt: "Dashboard UI", bg: "#b9e3ff", pos: "right-bottom" },
      ],
    },
    {
      title: "Branding & Identity",
      description:
        "Logo design, brand guidelines, and visual identity creation to make your brand memorable.",
      images: [
        { src: "/industry-1.jpg", alt: "Branding", bg: "#ffd6a5", pos: "left-top" },
        { src: "/industry-2.jpg", alt: "Branding Alt", bg: "#ffa5a5", pos: "right-bottom" },
      ],
    },
    {
      title: "Web Development",
      description:
        "Modern websites using React, Next.js, and Tailwind CSS for fast, responsive, and interactive web experiences.",
      images: [
        { src: "/industry-2.jpg", alt: "Web Dev", bg: "#a5d8ff", pos: "left-top" },
        { src: "/industry-1.jpg", alt: "Web Dev Alt", bg: "#ffa5a5", pos: "right-bottom" },
      ],
    },
  ];

  useEffect(() => {
    const sections = gsap.utils.toArray(".scroll-section");

    // Pin the left content only until the second-to-last section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => {
        const lastSection = sections[sections.length - 1];
        return lastSection.getBoundingClientRect().top + window.scrollY;
      },
      pin: leftRef.current,
      pinSpacing: false,
      scrub: 1,
    });

    // Animate left text per section
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => animateLeft(i),
        onEnterBack: () => animateLeft(i),
      });
    });

    function animateLeft(index) {
      if (!leftRef.current) return;
      gsap.to(leftRef.current, {
        autoAlpha: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          leftRef.current.querySelector("h3").textContent = data[index].title;
          leftRef.current.querySelector("p").textContent = data[index].description;
          gsap.to(leftRef.current, { autoAlpha: 1, y: 0, duration: 0.3 });
        },
      });
    }
  }, []);

  return (
    <section className="w-full bg-black text-white py-32 px-6" ref={containerRef}>
      <div className="max-w-7xl mx-auto relative">

        {/* Top Badge */}
        <span className="px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-xs md:text-sm font-medium">
          Industries We Work
        </span>

        {/* Heading */}
        <h2 className="title_text max-w-5xl mt-6">
          We Design <span className="italic">Brands</span> That Speak To Audiences
        </h2>

        <div className="mt-20 flex flex-col lg:flex-row gap-16 relative">

          {/* LEFT CONTENT (GSAP PINNED UNTIL LAST) */}
          <div className="lg:w-1/2" ref={leftRef}>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
              {data[0].title}
            </h3>
            <p className="text-white/70 max-w-lg leading-relaxed">
              {data[0].description}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-red-400 hover:text-red-300 transition"
            >
              See More
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* RIGHT VISUALS */}
          <div className="lg:w-1/2 flex flex-col gap-32">
            {data.map((item, index) => (
              <div
                key={index}
                className="scroll-section relative h-[520px]"
              >
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    className={`absolute w-[280px] md:w-[320px] h-[420px] rounded-[32px] shadow-2xl overflow-hidden ${
                      img.pos === "left-top"
                        ? "left-0 top-0"
                        : "right-0 bottom-0"
                    }`}
                    style={{ backgroundColor: img.bg }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
