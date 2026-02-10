import React from "react";
import SliderCard from "../ui/SliderCard";
import {
  PiCalendarHeartFill,
  PiFilesFill,
  PiShieldCheckFill,
  PiVideoConferenceFill,
} from "react-icons/pi";
import Image from "next/image";
import mobileone from "../../../public/mobileone.png";
import mobiletwo from "../../../public/mobiletwo.png";

const AppFeatures = () => {
  return (
    <div className="md:py-30 py-15">
      <h1 className="text-center mb-10 font-medium md:text-[60px]">
        Explore Our App's <span className="text-primary font-expertise font-bold">Features</span>
      </h1>
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="left md:w-3/5 ">
            <div className="flex">
              <SliderCard
                className="pb-0 gap-18"
                specialistName="Convenient Online Booking"
                desc="Easily schedule consultations and meetings with healthcare professionals through our user-friendly online booking platform."
                icon={<PiCalendarHeartFill className="text-4xl text-primary" />}
                src={mobileone.src}
                alt="Mobile One"
              />
            </div>
            <div className="bottomRight ">
              <div className="flex items-center gap-2 mt-2">
                <SliderCard
                  className=""
                  specialistName="Records Management"
                  desc="Effortlessly store and access patient medical records, ensuring vital information is available for healthcare providers during appointments."
                  icon={<PiFilesFill className="text-4xl text-primary" />}
                />

                <SliderCard
                  specialistName="Instant Confirmation"
                  desc="Receive instant confirmation of your booked appointments, along with timely reminders to ensure you never miss a meeting."
                  icon={<PiShieldCheckFill className="text-4xl text-primary" />}
                />
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <SliderCard
                className="flex flex-col pb-0 pt-10! gap-9"
                specialistName="Secure Virtual Meetings"
                desc="Experience secure and convenient virtual consultations from home. Our encrypted video conferencing guarantees confidential interactions, removing the need for in-person visits."
                icon={
                  <PiVideoConferenceFill className="text-4xl text-primary" />
                }
                src={mobiletwo.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
