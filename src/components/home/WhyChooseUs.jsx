"use client";
import { Check, X, Users, PenTool, User, Briefcase } from "lucide-react";

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
                <h2 className="title_text text-center mb-16">
                    <span className="italic ">NX Media’s</span> Alternative?
                    <br />
                    <span className="font-bold">Think One More Time!</span>
                </h2>

                {/* Table Header */}
                <div className="grid grid-cols-[2.5fr_repeat(5,1fr)] text-md font-bold text-gray-400 mb-4 px-6">
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

                {/* IN HOUSE */}
                <Row
                    icon={<Users />}
                    title="In House Team"
                    desc="A full-time team may ensure consistency, but expertise is limited and cost remains fixed."
                    values={[false, false, false, true, false]}
                />

                {/* AGENCIES */}
                <Row
                    icon={<PenTool />}
                    title="Creative Agencies"
                    desc="Structured workflows but often expensive, slow, and less flexible."
                    values={[false, false, true, true, false]}
                />

                {/* FREELANCERS */}
                <Row
                    icon={<User />}
                    title="Freelancers"
                    desc="Budget-friendly but often lack reliability, consistency, and collaboration."
                    values={[false, true, false, false, true]}
                />

                {/* SELF SERVICE */}
                <Row
                    icon={<Briefcase />}
                    title="Self-Service Tools"
                    desc="DIY tools reduce cost, but lack strategic thinking and originality."
                    values={[false, false, true, true, false]}
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
                        : "bg-white/5 text-red-400"
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
