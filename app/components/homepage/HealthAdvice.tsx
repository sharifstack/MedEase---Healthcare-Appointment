"use client";

import HealthAdviceCard from "../ui/HealthAdviceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import coverone from "../../../public/coverone.png";
import covertwo from "../../../public/covertwo.png";
import coverthree from "../../../public/coverthree.png";
import coverfour from "../../../public/coverfour.png";
import Button from "../ui/Button";
import { IoArrowForward } from "react-icons/io5";

const HealthAdvice = () => {
  return (
    <div className="py-15 md:py-30 ">
      <div className="container ">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] md:text-[60px] font-medium">
            Expert
            <span className="text-primary font-expertise font-bold">
              {" "}
              Health{" "}
            </span>
            Advice and Updates
          </h1>
          <button className="font-medium text-primary text-2xl hidden md:block">
            See All
          </button>
        </div>

        <div className="ResponsiveMobile flex flex-col gap-6 md:hidden mt-10">
          <HealthAdviceCard
            src={coverone.src}
            tipsName="Diet Tips"
            date="28 April 2024"
            title="Diet Tips for a Healthier Lifestyle"
            desc="Maintaining a healthy diet is crucial for overall well-being and can prevent numerous health issues."
          />

          <HealthAdviceCard
            src={covertwo.src}
            tipsName="Health Tips"
            date="21 April 2024"
            title="The Importance of Regular Health..."
            desc="Regular health screenings are essential for early detection and prevention of various health condi..."
          />

          <HealthAdviceCard
            src={coverthree.src}
            tipsName="Health Tips"
            date="14 April 2024"
            title="Boosting Your Immune System Natu..."
            desc="A strong immune system is vital for fighting off infections and staying healthy. This article pro..."
          />

          <div className="mt-2">
            <Button
              className="justify-center bg-transparent text-primary! border"
              btntext="See More"
              icon={<IoArrowForward className="text-xl" />}
            />
          </div>
        </div>
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
              <SwiperSlide className="w-107!">
                <HealthAdviceCard
                  src={coverone.src}
                  tipsName="Diet Tips"
                  date="28 April 2024"
                  title="Diet Tips for a Healthier Lifestyle"
                  desc="Maintaining a healthy diet is crucial for overall well-being and can prevent numerous health issues."
                />
              </SwiperSlide>

              <SwiperSlide className="w-107!">
                <HealthAdviceCard
                  src={covertwo.src}
                  tipsName="Health Tips"
                  date="21 April 2024"
                  title="The Importance of Regular Health..."
                  desc="Regular health screenings are essential for early detection and prevention of various health condi..."
                />
              </SwiperSlide>

              <SwiperSlide className="w-107!">
                <HealthAdviceCard
                  src={coverthree.src}
                  tipsName="Health Tips"
                  date="14 April 2024"
                  title="Boosting Your Immune System Natu..."
                  desc="A strong immune system is vital for fighting off infections and staying healthy. This article pro..."
                />
              </SwiperSlide>

              <SwiperSlide className="w-107!">
                <HealthAdviceCard
                  src={coverfour.src}
                  tipsName="Health Tips"
                  date="14 April 2024"
                  title="Tips for Managing Chronic Illness"
                  desc="Living with a chronic illness can be challenging, but effective management strategies can help improve "
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAdvice;
