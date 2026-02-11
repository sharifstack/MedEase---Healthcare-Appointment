import Image from "next/image";
import React from "react";
import Button from "./Button";
import { IoArrowForward } from "react-icons/io5";

const HealthAdviceCard = ({
  tipsName,
  date,
  title,
  desc,
  src,
}: {
  tipsName: string;
  date: string;
  title: string;
  desc: string;
  src: string;
}) => {
  return (
    <div className="hover:scale-102 transition-all duration-300">
      <div>
        <Image src={src} alt="Health Advice Cover" width={424} height={0} />
      </div>
      <div className="info ">
        <div className="flex items-center gap-4 my-4">
          <h4 className="font-medium text-lg text-primary">{tipsName}</h4>
          <p className="font-medium text-lg text-secondary">{date}</p>
        </div>
        <h2 className="text-2xl font-medium mb-2">{title}</h2>
        <p className="mb-4 max-w-106 font-normal text-base text-secondary">
          {desc}
        </p>
        <Button
          className="text-start px-0! py-0! bg-transparent text-primary! "
          btntext="Read More"
          icon={<IoArrowForward className="text-xl" />}
        />
      </div>
    </div>
  );
};

export default HealthAdviceCard;
