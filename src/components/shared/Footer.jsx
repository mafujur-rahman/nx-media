import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-12 pb-24 md:pb-28 lg:pb-[120px] lg:py-20 px-6 md:px-10 lg:px-16 overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-12">

          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full md:w-auto">
            <p className="text-sm md:text-base text-gray-400 tracking-tight">
              © {new Date().getFullYear()} THE NX MEDIA.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {["INSTAGRAM", "FACEBOOK", "LINKEDIN"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center gap-2 text-sm md:text-base lg:text-lg font-semibold hover:text-red-500 transition-all duration-300 group"
                >
                  {link}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img
              src="/logo.png"
              alt="NX Media Logo"
              className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[340px] object-contain select-none"
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 mb-4 " />

        {/* EMAIL */}
        <div className="text-center">
          <p className="break-words text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-[8vw] 2xl:text-[6vw] font-bold tracking-tight leading-tight">
            hello@thenxmedia.com
          </p>
        </div>

      </div>
    </footer>
  );
}
