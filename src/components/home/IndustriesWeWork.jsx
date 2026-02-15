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
      title: "Healthcare",
      description:
        "Digital solutions for hospitals, clinics, telemedicine platforms, and healthcare startups including patient portals, appointment systems, and secure data management.",
      images: [
        { src: "/industry-healthcare-1.jpg", alt: "Healthcare Technology", bg: "#d0f4ff", pos: "left-top" },
        { src: "/industry-healthcare-2.jpg", alt: "Medical Dashboard", bg: "#caffbf", pos: "right-bottom" },
      ],
    },
    {
      title: "E-Commerce",
      description:
        "Scalable e-commerce platforms with seamless user experience, secure payment integration, product management systems, and high-converting online storefronts.",
      images: [
        { src: "/industry-ecommerce-1.jpg", alt: "Online Shopping", bg: "#ffd6a5", pos: "left-top" },
        { src: "/industry-ecommerce-2.jpg", alt: "Ecommerce Dashboard", bg: "#bdb2ff", pos: "right-bottom" },
      ],
    },
    {
      title: "Tour & Travels",
      description:
        "Smart booking systems, travel management platforms, itinerary builders, and visually engaging websites for travel agencies and tourism businesses.",
      images: [
        { src: "/industry-travel-1.jpg", alt: "Travel Booking", bg: "#a0c4ff", pos: "left-top" },
        { src: "/industry-travel-2.jpg", alt: "Tour Website", bg: "#ffc6ff", pos: "right-bottom" },
      ],
    },
    {
      title: "Transport & Logistics",
      description:
        "Fleet management systems, tracking dashboards, logistics automation, and transportation management solutions for modern mobility businesses.",
      images: [
        { src: "/industry-transport-1.jpg", alt: "Transport Dashboard", bg: "#caffbf", pos: "left-top" },
        { src: "/industry-transport-2.jpg", alt: "Logistics System", bg: "#ffd6a5", pos: "right-bottom" },
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

        <div className="mt-20 flex flex-col lg:flex-row gap-10 relative">

          {/* LEFT CONTENT (GSAP PINNED UNTIL LAST) */}
          <div className="lg:w-1/3" ref={leftRef}>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 font-bricolage">
              {data[0].title}
            </h3>
            <p className="text-white/70 max-w-lg leading-relaxed">
              {data[0].description}
            </p>

          </div>

          {/* RIGHT VISUALS */}
          <div className="lg:w-2/3 flex flex-col gap-32 relative">
            {data.map((item, index) => (
              <div
                key={index}
                className="scroll-section relative h-[520px]"
              >
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    className="absolute w-[280px] md:w-[320px] h-[420px] rounded-[30px] overflow-hidden"
                    style={{
                      backgroundColor: img.bg,
                      top: img.pos === "left-top" ? 0 : "auto",
                      left: img.pos === "left-top" ? "4.55rem" : "auto",
                      bottom: img.pos === "right-bottom" ? 0 : "auto",
                      right: img.pos === "right-bottom" ? "4.55rem" : "auto",
                    }}
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
