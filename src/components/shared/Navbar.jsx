"use client";
import React, { useState, useRef } from "react";
import { HiOutlineCurrencyDollar, HiOutlineFolder, HiOutlineMenu, HiOutlinePuzzle } from "react-icons/hi";

const Navbar = () => {
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverModal, setHoverModal] = useState(false);
  const hideTimeout = useRef(null);

  const services = [
    { title: "Brand Identity", desc: "Complete visual identity systems" },
    { title: "UI/UX Design", desc: "Intuitive interfaces that users love" },
    { title: "Web Development", desc: "Fast, responsive, and modern websites" },
    { title: "Consulting", desc: "Strategic design and tech guidance" },
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

  return (
    <>
      {/* ===================== DESKTOP / TABLET ===================== */}
      <div className="hidden sm:flex fixed bottom-4 left-0 right-0 z-50 justify-center px-4">
        <div className="animated-border rounded-full ">

          <nav className="flex items-center gap-6 px-8 py-3 rounded-full bg-black/90 backdrop-blur-md shadow-2xl border border-white/10">

            <a className="text-white font-medium hover:text-red-500 cursor-pointer">Projects</a>
            <a className="text-white font-medium hover:text-red-500 cursor-pointer">Services</a>

            <div className="relative">
              <button
                onMouseEnter={() => { setHoverButton(true); handleMouseEnter(); }}
                onMouseLeave={handleMouseLeave}
                className="relative flex items-center gap-3 bg-black border border-red-500/50 px-5 py-2 rounded-full "
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <img src="/NX-media.png" className="w-6 h-6 object-contain" alt="NX Media" />
                </div>
                <span className="text-white font-bold">Start a Project</span>
              </button>
            </div>

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

            <a href="#" className="text-white font-medium hover:text-red-500 transition-colors">Pricing</a>
            <a href="#" className="text-white font-medium hover:text-red-500 transition-colors">Faq</a>

          </nav>

        </div>
      </div>





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
        <div className="bg-black/95 backdrop-blur-md py-2 border-t border-white/10
                  grid grid-cols-5 place-items-center">

          {/* Column 1 */}
          <div className="flex flex-col items-center text-white cursor-pointer">
            <HiOutlineFolder className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">Projects</span>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-white cursor-pointer">
            <HiOutlinePuzzle className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">Services</span>
          </div>

          {/* Column 3 (Empty for center button) */}
          <div></div>

          {/* Column 4 */}
          <div className="flex flex-col items-center text-white cursor-pointer">
            <HiOutlineCurrencyDollar className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">Pricing</span>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col items-center text-white cursor-pointer">
            <HiOutlineMenu className="text-xl mb-0.5" />
            <span className="text-[10px] font-medium">Faq</span>
          </div>

        </div>
      </div>


    </>
  );
};

export default Navbar;