"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function LeaderSection() {
  const people = [
    { name: "Nazmul Islam", role: "Founder & CEO", skills: "Brand strategy, Creative direction, Business growth", bio: "Nazmul leads the vision and ensures every project meets the standard—strategically sound and beautifully executed.", img: "/images/team/nazmul.png" },
    { name: "Saima Sultana", role: "Co-Founder & Creative Director", skills: "Visual identity, Art direction, Brand storytelling", bio: "Saima shapes how brands look and feel, bringing clarity and intention to every visual decision.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
    { name: "MD. Shakil", role: "Lead Software Engineer", skills: "Architecture, Performance optimization, Scalable systems", bio: "Shakil builds the technical backbone—ensuring websites are fast, secure, and built to handle whatever comes next.", img: "/images/team/MD. Shakil.jpg" },
    { name: "Tahmid Tishad", role: "Lead WordPress Developer", skills: "Custom themes, Plugin development, CMS architecture", bio: "Tahmid turns designs into functional WordPress sites that clients can actually manage themselves.", img: "/images/team/tahamid.jpg" },
    { name: "MD. Nafis", role: "Lead Backend Developer", skills: "API integration, Database design, Server management", bio: "Nafis handles the logic behind the scenes—making sure everything connects, communicates, and runs smoothly.", img: "/images/team/Nafijur.jpg" },
    { name: "MD. Mahfuz", role: "Lead Frontend Developer", skills: "Interactive experiences, Animation, Responsive development", bio: "Mahfuz brings designs to life in the browser—building interfaces that feel as good as they look.", img: "/images/team/Mafuzur.jpg" },
    { name: "Mouradul Islam", role: "Lead Graphic Designer", skills: "Print design, Typography, Visual systems", bio: "Mourad crafts the tangible stuff—collateral, packaging, guidelines—with precision and purpose.", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39" },
    { name: "Mahmuda Tahsin", role: "Lead UI/UX Designer", skills: "User research, Wireframing, Interface design", bio: "Mahmuda designs experiences that make sense—mapping user journeys and crafting interfaces people actually enjoy using.", img: "https://images.unsplash.com/photo-1502767089025-6572583495d0" },
    { name: "Kazi Maruf", role: "Lead Digital Marketer", skills: "Content strategy, SEO, Growth planning", bio: "Maruf makes sure the work gets seen—connecting brand strategy with real-world visibility and results.", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % people.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;

    const currentImg = sliderRef.current.querySelector(".active-img");
    const nextImg = sliderRef.current.querySelector(".next-img");

    gsap.fromTo(nextImg, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.inOut" });

    const timeout = setTimeout(() => {
      currentImg.src = nextImg.src;
      nextImg.style.opacity = 0;
    }, 800);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section className="bg-black pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <span className="px-4 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium">
              We don’t just deliver. We build like it’s our own.
            </span>
          </div>
          <h2 className="title_text text-white max-w-3xl md:max-w-6xl mx-auto text-lg md:text-2xl lg:text-3xl">
            You’re not getting a faceless agency. You’re getting us.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          {/* Left Card - Fixed height and width */}
          <div className="flex-1 bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[500px] h-auto w-full">
            {/* Image - Fixed proportion */}
            <div className="w-full md:w-1/2 relative h-[280px] md:h-auto min-h-[280px]">
              <div ref={sliderRef} className="relative w-full h-full">
                <Image
                  src={people[activeIndex].img}
                  alt={people[activeIndex].name}
                  fill
                  className="object-cover active-img absolute top-0 left-0 w-full h-full"
                />
                <Image
                  src={people[activeIndex].img}
                  alt={people[activeIndex].name}
                  fill
                  className="object-cover next-img absolute top-0 left-0 w-full h-full opacity-0"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center overflow-auto">
              <div>
                <p className="text-xs tracking-widest text-black/50 uppercase mb-1">
                  {people[activeIndex].role}
                </p>
                <h3 className="text-xl md:text-2xl font-medium text-black mb-1">
                  {people[activeIndex].name}
                </h3>
                <p className="text-sm text-black/70">
                  <strong>Skills:</strong> {people[activeIndex].skills}
                </p>
              </div>
              <p className="text-sm text-black/70 leading-relaxed mt-4">
                {people[activeIndex].bio}
              </p>
            </div>
          </div>

          {/* Right Card - Matching height and width */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[500px] h-auto w-full">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-white/50">Collective</p>

              <h3 className="text-xl md:text-2xl text-white font-light leading-snug">
                Small team.<br />Big outcomes.
              </h3>

              <p className="text-white/60 text-sm md:text-base max-w-full md:max-w-md">
                Senior-only, zero bloat. Strategy, design, and development working as one unit.
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
              {people.map((p, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition-all duration-300 border ${
                    activeIndex === i
                      ? "border-white text-white bg-white/10"
                      : "border-white/10 text-white/60"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden relative bg-white/10 flex-shrink-0">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2N89+7dfwAIbALCwQq7KwAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <p className="text-xs text-center truncate">{p.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}