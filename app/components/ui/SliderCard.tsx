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
  h4font,
  descfont,
}: {
  specialistName: string;
  desc: string;
  icon: React.ReactNode;
  showButton?: boolean;
  src?: string;
  alt?: string;
  className?: string;
  h4font?: string;
  descfont?: string;
}) => {
  return (
    <div className={`py-12 px-6  rounded-xl bg-background flex ${className}`}>
      <div className="">
        <span className="icon p-2 inline-block rounded-full bg-secondary/20">
          {icon}
        </span>
        <h4 className={`font-medium md:text-[32px] ${h4font}`}>
          {specialistName}
        </h4>
        <p
          className={`font-normal   md:text-xl text-secondary pt-5 pb-2 ${descfont}`}
        >
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
      <div className=" ">
        {src && (
          <img
            className="md:w-auto w-34 h-35 md:h-auto object-contain "
            src={src}
            alt={alt}
          />
        )}
      </div>
    </div>
  );
};

export default SliderCard;
