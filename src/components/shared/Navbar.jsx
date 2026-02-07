"use client";
import React, { useState, useRef } from 'react';

const Navbar = () => {
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverModal, setHoverModal] = useState(false);
  const [imgExpanded, setImgExpanded] = useState(false);
  const hideTimeout = useRef(null);

  const services = [
    { title: "Brand Identity", desc: "Complete visual identity systems" },
    { title: "Graphics Solution", desc: "Engaging animations and micro-interactions" },
    { title: "UI/UX Design", desc: "Intuitive interfaces that users love" },
    { title: "Web Development", desc: "Fast, responsive, and modern websites" },
    { title: "Consulting", desc: "Strategic design and tech guidance" }
  ];

  const isHovered = hoverButton || hoverModal;

  const handleMouseLeave = () => {
    // Small delay before hiding
    hideTimeout.current = setTimeout(() => {
      setHoverButton(false);
      setHoverModal(false);
      setImgExpanded(true);
    }, 150); // 150ms delay
  };

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-8 bg-black/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-2xl">

        <a href="#" className="text-white font-medium hover:text-red-500 transition-colors">Projects</a>
        <a href="#" className="text-white font-medium hover:text-red-500 transition-colors">Services</a>

        <div className="relative">
          {/* Button */}
          <button
            className="flex items-center gap-3 bg-white/5 border border-red-500/50 px-5 py-2 rounded-full group hover:border-red-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            onMouseEnter={() => { setHoverButton(true); setImgExpanded(false); handleMouseEnter(); }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center overflow-hidden p-1.5">
              <img
                src="logo.png"
                alt="NX Media"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold tracking-tight">Start a Project</span>
          </button>

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
                  <div key={i} className="group cursor-pointer">
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
                    src="/person.jpg"
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
        </div>

        <a href="#" className="text-white font-medium hover:text-red-500 transition-colors">Pricing</a>
        <a href="#" className="text-white font-medium hover:text-red-500 transition-colors">More</a>

      </nav>
    </div>
  );
};

export default Navbar;
