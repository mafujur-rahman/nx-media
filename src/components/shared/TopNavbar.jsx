 "use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

export default function TopNavbar() {
    const navRef = useRef(null);

    const menuWrap = useRef(null);
    const menuBg = useRef(null);
    const menuItems = useRef([]);
    const menuTl = useRef(null);

    const [open, setOpen] = useState(false);
    const scrolled = useRef(false);
    const router = useRouter();
    const pathname = usePathname();

    /* ================= NAVBAR SHRINK ================= */
    useEffect(() => {
        const onScroll = () => {
            const shrink = window.scrollY > window.innerHeight * 0.8;
            if (shrink !== scrolled.current) {
                scrolled.current = shrink;
                gsap.to(navRef.current, {
                    width: shrink ? "40%" : "100%",
                    maxWidth: shrink ? "640px" : "1280px",
                    duration: 0.8,
                    ease: "expo.out",
                });
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ================= MENU TIMELINE ================= */
    useEffect(() => {
        menuTl.current = gsap.timeline({
            paused: true,
            defaults: { ease: "expo.out" },
        });

        menuTl.current
            .set(menuWrap.current, { display: "block" })
            .fromTo(
                menuBg.current,
                { clipPath: "inset(100% 0% 0% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "expo.inOut" }
            )
            .fromTo(
                menuBg.current,
                { backgroundColor: "rgb(0,0,0)" },
                { backgroundColor: "rgb(20,20,20)", duration: 1, ease: "sine.inOut" },
                "-=1"
            )
            .fromTo(
                menuItems.current,
                { y: 30, opacity: 0, filter: "blur(10px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    stagger: 0.08,
                    duration: 0.8,
                    ease: "expo.out",
                },
                "-=0.6"
            );

        menuTl.current.eventCallback("onReverseComplete", () => {
            gsap.set(menuWrap.current, { display: "none" });
        });
    }, []);

    /* ================= OPEN / CLOSE ================= */
    useEffect(() => {
        if (open) {
            menuTl.current.play();
        } else {
            menuTl.current.reverse();
        }
    }, [open]);

    const handleLinkClick = (id) => {
        setOpen(false);

        // If NOT on homepage → go to homepage first
        if (pathname !== "/") {
            router.push(`/#${id}`);
            return;
        }

        // If already on homepage → smooth scroll
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 800);
    };

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-10 lg:px-16 xl:px-0 xl:max-w-7xl xl:mx-auto pointer-events-none">
                <div
                    ref={navRef}
                    className="pointer-events-auto mx-auto flex items-center justify-between
                    px-6 py-2 rounded-full bg-black/80 backdrop-blur-md
                    border border-white/10 shadow-2xl w-full"
                >
                    <div className="w-28 h-10 relative">
                        <Image src="/logo.png" alt="NX MEDIA" fill className="object-contain" />
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="w-10 h-10 flex items-center justify-center rounded-full
                        bg-black/40 border text-white border-white/10 hover:bg-red-500 transition-all duration-500 ease-in-out hover:scale-110"
                    >
                        <HiMenuAlt3 size={22} />
                    </button>
                </div>
            </nav>

            {/* ================= MENU ================= */}
            <div
                ref={menuWrap}
                className="fixed inset-0 z-40 hidden bg-black"
            >
                {/* BACKGROUND */}
                <div ref={menuBg} className="absolute inset-0 bg-black" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col">
                    {/* TOP BAR */}
                    <div className="max-w-7xl mx-auto w-full px-6 pt-8 flex justify-end">
                        <button
                            onClick={() => setOpen(false)}
                            className="w-12 h-12 rounded-full bg-white/10
                            hover:bg-red-500 hover:rotate-90 transition-all duration-500 ease-out hover:scale-110 flex items-center justify-center"
                        >
                            <HiX size={26} />
                        </button>
                    </div>

                    {/* LINKS */}
                    <div className="flex-1 flex items-center justify-center">
                        <ul className="space-y-10 text-4xl md:text-6xl font-bold text-center">
                            {[
                                { name: "Home", id: "home" },
                                { name: "Services", id: "services" },
                                { name: "Projects", id: "projects" },
                                { name: "About", id: "about" },
                                { name: "Contact", id: "contact" }
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    ref={(el) => (menuItems.current[i] = el)}
                                    onClick={() => handleLinkClick(item.id)}
                                    className="cursor-pointer text-white hover:text-red-500 transition-all duration-500 ease-out hover:scale-110 hover:tracking-wider"
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="pb-10 text-center text-sm text-gray-400 hover:text-gray-300 transition-colors duration-500">
                        © 2026 NX MEDIA
                    </p>
                </div>
            </div>
        </>
    );
}