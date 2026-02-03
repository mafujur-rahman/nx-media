"use client";

export default function GlobalPresence() {
    const locations = [
        {
            country: "United States",
            address: "16 Cove Road\nMount Arlington, NJ 07856",
        },
        {
            country: "Australia",
            address: "155 Bennett Rd, St Clair NSW 2759",
        },
        {
            country: "South Africa",
            address: "55 Mons Rd, Bellevue East\nJohannesburg, 2198",
        },
        {
            country: "Singapore",
            address: "6 Raffles Blvd, Marina Square",
        },
        {
            country: "Italy",
            address: "Via Bari, 9, 03043 Cassino, FR",
        },
        {
            country: "Dubai",
            address: "AlFattan Downtown – 32d St\nAl Satwa",
        },
        {
            country: "Cyprus",
            address: "Estias 5, Strovolos\n2001",
        },
        {
            country: "Bangladesh",
            address: "Ventura Iconia, Plot 37 Road No.11\nBanani, Dhaka 1213",
        },
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
            <div className="relative z-10 h-full flex items-end justify-center pb-24 px-6">
                <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {locations.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/15 bg-black/10 backdrop-blur-md p-5 text-center shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                        >
                            <h4 className="text-white font-semibold text-lg mb-2">
                                {item.country}
                            </h4>

                            <p className="text-white/70 text-sm whitespace-pre-line leading-relaxed">
                                {item.address}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            {/* TOP FADE (SPACE GLOW EFFECT) */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        </section>
    );
}
