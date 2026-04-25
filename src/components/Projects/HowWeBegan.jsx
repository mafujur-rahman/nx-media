// app/project/[slug]/components/HowWeBegan.js
"use client";

import React from "react";

export default function HowWeBegan({ project }) {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-10">
                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/50">
                            How We Began <br />
                            <span className="text-white">
                                {project?.howWeBegan?.title}
                            </span>
                        </h3>
                    </div>

                    <div className="md:col-span-9">
                        <p className="text-white/60 text-2xl leading-relaxed max-w-4xl">
                            {project?.howWeBegan?.description}
                        </p>
                    </div>
                </div>

                <div className="relative mt-16">
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t border-dotted border-white/20" />

                        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
                            {project?.howWeBegan?.process?.map((step, index) => (
                                <div
                                    key={index}
                                    className="px-12 py-5 rounded-full bg-white/5 text-white text-lg font-medium tracking-wide backdrop-blur-md"
                                >
                                    {step}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}