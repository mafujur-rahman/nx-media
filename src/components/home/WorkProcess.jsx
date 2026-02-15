"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

// Steps with 5 unique cards each
const steps = [
    // ==== BRANDINGS ====
    {
        id: "01",
        label: "Logo Design",
        cards: [
            { title: "Minimalist Logo Concepts", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Brandmark & Icon Design", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop" },
            { title: "Logo Variations & Mockups", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Typography & Color Exploration", img: "https://images.unsplash.com/photo-1531497865143-4c7b1f50f82f?q=80&w=1000&auto=format&fit=crop" },
        ],
    },
    {
        id: "02",
        label: "Brand Identity",
        cards: [
            { title: "Visual Guidelines & Style Sheets", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" },
            { title: "Color Palette & Typography", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Brand Voice & Messaging", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop" },
            { title: "Stationery & Collateral Design", img: "https://images.unsplash.com/photo-1531497865143-4c7b1f50f82f?q=80&w=1000&auto=format&fit=crop", light: true },
        ],
    },
    {
        id: "03",
        label: "Packaging Design",
        cards: [
            { title: "Product Packaging Concepts", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop" },
            { title: "Box & Label Design", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Mockups & 3D Presentation", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop" },
            { title: "Eco-friendly & Innovative Packaging", img: "https://images.unsplash.com/photo-1531497865143-4c7b1f50f82f?q=80&w=1000&auto=format&fit=crop", light: true },
        ],
    },
    {
        id: "04",
        label: "Social Media Branding",
        cards: [
            { title: "Instagram & Facebook Templates", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" },
            { title: "Story & Post Design", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "Ad Creatives & Campaign Assets", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop" },
            { title: "Brand Consistency Across Platforms", img: "https://images.unsplash.com/photo-1531497865143-4c7b1f50f82f?q=80&w=1000&auto=format&fit=crop", light: true },
        ],
    },
    {
        id: "05",
        label: "UI / UX Design",
        cards: [
            {
                title: "Wireframing & Prototyping",
                img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop"
            },
            {
                title: "Website & Web App UI Design",
                img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000&auto=format&fit=crop",
                light: true
            },
            {
                title: "Mobile App Interface Design",
                img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop"
            },
            {
                title: "User Experience Research & Testing",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
                light: true
            },
        ],
    },

    // ==== DEVELOPMENTS ====
    {
        id: "06",
        label: "Website Development",
        cards: [
            { title: "Custom Responsive Websites", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", light: true },
            { title: "E-commerce Platforms", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop" },
        ],
    },

];


const WorkProcess = () => {
    const cardsRef = useRef(null);

    const [activeTab, setActiveTab] = useState("01");
    const [scrollIndex, setScrollIndex] = useState({}); // per-tab scroll
    const tabsRef = useRef(null);


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

    useEffect(() => {
        const slider = tabsRef.current;
        if (!slider) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isDown = true;
            slider.classList.add("cursor-grabbing");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove("cursor-grabbing");
        };

        const handleMouseUp = () => {
            isDown = false;
            slider.classList.remove("cursor-grabbing");
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5;
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener("mousedown", handleMouseDown);
        slider.addEventListener("mouseleave", handleMouseLeave);
        slider.addEventListener("mouseup", handleMouseUp);
        slider.addEventListener("mousemove", handleMouseMove);

        return () => {
            slider.removeEventListener("mousedown", handleMouseDown);
            slider.removeEventListener("mouseleave", handleMouseLeave);
            slider.removeEventListener("mouseup", handleMouseUp);
            slider.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <section className="bg-black text-white pt-20 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="title_text mb-12">
                    <span className="text-red-100 block mb-2 uppercase">Your Journey To</span>
                    PEAK PERFORMANCE
                </h2>

                {/* Navigation + Arrows */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div
                        ref={tabsRef}
                        className="tabs-scroll w-full overflow-x-auto cursor-grab select-none"
                    >

                        <div className="flex items-center bg-black/40 border border-white/10 rounded-full p-1.5 w-max whitespace-nowrap">
                            {steps.map((step) => (
                                <button
                                    key={step.id}
                                    data-tab={step.id}
                                    className="step-btn relative px-6 py-2.5 rounded-full text-md font-medium flex-shrink-0 whitespace-nowrap"
                                    onClick={() => slideToTab(step.id)}
                                >
                                    <div className="bg-anim absolute bottom-0 left-0 w-full h-0 rounded-full bg-white z-0"></div>

                                    <span className="step-text relative z-10 flex items-center gap-2 opacity-60 whitespace-nowrap">
                                        <span>{step.id}</span>
                                        <span>{step.label}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
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
