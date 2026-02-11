import React from "react";
import Button from "../ui/Button";
import { IoArrowForward } from "react-icons/io5";

const Journey = () => {
  return (
    <div className="hidden md:block">
      <div className="image-section">
        <div className="flex flex-col gap-12">
          <h1 className="z-30 text-[80px] w-162.75">
            Start Your Health Journey Here
          </h1>
          <div className="flex items-center justify-center gap-6">
            <Button className="z-30" btntext="Book Consultation Now" />
            <Button
              className="z-30 text-white bg-transparent border border-white"
              btntext="Learn More"
              icon={<IoArrowForward className="text-xl" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
