"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
    const cardsRef = useRef([]);

    const plans = [
        {
            title: "BASELINE ASSESSMENT",
            desc: "Establish your foundational fitness markers and training zones to optimize future progress.",
            price: "250",
            features: [
                "Lactate Testing Protocol",
                "Baseline Metabolic",
                "Detailed Report & Recommendations",
            ],
            buttonText: "Buy now & schedule",
            dark: false,
        },
        {
            title: "PERFORMANCE ASSESSMENT",
            desc: "Advanced metabolic assessment to fine-tune training zones and maximize race day performance.",
            price: "350",
            features: [
                "VO2 Max Testing",
                "Lactate Testing Protocol",
                "Baseline Metabolic",
                "Sweat Analysis",
                "Detailed Report & Recommendations",
            ],
            buttonText: "Buy now & schedule",
            dark: false,
        },
        {
            title: "COMPREHENSIVE ASSESSMENT",
            desc: "Complete physiological profiling for elite athletes seeking the ultimate competitive advantage.",
            price: "900",
            features: [
                "VO2 Max Testing",
                "Lactate Threshold Analysis",
                "Body Composition Scan",
                "Movement Assessment",
                "Sweat Analysis",
                "Detailed Report & Recommendations",
            ],
            buttonText: "Contact us",
            dark: true,
        },
    ];

    useEffect(() => {
        const [card1, card2, card3] = cardsRef.current;

        if (!card1 || !card2 || !card3) return;

        const tallestHeight = card3.offsetHeight;

        const moveCard = (card) =>
            tallestHeight - card.offsetHeight;

        gsap.to([card1, card2], {
            y: (i) => moveCard(i === 0 ? card1 : card2),
            ease: "none",
            scrollTrigger: {
                trigger: card3,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
            },
        });

    }, []);

    return (
        <section className="bg-black py-20 px-4 min-h-screen flex justify-center items-center">
            <div className="bg-white rounded-[40px] w-full max-w-7xl p-8 md:p-16 ">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-md font-bold  text-gray-400 uppercase mb-2">
                        Unlock your full potential through advanced training protocols
                    </p>
                    <h2 className="title_text mb-4">
                        TESTING
                    </h2>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-6 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`rounded-3xl p-8 border border-gray-100 flex flex-col  ${plan.dark
                                    ? "bg-gray-50 border-gray-200"
                                    : "bg-white"
                                }`}
                        >
                            <h3 className="text-md font-bold tracking-widest  mb-4 uppercase">
                                {plan.title}
                            </h3>

                            <p className="text-md text-gray-500 mb-8 leading-snug">
                                {plan.desc}
                            </p>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold ">
                                        ${plan.price}
                                    </span>
                                    <span className="text-sm text-gray-400 ml-2 italic">
                                        per test
                                    </span>
                                </div>
                            </div>

                            <button
                                className={`w-full py-4 px-6 rounded-full flex justify-between items-center font-bold mb-10 transition-transform active:scale-95 shadow-sm ${plan.dark
                                        ? "bg-black text-white hover:bg-black"
                                        : "bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200"
                                    }`}
                            >
                                <span className="text-sm font-semibold">
                                    {plan.buttonText}
                                </span>
                                <ArrowRight size={18} />
                            </button>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-gray-600 font-medium"
                                    >
                                        <Check size={14} className="text-gray-400 mt-0.5" />
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
