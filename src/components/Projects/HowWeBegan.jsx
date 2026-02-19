"use client";

import React from "react";

export default function HowWeBegan() {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* ================= OVERVIEW ================= */}
                <div className="grid md:grid-cols-12 gap-10">

                    {/* Left Title */}
                    <div className="md:col-span-3">
                        <h3 className="text-2xl text-white/50">How We Began <br />
                        <span className="text-white">An Accelerated Discobery</span></h3>

                    </div>

                    {/* Right Content */}
                    <div className="md:col-span-9">
                        <p className="text-white/60 text-2xl leading-relaxed max-w-4xl">
                           Our challenge was to create an experience that simplified data, enabling both technical and non-technical executives to communicate more effectively. This breakthrough technology paved the way for organizations and start-ups to build safer, more reliable products.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
