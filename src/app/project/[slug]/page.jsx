// app/project/[slug]/page.js

import TopNavbar from "@/components/shared/TopNavbar";
import { getAllProjectSlugs, getProjectBySlug } from "@/components/fakeDB/ProjectsData";
import Banner from "@/components/Projects/Banner";
import ProjectOverview from "@/components/Projects/ProjectOverview";
import TopImage from "@/components/Projects/TopImage";
import HowWeBegan from "@/components/Projects/HowWeBegan";
import MissionObjective from "@/components/Projects/MissionObjective";
import ProjectsMarquee from "@/components/Projects/ProjectsMarquee";
import GlobalPresence from "@/components/home/GlobalPresence";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

// Generate static paths for all projects
export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs;
}

// Dynamic page component
export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <h1>Project not found</h1>
            </div>
        );
    }

    return (
        <>
            <TopNavbar />
            <Navbar />
            <Banner project={project} />
            <ProjectOverview project={project} />
            {/* <TopImage project={project} /> */}
            <HowWeBegan project={project} />
            <MissionObjective project={project} />
            <ProjectsMarquee />
            <GlobalPresence />
            <Footer />
        </>
    );
}