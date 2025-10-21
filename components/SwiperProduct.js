"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

export default () => {
  const products = [
    {
      name: "ร้าน Hub Watertech",
      url: "/images/Achievement/1.jpg",
    },
    {
      name: "โรงพยาบาลลำปาง",
      url: "/images/Achievement/2.jpg",
    },
    {
      name: "ชุดกรองน้ำดื่ม 5 ขั้นตอน",
      url: "/images/Achievement/3.jpg",
    },
    {
      name: "ชุดกรองน้ำดื่ม RO 400 GPD",
      url: "/images/Achievement/4.jpg",
    },
    {
      name: "ถัง softener ก่อนเข้าเครื่องกรองน้ำ",
      url: "/images/Achievement/5.jpg",
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
          <div className="h-96 rounded-xl relative">
            <div className="h-full relative rounded">
              <img
                className="h-full object-cover "
                src={product.url}
                alt={product.name}
                loading="lazy"
              />
            </div>
            <div className="absolute h-2/12 bottom-0 left-0 w-full bg-black opacity-73 text-center flex items-center justify-center">
              <h2 className="text-pretty text-white">{product.name}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
