import React from "react";
import SliderCard from "../ui/SliderCard";
import { RiHeartPulseFill } from "react-icons/ri";
import { PiBabyFill, PiBrainFill, PiEarBold } from "react-icons/pi";

const DoctorsExpertise = () => {
  return (
    <div className="md:py-30 py-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-[60px] font-medium">
            Choose Doctor's
            <span className="font-expertise text-primary font-bold">
              {" "}
              Expertise
            </span>
          </h1>

          <button className="font-medium text-primary text-2xl">See All</button>
        </div>

        <div className="slider py-10 flex gap-6">
          <SliderCard
            specialistName="Cardiologist"
            desc="Heart specialist focusing on cardiovascular health and diseases."
            icon={<RiHeartPulseFill className="text-4xl text-primary " />}
          />

          <SliderCard
            specialistName="Neurologist"
            desc="Doctor specializing in diagnosing and treating nervous system disorders."
            icon={<PiBrainFill className="text-4xl text-primary " />}
          />

          <SliderCard
            specialistName="ENT Specialist"
            desc="Doctor specializing in ear, nose, and throat disorders and surgeries."
            icon={
              <PiEarBold className="text-4xl text-background/70 bg-primary rounded-full p-1" />
            }
          />

          <SliderCard
            specialistName="Pediatrician"
            desc="Specializing in children's healthcare, from infancy to adolescence."
            icon={
              <PiBabyFill className="text-4xl text-background/70 bg-primary rounded-full p-1" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorsExpertise;
