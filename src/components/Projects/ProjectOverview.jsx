// app/project/[slug]/components/ProjectOverview.js
"use client";

import React from "react";

export default function ProjectOverview({ project }) {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-10">
                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/90">Overview</h3>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-white/60 text-2xl leading-relaxed max-w-4xl">
                            {project.overview}
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 my-20"></div>

                <div className="grid md:grid-cols-12 gap-10">
                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/90">Duration</h3>
                    </div>
                    <div className="md:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-5xl font-medium text-white/80">{project.duration.discovery}</h4>
                            <p className="mt-4 text-white/50">Accelerated Discovery</p>
                        </div>
                        <div>
                            <h4 className="text-5xl font-medium text-white/80">{project.duration.design}</h4>
                            <p className="mt-4 text-white/50">Design Execution</p>
                        </div>
                        <div>
                            <h4 className="text-5xl font-medium text-white/80">{project.duration.support}</h4>
                            <p className="mt-4 text-white/50">Development Support</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 my-20"></div>

                <div className="grid md:grid-cols-12 gap-10">
                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/90">Success</h3>
                    </div>
                    <div className="md:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-5xl font-medium text-white/80">{project.success.milestone1}</h4>
                            <p className="mt-4 text-white/50">Validated Product Strategy</p>
                        </div>
                        <div>
                            <h4 className="text-5xl font-medium text-white/80">{project.success.milestone2}</h4>
                            <p className="mt-4 text-white/50">Operational Rollout</p>
                        </div>
                        <div>
                            <h4 className="text-5xl font-medium text-white/80">{project.success.milestone3}</h4>
                            <p className="mt-4 text-white/50">Enterprise Clients Secured</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 my-20"></div>

                <div className="grid md:grid-cols-12 gap-10">
                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/90">From Client</h3>
                    </div>
                    <div className="md:col-span-9">
                        <blockquote className="text-white/70 text-2xl leading-relaxed max-w-4xl">
                            “{project.clientQuote.text}”
                        </blockquote>
                        <p className="mt-6 text-base text-white/40">
                            — {project.clientQuote.author}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}