import React from "react";
import { FaStar } from "react-icons/fa";

const TextBadge = ({ badgeText }: { badgeText: string }) => {
  return (
    <div className="flex items-center">
      <span className="py-4 px-6 bg rounded-full md:text-xl  text-xs  text-primary bg-textbadge flex items-center md:gap-5 gap-2">
        <span>
          <FaStar className="text-primary md:text-xl text-sm " />
        </span>
        {badgeText}
      </span>
    </div>
  );
};

export default TextBadge;
