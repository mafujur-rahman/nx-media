// app/project/[slug]/components/TopImage.js
"use client";

export default function TopImage({ project }) {
    return (
        <section className="relative bg-black py-20 overflow-hidden">
            <div className="w-full overflow-hidden">
                <div className="w-full overflow-hidden">
                    <img
                        src={project?.images?.topImage}
                        alt={project?.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}