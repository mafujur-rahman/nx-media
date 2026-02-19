import GlobalPresence from '@/components/home/GlobalPresence';
import Banner from '@/components/Projects/Banner';
import HowWeBegan from '@/components/Projects/HowWeBegan';
import MissionObjective from '@/components/Projects/MissionObjective';
import ProjectOverview from '@/components/Projects/ProjectOverview';
import ProjectsMarquee from '@/components/Projects/ProjectsMarquee';
import TopImage from '@/components/Projects/TopImage';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import TopNavbar from '@/components/shared/TopNavbar';
import React from 'react';

const ProjectsPage = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Banner />
      <ProjectOverview />
      <TopImage />
      <HowWeBegan />
      <MissionObjective />
      <ProjectsMarquee />
      <GlobalPresence />
      <Footer />
    </div>
  );
};

export default ProjectsPage;