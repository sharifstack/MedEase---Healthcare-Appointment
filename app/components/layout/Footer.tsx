import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiTwitterLogoFill,
} from "react-icons/pi";

const footerItems = [
  {
    id: 1,
    title: "Services",
    items: [
      { name: "Primary Care" },
      { name: "Specialist Care" },
      { name: "Mental Health Services" },
      { name: "Telehealth" },
    ],
  },

  {
    id: 2,
    title: "Find a Doctor",
    items: [
      { name: "Top-Rated Doctors" },
      { name: "Appointment Scheduling" },
      { name: "Patient Reviews" },
      { name: "Doctor Profiles" },
    ],
  },

  {
    id: 3,
    title: "About Us",
    items: [
      { name: "News and Updates" },
      { name: "Careers" },
      { name: "Community Involvement" },
      { name: "Contact Us" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-footercolor pt-15 md:pt-25">
      <div className="container">
        <div className="flex  flex-col-reverse md:flex-row items-start justify-between">
          <div className="mt-12 md:mt-0">
            <Link href={"/"}>
              <div className="logo flex items-center gap-4">
                <Image src="/logo.png" alt="Logo" width={26} height={26} />
                <div className="title">
                  <h1 className="text-2xl font-semibold text-primary">
                    Medease
                  </h1>
                </div>
              </div>
            </Link>

            <p className="text-[#CCCCCC] max-w-106 text-base font-normal pt-6 pb-10">
              MedEase simplifies healthcare with an easy-to-use platform for
              booking appointments, telehealth services, and managing patient
              records.
            </p>

            <div className="icons flex items-center gap-6">
              <div className="p-2 bg-primary rounded-full cursor-pointer">
                <PiFacebookLogoFill className="text-2xl text-white " />
              </div>
              <div className="p-2 bg-primary rounded-full cursor-pointer">
                <PiInstagramLogoFill className="text-2xl text-white" />
              </div>
              <div className="p-2 bg-primary rounded-full cursor-pointer">
                <PiTwitterLogoFill className="text-2xl text-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {footerItems.map((item) => (
              <div className="">
                <h4 className="text-xl font-medium text-white mb-6">
                  {item.title}
                </h4>
                <ul>
                  {item.items.map((subItem, index) => (
                    <li key={index} className="text-secondary font-normal py-4 cursor-pointer">
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h4 className="text-center text-primary pt-7.5 md:pt-15 pb-4">
        © 2026 Sharif Ahmed. All rights reserved.
      </h4>
    </footer>
  );
};

export default Footer;
