"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ProjectsMarquee() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        let totalWidth = track.scrollWidth / 2;

        gsap.to(track, {
            x: `-=${totalWidth}`,
            duration: 25,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => {
                    return parseFloat(x) % totalWidth;
                }),
            },
        });
    }, []);

    const images = [
        "/images/branding-service.jpg",
        "/images/development-service.png",
        "/images/web-development-service.jpg",
        "/images/uiux-service.png",
    ];

    return (
        <section className="bg-black py-24 overflow-hidden">

            {/* TEXT AREA (Centered) */}
            <div className="max-w-7xl mx-auto  mb-16">
                <h2 className="text-white text-4xl lg:text-5xl">
                    Recent Work
                </h2>
            </div>

            {/* FULL WIDTH MARQUEE */}
            <div className="w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-8 w-max"
                >
                    {/* duplicate for seamless loop */}
                    {[...images, ...images].map((src, i) => (
                        <div
                            key={i}
                            className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] rounded-[30px] overflow-hidden"
                        >
                            <Image
                                src={src}
                                alt="Project"
                                width={600}
                                height={400}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
