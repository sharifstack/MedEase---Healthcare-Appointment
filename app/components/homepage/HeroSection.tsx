import React from "react";
import TextBadge from "../ui/TextBadge";
import Button from "../ui/Button";
import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import heroimg from "../../../public/heroimg.png";

const HeroSection = () => {
  return (
    <div className="md:py-20 py-10">
      <div className="container">
        <div className="flex items-center flex-col md:flex-row gap-6">
          <div className="left md:w-1/2 w-full">
            <TextBadge badgeText="Rated #1 choice for healthcare appointments by users" />

            <div className="heading ">
              <h1 className="md:text-[80px] text-[40px] pt-6 md:pt-0">
                Connecting You
                <span className="font-expertise text-primary"> to</span> Better
                Health
              </h1>
            </div>
            <p className="md:text-2xl text-base text-secondary pt-2 md:pt-4 md:pb-16">
              We're here to link you directly to improved health outcomes,
              effortlessly connecting you with the care you need.
            </p>

            <div className="btn md:flex hidden gap-6 items-center  ">
              <Button btntext="Book Consultation" />
              <Button
                className="border border-primary bg-white text-primary!"
                btntext="Learn More"
                icon={<IoArrowForward className="text-xl" />}
              />
            </div>
          </div>

          <div className="right md:flex md:justify-end md:w-1/2 w-full">
            <Image src={heroimg} width={646} alt="heroimg" />
          </div>

          <div className="btnResponsive flex flex-col md:hidden gap-4 items-center  ">
            <Button className="px-25" btntext="Book Consultation" />
            <Button
              className="border border-primary bg-white text-primary! px-30"
              btntext="Learn More"
              icon={<IoArrowForward className="text-xl" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
