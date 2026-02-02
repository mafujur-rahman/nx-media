"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

// Steps with 5 unique cards each
const steps = [
    {
        id: "01",
        label: "Complete Assessment",
        cards: [
            { title: "Comprehensive Testing of Performance Markers and Biomarkers", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Extra Assessment Card", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" },
            { title: "Another Assessment Card", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Fourth Assessment Card", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" },
            { title: "Fifth Assessment Card", img: "https://images.unsplash.com/photo-1531497865143-4c7b1f50f82f?q=80&w=1000&auto=format&fit=crop" },
        ],
    },
    {
        id: "02",
        label: "Data Analysis",
        cards: [
            { title: "AI-Powered Analysis of Your Complete Health Profile", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" },
            { title: "Second Data Analysis Card", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Third Data Analysis Card", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" },
            { title: "Fourth Data Analysis Card", img: "https://images.unsplash.com/photo-1531497865143-4c7b1f50f82f?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Fifth Data Analysis Card", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop" },
        ],
    },
    {
        id: "03",
        label: "Custom Protocol",
        cards: [
            { title: "Personalized Protocol Tailored to Your Needs", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Second Custom Protocol Card", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop" },
            { title: "Third Custom Protocol Card", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Fourth Custom Protocol Card", img: "https://images.unsplash.com/photo-1531497865143-4c7b1f50f82f?q=80&w=1000&auto=format&fit=crop" },
            { title: "Fifth Custom Protocol Card", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop", light: true },
        ],
    },
    {
        id: "04",
        label: "Ongoing Support",
        cards: [
            { title: "Continuous Support to Maintain Peak Performance", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop" },
            { title: "Second Ongoing Support Card", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Third Ongoing Support Card", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop" },
            { title: "Fourth Ongoing Support Card", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Fifth Ongoing Support Card", img: "https://images.unsplash.com/photo-1531497865143-4c7b1f50f82f?q=80&w=1000&auto=format&fit=crop" },
        ],
    },
];

const WorkProcess = () => {
    const cardsRef = useRef(null);

    const [activeTab, setActiveTab] = useState("01");
    const [scrollIndex, setScrollIndex] = useState({}); // per-tab scroll

    const activeStep = steps.find((step) => step.id === activeTab);
    const activeCards = activeStep?.cards || [];
    const currentIndex = scrollIndex[activeTab] || 0;

    const canSlideLeft = currentIndex > 0;
    const canSlideRight = currentIndex < activeCards.length - 2; // 2 cards visible at a time

    const slideToTab = (tabId) => {
        setActiveTab(tabId);
        if (!scrollIndex[tabId]) setScrollIndex((prev) => ({ ...prev, [tabId]: 0 }));
    };

    const slideCards = (direction) => {
        const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
        setScrollIndex((prev) => ({ ...prev, [activeTab]: newIndex }));
    };

    useEffect(() => {
        const container = cardsRef.current;
        if (!container) return;

        const cardWidth = container.children[0].offsetWidth + 24; // card width + gap
        gsap.to(container, { x: -currentIndex * cardWidth, duration: 0.8, ease: "power3.out" });

        // Animate active button
        const buttons = document.querySelectorAll(".step-btn");
        buttons.forEach((btn) => {
            const bg = btn.querySelector(".bg-anim");
            const text = btn.querySelector(".step-text");
            if (btn.dataset.tab === activeTab) {
                gsap.to(bg, { height: "100%", duration: 0.5, ease: "power3.out" });
                text.classList.add("text-black");
            } else {
                gsap.to(bg, { height: 0, duration: 0.5, ease: "power3.out" });
                text.classList.remove("text-black");
            }
        });
    }, [activeTab, currentIndex]);

    return (
        <section className="bg-black text-white pt-20 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="title_text mb-12">
                    <span className="text-red-100 block mb-2 uppercase">Your Journey To</span>
                    PEAK PERFORMANCE
                </h2>

                {/* Navigation + Arrows */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex flex-wrap items-center bg-black/40 border border-white/10 rounded-full p-1.5 w-fit">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                data-tab={step.id}
                                className="step-btn relative px-6 py-2.5 rounded-full text-md font-medium overflow-hidden"
                                onClick={() => slideToTab(step.id)}
                            >
                                <div className="bg-anim absolute bottom-0 left-0 w-full h-0 bg-white z-0"></div>
                                <span className="step-text relative z-10 flex items-center gap-2 opacity-60">
                                    <span>{step.id}</span>
                                    <span>{step.label}</span>
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <button
                            className={`p-4 rounded-full ${canSlideLeft ? "text-white" : "text-gray-500 cursor-not-allowed"}`}
                            onClick={() => canSlideLeft && slideCards("left")}
                        >
                            <FaArrowLeft size={36} />
                        </button>
                        <button
                            className={`p-4 rounded-full ${canSlideRight ? "text-white" : "text-gray-500 cursor-not-allowed"}`}
                            onClick={() => canSlideRight && slideCards("right")}
                        >
                            <FaArrowRight size={36} />
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="overflow-hidden">
                    <div ref={cardsRef} className="flex gap-6 w-max">
                        {activeCards.map((card, index) => (
                            <Card key={index} id={`${index + 1}`} title={card.title} img={card.img} light={card.light} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Card Component
const Card = ({ id, title, img, light }) => (
    <div
        className={`${light ? "bg-white text-black" : "bg-[#222222] text-white border border-white/5"} rounded-[30px] flex-shrink-0 flex w-[620px] h-[400px] overflow-hidden`}
    >
        <div className="w-1/2 p-10 flex flex-col justify-center">
            <span className={`${light ? "text-gray-400" : "text-gray-500"} text-xs font-bold uppercase mb-4 tracking-widest`}>
                {id}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold leading-tight uppercase">{title}</h3>
        </div>
        <div className="w-1/2 relative">
            <img
                src={img}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover p-2 rounded-[30px] ${light ? "" : "opacity-80"}`}
            />
        </div>
    </div>
);

export default WorkProcess;
