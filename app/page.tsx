import Image from "next/image";
import HeroSection from "./components/homepage/HeroSection";
import DoctorsExpertise from "./components/homepage/DoctorsExpertise";
import About from "./components/homepage/About";
import AppFeatures from "./components/homepage/AppFeatures";
import Testimonial from "./components/homepage/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DoctorsExpertise />
      <About />
      <AppFeatures />
      <Testimonial />
    </div>
  );
}
