import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-8 bg-black/80 backdrop-blur-md px-8 py-3 rounded-2xl border border-white/10 shadow-2xl">
        
        {/* Nav Links */}
        <a href="#" className="text-white font-medium hover:text-purple-500 transition-colors">Projects</a>
        <a href="#" className="text-white font-medium hover:text-purple-500 transition-colors">Services</a>

        {/* Center Action Button */}
        <button className="flex items-center gap-3 bg-white/5 border border-purple-500/50 px-5 py-2 rounded-xl group hover:border-purple-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            {/* Simple Smile Icon using SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10a6 6 0 0 0-12 0" />
              <path d="M9 14h.01" /><path d="M15 14h.01" />
            </svg>
          </div>
          <span className="text-white font-bold tracking-tight">Start a Project</span>
        </button>

        <a href="#" className="text-white font-medium hover:text-purple-500 transition-colors">Pricing</a>
        <a href="#" className="text-white font-medium hover:text-purple-500 transition-colors">More</a>
        
      </nav>
    </div>
  );
};

export default Navbar;