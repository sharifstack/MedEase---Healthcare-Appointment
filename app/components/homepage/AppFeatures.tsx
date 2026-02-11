import React from "react";
import SliderCard from "../ui/SliderCard";
import {
  PiCalendarHeartFill,
  PiFilesFill,
  PiShieldCheckFill,
  PiVideoConferenceFill,
} from "react-icons/pi";
import mobileone from "../../../public/mobileone.png";
import mobiletwo from "../../../public/mobiletwo.png";

const AppFeatures = () => {
  return (
    <div className="md:py-30 py-15">
      <div className="container">
        <h1 className="text-start md:text-center mb-6 md:mb-10 font-medium text-[32px] md:text-[60px]">
          Explore Our App's{" "}
          <span className="text-primary font-expertise font-bold">
            Features
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 ">
          <div className="left md:w-3/5 w-full">
            <div className="">
              <SliderCard
                className="pb-0 pt-4 md:pt-10 px-2 md:gap-18 justify-between md:justify-normal items-end md:items-start"
                h4font="text-sm"
                descfont="text-xs max-w-43.75 md:max-w-[400px]"
                specialistName="Convenient Online Booking"
                desc="Easily schedule consultations and meetings with healthcare professionals through our user-friendly online booking platform."
                icon={
                  <PiCalendarHeartFill className="md:text-4xl text-lg text-primary" />
                }
                src={mobileone.src}
                alt="Mobile One"
              />
            </div>
            <div className="bottomRight ">
              <div className="flex flex-col md:flex-row items-center gap-2 mt-2">
                <SliderCard
                  className="md:pt-10 md:py-10! py-4!"
                  h4font="text-sm"
                  descfont="text-xs! md:text-xl!"
                  specialistName="Records Management"
                  desc="Effortlessly store and access patient medical records, ensuring vital information is available for healthcare providers during appointments."
                  icon={<PiFilesFill className="md:text-4xl text-lg text-primary" />}
                />

                <SliderCard
                  className="md:pt-10 md:py-10! py-4!"
                    h4font="text-sm"
                  descfont="text-xs! md:text-xl!"
                  specialistName="Instant Confirmation"
                  desc="Receive instant confirmation of your booked appointments, along with timely reminders to ensure you never miss a meeting."
                  icon={<PiShieldCheckFill className="md:text-4xl text-lg text-primary" />}
                />
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <SliderCard
                className="flex md:flex-col items-end md:items-center flex-row pb-0 pt-10! gap-9"
                specialistName="Secure Virtual Meetings"
                h4font="text-sm"
                descfont="max-w-[183px] md:max-w-[476px] text-xs! md:text-xl!"
                desc="Experience secure and convenient virtual consultations from home. Our encrypted video conferencing guarantees confidential interactions, removing the need for in-person visits."
                icon={
                  <PiVideoConferenceFill className="md:text-4xl text-lg text-primary" />
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
