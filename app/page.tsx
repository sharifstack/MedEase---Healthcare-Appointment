import Image from "next/image";
import HeroSection from "./components/homepage/HeroSection";
import DoctorsExpertise from "./components/homepage/DoctorsExpertise";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DoctorsExpertise />
    </div>
  );
}
