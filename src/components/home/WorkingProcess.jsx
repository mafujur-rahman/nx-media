"use client";

import React from "react";
import { motion } from "framer-motion";

const WorkingProcess = () => {
    const paths = [
        { id: "tl", d: "M 350 250 V 400 H 580" },
        { id: "tc", d: "M 640 250 V 380" },
        { id: "tr", d: "M 930 250 V 400 H 700" },
        { id: "bl", d: "M 350 550 V 400 H 580" },
        { id: "bc", d: "M 640 550 V 420" },
        { id: "br", d: "M 930 550 V 400 H 700" },
    ];

    return (
        <section className="bg-black py-24 px-6 text-white min-h-screen font-sans">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className=" px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium">
                        Working Process
                    </span>
                </div>
                <h2 className="title_text mb-4">
                    Smarter Design, <span className="italic">Supercharged By AI</span>
                </h2>
                <p className="para_text">
                    From wireframes to launch, we blend AI tools with strategy to deliver faster, sharper, and data-led design results.
                </p>
            </div>

            <div className="max-w-7xl mx-auto relative h-[850px]">
                {/* Animated Connectors Layer */}
                <svg
                    viewBox="0 0 1280 800"
                    className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
                >
                    {paths.map((path, idx) => (
                        <React.Fragment key={path.id}>
                            {/* Connection Node */}
                            <circle
                                cx={path.id.includes('l') ? 350 : path.id.includes('r') ? 930 : 640}
                                cy={400}
                                r="3"
                                fill="#ff0000"
                                opacity="0.5"
                            />
                            {/* Static Path */}
                            <path
                                d={path.d}
                                stroke="#ff0000"
                                strokeWidth="1.5"
                                fill="none"
                                opacity="0.2"
                            />
                            {/* Moving Dot */}
                            <circle r="3" fill="#ff4d4d">
                                <animateMotion
                                    dur={`${3 + idx * 0.5}s`}
                                    repeatCount="indefinite"
                                    path={path.d}
                                />
                            </circle>
                            {/* Glowing Aura */}
                            <circle r="6" fill="#ff4d4d" opacity="0.15">
                                <animateMotion
                                    dur={`${3 + idx * 0.5}s`}
                                    repeatCount="indefinite"
                                    path={path.d}
                                />
                            </circle>
                        </React.Fragment>
                    ))}
                </svg>

                {/* Central Hub Icon */}
                <div className="hidden lg:flex absolute top-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/30 blur-2xl rounded-full scale-150 animate-pulse" />
                        <div className="w-20 h-20 bg-gradient-to-b from-red-400 to-red-700 rounded-full flex items-center justify-center border border-white/20 shadow-2xl relative z-10">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                                <div className="w-6 h-4 bg-red-600 rounded-full relative">
                                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The 2x3 Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-40 relative z-10">
                    {features.map((f, i) => (
                        <ProcessCard key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessCard = ({ title, desc }) => (
    <div className="bg-black border border-white/10 p-6 rounded-[32px] hover:border-red-500/40 transition-all duration-500 flex flex-col h-[320px]">
        <h3 className="text-xl font-semibold mb-2">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic font-serif font-light">{title.split(" ").pop()}</span>
        </h3>
        <p className="text-white/70 text-xs leading-relaxed mb-6">{desc}</p>

        {/* Inner Card Visual */}
        <div className="mt-auto bg-black/80 rounded-2xl border border-white/5 h-32 w-full overflow-hidden p-4">
            <div className="w-full h-full opacity-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-lg border border-dashed border-white/20" />
        </div>
    </div>
);

const features = [
    { title: "UX Copy That Clicks", desc: "We use AI to create effective copies like CTAs and microcopy that speaks." },
    { title: "Visuals, Instantly On Point", desc: "We generate custom visuals using AI for faster concept directions, brand-ready." },
    { title: "Data-Led Design Decisions", desc: "We predict user behavior before launch with AI-powered heatmaps that help us." },
    { title: "Smarter & Faster Wireframes", desc: "We rapidly turn ideas into functional wireframes using AI tools, with less." },
    { title: "Launch Quicker, Spend Less", desc: "AI reduces revisions and guesswork and makes your website ready to launch." },
    { title: "No Blank Canvas Struggles", desc: "AI generates editable mockups from prompts so we can skip the slow start." },
];

export default WorkingProcess;
