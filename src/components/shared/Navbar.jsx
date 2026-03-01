"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiOutlineCurrencyDollar, HiOutlineFolder, HiOutlineMenu, HiOutlinePuzzle, HiX } from "react-icons/hi";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverModal, setHoverModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const hideTimeout = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

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
      // Position the modal ABOVE the button (subtract modal height + spacing)
      // Since navbar is at bottom, we need to go UP from the button
      setModalPosition({
        top: rect.top - 400,
        left: rect.left + rect.width / 2,
      });
    }
  }, [isHovered]);

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
    // If not on homepage → go there with hash
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    // If already on homepage → smooth scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Calculate modal position whenever button position might change
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
        <div className="animated-border">
          <nav className="flex items-center gap-6 px-8 py-3 rounded-full bg-black/90 backdrop-blur-md shadow-2xl border border-white/10">
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

            {/* FAQ Link */}
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
                <h3 className="font-bold text-lg mb-1">Level Up Like Player 456</h3>
                <p className="text-sm text-slate-600">Our services help you win the design game.</p>
              </div>
              <div className="mt-auto bg-slate-200 relative overflow-hidden transition-all duration-500 h-60">
                <img
                  src="/images/team/nazmul-islam.png"
                  alt="Featured"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-bold text-lg">Squid Games</span>
                  <span className="text-white/80 italic text-sm">UI/UX Design</span>
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
        {/* FLOATING CENTER BUTTON */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-50">
          <button className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border-2 border-red-500 shadow-2xl">
            <img
              src="/NX-media.png"
              className="w-12 h-12 object-contain"
              alt="NX Media"
            />
          </button>
        </div>

        {/* NAVBAR */}
        <div className="bg-black/95 backdrop-blur-md py-2 border-t border-white/10 grid grid-cols-5 place-items-center">
          {/* Projects */}
          <div
            onClick={() => scrollToSection("projects")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            <HiOutlineFolder className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">Projects</span>
          </div>

          {/* Services */}
          <div
            onClick={() => scrollToSection("services")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            <HiOutlinePuzzle className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">Services</span>
          </div>

          {/* Empty for center button */}
          <div></div>

          {/* Pricing */}
          <div
            onClick={() => scrollToSection("pricing")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            <HiOutlineCurrencyDollar className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">Pricing</span>
          </div>

          {/* About */}
          <div
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            <HiOutlineMenu className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">About</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;