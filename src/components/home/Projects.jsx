// components/Projects.js (updated)
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { projectsData } from "../fakeDB/ProjectsData";


// Define your steps with real card data
const steps = [
    {
        id: "01",
        label: "Logo Design",
        cards: [
            { title: "Berimbolo Beans", slug: "berimbolo-beans" },
            { title: "Bear Health", slug: "bear-health" },
        ],
    },
    {
        id: "02",
        label: "Brand Identity",
        cards: [
            { title: "Influence Ireland Consulting", slug: "influence-ireland-consulting" },
            { title: "Silagri", slug: "silagri" },
        ],
    },
    {
        id: "03",
        label: "Packaging Design",
        cards: [
            { title: "Organic", slug: "organic" },
            { title: "Brandco", slug: "brandco" },
            
        ],
    },
    // {
    //     id: "04",
    //     label: "Social Media Branding",
    //     cards: [
    //         { title: "Instagram & Facebook Templates", slug: "instagram-facebook-templates" },
    //         { title: "Story & Post Design", slug: "story-post-design" },
    //         { title: "Ad Creatives & Campaign Assets", slug: "ad-creatives-campaign-assets" },
    //         { title: "Brand Consistency Across Platforms", slug: "brand-consistency-platforms" },
    //     ],
    // },
    {
        id: "04",
        label: "UI / UX Design",
        cards: [
            { title: "Cool Kids", slug: "cool-kids" },
            { title: "Cultivate", slug: "cultivate" },
        ],
    },
    {
        id: "05",
        label: "Website Development",
        cards: [
            { title: "WeBrand", slug: "weBrand" },
            { title: "Amity", slug: "amity" },
        ],
    },
];

