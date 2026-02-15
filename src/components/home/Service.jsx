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
            title: "BRANDING",
            subtitle: "UNLOCK YOUR BRAND'S FULL POTENTIAL WITH STRATEGIC DESIGN",
            content: [
                {
                    label: "IDENTITY",
                    items: [
                        "LOGO & VISUAL DESIGN",
                        "COLOR & TYPOGRAPHY",
                        "BRAND VOICE & TONE",
                        "CONSISTENT BRAND GUIDELINES"
                    ]
                },
                {
                    label: "PACKAGING DESIGN",
                    items: [
                        "STRUCTURE & FORMAT SELECTION",
                        "MATERIAL CONSULTATION",
                        "GRAPHIC DESIGN & VISUALS",
                        "DIELINE & PRINT PRODUCTION"
                    ]
                },
                {
                    label: "APPLICATION",
                    items: [
                        "STATIONERY & COLLATERAL",
                        "BRAND TOUCHPOINTS",
                        "ASSET LIBRARIES",
                        "BRAND ROLLOUT"
                    ]
                }
            ],
            image: "/images/branding-service.jpg"
        },

        {
            id: 1,
            number: "02",
            title: "UI / UX DESIGN",
            subtitle: "CRAFTING INTUITIVE, ENGAGING & USER-CENTERED DIGITAL EXPERIENCES",
            content: [
                {
                    label: "USER RESEARCH",
                    items: [
                        "USER PERSONAS",
                        "USER JOURNEY MAPPING",
                        "WIREFRAMING",
                        "PROTOTYPING"
                    ]
                },
                {
                    label: "INTERFACE DESIGN",
                    items: [
                        "MODERN UI DESIGN",
                        "DESIGN SYSTEMS",
                        "MOBILE APP DESIGN",
                        "WEB APP DESIGN"
                    ]
                },
                {
                    label: "TESTING & OPTIMIZATION",
                    items: [
                        "USABILITY TESTING",
                        "A/B TESTING",
                        "UX AUDIT",
                        "CONVERSION OPTIMIZATION"
                    ]
                }
            ],
            image: "/images/uiux-service.png"
        },

        {
            id: 2,
            number: "03",
            title: "WEB DEVELOPMENT",
            subtitle: "BUILD SCALABLE, HIGH-PERFORMANCE WEBSITES & APPS",
            content: [
                {
                    label: "FRONTEND",
                    items: [
                        "RESPONSIVE UI DESIGN",
                        "INTERACTIVE USER EXPERIENCES",
                        "REACT / NEXT.JS DEVELOPMENT",
                        "PERFORMANCE OPTIMIZATION"
                    ]
                },
                {
                    label: "BACKEND",
                    items: [
                        "API INTEGRATION",
                        "DATABASE DESIGN",
                        "SERVER-SIDE LOGIC",
                        "SECURITY & AUTHENTICATION"
                    ]
                },
                {
                    label: "MAINTENANCE",
                    items: [
                        "BUG FIXES & UPDATES",
                        "SEO & ANALYTICS",
                        "SCALABILITY PLANNING",
                        "TECHNICAL SUPPORT"
                    ]
                }
            ],
            image: "/images/development-service.png"
        }
    ];




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

        // Animate previous open icon back to down
        if (prevOpen !== null && prevOpen !== index) {
            const prevIcon = iconRefs.current[prevOpen]
            if (prevIcon) {
                gsap.to(prevIcon.querySelector(".arrow-up"), { y: 20, opacity: 0, rotation: -180, duration: 0.4, ease: "power3.in" })
                gsap.to(prevIcon.querySelector(".arrow-down"), { y: 0, opacity: 1, rotation: 0, duration: 0.4, ease: "power3.out" })
            }
        }

        // Animate current icon
        const icon = iconRefs.current[index]
        if (!icon) return

        if (prevOpen === index) {
            // Closing the same section
            gsap.to(icon.querySelector(".arrow-up"), { y: 20, opacity: 0, rotation: -180, duration: 0.4, ease: "power3.in" })
            gsap.to(icon.querySelector(".arrow-down"), { y: 0, opacity: 1, rotation: 0, duration: 0.4, ease: "power3.out" })
        } else {
            // Opening a new section
            gsap.to(icon.querySelector(".arrow-down"), { y: -20, opacity: 0, rotation: 180, duration: 0.4, ease: "power3.in" })
            gsap.fromTo(
                icon.querySelector(".arrow-up"),
                { y: -20, opacity: 0, rotation: -180 },
                { y: 0, opacity: 1, rotation: 0, duration: 0.4, ease: "power3.out" }
            )
        }
    }


    return (
        <div className=" bg-black text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div key={service.id} className="border-b border-zinc-800">
                        {/* HEADER */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full flex justify-between items-center py-10 text-left"
                        >
                            <div>
                                <p className="text-md  text-gray-400 mb-2 uppercase">
                                    {service.subtitle}
                                </p>
                                <h2 className="title_text">
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
                                            <h4 className="text-md text-gray-400 font-bold tracking-widest mb-6 uppercase">
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
