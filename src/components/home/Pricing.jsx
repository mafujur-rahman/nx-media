"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import HoverSweepButton from "../utils/HoverSweepButton";

const Pricing = () => {
    const cardsRef = useRef([]);
    const [activeTab, setActiveTab] = useState("branding");

    const brandingPlans = [
        {
            title: "BASIC BRANDING",
            desc: "Establish a strong visual identity for your business with foundational branding elements.",
            price: "200",
            features: ["Logo Design", "Color Palette", "Typography Setup"],
            buttonText: "Get Started",
        },
        {
            title: "STANDARD BRANDING",
            desc: "Comprehensive branding package for consistent and professional visual communication.",
            price: "500",
            features: ["Logo & Icon Set", "Brand Guidelines", "Stationery Design", "Social Media Kit"],
            buttonText: "Get Started",
        },
        {
            title: "PREMIUM BRANDING",
            desc: "End-to-end branding experience for businesses seeking maximum impact and identity strength.",
            price: "1000",
            features: [
                "Full Brand Strategy",
                "Logo & Iconography",
                "Stationery + Packaging Design",
                "Social Media Kit",
                "Brand Guidelines Document",
            ],
            buttonText: "Contact Us",
        },
    ];

    const webPlans = [
        {
            title: "BASIC WEBSITE",
            desc: "A simple, responsive website to establish your online presence quickly and efficiently.",
            price: "500",
            features: ["3 Pages", "Responsive Design", "Basic SEO Setup"],
            buttonText: "Get Started",
        },
        {
            title: "STANDARD WEBSITE",
            desc: "A complete website with modern features and SEO to grow your business online.",
            price: "1000",
            features: ["5 Pages", "Responsive Design", "SEO Optimized", "CMS Integration", "Basic Analytics"],
            buttonText: "Get Started",
        },
        {
            title: "PREMIUM WEBSITE",
            desc: "Custom web development solution with advanced functionality and scalable architecture.",
            price: "2500",
            features: ["10+ Pages", "Custom Features", "CMS Integration", "SEO & Analytics", "E-commerce Ready"],
            buttonText: "Contact Us",
        },
    ];

    const plans = activeTab === "branding" ? brandingPlans : webPlans;

    // Set all cards to the same height
    useEffect(() => {
        const cards = cardsRef.current;
        if (!cards.length) return;

        const tallestHeight = Math.max(...cards.map((card) => card.offsetHeight));
        cards.forEach((card) => {
            card.style.height = `${tallestHeight}px`;
        });
    }, [activeTab]);

    return (
        <section className="bg-black py-20 px-4 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-7xl">

                {/* Header */}
                <div className="flex flex-col justify-center items-center w-full mb-12">
                    <p className="px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-white text-xs md:text-sm font-medium w-fit text-center mb-2">
                        Choose the perfect plan for your business
                    </p>
                    <h2 className="title_text text-white mt-4 mb-2">
                        Pricing
                    </h2>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mt-2 w-full max-w-md">
                        {["branding", "web"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative py-2 rounded-full font-semibold flex-1 overflow-hidden transition-none`}
                            >
                                {/* Active tab red background */}
                                <span
                                    className={`absolute inset-0 bg-red-600 transition-all duration-500 ease-in-out ${activeTab === tab ? "translate-y-0" : "translate-y-full"}`}
                                    style={{ zIndex: 0 }}
                                />

                                {/* Tab text */}
                                <span
                                    className={`relative z-10 ${activeTab === tab ? "text-white" : "text-black"}`}
                                >
                                    {tab === "branding" ? "Branding" : "Web Development"}
                                </span>

                                {/* Inactive tab white background */}
                                {activeTab !== tab && (
                                    <span className="absolute inset-0 bg-white rounded-full z-0"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="rounded-[30px] p-8 flex flex-col border border-dashed border-red-500/90 bg-gradient-to-br from-black via-red-900/20 to-black shadow-lg"
                        >
                            <h3 className="text-md font-bold tracking-widest mb-4 uppercase text-red-500">
                                {plan.title}
                            </h3>

                            <p className="text-sm text-white mb-8 leading-snug">
                                {plan.desc}
                            </p>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                                    <span className="text-sm text-red-500 ml-2 italic">per project</span>
                                </div>
                            </div>

                            <HoverSweepButton
                                className="w-full py-4 px-6 flex justify-between items-center rounded-full font-bold mb-10 bg-red-600 shadow-md cursor-pointer text-white"
                                icon={<ArrowRight size={18} />}
                            >
                                <span className="text-sm font-semibold">{plan.buttonText}</span>
                            </HoverSweepButton>

                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                                        <Check size={16} className="text-red-500 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
