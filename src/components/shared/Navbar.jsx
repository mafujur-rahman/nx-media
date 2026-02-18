"use client";
import React, { useState, useRef } from "react";
import { HiOutlineCurrencyDollar, HiOutlineFolder, HiOutlineMenu, HiOutlinePuzzle, HiX } from "react-icons/hi";

const Navbar = () => {
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverModal, setHoverModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const hideTimeout = useRef(null);

  const services = [
    { id: "brand-identity", title: "Brand Identity", desc: "Complete visual identity systems" },
    { id: "ui-ux-design", title: "UI/UX Design", desc: "Intuitive interfaces that users love" },
    { id: "web-development", title: "Web Development", desc: "Fast, responsive, and modern websites" },
    { id: "consulting", title: "Consulting", desc: "Strategic design and tech guidance" },
  ];

  const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "Faq" }
  ];

  const isHovered = hoverButton || hoverModal;

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ===================== DESKTOP / TABLET ===================== */}
      <div className="hidden sm:flex fixed bottom-4 left-0 right-0 z-50 justify-center px-4">
        <div className="animated-border rounded-full">
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

            {/* Start a Project Button (between Services and Pricing) */}
            <div className="relative">
              <button
                onMouseEnter={() => { setHoverButton(true); handleMouseEnter(); }}
                onMouseLeave={handleMouseLeave}
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
              onClick={() => scrollToSection("faq")}
              className="text-white font-medium hover:text-red-500 cursor-pointer transition-colors"
            >
              Faq
            </a>

            {/* Floating Modal */}
            <div
              onMouseEnter={() => { setHoverModal(true); handleMouseEnter(); }}
              onMouseLeave={handleMouseLeave}
              className={`absolute bottom-full mb-6 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out transform origin-bottom
              ${isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}
            `}
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
                  <div className={`mt-auto bg-slate-200 relative overflow-hidden transition-all duration-500 h-60`}>
                    <img
                      src="/images/team/nazmul.jpeg"
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

              {/* Bottom Pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
            </div>
          </nav>
        </div>
      </div>

      {/* ===================== SERVICE FORM MODAL ===================== */}
      {showFormModal && selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
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

          {/* FAQ */}
          <div
            onClick={() => scrollToSection("faq")}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            <HiOutlineMenu className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">Faq</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;