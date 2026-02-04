import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import GlobalPresence from "@/components/home/GlobalPresence";
import IndustriesWeWork from "@/components/home/IndustriesWeWork";
import Optimization from "@/components/home/Optimization";
import Pricing from "@/components/home/Pricing";
import Service from "@/components/home/Service";
import Testimonials from "@/components/home/Testimonials";
import VideoSection from "@/components/home/Video";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorkProcess from "@/components/home/WorkProcess";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* <VideoSection /> */}
      <Optimization />
      <Service />
      <Pricing />
      <WorkProcess />
      <IndustriesWeWork />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <GlobalPresence />
      <Footer />
    </div>
  );
}