const Projects = () => {
    const router = useRouter();
    const cardsRef = useRef(null);
    const tabsRef = useRef(null);
    const [activeTab, setActiveTab] = useState("01");
    const [scrollIndex, setScrollIndex] = useState({});
    const [windowWidth, setWindowWidth] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(2);

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHoveringCard, setIsHoveringCard] = useState(false);
    const cursorRef = useRef(null);

    const activeStep = steps.find((step) => step.id === activeTab);
    const activeCards = activeStep?.cards || [];
    const currentIndex = scrollIndex[activeTab] || 0;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth < 640) {
            setCardsPerView(1);
        } else if (windowWidth < 1024) {
            setCardsPerView(1.5);
        } else {
            setCardsPerView(2);
        }
    }, [windowWidth]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (!cursorRef.current) return;

        gsap.to(cursorRef.current, {
            x: cursorPos.x,
            y: cursorPos.y,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
        });
    }, [cursorPos]);

    useEffect(() => {
        if (!cursorRef.current) return;

        gsap.to(cursorRef.current, {
            scale: isHoveringCard ? 1 : 0,
            duration: 0.3,
            ease: "power2.out",
        });
    }, [isHoveringCard]);

    const canSlideLeft = currentIndex > 0;
    const canSlideRight = currentIndex < activeCards.length - cardsPerView;

    const scrollTabIntoView = (tabId) => {
        if (tabsRef.current) {
            const tabsContainer = tabsRef.current;
            const activeButton = tabsContainer.querySelector(`[data-tab="${tabId}"]`);

            if (activeButton) {
                const containerRect = tabsContainer.getBoundingClientRect();
                const buttonRect = activeButton.getBoundingClientRect();

                const isButtonLeftOutside = buttonRect.left < containerRect.left;
                const isButtonRightOutside = buttonRect.right > containerRect.right;

                if (isButtonLeftOutside || isButtonRightOutside) {
                    let scrollLeft;

                    if (isButtonLeftOutside) {
                        scrollLeft = tabsContainer.scrollLeft - (containerRect.left - buttonRect.left) - 20;
                    } else {
                        scrollLeft = tabsContainer.scrollLeft + (buttonRect.right - containerRect.right) + 20;
                    }

                    tabsContainer.scrollTo({
                        left: scrollLeft,
                        behavior: 'smooth'
                    });
                }
            }
        }
    };

    const slideToTab = (tabId) => {
        setActiveTab(tabId);
        if (!scrollIndex[tabId]) setScrollIndex((prev) => ({ ...prev, [tabId]: 0 }));
        setTimeout(() => scrollTabIntoView(tabId), 100);
    };

    const slideCards = (direction) => {
        const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
        setScrollIndex((prev) => ({ ...prev, [activeTab]: newIndex }));
    };

    useEffect(() => {
        const container = cardsRef.current;
        if (!container || !container.children.length) return;

        const cardWidth = container.children[0].offsetWidth + 24;
        gsap.to(container, {
            x: -currentIndex * cardWidth,
            duration: 0.8,
            ease: "power3.out",
        });

        const buttons = document.querySelectorAll(".step-btn");
        buttons.forEach((btn) => {
            const bg = btn.querySelector(".bg-anim");
            const text = btn.querySelector(".step-text");
            if (btn.dataset.tab === activeTab) {
                gsap.to(bg, { height: "100%", duration: 0.5, ease: "power3.out" });
                text?.classList.add("text-black");
            } else {
                gsap.to(bg, { height: 0, duration: 0.5, ease: "power3.out" });
                text?.classList.remove("text-black");
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
        const handleMouseLeave = () => { isDown = false; slider.classList.remove("cursor-grabbing"); };
        const handleMouseUp = () => { isDown = false; slider.classList.remove("cursor-grabbing"); };
        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            slider.scrollLeft = scrollLeft - (x - startX) * 1.5;
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

    const handleCardClick = (slug) => {
        router.push(`/project/${slug}`);
    };

    const arrowSize = windowWidth < 640 ? 20 : windowWidth < 1024 ? 28 : 36;

    return (
        <section id="projects" className="bg-black text-white pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0 overflow-hidden">
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
                style={{ transform: "translate(-50%, -50%)" }}
            >
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black text-xs font-bold tracking-wider text-center">
                        VIEW<br />PROJECT
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-8 lg:mb-10 xl:mb-16">
                    <h2 className="title_text text-white max-w-6xl">
                        Before you hire us, see what hiring us actually looks like.
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 mb-6 lg:mb-8">
                    <div
                        ref={tabsRef}
                        className="tabs-scroll w-full overflow-x-auto cursor-grab select-none scrollbar-hide"
                    >
                        <div className="flex items-center bg-black/40 border border-white/10 rounded-full p-1 w-max whitespace-nowrap">
                            {steps.map((step) => (
                                <button
                                    key={step.id}
                                    data-tab={step.id}
                                    className="step-btn relative px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium flex-shrink-0 whitespace-nowrap"
                                    onClick={() => slideToTab(step.id)}
                                >
                                    <div className="bg-anim absolute bottom-0 left-0 w-full h-0 rounded-full bg-white z-0"></div>
                                    <span className="step-text relative z-10 flex items-center gap-1 sm:gap-2 opacity-60 whitespace-nowrap">
                                        <span>{step.id}</span>
                                        <span>{step.label}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 justify-start lg:justify-end lg:mt-0">
                        <button
                            className={`p-2 sm:p-3 lg:p-4 rounded-full transition-colors ${canSlideLeft
                                ? "text-white hover:bg-white/10"
                                : "text-gray-500 cursor-not-allowed"
                                }`}
                            onClick={() => canSlideLeft && slideCards("left")}
                            disabled={!canSlideLeft}
                        >
                            <FaArrowLeft size={arrowSize} />
                        </button>
                        <button
                            className={`p-2 sm:p-3 lg:p-4 rounded-full transition-colors ${canSlideRight
                                ? "text-white hover:bg-white/10"
                                : "text-gray-500 cursor-not-allowed"
                                }`}
                            onClick={() => canSlideRight && slideCards("right")}
                            disabled={!canSlideRight}
                        >
                            <FaArrowRight size={arrowSize} />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden -mx-4 sm:-mx-6 md:-mx-10 lg:mx-0">
                    <div ref={cardsRef} className="flex gap-4 sm:gap-6 w-max px-4 sm:px-6 md:px-10 lg:px-0">
                        {activeCards.map((card, index) => {
                            const projectData = projectsData[card.slug];
                            return (
                                <Card
                                    key={index}
                                    id={`${index + 1}`}
                                    title={card.title}
                                    img={projectData?.images?.topImage || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"}
                                    light={index % 2 === 0}
                                    onMouseEnter={() => setIsHoveringCard(true)}
                                    onMouseLeave={() => setIsHoveringCard(false)}
                                    onClick={() => handleCardClick(card.slug)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

const Card = ({ id, title, img, light, onMouseEnter, onMouseLeave, onClick }) => (
    <div
        className={`${light ? "bg-white text-black" : "bg-[#222222] text-white border border-white/5"
            } rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex-shrink-0 flex flex-col sm:flex-row w-[280px] sm:w-[450px] md:w-[550px] lg:w-[620px] h-[400px] sm:h-[350px] md:h-[380px] lg:h-[400px] overflow-hidden cursor-none transition-transform duration-300 `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                onClick();
            }
        }}
    >
        <div className="w-full sm:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 sm:order-1">
            <span className={`${light ? "text-gray-400" : "text-gray-500"} text-xs font-bold uppercase mb-3 sm:mb-4 tracking-widest`}>
                {id}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight uppercase">
                {title}
            </h3>
        </div>
        <div className="w-full sm:w-1/2 h-1/2 sm:h-full relative order-1 sm:order-2">
            <img
                src={img}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover p-2 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] ${light ? "" : "opacity-80"}`}
                loading="lazy"
            />
        </div>
    </div>
);

export default Projects;