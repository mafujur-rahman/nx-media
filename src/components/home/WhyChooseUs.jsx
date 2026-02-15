"use client";
import { Check, X, Users, PenTool, User, Briefcase, Building, Star, Zap } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="bg-black text-white py-28">
            <div className="max-w-7xl mx-auto">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className=" px-6 py-2 rounded-full border border-dashed border-red-500/90 bg-black/50 text-xs md:text-sm font-medium">
                        Why Choose Us
                    </span>
                </div>

                {/* Heading */}
                <h2 className="title_text text-center mb-20">
                    We don’t say yes to everyone. But we’re hoping you’re the exception.
                </h2>

                {/* Table Header */}
                <div className="grid grid-cols-[2.5fr_repeat(5,1fr)] text-md font-bold text-gray-400 mb-4 px-6 mt-16">
                    <div>Platform</div>
                    <div className="text-center">Speed</div>
                    <div className="text-center">Flexibility</div>
                    <div className="text-center">Quality</div>
                    <div className="text-center">Scalability</div>
                    <div className="text-center">Affordability</div>
                </div>

                {/* NX MEDIA (ACTIVE ROW) */}
                <div className="grid grid-cols-[2.5fr_repeat(5,1fr)] items-center gap-4 px-6 py-6 mb-6 rounded-2xl bg-gradient-to-r from-red-600/30 via-red-500/10 to-transparent border border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.25)]">
                    <Platform
                        icon={<Briefcase />}
                        title="NX Media"
                        desc="Expert-driven & committed to premium quality. Get fast, scalable results with full creative support — without hiring in-house."
                        active
                    />
                    <CheckItem />
                    <CheckItem />
                    <CheckItem />
                    <CheckItem />
                    <CheckItem />
                </div>

                {/* IN HOUSE TEAM */}
                <Row
                    icon={<Users />}
                    title="In House Team"
                    desc="Full control and daily collaboration, but expensive overhead, limited perspective, and hard to scale."
                    values={[false, false, false, true, false]}
                />

                {/* TRADITIONAL AGENCIES */}
                <Row
                    icon={<Building />}
                    title="Traditional Agencies"
                    desc="Big name, big process, big bills. Often slow, bureaucratic, and you talk to account managers—not the people doing the work."
                    values={[false, false, true, true, false]}
                />

                {/* FREELANCERS */}
                <Row
                    icon={<User />}
                    title="Freelancers"
                    desc="Affordable and flexible, but solo operators have blind spots, limited bandwidth, and can disappear when you need them most."
                    values={[false, true, false, false, true]}
                />

                {/* DIY TOOLS */}
                <Row
                    icon={<Zap />}
                    title="DIY Tools"
                    desc="Cheap and fast, but you get what you pay for: templates everyone else uses, zero strategy, and no originality."
                    values={[false, false, true, true, false]}
                />

                {/* THENXMEDIA */}
                <Row
                    icon={<Star />}
                    title="thenxmedia"
                    desc="A global creative partner with the agility of a small team and the experience of a big one. You work directly with us. No middlemen. No ego. Just work that works."
                    values={[true, true, true, true, true]}
                />
            </div>
        </section>
    );
}

/* ---------- Components ---------- */

function Platform({ icon, title, desc, active }) {
    return (
        <div className="flex gap-4 items-center">
            <div
                className={`px-8 py-8 flex items-center justify-center rounded-xl ${active
                    ? "bg-red-500 text-white"
                    : "bg-white/5 text-red-500"
                    }`}
            >
                {icon}
            </div>
            <div>
                <h4 className="font-semibold mb-1 text-2xl">{title}</h4>
                <p className="text-sm md:text-md text-gray-300 max-w-md">{desc}</p>
            </div>
        </div>
    );
}

function Row({ icon, title, desc, values }) {
    return (
        <div className="grid grid-cols-[2.5fr_repeat(5,1fr)] items-center gap-4 px-6 py-8 border-t border-white/10">
            <Platform icon={icon} title={title} desc={desc} />
            {values.map((v, i) => (
                <div key={i} className="flex justify-center">
                    {v ? (
                        <Check className="text-white w-5 h-5 md:w-8 md:h-8" />
                    ) : (
                        <X className="text-red-500 w-5 h-5 md:w-8 md:h-8" />
                    )}
                </div>
            ))}
        </div>
    );
}

function CheckItem() {
    return (
        <div className="flex justify-center">
            <Check className="text-white w-5 h-5 md:w-8 md:h-8" />
        </div>
    );
}
