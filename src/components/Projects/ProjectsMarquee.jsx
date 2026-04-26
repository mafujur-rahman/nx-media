"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { projectsData } from "../fakeDB/ProjectsData";

export default function ProjectsMarquee() {
    const trackRef = useRef(null);
    const router = useRouter();

    // Get all projects from the data and format them for the marquee
    const getAllProjects = () => {
        return Object.keys(projectsData).map(slug => ({
            slug,
            ...projectsData[slug]
        }));
    };

    const projects = getAllProjects();

    useEffect(() => {
        const track = trackRef.current;
        if (!track || projects.length === 0) return;

        // Get the width of one set of items
        const itemCount = projects.length;
        const singleSetWidth = track.scrollWidth / 2; // Because we have 2 sets
        const animationDuration = singleSetWidth / 120; // Adjust speed here (50px per second)
        
        // Create seamless infinite animation
        const animation = gsap.to(track, {
            x: `-=${singleSetWidth}`,
            duration: animationDuration,
            ease: "none",
            repeat: -1,
            onRepeat: () => {
                // Jump back to start instantly without animation
                gsap.set(track, { x: 0 });
            }
        });

        // Pause animation on hover
        const handleMouseEnter = () => {
            animation.pause();
        };

        const handleMouseLeave = () => {
            animation.resume();
        };

        track.addEventListener("mouseenter", handleMouseEnter);
        track.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            animation.kill();
            track.removeEventListener("mouseenter", handleMouseEnter);
            track.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [projects]);

    const handleProjectClick = (slug) => {
        router.push(`/project/${slug}`);
    };

    return (
        <section className="bg-black py-24 overflow-hidden">
            {/* TEXT AREA (Centered) */}
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-white text-4xl lg:text-5xl font-bold">
                    Recent Work
                </h2>
            </div>

            {/* FULL WIDTH MARQUEE */}
            <div className="w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-8 w-max cursor-pointer"
                >
                    {/* Two sets of projects for seamless loop */}
                    {[...projects, ...projects].map((project, i) => (
                        <div
                            key={`${project?.slug}-${i}`}
                            className="w-[300px] sm:w-[400px] lg:w-[500px] rounded-[30px] overflow-hidden group relative flex-shrink-0"
                            onClick={() => handleProjectClick(project?.slug)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleProjectClick(project?.slug);
                                }
                            }}
                        >
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src={project?.images?.topImage}
                                    alt={project?.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <h3 className="text-white text-xl font-bold mb-2 px-4">
                                            {project?.title}
                                        </h3>
                                        <p className="text-white/80 text-sm">
                                            {project?.category}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}