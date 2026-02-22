"use client";

import TopNavbar from "@/components/shared/TopNavbar";
import React from "react";

export default function Banner() {
    return (
        <section className="relative w-full h-screen flex flex-col justify-end">

            {/* Fixed Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="fixed inset-0 w-full h-full object-cover -z-10"
            >
                <source src="/service.mp4" type="video/mp4" />
            </video>

            {/* Dark Gradient Overlay */}
            <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black -z-10"></div>

            {/* Content */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20">

                <div className="max-w-7xl mx-auto">

                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-6">

                        {/* Left - Brand */}
                        <div className="flex items-center gap-3 text-white/90">
                            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                                <span className="text-sm">⟲</span>
                            </div>
                            <span className="text-lg font-medium tracking-wide">
                                The NX Media
                            </span>
                        </div>

                        {/* Right - Year */}
                        <span className="text-white/70 text-lg font-light">
                            2024
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                        TripleKey Platform
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
                        Building a platform for non-technical and technical executives
                        to transparently analyse and assess their software environments.
                    </p>

                    {/* Tags */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <span className="px-5 py-2 rounded-full border border-white/30 text-white/80 text-sm tracking-wide">
                            PRODUCT DESIGN
                        </span>

                        <span className="px-5 py-2 rounded-full border border-white/30 text-white/80 text-sm tracking-wide">
                            DIGITAL STRATEGY
                        </span>

                        <span className="px-5 py-2 rounded-full border border-white/30 text-white/80 text-sm tracking-wide">
                            AI
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
