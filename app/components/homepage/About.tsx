import Image from "next/image";
import React from "react";
import aboutimg from "../../../public/about.png";
import TextBadge from "../ui/TextBadge";

const About = () => {
  return (
    <div className="md:py-30 py-15">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:hidden block">
            <TextBadge badgeText="Rated #1 for appointments with many professional doctors" />
          </div>
          <div className="md:w-1/2 my-6 md:my-0">
            <Image src={aboutimg} alt="about.png" />
          </div>
          <div className="md:w-1/2">
            <div className="hidden md:block">
              <TextBadge badgeText="Rated #1 for appointments with many professional doctors" />
            </div>
            <h2 className="font-medium text-xl md:text-[32px] my-6 md:my-10">
              We're revolutionizing healthcare with seamless access to trusted
              professionals, prioritizing your journey to better health.
            </h2>

            <div className="Value flex items-center justify-between">
              <div className=" text-center">
                <h1 className="font-medium text-[40px] md:text-[64px] text-primary ">
                  40+
                </h1>
                <p className="font-normal text-sm md:text-xl text-secondary">
                  Dedicated Doctors
                </p>
              </div>

              <div className="text-center md:text-start">
                <h1 className="font-medium text-[40px] md:text-[64px] text-primary ">
                  10K+
                </h1>
                <p className="font-normal text-sm md:text-xl text-secondary">
                  Hours of Patient Consultations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
