"use client";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import HoverSweepButton from "../utils/HoverSweepButton";
import TopNavbar from "../shared/TopNavbar";
import ClientSlider from "./ClientSlider";

export default function Banner() {
    const [hovered, setHovered] = useState(false);

    return (
        <section
            className="relative md:min-h-screen bg-black overflow-hidden text-white"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* TOP NAVBAR */}
            <TopNavbar />

            {/* ================= GRID BACKGROUND ================= */}
            <div
                className="absolute inset-0 z-0 opacity-30 transition-opacity duration-700 ease-out"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #333 1px, transparent 1px),
                        linear-gradient(to bottom, #333 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* ================= BLACK FADING MASK ================= */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,black_75%)]" />
                <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">

                <span className="mb-4 lg:mb-8 px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-xs md:text-sm font-medium">
                    Trusted By 400+ Clients
                </span>

                <h1 className="title_text max-w-6xl">
                    We Build <span className="text-red-500">High-Impact Websites</span> for
                    Startups and Established Businesses
                </h1>

                <p className="para_text max-w-3xl mx-auto lg:mt-4">
                    Turn Your Idea Into Reality. Professional Websites designed to impress,
                    convert, and grow with your business.
                </p>

                <div className="mt-5 lg:mt-10 flex flex-col sm:flex-row gap-4">
                    <HoverSweepButton
                        className="bg-red-500 text-white cursor-pointer"
                        icon={<HiArrowRight />}
                    >
                        Build My Website
                    </HoverSweepButton>

                    <button className="flex items-center gap-2 cursor-pointer border border-red-500 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
                        View Our Portfolio
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        >
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <p className="mt-6 text-gray-500 font-medium">
                    100% Satisfaction Guarantee with Full Refund
                </p>
            </div>
            {/* ================= CLIENT SLIDER (BOTTOM) ================= */}
            <div className="absolute bottom-0 xl:bottom-5 2xl:bottom-25 left-0 w-full z-20">
                <ClientSlider />
            </div>

        </section>
    );
}
