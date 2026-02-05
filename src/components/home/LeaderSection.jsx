"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import HoverSweepButton from "../utils/HoverSweepButton";

export default function LeaderSection() {
    const row1 = useRef(null);
    const row2 = useRef(null);
    const row3 = useRef(null);

    const people = [
        {
            name: "Roland Gurney",
            role: "Brand / Positioning Strategist",
            img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
        },
        {
            name: "Emilia Nerysnysta",
            role: "Senior Brand + Web Designer",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        },
        {
            name: "Julian Fella",
            role: "Lead Webflow Designer",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        },
        {
            name: "Ahmed Al-Khedr",
            role: "Lead Webflow Developer",
            img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        },
        {
            name: "Razvan Segarceanu",
            role: "Senior Webflow Developer",
            img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
        },
        {
            name: "Charlie Isslander",
            role: "Senior Brand + Web",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        },
    ];

    useEffect(() => {
        // Wait for all images in this section to load
        const allImages = Array.from(document.querySelectorAll(".leader-img"));
        let loadedCount = 0;

        allImages.forEach((img) => {
            if (img.complete) loadedCount++;
            else img.onload = () => loadedCount++;
        });

        const startAnimation = () => {
            const animateRow = (el, direction = "left") => {
                const distance = el.scrollWidth / 2;
                gsap.fromTo(
                    el,
                    { x: direction === "left" ? 0 : -distance },
                    {
                        x: direction === "left" ? -distance : 0,
                        duration: 25,
                        ease: "none",
                        repeat: -1,
                    }
                );
            };

            animateRow(row1.current, "left");
            animateRow(row2.current, "right");
            animateRow(row3.current, "left");
        };

        if (loadedCount === allImages.length) startAnimation();
        else window.addEventListener("load", startAnimation);

        return () => window.removeEventListener("load", startAnimation);
    }, []);

    const Row = ({ rowRef }) => (
        <div className="overflow-hidden">
            <div ref={rowRef} className="flex gap-4 w-max">
                {[...people, ...people].map((p, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 min-w-[260px]"
                    >
                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative bg-white/10">
                            <Image
                                src={p.img}
                                alt={p.name}
                                fill
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2N89+7dfwAIbALCwQq7KwAAAABJRU5ErkJggg=="
                                priority
                                className="leader-img"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-medium text-white">{p.name}</p>
                            <p className="text-xs text-white/60">{p.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-widest text-white/50 uppercase mb-4">
                        We don’t just deliver. We build like it’s our own.
                    </p>
                    <h2 className="title_text text-white">Results you can feel.</h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left Card */}
                    <div className="bg-white rounded-3xl overflow-hidden flex min-h-[420px]">
                        <div className="w-1/2 relative min-h-[420px]">
                            <Image
                                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                alt="CEO"
                                fill
                                className="object-cover leader-img"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2N89+7dfwAIbALCwQq7KwAAAABJRU5ErkJggg=="
                                priority
                            />
                        </div>

                        <div className="w-1/2 p-10 flex flex-col justify-center">
                            <p className="text-xs tracking-widest text-black/50 uppercase mb-4">
                                Now
                            </p>

                            <h3 className="text-2xl font-medium text-black mb-4">
                                Let’s have a chat
                            </h3>

                            <p className="text-sm text-black/70 leading-relaxed mb-8">
                                We’ll talk through your goals, blockers, and what you actually need. No fluff. No 10-page briefs.
                            </p>

                            <HoverSweepButton className="bg-black text-white text-sm py-4 px-6 border border-black cursor-pointer w-fit">
                                Book an intro call
                            </HoverSweepButton>

                            <p className="text-xs text-black/50 mt-4">
                                Only 20–30min. Friendly chat, no pressure.
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
                            Senior-only, zero bloat. Strategy, design, and development working as one unit.
                        </p>

                        <div className="space-y-4 mt-6">
                            <Row rowRef={row1} />
                            <Row rowRef={row2} />
                            <Row rowRef={row3} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
