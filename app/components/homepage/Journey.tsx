import React from "react";
import Button from "../ui/Button";
import { IoArrowForward } from "react-icons/io5";

const Journey = () => {
  return (
    <div>
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

      <div className="responsive md:hidden block">
        <div className="image-mobile ">
          <div className="flex flex-col items-center gap-10">
            <h1 className="z-30 font-medium text-[40px] w-85.75">
              Start Your Health Journey Here
            </h1>
            <div className="flex flex-col items-center justify-center gap-7">
              <Button className="z-30 px-20" btntext="Book Consultation Now" />
              <Button
                className="z-30 text-white bg-transparent border border-white px-30"
                btntext="Learn More"
                icon={<IoArrowForward className="text-xl" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
