"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
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
        <section id="contact" className="bg-black pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0">
            <div className="max-w-7xl mx-auto rounded-[30px] overflow-hidden bg-black border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 p-6 sm:p-8 xl:p-16">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-between">

                        <div>
                            <span className="inline-block mb-4 px-4 py-1 sm:px-6 sm:py-2 rounded-full border border-dashed border-red-500/80 bg-black/50 text-xs sm:text-sm font-medium text-white">
                                First conversation is on us
                            </span>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-bricolage text-white leading-tight">
                                Let’s talk about what
                                you’re building
                            </h2>

                            <p className="mt-4 sm:mt-6 text-white/70 text-base sm:text-lg max-w-full sm:max-w-md">
                                No pitch. No pressure. Just a real conversation about your brand and where you want to take it.
                            </p>

                            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                                {[
                                    "You'll hear back from us within 24 hours",
                                    "Happy to sign an NDA if you need one",
                                    "Direct access to the team building your brand",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-white/80">
                                        <svg className="text-white/60 mt-1 w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PROFILE CARD */}
                        <div className="mt-8 sm:mt-12 max-w-full  lg:max-w-lg">
                            <div className="flex flex-col lg:flex-col sm:flex-row  items-center lg:items-start gap-4 sm:gap-8 lg:gap-4">

                                {/* Avatar */}
                                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src="/images/team/nazmul-islam.png"
                                        alt="Profile"
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Info + Phone + CTA */}
                                <div className="flex-1 flex flex-col items-center sm:items-start lg:items-start text-center lg:text-left gap-2">

                                    {/* Info */}
                                    <div className="space-y-1">
                                        <p className="text-white font-semibold text-lg sm:text-xl leading-tight">
                                            Nazmul Islam
                                        </p>
                                        <p className="text-white/60 text-sm sm:text-base">
                                            Founder &amp; CEO
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href="https://wa.me/8801710636221"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-red-500/40 px-4 py-2 text-sm sm:text-base text-red-500 hover:bg-red-500/10 transition w-fit"
                                    >
                                        Book a Call Directly
                                    </a>


                                </div>
                            </div>
                        </div>


                    </div>

                    {/* RIGHT FORM */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-8">
                        <form className="space-y-4 sm:space-y-6">

                            {/* FULL NAME */}
                            <div>
                                <label className="block text-white text-sm sm:text-base mb-1 sm:mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-black border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 text-sm sm:text-base"
                                />
                            </div>

                            {/* EMAIL + WHATSAPP */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label className="block text-white text-sm sm:text-base mb-1 sm:mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="yourmail@gmail.com"
                                        className="w-full bg-black border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 text-sm sm:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white text-sm sm:text-base mb-1 sm:mb-2">Whatsapp Number</label>
                                    <input
                                        type="text"
                                        placeholder="1123 1234567"
                                        className="w-full bg-black border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 text-sm sm:text-base"
                                    />
                                </div>
                            </div>

                            {/* BUDGET */}
                            <div>
                                <label className="block text-white text-sm sm:text-base mb-2 sm:mb-3">Project Budget</label>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {budgets.map((budget, i) => {
                                        const isActive = activeBudget === budget;

                                        return (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setActiveBudget(budget)}
                                                className={`
                                                    px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-base transition
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
                                <label className="block text-white text-sm sm:text-base mb-1 sm:mb-2">
                                    Project Details
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="I want to redesign my website..."
                                    className="w-full bg-black border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 text-sm sm:text-base resize-none"
                                />
                            </div>


                            <HoverSweepButton
                                type="submit"
                                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-white rounded-full font-medium bg-red-600 w-auto text-sm sm:text-base"
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
