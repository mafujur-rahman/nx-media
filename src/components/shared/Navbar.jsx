"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  HiOutlineCurrencyDollar, HiCurrencyDollar,
  HiOutlineFolder, HiFolder,
  HiOutlinePuzzle, HiPuzzle,
  HiOutlineUserCircle, HiUserCircle,
  HiX,
  HiBriefcase,
  HiOutlineBriefcase
} from "react-icons/hi";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import gsap from 'gsap';

const Navbar = () => {
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverModal, setHoverModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const buttonRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const hideTimeout = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const rotatingBorderRef = useRef(null);
  const containerRef = useRef(null);

  const services = [
    { id: "brand-identity", title: "Brand Identity", desc: "Complete visual identity systems" },
    { id: "ui-ux-design", title: "UI/UX Design", desc: "Intuitive interfaces that users love" },
    { id: "web-development", title: "Web Development", desc: "Fast, responsive, and modern websites" },
    { id: "consulting", title: "Consulting", desc: "Strategic design and tech guidance" },
  ];

  const isHovered = hoverButton || hoverModal;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isHovered && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.top - 400,
        left: rect.left + rect.width / 2,
      });
    }
  }, [isHovered]);

  // Initialize the rotating border animation
  useEffect(() => {
    if (!rotatingBorderRef.current || !containerRef.current) return;

    const updatePathDimensions = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Calculate border radius (matching rounded-full which is 9999px)
      // For perfect pill shape, radius should be half the height
      const radius = height / 2;

      // Create path that perfectly matches the rounded rectangle
      // Adding a small offset to ensure the border sits exactly on the edge
      const d = `
        M ${radius},0
        L ${width - radius},0
        A ${radius},${radius} 0 0,1 ${width},${radius}
        L ${width},${height - radius}
        A ${radius},${radius} 0 0,1 ${width - radius},${height}
        L ${radius},${height}
        A ${radius},${radius} 0 0,1 0,${height - radius}
        L 0,${radius}
        A ${radius},${radius} 0 0,1 ${radius},0
        Z
      `;

      rotatingBorderRef.current.setAttribute("d", d);

      // Get the total length of the path
      const length = rotatingBorderRef.current.getTotalLength();

      // Fixed dash length for consistent visible segment
      const dashLength = 100;

      // Set up dasharray
      gsap.set(rotatingBorderRef.current, {
        strokeDasharray: `${dashLength} ${length - dashLength}`,
        strokeDashoffset: 0,
      });

      // Kill any existing animation
      if (rotatingBorderRef.current.animation) {
        rotatingBorderRef.current.animation.kill();
      }

      // Create smooth continuous rotation animation
      const animation = gsap.to(rotatingBorderRef.current, {
        strokeDashoffset: -length,
        duration: 8,
        repeat: -1,
        ease: "none",
      });

      rotatingBorderRef.current.animation = animation;
    };

    // Initial update
    updatePathDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updatePathDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      if (rotatingBorderRef.current?.animation) {
        rotatingBorderRef.current.animation.kill();
      }
    };
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ["projects", "services", "pricing", "about"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHoverButton(false);
      setHoverModal(false);
    }, 150);
  };

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  };

  const openServiceForm = (service) => {
    setSelectedService(service);
    setShowFormModal(true);
    setHoverButton(false);
    setHoverModal(false);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
    setSelectedService(null);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isHovered && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setModalPosition({
          top: rect.top - 400,
          left: rect.left + rect.width / 2,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHovered]);

  return (
    <>
      {/* ===================== DESKTOP / TABLET ===================== */}
      <div className="hidden sm:flex fixed bottom-4 left-0 right-0 z-50 justify-center px-4">
        <div
          ref={containerRef}
          className="relative"
        >
          {/* Rotating Red Border SVG - Now perfectly wrapped */}
          <svg
            className="absolute pointer-events-none"
            style={{
              top: '-2px',
              left: '-2px',
              width: 'calc(100% + 4px)',
              height: 'calc(100% + 4px)',
              zIndex: 10,
            }}
          >
            <path
              ref={rotatingBorderRef}
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Inner Container */}
          <nav className="relative rounded-full flex items-center gap-6 px-8 py-3 bg-black shadow-2xl border border-white/10">
            {/* Projects Link */}
            <a
              onClick={() => scrollToSection("projects")}
              className="text-white font-medium hover:text-red-500 cursor-pointer transition-colors"
            >
              Projects
            </a>

            {/* Services Link */}
            <a
              onClick={() => scrollToSection("services")}
              className="text-white font-medium hover:text-red-500 cursor-pointer transition-colors"
            >
              Services
            </a>

            {/* Start a Project Button */}
            <div
              ref={buttonRef}
              onMouseEnter={() => { setHoverButton(true); handleMouseEnter(); }}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="relative flex items-center gap-3 bg-black border border-red-500/50 px-5 py-2 rounded-full"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <img src="/NX-media.png" className="w-6 h-6 object-contain" alt="NX Media" />
                </div>
                <span className="text-white font-bold">Start a Project</span>
              </button>
            </div>

            {/* Pricing Link */}
            <a
              onClick={() => scrollToSection("pricing")}
              className="text-white font-medium hover:text-red-500 cursor-pointer transition-colors"
            >
              Pricing
            </a>

            {/* About Link */}
            <a
              onClick={() => scrollToSection("about")}
              className="text-white font-medium hover:text-red-500 cursor-pointer transition-colors"
            >
              About
            </a>
          </nav>
        </div>
      </div>

      {/* Floating Modal - Using Portal */}
      {mounted && isHovered && createPortal(
        <div
          onMouseEnter={() => { setHoverModal(true); handleMouseEnter(); }}
          onMouseLeave={handleMouseLeave}
          className="fixed z-[100]"
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-2xl flex w-[700px] overflow-hidden text-slate-800">
            {/* Left Column */}
            <div className="flex-1 grid grid-cols-1 gap-y-4">
              {services.map((s, i) => (
                <div
                  key={i}
                  onClick={() => openServiceForm(s)}
                  className="group cursor-pointer"
                >
                  <h4 className="font-bold text-lg mb-0.5 group-hover:text-red-500 transition-colors">{s.title}</h4>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Column: Featured Card */}
            <div className="w-[250px] ml-6 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex flex-col">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">From Pixels to Presence</h3>
                <p className="text-sm text-slate-600">Your brand isn't what you say it is—it's what they remember. We make sure both align.</p>
              </div>
              <div className="mt-auto bg-slate-200 relative overflow-hidden transition-all duration-500 h-60">
                <img
                  src="/images/team/nazmul-islam.png"
                  alt="Featured"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-bold text-lg">Nazmul Islam</span>
                  <span className="text-white/80 italic text-sm">Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pointer - Now pointing down to the button */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
        </div>,
        document.body
      )}

      {/* ===================== SERVICE FORM MODAL ===================== */}
      {showFormModal && selectedService && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl w-full max-w-md border border-white/10 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
              <button
                onClick={closeFormModal}
                className="text-white/60 hover:text-white transition-colors"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Project Details</label>
                <textarea
                  rows="4"
                  placeholder={`Tell us about your ${selectedService.title.toLowerCase()} project...`}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors">
                  <option value="" className="bg-gray-800">Select budget range</option>
                  <option value="<5k" className="bg-gray-800">Less than $5,000</option>
                  <option value="5k-15k" className="bg-gray-800">$5,000 - $15,000</option>
                  <option value="15k-30k" className="bg-gray-800">$15,000 - $30,000</option>
                  <option value=">30k" className="bg-gray-800">$30,000+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors mt-6 cursor-pointer"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===================== MOBILE NAVBAR ===================== */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* NAVBAR */}
        <div className="bg-black/95 backdrop-blur-md py-2 border-t border-white/10 grid grid-cols-5 place-items-center">
          {/* Projects */}
          <div
            onClick={() => scrollToSection("projects")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            {activeSection === "projects" ? (
              <HiFolder className="text-xl mb-0.5 text-red-500" />
            ) : (
              <HiOutlineFolder className="text-xl mb-0.5" />
            )}
            <span className={`text-[10px] font-medium ${activeSection === "projects" ? "text-red-500" : "text-white"}`}>
              Projects
            </span>
          </div>

          {/* Services */}
          <div
            onClick={() => scrollToSection("services")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            {activeSection === "services" ? (
              <HiBriefcase className="text-xl mb-0.5 text-red-500" />
            ) : (
              <HiOutlineBriefcase className="text-xl mb-0.5" />
            )}
            <span className={`text-[10px] font-medium ${activeSection === "services" ? "text-red-500" : "text-white"}`}>
              Services
            </span>
          </div>

          {/* Center Logo - Inside navbar, same alignment */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex flex-col items-center text-white cursor-pointer  rounded-lg"
          >
            <div className="w-8 h-8 bg-white rounded-lg border border-red-500 flex items-center justify-center mb-0.5">
              <img
                src="/NX-media.png"
                className="w-6 h-6 object-contain"
                alt="NX Media"
              />
            </div>
          </div>

          {/* Pricing */}
          <div
            onClick={() => scrollToSection("pricing")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            {activeSection === "pricing" ? (
              <HiCurrencyDollar className="text-xl mb-0.5 text-red-500" />
            ) : (
              <HiOutlineCurrencyDollar className="text-xl mb-0.5" />
            )}
            <span className={`text-[10px] font-medium ${activeSection === "pricing" ? "text-red-500" : "text-white"}`}>
              Pricing
            </span>
          </div>

          {/* About - With appropriate user icon */}
          <div
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            {activeSection === "about" ? (
              <HiUserCircle className="text-xl mb-0.5 text-red-500" />
            ) : (
              <HiOutlineUserCircle className="text-xl mb-0.5" />
            )}
            <span className={`text-[10px] font-medium ${activeSection === "about" ? "text-red-500" : "text-white"}`}>
              About
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;