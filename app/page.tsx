import Image from "next/image";
import HeroSection from "./components/homepage/HeroSection";
import DoctorsExpertise from "./components/homepage/DoctorsExpertise";
import About from "./components/homepage/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DoctorsExpertise />
      <About />
    </div>
  );
}
