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
        <section className="bg-black pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0 text-white min-h-screen ">
            {/* Header Section */}
            <div className="text-center max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
                {/* Badge */}
                <div className="flex justify-center mb-4 md:mb-6">
                    <span className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium">
                        Working Process
                    </span>
                </div>
                <h2 className="title_text">
                    We have a process. You’ll barely notice it—until you see the results.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
                    No complicated jargon. No unnecessary steps. Just a clear path from where you are to where you want to be.
                </p>
            </div>

            <div className="max-w-7xl mx-auto relative lg:h-[850px]">
                {/* Animated Connectors Layer - Hidden on mobile/tablet */}
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

                {/* Central Hub Icon - Hidden on mobile/tablet */}
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

                {/* Mobile/Tablet Process Indicator */}
                <div className="lg:hidden flex justify-center mb-12">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full scale-150 animate-pulse" />
                        <div className="w-16 h-16 bg-gradient-to-b from-red-400 to-red-700 rounded-full flex items-center justify-center border border-white/20 shadow-2xl relative z-10">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <div className="w-4 h-3 bg-red-600 rounded-full relative">
                                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The 2x3 Grid of Cards - Responsive grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-x-10 lg:gap-y-40 relative z-10">
                    {processSteps.map((f, i) => (
                        <ProcessCard key={i} {...f} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessCard = ({ title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="bg-black border border-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-[32px] hover:border-red-500/40 transition-all duration-500 flex flex-col h-auto sm:h-[320px] group"
    >
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic font-serif font-light">{title.split(" ").pop()}</span>
        </h3>
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{desc}</p>

        {/* Inner Card Visual */}
        <div className="mt-4 sm:mt-auto bg-black/80 rounded-xl sm:rounded-2xl border border-white/5 h-24 sm:h-32 w-full overflow-hidden p-3 sm:p-4 group-hover:border-red-500/20 transition-colors duration-500">
            <div className="w-full h-full opacity-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-lg border border-dashed border-white/20 group-hover:opacity-30 transition-opacity duration-500" />
        </div>
    </motion.div>
);

const processSteps = [
    {
        title: "We listen first. Like, really listen.",
        desc: "No assumptions. No jumping to solutions. We start by understanding your business, your customers, and where you're actually headed."
    },
    {
        title: "Strategy before pixels",
        desc: "We figure out what will actually work before we design anything. Positioning, messaging, direction—all locked in before we open Figma."
    },
    {
        title: "Design with intention",
        desc: "Then we design. Explorations, refinements, decisions. You'll see the thinking, not just the pretty pictures."
    },
    {
        title: "You stay in the loop",
        desc: "No going dark for weeks. Regular check-ins, honest feedback, and zero surprises. You'll always know exactly where things stand."
    },
    {
        title: "We build what we designed",
        desc: "No handoffs to strangers. The same people who designed it build it—whether that's files for print or fully functional websites."
    },
    {
        title: "Launch. Then we stick around.",
        desc: "We don't disappear after launch. We make sure everything lands right, answer questions, and stay in your corner for what's next."
    },
];

export default WorkingProcess;