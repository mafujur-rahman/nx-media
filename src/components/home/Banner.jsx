import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden text-white flex flex-col items-center justify-center px-6">

            {/* GRID BACKGROUND EFFECT */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* LOGO  */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                <Image
                    src="/logo.png"
                    alt="NX MEDIA"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* TOP BADGE */}
            <div className="relative z-10 mb-8">
                <span className="px-6 py-2 rounded-full border border-dashed border-yellow-500/50 bg-black/50 text-xs md:text-sm font-medium tracking-wide">
                    Trusted By 400+ Clients
                </span>
            </div>

            {/* MAIN HEADING */}
            <div className="relative z-10 text-center max-w-5xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                    We Build <span className="text-[#F3D371]">High-Impact Websites</span> for Startups and Established Businesses
                </h1>

                {/* SUBTEXT */}
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Turn Your Idea Into Reality. Professional Websites designed to impress, convert, and grow with your business.
                </p>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 items-center">
                <button className="flex items-center gap-2 bg-[#F3D371] text-black px-8 py-4 rounded-full font-bold hover:bg-[#eec655] transition-all">
                    Build My Website
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </button>

                <button className="flex items-center gap-2 bg-transparent border border-[#F3D371] text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
                    View Our Portfolio
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </button>
            </div>

            {/* FOOTER TEXT */}
            <p className="relative z-10 mt-6 text-xs text-gray-500 font-medium">
                100% Satisfaction Guarantee with Full Refund
            </p>

            {/* SCATTERED DOTS (Optional aesthetic) */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-500 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-200 rounded-full blur-sm animate-pulse"></div>

        </section>
    );
}