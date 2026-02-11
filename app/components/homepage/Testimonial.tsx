"use client";

import React from "react";
import TestimonialSlider from "../ui/TestimonialSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import testimonial from "../../../public/imgone.png";
import testimonialtwo from "../../../public/imagetwo.png";

const Testimonial = () => {
  return (
    <div className="py-15 md:py-30">
      <div className="container">
        <h1 className="text-[60px] font-medium">
          Testimonials From Our{" "}
          <span className="text-primary font-expertise font-bold">
            Satisfied
          </span>{" "}
          Patients
        </h1>
      </div>
      <div className="relative pt-10 pb-23 overflow-hidden hidden md:block">
        <div className="container relative">
          {/* LEFT arrow */}
          <button
            className="custom-prev absolute left-0 top-full -translate-y-full z-10
  w-10 h-10 flex items-center justify-center
  rounded-full bg-gray-200 text-gray-600
  hover:bg-primary hover:text-white transition cursor-pointer"
          >
            <FaArrowLeft />
          </button>

          {/* RIGHT arrow */}
          <button
            className="custom-next absolute right-6 top-full -translate-y-full z-10
  w-10 h-10 flex items-center justify-center
  rounded-full hover:bg-primary text-gray-600 bg-gray-200 hover:text-white
  hover:opacity-90 transition cursor-pointer"
          >
            <FaArrowRight />
          </button>

          <div className="-mr-249.75 pr-249.75">
            <Swiper
              modules={[Navigation, Pagination]}
              autoplay={{ delay: 1000 }}
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
                1024: { slidesPerView: 2.5 },
              }}
              className="pb-24! overflow-visible!"
            >
              <SwiperSlide className="w-202!">
                <TestimonialSlider
                  src={testimonial.src}
                  alt="Testimonial"
                  docName="David Panjaitan"
                  docSpeciality="Software Engineer"
                  docDesc="I've been using this site for a few months, and it's incredibly reliable. I appreciate the convenience of booking and canceling appointments anytime, anywhere."
                />
              </SwiperSlide>

              <SwiperSlide className="w-202!">
                <TestimonialSlider
                  src={testimonialtwo.src}
                  alt="Testimonial"
                  docName="Ester Howard"
                  docSpeciality="Project Manager"
                  docDesc="Managing appointments for my entire family used to be chaotic. This site makes it so much easier to keep track of everyone’s schedules in one place."
                />
              </SwiperSlide>

              <SwiperSlide className="w-202!">
                <TestimonialSlider
                  src={testimonial.src}
                  alt="Testimonial"
                  docName="David Panjaitan"
                  docSpeciality="Software Engineer"
                  docDesc="I've been using this site for a few months, and it's incredibly reliable. I appreciate the convenience of booking and canceling appointments anytime, anywhere."
                />
              </SwiperSlide>

              <SwiperSlide className="w-202!">
                <TestimonialSlider
                  src={testimonialtwo.src}
                  alt="Testimonial"
                  docName="Ester Howard"
                  docSpeciality="Project Manager"
                  docDesc="Managing appointments for my entire family used to be chaotic. This site makes it so much easier to keep track of everyone’s schedules in one place."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
