"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const faqs = [
    {
        q: "What exactly do you do? Like, what services?",
        a: "Brand identity, packaging design, graphic design, and web development. We build visual foundations for brands that want to stop blending in."
    },
    {
        q: "How much does a project typically cost?",
        a: "It depends on what you need. Brand identities start around $4,500, websites around $6,500. We'll give you a clear estimate after we understand your project."
    },
    {
        q: "How long does it take to build a brand or website?",
        a: "Most projects take 6-10 weeks from kickoff to launch. Brand identities are usually on the shorter side; custom websites can take a bit longer. We'll give you a timeline you can count on."
    },
    {
        q: "Do you work with clients outside your country?",
        a: "Absolutely. Most of our clients are in the US, UK, Europe, and Middle East. We're built for global collaboration—time zones aren't an issue."
    },
    {
        q: "Will I actually talk to the people doing the work?",
        a: "Yes. No account managers. No middlemen. You'll work directly with the designers and developers building your brand."
    },
    {
        q: "What if I already have a brand or website? Can you improve it?",
        a: "Definitely. We do rebrands, website refreshes, and everything in between. Sometimes you just need a polish, not a full rebuild."
    },
    {
        q: "Do you offer ongoing support after launch?",
        a: "We do. Whether it's website maintenance, brand updates, or just a friendly voice when you need guidance—we're here after launch day."
    },
    {
        q: "How do we start? What's the first step?",
        a: "You hit 'Start the conversation' below. We hop on a call, listen to what you're building, and go from there. No pressure. Just a real conversation."
    }
];


export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
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
        <section id="faq" className="bg-black pt-28 lg:pt-40 px-6 md:px-10 lg:px-16 xl:px-0">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8 lg:mb-12 xl:mb-16">
                    <span className="px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-xs md:text-sm font-medium text-white">
                        FAQ
                    </span>

                    <h2 className="title_text text-white mb-8 mt-6">
                        We figured you might be wondering
                    </h2>

                    <p className="text-lg text-white/60 max-w-lg mx-auto">
                        Still deciding? Here’s what other people wanted to know first.
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
