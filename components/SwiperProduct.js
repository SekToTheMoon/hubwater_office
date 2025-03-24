"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

export default () => {
  const products = [
    {
      name: "Activated Carbon Ecotech ID 1000",
      url: "/images/commercial/Activated Carbon Ecotech ID 1000.png",
    },
    {
      name: "Anthracite Ecotech 40 L",
      url: "/images/commercial/Anthracite Ecotech 40 L.png",
    },
    {
      name: "Manganese Zeolite Ecotech 25 L",
      url: "/images/commercial/Manganese Zeolite Ecotech 25 L.png",
    },
    {
      name: "Ecotech size 844",
      url: "/images/industrial/Ecotech size 844.png",
    },
    {
      name: "Ecotech size 1465",
      url: "/images/industrial/Ecotech size 1465.png",
    },
    {
      name: "Manual Valve F56A1",
      url: "/images/industrial/Manual Valve F56A1.png",
    },
    {
      name: "Manual Valve F64A1",
      url: "/images/industrial/Manual Valve F64A1.png",
    },
    {
      name: "Auto Valve F67B1",
      url: "/images/industrial/Auto Valve F63B1.png",
    },
    {
      name: "Auto Valve F63B1",
      url: "/images/industrial/Auto Valve F63B1.png",
    },
  ];
  return (
    <Swiper
      spaceBetween={10}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="w-full rounded-xl"
      breakpoints={{
        0: { slidesPerView: 1 }, // หน้าจอเล็ก (มือถือ)
        800: { slidesPerView: 2 }, // หน้าจอใหญ่ขึ้น
        1200: { slidesPerView: 3 }, // หน้าจอใหญ่ขึ้น
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="h-64 bg-white rounded flex justify-center items-center gap-2 p-5">
            <h2 className="text-pretty">{product.name}</h2>
            <div className="w-1/2 h-full">
              <img
                className="h-full object-cover aspect-auto"
                src={product.url}
                alt={product.name}
                loading="lazy"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
