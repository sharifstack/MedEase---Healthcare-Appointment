import React from "react";
import Button from "./Button";
import { IoArrowForward } from "react-icons/io5";

const SliderCard = ({
  specialistName,
  desc,
  icon,
}: {
  specialistName: string;
  desc: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="py-12 px-6  rounded-xl bg-background">
      <div className="">
        <span className="icon p-2 inline-block rounded-full bg-secondary/20">
          {icon}
        </span>
        <h4 className="font-medium text-[32px]">{specialistName}</h4>
        <p className="font-normal text-xl text-secondary w-94 pt-5 pb-2">
          {desc}
        </p>

        <Button
          className="bg-transparent text-primary! px-0!"
          btntext="Book Consultation"
          icon={<IoArrowForward className="text-xl" />}
        />
      </div>
    </div>
  );
};

export default SliderCard;
