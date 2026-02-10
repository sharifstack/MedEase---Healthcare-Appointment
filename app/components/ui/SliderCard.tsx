import React from "react";
import Button from "./Button";
import { IoArrowForward } from "react-icons/io5";

const SliderCard = ({
  specialistName,
  desc,
  icon,
  showButton = false,
  src,
  alt,
  className = "",
}: {
  specialistName: string;
  desc: string;
  icon: React.ReactNode;
  showButton?: boolean;
  src?: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <div className={`py-12 px-6  rounded-xl bg-background flex ${className}`}>
      <div className="">
        <span className="icon p-2 inline-block rounded-full bg-secondary/20">
          {icon}
        </span>
        <h4 className="font-medium text-[32px]">{specialistName}</h4>
        <p className="font-normal text-xl text-secondary w-94 pt-5 pb-2">
          {desc}
        </p>

        {showButton && (
          <div>
            <Button
              className="bg-transparent text-primary! px-0!"
              btntext="Book Consultation"
              icon={<IoArrowForward className="text-xl" />}
            />
          </div>
        )}
      </div>
      <div>
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      </div>
    </div>
  );
};

export default SliderCard;
