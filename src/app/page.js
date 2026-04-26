"use client"
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import FAQSection from "@/components/home/FAQ";
import GlobalPresence from "@/components/home/GlobalPresence";
import IndustriesWeWork from "@/components/home/IndustriesWeWork";
import LeaderSection from "@/components/home/LeaderSection";
import Optimization from "@/components/home/Optimization";
import Pricing from "@/components/home/Pricing";
import Service from "@/components/home/Service";
import Testimonials from "@/components/home/Testimonials";
import VideoSection from "@/components/home/Video";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorkingProcess from "@/components/home/WorkingProcess";
import WorkProcess from "@/components/home/Projects";
import ScrollToTop from "@/components/ScrollToTop";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Projects from "@/components/home/Projects";
import { useEffect } from "react";
import TechnologySection from "@/components/home/TechnologySection";

export default function Home() {

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  
  return (
    <div>
      <Navbar />
      <Banner />
      <Optimization />
      <Service />
      <Pricing />
      
      <IndustriesWeWork />
      <Projects />
      <WhyChooseUs />
      {/* <LeaderSection /> */}
      <Testimonials />
      <WorkingProcess />
      <TechnologySection />
      <FAQSection />
      <Contact />
      <GlobalPresence />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
