"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesWeWork() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const data = [
    {
      id: 1,
      title: "Healthcare",
      description:
        "Digital solutions for hospitals, clinics, telemedicine platforms, and healthcare startups including patient portals, appointment systems, and secure data management.",
      image: "/images/industry/healthcare-1.jpeg",
    },
    {
      id: 2,
      title: "E-Commerce",
      description:
        "Scalable e-commerce platforms with seamless user experience, secure payment integration, product management systems, and high-converting online storefronts.",
      image: "/images/industry/e-commerce-1.jpeg",
    },
    {
      id: 3,
      title: "Tour & Travels",
      description:
        "Smart booking systems, travel management platforms, itinerary builders, and visually engaging websites for travel agencies and tourism businesses.",
      image: "/images/industry/tour-1.jpeg",
    },
    {
      id: 4,
      title: "Transport & Logistics",
      description:
        "Fleet management systems, tracking dashboards, logistics automation, and transportation management solutions for modern mobility businesses.",
      image: "/images/industry/transport-1.jpeg",
    },
  ];

  // Detect screen for mobile
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cardsWrapper = section?.querySelector('.cards-wrapper');

    if (!section || !cardsContainer || !cardsWrapper) return;

    // Calculate exact scroll distance without extra scroll
    const totalWidth = cardsContainer.scrollWidth;
    const visibleWidth = cardsWrapper.offsetWidth;
    const scrollDistance = Math.max(totalWidth - visibleWidth, 0);

    const ctx = gsap.context(() => {
      gsap.set(cardsContainer, { x: 0 });

      gsap.to(cardsContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-0">
        {/* Header Section - Centered */}
        <div className="mb-12 lg:mb-20 text-center">
          <div className="flex justify-center">
            <span className="px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-xs md:text-sm font-medium inline-block">
              Industries We Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-6xl mx-auto mt-6 leading-tight">
            Some agencies have a type. We have a standard. There&apos;s a
            difference.
          </h2>
        </div>

        {/* MOBILE VERSION - No animation, image at bottom */}
        {!isDesktop && (
          <div className="space-y-12">
            {data.map((item) => (
              <div key={item.id} className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DESKTOP VERSION - Horizontal scroll cards within max-w-7xl */}
        {isDesktop && (
          <div className="cards-wrapper w-full overflow-hidden">
            <div
              ref={cardsContainerRef}
              className="flex flex-row gap-6"
              style={{ width: "max-content" }}
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className="w-[calc(100vw-3rem)] lg:w-[700px] xl:w-[800px] flex-shrink-0 flex flex-col lg:flex-row gap-6 lg:gap-8 p-6 lg:p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                  style={{ minHeight: "auto" }}
                >
                  {/* Left Side - Text Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4 text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex-1 relative rounded-2xl overflow-hidden h-[200px] lg:h-[240px] xl:h-[260px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}