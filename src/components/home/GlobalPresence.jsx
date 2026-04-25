"use client";

import { useEffect, useState } from "react";

export default function GlobalPresence() {
    const locations = [
        { country: "United States" },
        { country: "Australia" },
        { country: "South Africa" },
        { country: "Canada" },
        { country: "Italy" },
        { country: "France" },
        { country: "Germany" },
        { country: "England" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Create infinite array by duplicating the pairs
    const locationPairs = [];
    for (let i = 0; i < locations.length; i += 2) {
        locationPairs.push(locations.slice(i, i + 2));
    }
    
    // Create infinite loop array (add first 2 pairs at the end for seamless loop)
    const infinitePairs = [...locationPairs, ...locationPairs.slice(0, 2)];

    // Check for mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener("resize", checkMobile);
        
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Auto-slide for mobile only
    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, [isMobile]);

    // Handle infinite loop reset
    const handleTransitionEnd = () => {
        if (currentIndex >= locationPairs.length) {
            setIsTransitioning(false);
            setCurrentIndex(0);
            setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
        }
    };

    return (
        <section className="relative h-full md:h-[90vh] pt-36 md:pt-28 w-full overflow-hidden">
            {/* VIDEO BACKGROUND */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/footer_globe.mp4" type="video/mp4" />
            </video>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 lg:pb-24 px-6 md:px-10 lg:px-16 xl:px-0">
                
                {/* TITLE ABOVE GRID */}
                <h2 className="text-3xl sm:text-4xl font-bold font-bricolage text-white mb-6 text-center">
                    Our Clients Across the Globe
                </h2>

                {/* LOCATIONS GRID - Desktop */}
                {!isMobile && (
                    <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {locations.map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-white/15 bg-black/10 backdrop-blur-md p-5 text-center shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-white/30"
                            >
                                <h4 className="text-white font-semibold text-lg">
                                    {item.country}
                                </h4>                        
                            </div>
                        ))}
                    </div>
                )}

                {/* LOCATIONS CAROUSEL - Mobile (Infinite smooth sliding) */}
                {isMobile && (
                    <div className="w-full max-w-sm overflow-hidden">
                        <div 
                            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {infinitePairs.map((pair, pageIndex) => (
                                <div
                                    key={pageIndex}
                                    className="w-full flex-shrink-0 flex flex-col gap-4"
                                >
                                    {pair.map((item, i) => (
                                        <div
                                            key={i}
                                            className="rounded-2xl border border-white/15 bg-black/10 backdrop-blur-md p-5 text-center shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                                        >
                                            <h4 className="text-white font-semibold text-lg">
                                                {item.country}
                                            </h4>                        
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        
                        {/* Dot indicators for mobile */}
                        <div className="flex justify-center gap-2 mt-6">
                            {locationPairs.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setIsTransitioning(true);
                                        setCurrentIndex(i);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        currentIndex % locationPairs.length === i 
                                            ? "w-6 bg-white" 
                                            : "w-2 bg-white/40"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* TOP FADE (SPACE GLOW EFFECT) */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        </section>
    );
}