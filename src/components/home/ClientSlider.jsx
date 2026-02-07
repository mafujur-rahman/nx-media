"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ClientSlider() {
    const sliderRef = useRef(null);

    const logos = [
        "/clients/1.png",
        "/clients/2.png",
        "/clients/3.png",
        "/clients/4.png",
        "/clients/5.png",
        "/clients/6.png",
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const totalWidth = slider.scrollWidth / 2;

        const tween = gsap.to(slider, {
            x: -totalWidth,
            duration: 28,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
            },
        });

        return () => tween.kill();
    }, []);

    return (
        <div className="w-full flex justify-center overflow-hidden">
            {/* CONTAINER */}
            <div className="relative w-full max-w-7xl overflow-hidden">
                {/* TRACK */}
                <div
                    ref={sliderRef}
                    className="flex gap-20 w-max items-center will-change-transform"
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="relative w-32 h-10 opacity-70 hover:opacity-100 transition"
                        >
                            <Image
                                src={logo}
                                alt="Client logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* EDGE FADE */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
            </div>
        </div>
    );
}
