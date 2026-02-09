import React from "react";

const Button = ({
  btntext,
  className,
  icon,
}: {
  btntext: string;
  className?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={`py-3 px-12 rounded-full bg-primary text-white font-medium text-lg cursor-pointer ${className} flex items-center gap-2`}
    >
      {btntext}
      <span>{icon}</span>
    </div>
  );
};

export default Button;
