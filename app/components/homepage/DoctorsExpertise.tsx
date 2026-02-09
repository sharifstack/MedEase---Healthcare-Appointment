"use client";

import SliderCard from "../ui/SliderCard";
import { RiHeartPulseFill } from "react-icons/ri";
import { PiBabyFill, PiBrainFill, PiEarBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DoctorsExpertise = () => {
  return (
    <div className="md:py-30 py-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-[60px] font-medium">
            Choose Doctor's
            <span className="font-expertise text-primary font-bold">
              {" "}
              Expertise
            </span>
          </h1>

          <button className="font-medium text-primary text-2xl">See All</button>
        </div>
      </div>

      <div className="relative pt-10 pb-23 overflow-hidden">
        <div className="container relative">
          {/* LEFT arrow */}
          <button
            className="custom-prev absolute left-0 top-full -translate-y-full z-10
  w-10 h-10 flex items-center justify-center
  rounded-full bg-gray-200 text-gray-600
  hover:bg-primary hover:text-white transition"
          >
            <FaArrowLeft />
          </button>

          {/* RIGHT arrow */}
          <button
            className="custom-next absolute right-6 top-full -translate-y-full z-10
  w-10 h-10 flex items-center justify-center
  rounded-full bg-primary text-white
  hover:opacity-90 transition"
          >
            <FaArrowRight />
          </button>

          <div className="-mr-249.75 pr-249.75">
            <Swiper
              modules={[Navigation, Pagination]}
              loop={true}
              spaceBetween={24}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1.1 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              className="pb-24! overflow-visible!"
            >
              <SwiperSlide>
                <SliderCard
                  specialistName="Cardiologist"
                  desc="Heart specialist focusing on cardiovascular health and diseases."
                  icon={<RiHeartPulseFill className="text-4xl text-primary " />}
                />
              </SwiperSlide>

              <SwiperSlide>
                <SliderCard
                  specialistName="Neurologist"
                  desc="Doctor specializing in diagnosing and treating nervous system disorders."
                  icon={<PiBrainFill className="text-4xl text-primary " />}
                />
              </SwiperSlide>

              <SwiperSlide>
                <SliderCard
                  specialistName="ENT Specialist"
                  desc="Doctor specializing in ear, nose, and throat disorders and surgeries."
                  icon={
                    <PiEarBold className="text-4xl text-background/70 bg-primary rounded-full p-1" />
                  }
                />
              </SwiperSlide>

              <SwiperSlide>
                <SliderCard
                  specialistName="Pediatrician"
                  desc="Specializing in children's healthcare, from infancy to adolescence."
                  icon={
                    <PiBabyFill className="text-4xl text-background/70 bg-primary rounded-full p-1" />
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsExpertise;
