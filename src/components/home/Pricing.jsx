"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import HoverSweepButton from "../utils/HoverSweepButton";

const Pricing = () => {
    const cardsRef = useRef([]);
    const [activeTab, setActiveTab] = useState("branding");

const brandingPlans = [
    {
        title: "ESSENTIAL IDENTITY",
        desc: "A focused brand foundation that gives you everything needed to show up professionally. Perfect for startups and early-stage companies who want to get it right from day one.",
        price: "200",
        features: [
            "Logo Design & Variations", 
            "Color Palette Selection", 
            "Typography System", 
            "Basic Brand Guidelines"
        ],
        buttonText: "Get Started",
    },
    {
        title: "COMPREHENSIVE BRAND",
        desc: "A complete visual identity system that ensures consistency across every touchpoint. Built for growing brands ready to scale without losing their look.",
        price: "500",
        features: [
            "Complete Logo System & Icons", 
            "Full Color & Typography Palette", 
            "Brand Guidelines Document", 
            "Stationery Suite", 
            "Social Media Kit", 
            "Brand Touchpoint Templates"
        ],
        buttonText: "Get Started",
    },
    {
        title: "PREMIUM BRAND + PACKAGING",
        desc: "An end-to-end brand experience that includes both identity and packaging. Built for e-commerce businesses and product-led brands ready for shelf or doorstep.",
        price: "1,000",
        features: [
            "Full Brand Strategy Workshop",
            "Complete Visual Identity System",
            "Detailed Brand Guidelines",
            "Packaging Structure & Format Selection",
            "Graphic Design for Packaging",
            "Dieline Development & Print Files",
            "Vendor Coordination Support",
            "Brand Rollout Assets"
        ],
        buttonText: "Contact Us",
    },
];

const webPlans = [
    {
        title: "ESSENTIAL WEBSITE",
        desc: "A clean, responsive website that tells your story and converts visitors. Perfect for service businesses, startups, and companies needing a professional home base.",
        price: "200",
        features: [
            "Up to 5 Custom Pages", 
            "Mobile Responsive Design", 
            "Basic SEO Setup", 
            "Contact Forms", 
            "Analytics Integration"
        ],
        buttonText: "Get Started",
    },
    {
        title: "COMPREHENSIVE WEBSITE",
        desc: "A feature-rich website built to scale. Includes CMS integration so you stay in control, plus optimization for search and performance.",
        price: "500",
        features: [
            "Up to 10 Custom Pages", 
            "CMS Implementation", 
            "Advanced SEO Foundations", 
            "Performance Optimization", 
            "Custom Functionality", 
            "E-commerce Readiness", 
            "Analytics & Tracking Setup"
        ],
        buttonText: "Get Started",
    },
    {
        title: "PREMIUM WEB EXPERIENCE",
        desc: "A completely custom web solution designed and built for your specific needs. Complex functionality, scalability, and long-term partnership included.",
        price: "1,000",
        features: [
            "Unlimited Custom Pages",
            "Advanced Custom Features",
            "E-commerce or Membership Functionality",
            "Custom Integrations (CRM, ERP, etc.)",
            "Enterprise-Grade Security",
            "Load Balancing & Scalability Planning",
            "Ongoing Technical Support",
            "Performance Monitoring"
        ],
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

                {/* ================= BONUS SECTION ================= */}
                <div className="mt-20 relative rounded-[30px] p-[2px] overflow-hidden">

                    {/* 🔴 Smooth Spinning Red Border */}
                    <div className="absolute inset-0 rounded-[30px] animate-spin-slow
      bg-[conic-gradient(from_0deg,transparent,rgba(255,0,0,0.9),transparent)] 
      blur-[3px] opacity-80 pointer-events-none" />

                    {/* Inner Container */}
                    <div className="relative rounded-[28px] p-8 md:p-12 
      bg-gradient-to-br from-zinc-900 via-black to-zinc-900 
      border border-white/10">

                        {/* Decorative Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] -z-10" />

                        {/* Heading */}
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-bricolage">
                                Bonuses Worth Over <br />
                                <span className="text-red-600">$2,500</span>—Yours Free!
                            </h3>
                        </div>

                        {/* Bonus Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Free Design Prototype",
                                    desc: "Experience your design in action before development.",
                                    icon: (
                                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Developer Handoff",
                                    desc: "We ensure what we design is exactly what gets built.",
                                    icon: (
                                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Project Management",
                                    desc: "Stay on track with our expert project management.",
                                    icon: (
                                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Project Consultation",
                                    desc: "Get professional advice to enhance your project.",
                                    icon: (
                                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    )
                                }
                            ].map((bonus, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-3xl border border-white/5 bg-white/5 
                     hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="mb-4">{bonus.icon}</div>
                                    <h4 className="text-white font-bold text-lg mb-2">{bonus.title}</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{bonus.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Pricing;
