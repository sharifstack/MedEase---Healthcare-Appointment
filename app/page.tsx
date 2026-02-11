import Image from "next/image";
import HeroSection from "./components/homepage/HeroSection";
import DoctorsExpertise from "./components/homepage/DoctorsExpertise";
import About from "./components/homepage/About";
import AppFeatures from "./components/homepage/AppFeatures";
import Testimonial from "./components/homepage/Testimonial";
import HealthAdvice from "./components/homepage/HealthAdvice";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DoctorsExpertise />
      <About />
      <AppFeatures />
      <Testimonial />
      <HealthAdvice />
    </div>
  );
}
