"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function LeaderSection() {
    const people = [
        {
            name: "Roland Gurney",
            role: "Brand / Positioning Strategist",
            skills: "Brand strategy, positioning, campaigns",
            bio: "Roland specializes in crafting brand narratives that resonate with audiences and drive engagement.",
            img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
        },
        {
            name: "Emilia Nerysnysta",
            role: "Senior Brand + Web Designer",
            skills: "UI/UX, Visual Design, Branding",
            bio: "Emilia designs visually stunning experiences that balance creativity and usability.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        },
        {
            name: "Julian Fella",
            role: "Lead Webflow Designer",
            skills: "Webflow, Responsive Design, Prototyping",
            bio: "Julian brings complex digital projects to life with seamless Webflow designs.",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        },
        {
            name: "Ahmed Al-Khedr",
            role: "Lead Webflow Developer",
            skills: "Webflow Dev, Frontend, Animations",
            bio: "Ahmed develops highly interactive and performant web experiences.",
            img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        },
        {
            name: "Razvan Segarceanu",
            role: "Senior Webflow Developer",
            skills: "Webflow, CMS, API Integrations",
            bio: "Razvan excels at building scalable web solutions and complex integrations.",
            img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
        },
        {
            name: "Charlie Isslander",
            role: "Senior Brand + Web Designer",
            skills: "Branding, Visual Storytelling, UX Design",
            bio: "Charlie ensures every project tells a compelling brand story.",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        },
        {
            name: "Sophia Martinez",
            role: "Creative Director",
            skills: "Concept Development, Branding, Campaign Strategy",
            bio: "Sophia leads creative vision and ensures cohesive brand messaging.",
            img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
        },
        {
            name: "Liam O'Reilly",
            role: "UX Researcher",
            skills: "User Research, Testing, Experience Strategy",
            bio: "Liam uncovers user insights to inform design and strategy decisions.",
            img: "https://images.unsplash.com/photo-1502767089025-6572583495d0",
        },
        {
            name: "Aisha Khan",
            role: "Content Strategist",
            skills: "Content Planning, Copywriting, SEO",
            bio: "Aisha crafts content that connects and converts audiences effectively.",
            img: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    // Automatic rotation every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % people.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Animate image fade instead of sliding
    useEffect(() => {
        if (!sliderRef.current) return;

        const currentImg = sliderRef.current.querySelector(".active-img");
        const nextImg = sliderRef.current.querySelector(".next-img");

        // Fade in new image
        gsap.fromTo(
            nextImg,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: "power2.inOut" }
        );

        // After animation, make next image active
        const timeout = setTimeout(() => {
            currentImg.src = nextImg.src;
            nextImg.style.opacity = 0;
        }, 800);

        return () => clearTimeout(timeout);
    }, [activeIndex]);


    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <span className=" px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium">
                            We don’t just deliver. We build like it’s our own.
                        </span>
                    </div>
                    <h2 className="title_text text-white">Results you can feel.</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left Card */}
                    <div className="bg-white rounded-3xl overflow-hidden flex min-h-[500px]">
                        {/* Image Left */}
                        <div className="w-1/2 relative overflow-hidden">
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

                        {/* Content Right */}
                        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-4">

                                <div>
                                    <p className="text-xs tracking-widest text-black/50 uppercase mb-1">
                                        {people[activeIndex].role}
                                    </p>
                                    <h3 className="text-2xl font-medium text-black mb-1">
                                        {people[activeIndex].name}
                                    </h3>
                                    <p className="text-sm text-black/70">
                                        <strong>Skills:</strong> {people[activeIndex].skills}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-black/70 leading-relaxed mt-4">
                                {people[activeIndex].bio}
                            </p>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
                        <p className="text-xs uppercase tracking-widest text-white/50">
                            Collective
                        </p>

                        <h3 className="text-2xl text-white font-light leading-snug">
                            Small team.<br />Big outcomes.
                        </h3>

                        <p className="text-white/60 text-sm max-w-md">
                            Senior-only, zero bloat. Strategy, design, and development working
                            as one unit.
                        </p>

                        <div className="grid grid-cols-3 gap-4 mt-6">
                            {people.map((p, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition-all duration-300 border ${activeIndex === i
                                        ? "border-white text-white bg-white/10"
                                        : "border-white/10 text-white/60"
                                        }`}
                                >
                                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-white/10">
                                        <Image
                                            src={p.img}
                                            alt={p.name}
                                            fill
                                            className="object-cover"
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2N89+7dfwAIbALCwQq7KwAAAABJRU5ErkJggg=="
                                        />
                                    </div>
                                    <p className="text-xs text-center">{p.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



