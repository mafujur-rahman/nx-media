"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailsPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
      },
    })
      .to(titleRef.current, {
        fontSize: "2.5rem",
        y: -40,
        ease: "none",
      })
      .to(
        heroVideoRef.current,
        {
          width: "100%",
          borderRadius: 0,
        },
        0
      );

    ScrollTrigger.create({
      trigger: ".image-scroll-section",
      start: "top top",
      end: "bottom bottom",
      pin: ".pinned-text",
      scrub: true,
    });
  }, []);

  return (
    <main className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        {/* ================= HERO ================= */}
        <section
          ref={heroRef}
          className="min-h-screen flex flex-col justify-end pb-24"
        >
          <h1
            ref={titleRef}
            className="text-7xl font-bold max-w-xl leading-tight mb-16"
          >
            Immersive Brand Experience
          </h1>

          <div
            ref={heroVideoRef}
            className="w-[70%] rounded-2xl overflow-hidden"
          >
            <video
              src="/video-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ================= TWO VIDEOS ================= */}
        <section className="min-h-screen flex flex-col gap-20 py-32">
          {[1, 2].map((i) => (
            <div key={i} className="w-full rounded-2xl overflow-hidden">
              <video
                src={`/video-${i + 1}.mp4`}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[70vh] object-cover"
              />
            </div>
          ))}
        </section>

        {/* ================= TEXT + IMAGES ================= */}
        <section className="image-scroll-section flex gap-20 py-40">
          {/* LEFT PINNED TEXT */}
          <div className="pinned-text w-1/2 h-fit sticky top-32">
            <h2 className="text-4xl font-semibold mb-6">
              Design & Interaction
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We focused on clarity, motion, and storytelling—allowing
              visuals to guide the user journey while maintaining brand
              integrity.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="w-1/2 flex flex-col gap-32">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-neutral-900"
              >
                <img
                  src={`/image-${i}.jpg`}
                  alt=""
                  className="w-full h-[520px] object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ================= FULL VIDEO ================= */}
        <section className="py-40">
          <div className="w-full rounded-3xl overflow-hidden">
            <video
              src="/video-final.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[90vh] object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
