import Banner from "@/components/home/Banner";
import Optimization from "@/components/home/Optimization";
import Pricing from "@/components/home/Pricing";
import Service from "@/components/home/Service";
import WorkProcess from "@/components/home/WorkProcess";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <Optimization />
      <Service />
      <Pricing />
      <WorkProcess />
      <Footer />
    </div>
  );
}
