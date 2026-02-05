
export default function GlobalPresence() {
    const locations = [
        { country: "United States" },
        { country: "Australia" },
        { country: "South Africa" },
        { country: "Canada" },
        { country: "Italy" },
        { country: "France" },
        { country: "Germany" },
        { country: "England" },
    ];

    return (
        <section className="relative h-[90vh] w-full overflow-hidden">

            {/* VIDEO BACKGROUND */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/footer_globe.mp4" type="video/mp4" />
            </video>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 px-6">
                
                {/* TITLE ABOVE GRID */}
                <h2 className="text-3xl sm:text-4xl font-bold font-bricolage text-white mb-6 text-center">
                    Our Clients Across the Globe
                </h2>

                {/* LOCATIONS GRID */}
                <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locations.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/15 bg-black/10 backdrop-blur-md p-5 text-center shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                        >
                            <h4 className="text-white font-semibold text-lg">
                                {item.country}
                            </h4>                        
                        </div>
                    ))}
                </div>
            </div>

            {/* TOP FADE (SPACE GLOW EFFECT) */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        </section>
    );
}
