"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const faqs = [
    {
        q: "What services do you offer for branding and web development?",
        a: "We provide complete branding solutions including logo design, brand identity, and marketing materials, along with custom web development for responsive, user-friendly websites."
    },
    {
        q: "How long does it take to complete a project?",
        a: "Project timelines vary based on complexity, but most branding or website projects take between 4 to 8 weeks from initial concept to final delivery."
    },
    {
        q: "Do you provide ongoing support after the project?",
        a: "Yes! We offer maintenance, updates, and brand consultation to ensure your website and brand stay current and effective."
    },
    {
        q: "Can you help improve our existing brand or website?",
        a: "Absolutely! We offer rebranding and website revamp services to enhance your brand image, improve usability, and boost engagement."
    }
];


export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(3);
    const contentRefs = useRef([]);
    const vertRefs = useRef([]);

    useEffect(() => {
        contentRefs.current.forEach((el, i) => {
            gsap.set(el, { height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 });
            gsap.set(vertRefs.current[i], { scaleY: openIndex === i ? 0 : 1 });
        });
    }, []);

    const toggle = (i) => {
        const isOpen = openIndex === i;

        // close previous
        if (openIndex !== null && openIndex !== i) {
            gsap.to(contentRefs.current[openIndex], {
                height: 0,
                opacity: 0,
                duration: 0.45,
                ease: "power3.inOut"
            });

            gsap.to(vertRefs.current[openIndex], {
                scaleY: 1,
                duration: 0.35,
                ease: "power3.inOut"
            });
        }

        setOpenIndex(isOpen ? null : i);

        // open / close current
        gsap.to(contentRefs.current[i], {
            height: isOpen ? 0 : "auto",
            opacity: isOpen ? 0 : 1,
            duration: 0.55,
            ease: "power3.out"
        });

        gsap.to(vertRefs.current[i], {
            scaleY: isOpen ? 1 : 0,
            duration: 0.4,
            ease: "power3.out"
        });
    };

    return (
        <section className="bg-black py-40">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-xs md:text-sm font-medium text-white">
                        FAQ
                    </span>

                    <h2 className="title_text text-white mb-8 mt-6">
                        In case you were wondering
                    </h2>

                    <p className="text-sm text-white/60 max-w-lg mx-auto">
                        Some of the most common things people ask us about our technology.
                    </p>
                </div>

                {/* FAQ */}
                <div className="divide-y divide-white/15">
                    {faqs.map((item, i) => (
                        <div key={i} className="py-10">
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between text-left"
                            >
                                <span className="text-2xl md:text-3xl text-white font-light">
                                    {item.q}
                                </span>

                                {/* + / − Icon */}
                                <span className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/30">
                                    {/* horizontal */}
                                    <span className="absolute w-4 h-px bg-white" />
                                    {/* vertical */}
                                    <span
                                        ref={(el) => (vertRefs.current[i] = el)}
                                        className="absolute h-4 w-px bg-white origin-center"
                                    />
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                ref={(el) => (contentRefs.current[i] = el)}
                                className="overflow-hidden"
                            >
                                <p className="pt-6 text-base text-white/60 max-w-3xl">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
