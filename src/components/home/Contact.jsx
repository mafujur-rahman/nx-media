"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Phone } from "lucide-react";
import HoverSweepButton from "../utils/HoverSweepButton";
import { HiArrowRight } from "react-icons/hi";

export default function Contact() {
    const [activeBudget, setActiveBudget] = useState(null);

    const budgets = [
        "Less than $500",
        "$1K - $2K",
        "$2K - $5K",
        "More than $5K",
        "Other"
    ];

    return (
        <section className="bg-black py-24 px-4">
            <div className="max-w-7xl mx-auto rounded-[30px] overflow-hidden bg-black border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-10 lg:p-16">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-between">

                        <div>
                            <span className="inline-block mb-6 px-6 py-2 rounded-full border border-dashed border-red-500/80 bg-black/50 text-xs md:text-sm font-medium text-white">
                                Claim a $799 Consultation, on Us!
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold font-bricolage text-white leading-tight">
                                Enhance Your Brand <br />
                                Potential <span className="italic text-red-500">At No Cost!</span>
                            </h2>

                            <ul className="mt-8 space-y-4">
                                {[
                                    "Expect a response from us within 24 hours",
                                    "We're happy to sign an NDA upon request",
                                    "Get access to a team of dedicated specialists",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80">
                                        <Check className="text-red-500 mt-1" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PROFILE CARD */}
                        <div className="mt-12  max-w-lg">

                            {/* Avatar */}
                            <div className="w-44 h-44 rounded-xl overflow-hidden mb-5">
                                <Image
                                    src="/person.jpg"
                                    alt="Profile"
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Info */}
                            <div className="space-y-1 mb-4">
                                <p className="text-white font-semibold text-lg leading-tight">
                                    Abdullah Al Noman
                                </p>
                                <p className="text-white/60 text-sm">
                                    CEO &amp; Co-Founder
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-2 text-red-500 text-sm mb-4">
                                <Phone size={14} />
                                <span className="tracking-wide">+1 (716) 503-6335</span>
                            </div>

                            {/* CTA */}
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-full border border-red-500/40 px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 transition w-fit"
                            >
                                Book a Call Directly
                            </a>
                        </div>

                    </div>

                    {/* RIGHT FORM */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <form className="space-y-6">

                            {/* FULL NAME */}
                            <div>
                                <label className="block text-white mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500"
                                />
                            </div>

                            {/* EMAIL + WHATSAPP */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="yourmail@gmail.com"
                                        className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white mb-2">Whatsapp Number</label>
                                    <input
                                        type="text"
                                        placeholder="1123 1234567"
                                        className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500"
                                    />
                                </div>
                            </div>

                            {/* BUDGET */}
                            <div>
                                <label className="block text-white mb-3">Project Budget</label>
                                <div className="flex flex-wrap gap-3">
                                    {budgets.map((budget, i) => {
                                        const isActive = activeBudget === budget;

                                        return (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setActiveBudget(budget)}
                                                className={`
                                                    px-4 py-2 rounded-full text-sm transition
                                                    ${isActive
                                                        ? "bg-red-600 text-white border border-red-600"
                                                        : "border border-white/20 text-white/70 hover:border-red-500 hover:text-red-400"
                                                    }
                                                `}
                                            >
                                                {budget}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* DETAILS */}
                            <div>
                                <label className="block text-white mb-2">Project Details</label>
                                <textarea
                                    rows={4}
                                    placeholder="I want to redesign my website..."
                                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500"
                                />
                            </div>



                            <HoverSweepButton
                                type="submit"
                                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-medium bg-red-600 w-auto"
                                icon={<HiArrowRight size={20} />}
                            >
                                Let’s Connect
                            </HoverSweepButton>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
