import React from 'react';

export default function Footer() {
    return (
        <footer className="relative bg-black text-white py-20 px-6 md:px-12 overflow-hidden border-t border-white/5">

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">

                    {/* LEFT */}
                    <div className="space-y-6">
                        <div className="text-xl font-medium tracking-tighter text-gray-400">
                            © 2020—2025 <br />
                            NX MEDIA LABS.
                        </div>

                        <div className="flex flex-col gap-2">
                            {['INSTAGRAM', 'FACEBOOK', 'SPOTIFY'].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="flex items-center gap-1 text-xl font-bold hover:text-red-500 transition-colors group"
                                >
                                    {link}
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full md:w-auto text-right">
                        {/* LOGO IMAGE */}
                        <img
                            src="/logo.png"  
                            alt="NX Media Logo"
                            className="w-[260px] md:w-[360px] ml-auto opacity-90 select-none"
                        />

                        <div className="flex flex-wrap gap-6 mt-6 justify-end text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            <a href="#" className="hover:text-white">Terms & Conditions</a>
                            <a href="#" className="hover:text-white">Cookies Policy</a>
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="w-full h-[1px] bg-white/10 mb-16" />

                {/* NEWSLETTER */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase">
                        Subscribe to our newsletter.
                    </h3>

                    <div className="flex w-full md:w-auto items-center gap-2">
                        <div className="relative flex-grow md:w-80">
                            <input
                                type="email"
                                placeholder="your@email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-red-500/50 transition-all"
                            />
                        </div>

                        <button className="flex items-center gap-2  text-black px-6 py-4 rounded-full font-bold bg-red-500 transition-all whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Sign me up
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14m-7-7 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
