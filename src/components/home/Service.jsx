"use client"
import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import gsap from "gsap"

const Service = () => {
    const [openSection, setOpenSection] = useState(null)
    const contentRefs = useRef([])
    const iconRefs = useRef([])
    const imageContainerRefs = useRef([])

    const services = [
        {
            id: 0,
            number: "01",
            title: "BRANDING",
            subtitle: "UNLOCK YOUR BRAND'S FULL POTENTIAL WITH STRATEGIC DESIGN",
            content: [
                {
                    label: "LOGO & BRAND IDENTITY",
                    items: [
                        "LOGO DESIGN",
                        "BRAND STYLE GUIDES",
                        "BUSINESS CARDS & STATIONERY",
                        "FONTS & TYPOGRAPHY"
                    ]
                },
                {
                    label: "PRINT DESIGN",
                    items: [
                        "BROCHURE DESIGN",
                        "FLYER DESIGN",
                        "PACKAGING & LABEL DESIGN",
                        "POSTER DESIGN",
                        "CATALOG DESIGN",
                        "MENU DESIGN",
                        "CALENDER DESIGN",
                    ]
                },
                {
                    label: "MARKETING DESIGN",
                    items: [
                        "SOCIAL MEDIA DESIGN",
                        "EMAIL DESIGN",
                        "WEB BANNERS",
                        "SIGNAGE DESIGN"
                    ]
                },
                {
                    label: "OTHER VISUAL DESIGN",
                    items: [
                        "COMPANY PROFILE DESIGN",
                        "RESUME DESIGN",
                        "PRESENTATION DESIGN",
                        "VECTOR TRACING",
                        "BOOK DESIGN",
                        "BOOK COVER DESIGN",
                    ]
                }
            ],
            image: "/images/branding-1.png"
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
                        "WEB APP DESIGN",
                        "LANDING PAGE DESIGN",
                        "ICON DESIGN",
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
            image: "/images/ui-ux.png"
        },

        {
            id: 2,
            number: "03",
            title: "WEB DEVELOPMENT",
            subtitle: "BUILD SCALABLE, HIGH-PERFORMANCE WEBSITES & APPS",
            content: [
                {
                    label: "WEBSITE DEVELOPMENT",
                    items: [
                        "FULL STACK WEB APPS",
                        "APIS & INTEGRATIONS",
                        "DATABASE",
                        "BUSINESS WEBSITES",
                        "E-COMMERCE DEVELOPMENT",
                        "CUSTOM WEBSITES",
                        "LANDING PAGES"
                    ]
                },
                {
                    label: "WEBSITE PLATFORMS",
                    items: [
                        "WORDPRESS",
                        "WIX",
                        "WEBFLOW",
                        
                    ]
                },
                {
                    label: "WEBSITE MAINTENANCE",
                    items: [
                        "WEBSITE CUSTOMIZATION",
                        "BUG FIXES & UPDATES",
                        "SEO & ANALYTICS",
                        "BACKUP & MIGRATION",
                        "SPEED OPTIMIZATION",
                        "TECHNICAL SUPPORT",
                    ]
                }
            ],
            image: "/images/Web-Development.png"
        }
    ];

    // Function to sync image height with content height
    const syncImageHeight = (index) => {
        const textContainer = contentRefs.current[index]?.querySelector('.text-content-wrapper')
        const imageContainer = imageContainerRefs.current[index]
        
        if (textContainer && imageContainer && openSection === index) {
            const textHeight = textContainer.offsetHeight
            imageContainer.style.height = `${textHeight}px`
        }
    }

    /* Animate content */
    useEffect(() => {
        contentRefs.current.forEach((el, index) => {
            if (!el) return
            if (openSection === index) {
                gsap.to(el, { 
                    height: "auto", 
                    opacity: 1, 
                    duration: 0.6, 
                    ease: "power3.out",
                    onComplete: () => {
                        setTimeout(() => {
                            syncImageHeight(index)
                        }, 50)
                    }
                })
            } else {
                gsap.to(el, { height: 0, opacity: 0, duration: 0.45, ease: "power3.inOut" })
            }
        })
    }, [openSection])

    // Watch for window resize to re-sync heights
    useEffect(() => {
        const handleResize = () => {
            if (openSection !== null) {
                syncImageHeight(openSection)
            }
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
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
        <div id="services" className=" bg-black text-white px-6 md:px-10 lg:px-16 xl:px-0 pt-8 lg:pt-16 ">
            <div className="max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div key={service.id} className="border-b border-zinc-800">
                        {/* HEADER */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full flex justify-between items-center py-8 lg:py-10 text-left"
                        >
                            <div>
                                <p className="text-md  text-gray-400 mb-2 uppercase">
                                    {service.subtitle}
                                </p>
                                <h2 className="title_text">
                                     {service.title}
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
                            <div className="bg-white text-black rounded-[30px] px-4 py-6 md:px-8 md:py-12 mb-12">
                                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                                    {/* TEXT */}
                                    <div className="text-content-wrapper flex-1">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                            {service.content.map((col, idx) => (
                                                <div key={idx} className="flex flex-col h-full">
                                                    <h4 className="text-md text-gray-400 font-bold tracking-widest mb-4 uppercase">
                                                        {col.label}
                                                    </h4>
                                                    <ul className="space-y-1.5 flex-grow">
                                                        {col.items.map((item, i) => (
                                                            <li
                                                                key={i}
                                                                className="text-lg md:text-xl font-extrabold leading-tight uppercase"
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* IMAGE */}
                                    <div className="lg:w-1/2 xl:w-2/5">
                                        <div 
                                            ref={(el) => (imageContainerRefs.current[index] = el)}
                                            className="relative overflow-hidden rounded-3xl w-full"
                                            style={{ height: 'auto', transition: 'height 0.3s ease' }}
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={500}
                                                height={700}
                                                className="w-full h-full object-cover rounded-3xl"
                                                priority
                                                sizes="(max-width: 1024px) 100vw, 40vw"
                                            />
                                        </div>
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