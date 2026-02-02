import React from 'react';

export default function Footer() {
    return (
        <footer className="relative bg-black text-white py-20 px-6 md:px-12 overflow-hidden border-t border-white/5">

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-10">

                    {/* LEFT */}
                    <div className="space-y-6">
                        <div className="text-xl font-medium tracking-tighter text-gray-400">
                            <p>© {new Date().getFullYear()} THE NX MEDIA.</p>
                        </div>

                        <div className="flex  gap-2">
                            {['INSTAGRAM', 'FACEBOOK', 'LINKDIN'].map((link) => (
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
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="w-full h-[1px] bg-white/10 mb-2" />

                {/* mail */}
                <div className="w-full mb-4 text-center">
                    <p className="w-full text-white text-xl md:text-2xl xl:text-[12.5vh] font-bold tracking-tight ">
                        hello@thenxmedia.com
                    </p>
                </div>


            </div>
        </footer>
    );
}
