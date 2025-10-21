"use client"; // If using App Router

import MenuLink from "@/app/component/MenuLink";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animateFadeOut, setAnimateFadeOut] = useState(false);
  const navItems = [
    { name: "หน้าบ้าน", href: "/" },
    { name: "ติดต่อเรา", href: "/contact" },
    { name: "เคมีภัณฑ์", href: "/products/chemical" },
    { name: "ถังไฟเบอร์", href: "/products/frp" },
    { name: "เครื่อง RO", href: "/products/ro" },
    { name: "ไส้กรองน้ำ", href: "/products/filter" },
    { name: "ไส้เมมเบรน", href: "/products/membrane" },
    { name: "อุปกรณ์ตู้น้ำ", href: "/products/vending_machine" },
    { name: "อุปกรณ์อื่นๆ", href: "/products/other" },
    { name: "ปั๊มน้ำแรงดัน", href: "/products/pump" },
    { name: "สารกรองเรซิ่น", href: "/products/resin" },
    { name: "เครื่องกรองน้ำ", href: "/products/water_filter" },
    { name: "กระบอกเฮ้าส์ซิ่ง", href: "/products/housing" },
    { name: "วาล์วถังไฟเบอร์", href: "/products/valve" },
    { name: "สารกรองคาร์บอน", href: "/products/carbon" },
    { name: "สารกรองแมงกานีส", href: "/products/manganese" },
    { name: "สารกรองแอนทราไซต์", href: "/products/antracite" },
  ];
  const navFullItems = [
    { name: "หน้าบ้าน", href: "/" },
    {
      name: "สินค้า",
      list: [
        {
          name: "วาล์ว",
          href: "/products/valve",
          image: "/images/menu/value.webp",
        },
        {
          name: "ถังไฟเบอร์",
          href: "/products/frp",
          image: "/images/menu/frp_tank.webp",
        },
        {
          name: "เครื่องกรอง",
          href: "/products/water_filter",
          image: "/images/menu/uf.webp",
        },
        {
          name: "ไส้กรองน้ำ",
          href: "/products/filter",
          image: "/images/menu/membrane_400.webp",
        },
        {
          name: "คาร์บอน",
          href: "/products/carbon",
          image: "/images/menu/carbon.webp",
        },
        {
          name: "แอนทราไซต์",
          href: "/products/antracite",
          image: "/images/menu/antracite.webp",
        },
        {
          name: "เรซิ่น",
          href: "/products/resin",
          image: "/images/menu/resin.webp",
        },
        {
          name: "แมงกานีส",
          href: "/products/manganese",
          image: "/images/menu/manganes.webp",
        },
        {
          name: "เคมีภัณฑ์",
          href: "/products/chemical",
          image: "/images/menu/chemical.webp",
        },
        {
          name: "ปั๊มน้ำ",
          href: "/products/pump",
          image: "/images/menu/pump.webp",
        },
        {
          name: "เฮ้าส์ซิ่ง",
          href: "/products/housing",
          image: "/images/menu/housing.webp",
        },
        {
          name: "เครื่อง RO",
          href: "/products/ro",
          image: "/images/menu/ro.webp",
        },
        {
          name: "เมมเบรน",
          href: "/products/membrane",
          image: "/images/menu/membrane.webp",
        },
        {
          name: "อุปกรณ์ตู้น้ำ",
          href: "/products/vending_machine",
          image: "/images/menu/waterbox.webp",
        },
        {
          name: "อุปกรณ์อื่นๆ",
          href: "/products/other",
          image: "/images/menu/other.webp",
        },
      ],
    },
    { name: "ติดต่อเรา", href: "/contact" },
  ];

  const closeMobileMenu = () => {
    setAnimateFadeOut(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setAnimateFadeOut(false);
    }, 300);
  };
  return (
    <header className="bg-gray-50 border-gray-200 sticky top-0 z-10 w-full text-[10px] mx-auto px-4 sm:px-6 lg:px-12">
      <nav className="container flex   items-center  md:justify-center mx-auto p-4">
        <Link className="mr-8" href="/">
          <img
            className="h-3 aspect-auto"
            src="/images/logo/hubwatertechLogo.webp"
            alt="Hubwatertech"
          ></img>
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {navFullItems.map((item) => (
            <li key={item.name}>
              {item.list ? (
                <>
                  <div className="group">
                    <button className="text-gray-800 hover:text-blue-600 flex items-center">
                      {item.name}
                    </button>
                    <div className="hidden group-hover:block absolute left-0 h-full w-full z-10 shadow-2xl animate-fade-in-down-50">
                      <ul className="flex w-full items-center justify-center gap-4 bg-gray-50 py-6 ">
                        {item.list.map((subItem) => (
                          <div className="w-15" key={subItem.name}>
                            <MenuLink
                              link={subItem.href}
                              label={subItem.name}
                              img={subItem.image}
                            />
                          </div>
                        ))}
                      </ul>
                      <div className="h-screen bg-gray-100/50 backdrop-blur-md hover:hidden "></div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-800 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Hamburger Icon */}☰
        </button>

        {/* Mobile Menu (Conditional Rendering) */}
        {isMobileMenuOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-full pl-10 bg-gray-50 bg-opacity-75 flex flex-col pt-13 transform md:hidden  ${
              animateFadeOut ? "animate-fade-out" : "animate-fade-in-down"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-8  text-md font-bold text-gray-500"
              onClick={closeMobileMenu}
            >
              ✕
            </button>
            <ul
              className={`space-y-1 font-medium text-lg ${
                animateFadeOut
                  ? "text-animate-fade-out"
                  : "text-animate-fade-in-down"
              }`}
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
