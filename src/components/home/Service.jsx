"use client"
import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import gsap from "gsap"

const Service = () => {
    const [openSection, setOpenSection] = useState(null)
    const contentRefs = useRef([])
    const iconRefs = useRef([])

    const services = [
        {
            id: 0,
            number: "01",
            title: "PERFORMANCE",
            subtitle: "UNLOCK YOUR FULL POTENTIAL THROUGH ADVANCED TRAINING PROTOCOLS",
            content: [
                {
                    label: "ELITE TRAINING",
                    items: [
                        "AI-OPTIMIZED TRAINING PLANS",
                        "RECOVERY MONITORING",
                        "RACE PREPARATION",
                        "PEAK PERFORMANCE TIMING"
                    ]
                },
                {
                    label: "METABOLIC HEALTH",
                    items: [
                        "SUBSTRATE UTILIZATION",
                        "ENERGY SYSTEM DEVELOPMENT",
                        "METABOLIC FLEXIBILITY",
                        "NUTRITION TIMING"
                    ]
                },
                {
                    label: "RECOVERY",
                    items: [
                        "SLEEP OPTIMIZATION",
                        "STRESS MANAGEMENT",
                        "INJURY PREVENTION",
                        "LONGEVITY PROTOCOLS"
                    ]
                }
            ],
            image: "/service.jpg"
        },
        {
            id: 1,
            number: "02",
            title: "TESTING",
            subtitle: "PRECISION DIAGNOSTICS FOR DATA-DRIVEN RESULTS",
            content: [
                {
                    label: "LAB ANALYSIS",
                    items: [
                        "VO2 MAX TESTING",
                        "LACTATE THRESHOLD",
                        "RESTING METABOLIC RATE",
                        "INSCYD TESTING"
                    ]
                },
                {
                    label: "BIOMETRICS",
                    items: [
                        "BLOOD MARKER ANALYSIS",
                        "GENETIC PROFILING",
                        "BODY COMPOSITION",
                        "NEURO-TYPING"
                    ]
                },
                {
                    label: "PERFORMANCE METRICS",
                    items: [
                        "ATHLETE BENCHMARKING",
                        "TRACKING PROGRESS",
                        "TEST ANALYSIS",
                        "FEEDBACK SESSIONS"
                    ]
                }
            ],
            image: "/service.jpg"
        },
        {
            id: 2,
            number: "03",
            title: "COACHING",
            subtitle: "PERSONALIZED STRATEGIES TO ACHIEVE YOUR GOALS",
            content: [
                {
                    label: "ONE-ON-ONE COACHING",
                    items: [
                        "CUSTOM TRAINING SESSIONS",
                        "GOAL TRACKING",
                        "MOTIVATION SUPPORT",
                        "PERFORMANCE REVIEWS"
                    ]
                },
                {
                    label: "GROUP COACHING",
                    items: [
                        "TEAM SESSIONS",
                        "STRATEGY WORKSHOPS",
                        "COLLABORATIVE CHALLENGES",
                        "FEEDBACK CIRCLES"
                    ]
                },
                {
                    label: "STRATEGY PLANNING",
                    items: [
                        "PERSONAL GOAL SETTING",
                        "PROGRESS MONITORING",
                        "ADJUSTMENT STRATEGIES",
                        "SUCCESS METRICS"
                    ]
                }
            ],
            image: "/service.jpg"
        },
        {
            id: 3,
            number: "04",
            title: "NUTRITION",
            subtitle: "FUEL YOUR BODY FOR MAXIMUM PERFORMANCE",
            content: [
                {
                    label: "DIET PLANS",
                    items: [
                        "MACRO TRACKING",
                        "MICRO NUTRIENTS",
                        "SUPPLEMENT GUIDANCE",
                        "MEAL TIMING"
                    ]
                },
                {
                    label: "HEALTH OPTIMIZATION",
                    items: [
                        "METABOLIC SUPPORT",
                        "DIGESTIVE HEALTH",
                        "IMMUNE SYSTEM BOOST",
                        "ENERGY MAINTENANCE"
                    ]
                },
                {
                    label: "MEAL STRATEGY",
                    items: [
                        "PRE/POST WORKOUT NUTRITION",
                        "MEAL PREP TIPS",
                        "HYDRATION PLANS",
                        "NUTRITION EDUCATION"
                    ]
                }
            ],
            image: "/service.jpg"
        }
    ]


    /* Animate content */
    useEffect(() => {
        contentRefs.current.forEach((el, index) => {
            if (!el) return
            if (openSection === index) {
                gsap.to(el, { height: "auto", opacity: 1, duration: 0.6, ease: "power3.out" })
            } else {
                gsap.to(el, { height: 0, opacity: 0, duration: 0.45, ease: "power3.inOut" })
            }
        })
    }, [openSection])

    const handleToggle = (index) => {
        const prevOpen = openSection
        setOpenSection(openSection === index ? null : index)

        const icon = iconRefs.current[index]
        if (!icon) return

        // Animate icons smoothly
        if (prevOpen === index) {
            // Closing: up arrow slides down, down arrow appears
            gsap.to(icon.querySelector(".arrow-up"), { y: 20, opacity: 0, rotation: -180, duration: 0.4, ease: "power3.in" })
            gsap.fromTo(icon.querySelector(".arrow-down"), { y: -20, opacity: 0, rotation: 180 }, { y: 0, opacity: 1, rotation: 0, duration: 0.4, ease: "power3.out" })
        } else {
            // Opening: down arrow slides up, up arrow appears
            gsap.to(icon.querySelector(".arrow-down"), { y: -20, opacity: 0, rotation: 180, duration: 0.4, ease: "power3.in" })
            gsap.fromTo(icon.querySelector(".arrow-up"), { y: -20, opacity: 0, rotation: -180 }, { y: 0, opacity: 1, rotation: 0, duration: 0.4, ease: "power3.out" })
        }
    }

    return (
        <div className="min-h-screen bg-[#121212] text-white p-6 md:p-12 font-sans">
            <div className="max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div key={service.id} className="border-b border-zinc-800">
                        {/* HEADER */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full flex justify-between items-center py-10 text-left"
                        >
                            <div>
                                <p className="text-[10px] tracking-[0.2em] text-zinc-500 mb-2 uppercase">
                                    {service.subtitle}
                                </p>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                                    {service.number} {service.title}
                                </h2>
                            </div>

                            {/* ICON - stacked arrows */}
                            <div
                                ref={(el) => (iconRefs.current[index] = el)}
                                className="w-14 h-14 md:w-16 md:h-16 relative flex items-center justify-center"
                            >
                                <FaArrowDown className="arrow-down absolute w-full h-full" style={{ opacity: openSection === index ? 0 : 1 }} />
                                <FaArrowUp className="arrow-up absolute w-full h-full" style={{ opacity: openSection === index ? 1 : 0 }} />
                            </div>
                        </button>

                        {/* CONTENT */}
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="overflow-hidden h-0 opacity-0"
                        >
                            <div className="bg-white text-black rounded-[40px] p-8 md:p-16 mb-12 flex flex-col lg:flex-row gap-12">
                                {/* TEXT */}
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {service.content.map((col, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-[10px] text-zinc-400 font-bold tracking-widest mb-6 uppercase">
                                                {col.label}
                                            </h4>
                                            <ul className="space-y-2">
                                                {col.items.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-xl md:text-2xl font-extrabold leading-tight uppercase"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* IMAGE */}
                                <div className="lg:w-1/3">
                                    <div className="aspect-[4/5] overflow-hidden rounded-3xl relative">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover rounded-3xl"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service
