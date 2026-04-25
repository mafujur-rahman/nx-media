"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import HoverSweepButton from "../utils/HoverSweepButton";
import gsap from 'gsap';

const Pricing = () => {
    const cardsRef = useRef([]);
    const [activeTab, setActiveTab] = useState("branding");
    const rotatingBorderRef = useRef(null);
    const containerRef = useRef(null);

    const brandingPlans = [
        {
            title: "ESSENTIAL IDENTITY",
            desc: "A focused brand foundation that gives you everything needed to show up professionally. Perfect for startups and early-stage companies who want to get it right from day one.",
            price: "99",
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
            price: "299",
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
            price: "399",
            features: [
                "Full Brand Strategy Workshop",
                "Complete Visual Identity System",
                "Detailed Brand Guidelines",
                "Packaging Structure & Format Selection",
                "Graphic Design for Packaging",
                "Dieline Development & Print Files",
                "Vendor Coordination Support",
                "Brand Rollout Assets",
                "Custom Design"
            ],
            buttonText: "Get Started",
        },
    ];

    const webPlans = [
        {
            title: "ESSENTIAL WEBSITE",
            desc: "A clean, responsive website that tells your story and converts visitors. Perfect for service businesses, startups, and companies needing a professional home base.",
            price: "99",
            features: [
                "Landing Page",
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
            price: "299",
            features: [
                "5 to 10 Custom Pages",
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
            price: "499",
            features: [
                "Unlimited Custom Pages",
                "Advanced Custom Features",
                "E-commerce or Membership Functionality",
                "WordPress Development",
                "API Integrations",
                "Custom Integrations (CRM, ERP, etc.)",
                "Load Balancing & Scalability Planning",
                "Ongoing Technical Support",
                "Performance Monitoring",
                "Hosting & Domain Setup",
            ],
            buttonText: "Get Started",
        },
    ];

    const plans = activeTab === "branding" ? brandingPlans : webPlans;

    // Initialize the rotating border animation for Monthly Retainer section
    useEffect(() => {
        if (!rotatingBorderRef.current || !containerRef.current) return;

        // Function to update the SVG path dimensions
        const updatePathDimensions = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const radius = 30; // Matching the rounded-[30px] class

            // Create a path for rounded rectangle
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const actualRadius = Math.min(radius, height / 2, width / 2);

            // Path for rounded rectangle
            const d = `
                M ${actualRadius},0
                L ${width - actualRadius},0
                A ${actualRadius},${actualRadius} 0 0,1 ${width},${actualRadius}
                L ${width},${height - actualRadius}
                A ${actualRadius},${actualRadius} 0 0,1 ${width - actualRadius},${height}
                L ${actualRadius},${height}
                A ${actualRadius},${actualRadius} 0 0,1 0,${height - actualRadius}
                L 0,${actualRadius}
                A ${actualRadius},${actualRadius} 0 0,1 ${actualRadius},0
                Z
            `;

            rotatingBorderRef.current.setAttribute("d", d);

            // Get the total length of the path
            const length = rotatingBorderRef.current.getTotalLength();

            // Fixed dash length - visible line segment
            const dashLength = 120;

            // Set up dasharray with a fixed visible dash length
            gsap.set(rotatingBorderRef.current, {
                strokeDasharray: `${dashLength} ${length - dashLength}`,
                strokeDashoffset: 0,
            });

            // Kill any existing animation
            if (rotatingBorderRef.current.animation) {
                rotatingBorderRef.current.animation.kill();
            }

            // Create smooth continuous rotation animation
            const animation = gsap.to(rotatingBorderRef.current, {
                strokeDashoffset: -length,
                duration: 8,
                repeat: -1,
                ease: "none",
            });

            // Store animation reference
            rotatingBorderRef.current.animation = animation;

            // Add a subtle pulse to the gradient opacity
            gsap.to(rotatingBorderRef.current, {
                opacity: 0.6,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        };

        // Initial update
        updatePathDimensions();

        // Update on resize
        const resizeObserver = new ResizeObserver(() => {
            updatePathDimensions();
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
            if (rotatingBorderRef.current?.animation) {
                rotatingBorderRef.current.animation.kill();
            }
        };
    }, []);

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
        <section id="pricing" className="bg-black pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0 min-h-screen flex justify-center items-center">
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
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="rounded-[30px] p-5 lg:p-8 flex flex-col border border-dashed border-red-500/90 bg-gradient-to-br from-black via-red-900/20 to-black shadow-lg h-full"
                        >
                            <h3 className="text-md font-bold tracking-widest mb-4 uppercase text-red-500">
                                {plan.title}
                            </h3>

                            {/* Fixed height description - adjust h-24 based on your needs */}
                            <div className="mb-8 h-24">
                                <p className="text-sm text-white leading-snug line-clamp-4">
                                    {plan.desc}
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                                    <span className="text-sm text-red-500 ml-2 italic">per project</span>
                                </div>
                            </div>

                            {/* Fixed button wrapper - removed mb-10 that was pushing buttons unevenly */}
                            <div className="w-full mb-10">
                                <HoverSweepButton
                                    className="w-full py-4 px-6 flex justify-between items-center rounded-full font-bold bg-red-600 shadow-md cursor-pointer text-white"
                                    icon={<ArrowRight size={18} />}
                                >
                                    <span className="text-sm md:text-[12px] lg:text-sm font-semibold">{plan.buttonText}</span>
                                </HoverSweepButton>
                            </div>

                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                                        <Check size={16} className="text-red-500 mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ================= MONTHLY RETAINER SECTION ================= */}
                <div className="mt-14 lg:mt-24 relative rounded-[30px]">
                    {/* Rotating Gradient Border - Red Theme for Monthly Retainer */}
                    <div ref={containerRef} className="relative rounded-[30px] p-[2px]">
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{
                                overflow: 'visible',
                                position: 'absolute',
                                top: '-2px',
                                left: '-2px',
                                width: 'calc(100% + 4px)',
                                height: 'calc(100% + 4px)'
                            }}
                        >
                            <defs>
                                <linearGradient id="rotatingGradientRedRetainer" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ff0000" stopOpacity="1" />
                                    <stop offset="25%" stopColor="#ff4444" stopOpacity="1" />
                                    <stop offset="50%" stopColor="#cc0000" stopOpacity="1" />
                                    <stop offset="75%" stopColor="#ff3333" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#ff0000" stopOpacity="1" />
                                </linearGradient>
                                {/* Glow/blur layer */}
                                <filter id="glowRedRetainer" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <path
                                ref={rotatingBorderRef}
                                fill="none"
                                stroke="url(#rotatingGradientRedRetainer)"
                                strokeWidth="3"
                                vectorEffect="non-scaling-stroke"
                                style={{ filter: 'url(#glowRedRetainer)' }}
                            />
                        </svg>

                        {/* Inner Container */}
                        <div className="relative rounded-[28px] px-2.5 md:px-12 py-12 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-white/10">
                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[120px] -z-10" />

                            {/* Header */}
                            <div className="text-center mb-14">
                                <h3 className="text-3xl md:text-5xl font-bold text-white font-bricolage leading-tight">
                                    Monthly Partnership <br />
                                    <span className="text-red-600">For Long-Term Growth</span>
                                </h3>
                                <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-base">
                                    A dedicated design & development team working with you every month —
                                    predictable pricing, priority support, and consistent execution.
                                </p>
                            </div>

                            {/* Content */}
                            <div className="grid lg:grid-cols-2 gap-5 md:gap-8 lg:gap-12 max-w-6xl mx-auto">

                                {/* LEFT — Pricing Card */}
                                <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-2.5 sm:p-8 lg:p-10 flex flex-col justify-between">

                                    <div>
                                        <h4 className="text-white text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                                            Growth Retainer Plan
                                        </h4>

                                        <div className="flex items-end gap-2 sm:gap-3 mb-4 sm:mb-6">
                                            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                                $599
                                            </span>
                                            <span className="text-zinc-400 mb-1 sm:mb-2 text-xs sm:text-sm">
                                                / month
                                            </span>
                                        </div>

                                        <div className="h-px w-full bg-white/10 my-4 sm:my-6" />

                                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                                            Ideal for startups and scaling brands that require ongoing
                                            UI/UX design, website updates, and development improvements.
                                        </p>
                                    </div>

                                    <div className="mt-8 sm:mt-10">
                                        <HoverSweepButton
                                            onClick={() => window.open("https://wa.me/8801710636221", "_blank")}
                                            className="w-full py-3 sm:py-4 px-5 sm:px-6 flex justify-between items-center cursor-pointer rounded-full font-semibold bg-red-600 shadow-lg hover:shadow-red-600/30 transition-all duration-300 text-white"
                                            icon={<ArrowRight size={18} className="hidden md:block" />}
                                        >
                                            <span className="text-sm font-bold tracking-wide w-full text-center md:text-left">
                                                Book Monthly Partnership
                                            </span>
                                        </HoverSweepButton>

                                        <p className="text-center text-xs text-zinc-500 mt-3 sm:mt-4">
                                            Cancel anytime • No long-term contract
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT — Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    {[
                                        "Unlimited design requests",
                                        "Priority development support",
                                        "Dedicated project manager",
                                        "Weekly progress updates",
                                        "48–72 hour turnaround",
                                        "Strategy & consultation included",
                                        "Direct WhatsApp communication",
                                        "Performance & UX optimization"
                                    ].map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-4 rounded-2xl border border-white/5 hover:border-red-500/40 transition"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                                                ✓
                                            </div>
                                            <p className="text-zinc-300 text-sm leading-relaxed">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;