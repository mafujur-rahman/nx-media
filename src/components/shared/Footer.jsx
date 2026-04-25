import React from "react";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white pt-12 pb-24 md:pb-28 lg:pb-[120px] lg:py-20 px-6 md:px-10 lg:px-16 overflow-hidden border-t border-white/5">
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Mobile Layout (default) */}
                <div className="block md:hidden">
                    {/* Logo - on top */}
                    <div className="flex justify-center w-full mb-8">
                        <img
                            src="/logo.png"
                            alt="NX Media Logo"
                            className="w-[180px] sm:w-[200px] object-contain select-none"
                        />
                    </div>

                    {/* Social Links - centered, single line, no wrap */}
                    <div className="flex justify-center mb-4">
                        <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 px-1">
                            {[
                                { name: "INSTAGRAM", url: "https://www.instagram.com/thenxmedia/" },
                                { name: "FACEBOOK", url: "https://www.facebook.com/thenxmedia" },
                                { name: "LINKEDIN", url: "https://www.linkedin.com/company/111777060/admin/dashboard/" },
                                { name: "BEHANCE", url: "https://www.behance.net/thenxmedia" },
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1  text-[10px] font-semibold hover:text-red-500 transition-all duration-300 group whitespace-nowrap"
                                >
                                    {link.name}
                                    {link.name !== "BEHANCE" && (
                                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-[10px]">
                                            →
                                        </span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>


                </div>

                {/* MD+ Layout (original): copyright+social left, logo right */}
                <div className="hidden md:flex md:flex-row md:items-center justify-between gap-12 mb-12">
                    {/* LEFT */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full md:w-auto">
                        <p className="text-sm md:text-base text-gray-400 tracking-tight">
                            © {new Date().getFullYear()} THE NX MEDIA.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            {[
                                { name: "INSTAGRAM", url: "https://www.instagram.com/thenxmedia/" },
                                { name: "FACEBOOK", url: "https://www.facebook.com/thenxmedia" },
                                { name: "LINKEDIN", url: "https://www.linkedin.com/company/111777060/admin/dashboard/" },
                                { name: "BEHANCE", url: "https://www.behance.net/thenxmedia" },
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm md:text-base lg:text-lg font-semibold hover:text-red-500 transition-all duration-300 group"
                                >
                                    {link.name}
                                    {link.name !== "BEHANCE" && (
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            →
                                        </span>
                                    )}
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
                <div className="w-full h-[1px] bg-white/10 mb-4" />

                {/* EMAIL */}
                <div className="text-center">
                    <p className="break-words text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-[8vw] 2xl:text-[6vw] font-bold tracking-tight leading-tight">
                        hello@thenxmedia.com
                    </p>
                </div>
                {/* DIVIDER */}
                <div className="w-full h-[1px] bg-white/10 mt-4" />

                {/* Copyright - at bottom */}
                <div className="text-center mt-3 block md:hidden">
                    <p className="text-xs text-gray-400 tracking-tight">
                        © {new Date().getFullYear()} THE NX MEDIA.
                    </p>
                </div>

            </div>
        </footer>
    );
}