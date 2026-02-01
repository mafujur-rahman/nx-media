"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Banner() {
    const [hovered, setHovered] = useState(false);

    return (
        <section
            className="relative min-h-screen bg-black overflow-hidden text-white"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* ================= NAVBAR ================= */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-30 w-full px-4">
                <div
                    className=" max-w-7xl mx-auto flex items-center justify-between px-6 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl"
                >
                    {/* LOGO LEFT */}
                    <div className="w-32 h-12 relative">
                        <Image
                            src="/logo.png"
                            alt="NX MEDIA"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* MENU ICON RIGHT */}
                    <button
                        className=" w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all duration-300"
                    >
                        <HiMenuAlt3 size={22} />
                    </button>
                </div>
            </nav>



            {/* ================= GRID BACKGROUND ================= */}
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-700 ease-out opacity-30`}
                style={{
                    backgroundImage: ` linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* ================= BLACK FADING MASK ================= */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* CENTER RADIAL FADE */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,black_75%)]" />

                {/* TOP FADE (small height) */}
                <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-black/80 to-transparent" />

                {/* BOTTOM FADE (small height) */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />
            </div>


            {/* ================= CONTENT ================= */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
                {/* BADGE */}
                <span className="mb-8 px-6 py-2 rounded-full border border-dashed border-red-500/50 bg-black/50 text-xs md:text-sm font-medium">
                    Trusted By 400+ Clients
                </span>

                {/* HEADING */}
                <h1 className="title_text max-w-5xl">
                    We Build <span className="text-red-500">High-Impact Websites</span> for
                    Startups and Established Businesses
                </h1>

                {/* SUBTEXT */}
                <p className="para_text max-w-3xl mx-auto mt-4">
                    Turn Your Idea Into Reality. Professional Websites designed to impress,
                    convert, and grow with your business.
                </p>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center gap-2 bg-red-500 text-black px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all">
                        Build My Website
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </button>

                    <button className="flex items-center gap-2 border border-red-500 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
                        View Our Portfolio
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* FOOTER TEXT */}
                <p className="mt-6 text-gray-500 font-medium">
                    100% Satisfaction Guarantee with Full Refund
                </p>
            </div>
        </section>
    );
}
