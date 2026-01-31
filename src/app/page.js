import Banner from "@/components/home/Banner";
import Optimization from "@/components/home/Optimization";
import Service from "@/components/home/Service";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Optimization />
      <Service />
      <Footer />
    </div>
  );
}
