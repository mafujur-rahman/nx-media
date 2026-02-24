"use client";

import React from "react";

const steps = [
  "Discovery",
  "Strategy",
  "Design",
  "Development",
  "Launch",
];

export default function HowWeBegan() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* ===== OVERVIEW ===== */}
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <h3 className="text-2xl text-white/50">
              How We Began <br />
              <span className="text-white">
                An Accelerated Discovery
              </span>
            </h3>
          </div>

          <div className="md:col-span-9">
            <p className="text-white/60 text-2xl leading-relaxed max-w-4xl">
              Our challenge was to create an experience that simplified data,
              enabling both technical and non-technical executives to communicate
              more effectively. This breakthrough technology paved the way for
              organizations and start-ups to build safer, more reliable products.
            </p>
          </div>
        </div>

        {/* ===== WORKING PROCESS ===== */}
        <div className="relative mt-16">
          <div className="relative">

            {/* Static Gray Line */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t border-dotted border-white/20" />

            {/* Steps */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="px-12 py-5 rounded-full bg-white/5 text-white text-lg font-medium tracking-wide backdrop-blur-md">
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