"use client";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import MenuLink from "@/app/component/MenuLink";

export default () => {
  const menuItems = [
    {
      link: "/products/water_filter",
      img: "/images/menu/uf.webp",
      label: "เครื่องกรองน้ำ",
    },
    {
      link: "/products/frp",
      img: "/images/menu/frp_tank.webp",
      label: "ถังไฟเบอร์",
    },
    {
      link: "/products/carbon",
      img: "/images/menu/carbon.webp",
      label: "คาร์บอน",
    },
    {
      link: "/products/antracite",
      img: "/images/menu/antracite.webp",
      label: "แอนทราไซต์",
    },
    {
      link: "/products/resin",
      img: "/images/menu/resin.webp",
      label: "เรซิ่น",
    },
    {
      link: "/products/manganese",
      img: "/images/menu/manganes.webp",
      label: "แมงกานีส",
    },
    {
      link: "/products/pump",
      img: "/images/menu/pump.webp",
      label: "ปั๊มน้ำ",
    },
    {
      link: "/products/ro",
      img: "/images/menu/ro.webp",
      label: "เครื่องกรอง RO",
    },
    {
      link: "/products/membrane",
      img: "/images/menu/membrane.webp",
      label: "เมมเบรน RO",
    },
    {
      link: "/products/filter",
      img: "/images/menu/membrane_400.webp",
      label: "ไส้กรองน้ำ",
    },
    {
      link: "/products/valve",
      img: "/images/menu/value.webp",
      label: "วาล์ว",
    },
    {
      link: "/products/housing",
      img: "/images/menu/housing.webp",
      label: "เฮ้าส์ซิ่ง",
    },
    {
      link: "/products/chemical",
      img: "/images/menu/chemical.webp",
      label: "เคมีภัณฑ์",
    },
    {
      link: "/products/vending_machine",
      img: "/images/menu/waterbox.webp",
      label: "อุปกรณ์ตู้น้ำ",
    },
    {
      link: "/products/other",
      img: "/images/menu/other.webp",
      label: "อุปกรณ์อื่นๆ",
    },
  ];

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Navigation]}
      className="w-full relative "
    >
      {menuItems.map((item, index) => (
        <SwiperSlide key={index} className="max-w-[70px]  sm:max-w-[80px]">
          <MenuLink
            key={index}
            link={item.link}
            img={item.img}
            label={item.label}
          />
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
