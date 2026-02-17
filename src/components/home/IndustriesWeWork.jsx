"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesWeWork() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const data = [
    {
      title: "Healthcare",
      description:
        "Digital solutions for hospitals, clinics, telemedicine platforms, and healthcare startups including patient portals, appointment systems, and secure data management.",
      images: [
        { src: "/images/industry-1.jpg", alt: "Healthcare Technology", bg: "#d0f4ff", pos: "left-top" },
        { src: "/images/industry-2.jpg", alt: "Medical Dashboard", bg: "#caffbf", pos: "right-bottom" },
      ],
    },
    {
      title: "E-Commerce",
      description:
        "Scalable e-commerce platforms with seamless user experience, secure payment integration, product management systems, and high-converting online storefronts.",
      images: [
        { src: "/images/industry-1.jpg", alt: "Online Shopping", bg: "#ffd6a5", pos: "left-top" },
        { src: "/images/industry-2.jpg", alt: "Ecommerce Dashboard", bg: "#bdb2ff", pos: "right-bottom" },
      ],
    },
    {
      title: "Tour & Travels",
      description:
        "Smart booking systems, travel management platforms, itinerary builders, and visually engaging websites for travel agencies and tourism businesses.",
      images: [
        { src: "/images/industry-1.jpg", alt: "Travel Booking", bg: "#a0c4ff", pos: "left-top" },
        { src: "/images/industry-2.jpg", alt: "Tour Website", bg: "#ffc6ff", pos: "right-bottom" },
      ],
    },
    {
      title: "Transport & Logistics",
      description:
        "Fleet management systems, tracking dashboards, logistics automation, and transportation management solutions for modern mobility businesses.",
      images: [
        { src: "/images/industry-1.jpg", alt: "Transport Dashboard", bg: "#caffbf", pos: "left-top" },
        { src: "/images/industry-2.jpg", alt: "Logistics System", bg: "#ffd6a5", pos: "right-bottom" },
      ],
    },
  ];

  /* Detect screen */
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* GSAP ONLY DESKTOP */
  useEffect(() => {
    if (!isDesktop) return;

    const sections = gsap.utils.toArray(".scroll-section");

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
        scrub: 1,
      });

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
        const tl = gsap.timeline();
        tl.to(leftRef.current, {
          autoAlpha: 0,
          y: 30,
          duration: 0.3,
        })
          .call(() => {
            leftRef.current.querySelector("h3").textContent =
              data[index].title;
            leftRef.current.querySelector("p").textContent =
              data[index].description;
          })
          .to(leftRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      className="w-full bg-black text-white pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <span className="px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-xs md:text-sm font-medium">
          Industries We Work
        </span>

        {/* Heading */}
        <h2 className="title_text max-w-5xl mt-6">
          Some agencies have a type. We have a standard. There’s a difference.
        </h2>

        {/* MOBILE VERSION */}
        {!isDesktop && (
          <div className="mt-12 space-y-20">
            {data.map((item, index) => (
              <div key={index} className="space-y-6">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full sm:w-1/2 h-[320px] rounded-[24px] overflow-hidden"
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

              </div>
            ))}
          </div>
        )}

        {/* DESKTOP VERSION */}
        {isDesktop && (
          <div className="mt-20 flex gap-10">

            <div className="w-1/3" ref={leftRef}>
              <h3 className="text-4xl font-semibold mb-4">
                {data[0].title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {data[0].description}
              </p>
            </div>

            <div className="w-2/3 flex flex-col gap-32">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="scroll-section relative h-[520px]"
                >
                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className="absolute w-[320px] h-[420px] rounded-[30px] overflow-hidden shadow-2xl"
                      style={{
                        backgroundColor: img.bg,
                        top: img.pos === "left-top" ? 0 : "auto",
                        left: img.pos === "left-top" ? "4.5rem" : "auto",
                        bottom: img.pos === "right-bottom" ? 0 : "auto",
                        right: img.pos === "right-bottom" ? "4.5rem" : "auto",
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
        )}

      </div>
    </section>
  );
}
