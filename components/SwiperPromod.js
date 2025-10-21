"use client";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Card from "@/app/component/Card";

export default () => {
  const menuItems = [
    {
      link: "/products/frp/Image_Frp_Tank",
      img: "/images/promode/IMAGE.webp",
    },
    {
      link: "/products/resin/Extrapure_Resin",
      img: "/images/promode/Extrapure.webp",
    },
    {
      link: "/products/carbon/Extrapure_Resin",
      img: "/images/promode/Coke.webp",
    },
  ];

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={4}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Navigation]}
      className="w-full relative mt-2"
    >
      {menuItems.map((item, index) => (
        <SwiperSlide
          key={index}
          className="max-w-[230px] sm:max-w-[280px] md:max-w-[300px] w-full px-1 py-2 animate-fade-in-up-scale  "
        >
          <Card key={index} link={item.link} image={item.img} />
        </SwiperSlide>
      ))}
      <div className="custom-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 p-1 bg-gray-400/50 rounded-full">
        <svg
          className="w-6 h-6 text-gray-700 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 5 7 7-7 7"
          />
        </svg>
      </div>
      <div className="custom-prev absolute top-1/2 left-4 z-10 transform -translate-y-1/2 p-1 bg-gray-400/50 rounded-full">
        <svg
          className="w-6 h-6 text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </div>
    </Swiper>
  );
};
