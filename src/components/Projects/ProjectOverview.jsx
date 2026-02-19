"use client";

import React from "react";

export default function ProjectOverview() {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* ================= OVERVIEW ================= */}
                <div className="grid md:grid-cols-12 gap-10">

                    {/* Left Title */}
                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/90">Overview</h3>
                    </div>

                    {/* Right Content */}
                    <div className="md:col-span-9">
                        <p className="text-white/60 text-2xl leading-relaxed max-w-4xl">
                            We were brought in during the early days of Triplekey to take a great
                            technology and turn it into a product that allowed transparency for risks,
                            IP ownership and team performance within software development for
                            executives to have a clear picture of their software. Making complex data,
                            intuitive.
                        </p>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-20"></div>

                {/* ================= DURATION ================= */}
                <div className="grid md:grid-cols-12 gap-10">

                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/90">Duration</h3>
                    </div>

                    <div className="md:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

                        <div>
                            <h4 className="text-5xl font-medium text-white/80">6 Weeks</h4>
                            <p className="mt-4 text-white/50">Accelerated Discovery</p>
                        </div>

                        <div>
                            <h4 className="text-5xl font-medium text-white/80">3 Months</h4>
                            <p className="mt-4 text-white/50">Design Execution</p>
                        </div>

                        <div>
                            <h4 className="text-5xl font-medium text-white/80">2 Months</h4>
                            <p className="mt-4 text-white/50">Development Support</p>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-20"></div>

                {/* ================= SUCCESS ================= */}
                <div className="grid md:grid-cols-12 gap-10">

                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/90">Success</h3>
                    </div>

                    <div className="md:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

                        <div>
                            <h4 className="text-5xl font-medium text-white/80">Pre-Launch</h4>
                            <p className="mt-4 text-white/50">Validated Product Strategy</p>
                        </div>

                        <div>
                            <h4 className="text-5xl font-medium text-white/80">6 Mo.</h4>
                            <p className="mt-4 text-white/50">Operational Rollout</p>
                        </div>

                        <div>
                            <h4 className="text-5xl font-medium text-white/80">XX</h4>
                            <p className="mt-4 text-white/50">Enterprise Clients Secured</p>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-20"></div>

                {/* ================= FROM CLIENT ================= */}
                <div className="grid md:grid-cols-12 gap-10">

                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/90">From Client</h3>
                    </div>

                    <div className="md:col-span-9">
                        <blockquote className="text-white/70 text-2xl leading-relaxed max-w-4xl">
                            “The team translated highly complex technical data into a product
                            executives could actually understand. Their strategic thinking and
                            design execution were instrumental in bringing Triplekey to life.”
                        </blockquote>

                        <p className="mt-6 text-base text-white/40">
                            — CEO, The NX Media
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
