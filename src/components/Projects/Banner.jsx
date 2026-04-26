"use client";

import React from "react";

export default function Banner({ project }) {
    if (!project) {
        return null; // prevents prerender crash
    }

    return (
        <section className="relative w-full mt-40  lg:mt-20 xl:mt-10  lg:h-[60vh] flex flex-col justify-center lg:justify-end bg-black">
            {/* Content */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20">
                <div className="max-w-7xl mx-auto">

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3 text-white/90">
                            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                                <span className="text-sm">⟲</span>
                            </div>
                            <span className="text-lg font-medium tracking-wide">
                                {project.brand}
                            </span>
                        </div>

                        <span className="text-white/70 text-lg font-light">
                            {project.year}
                        </span>
                    </div>

                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                        {project.title}
                    </h1>

                    <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
                        {project.description}
                    </p>

                    {/* SAFE TAGS */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        {(project.tags || []).map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-5 py-2 rounded-full border border-white/30 text-white/80 text-sm tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}