"use client";

import ContactForm from "@/components/ContactForm";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function ContactPage() {
  return (
    <div>
      <img
        className="mb-12 mx-auto "
        src="/images/Achievement/contact.webp"
        alt="frp tank"
      ></img>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        สร้างความสัมพันธ์กับเรา 💗
      </h1>
      <div className=" p-6 flex items-center justify-center gap-8 mb-6">
        <a href="tel:0812345678">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ width: "2rem", height: "2rem" }}
            className="text-yellow-500"
          />
        </a>

        <a href="https://lin.ee/whmWvGS" className="text-blue-600">
          <FontAwesomeIcon
            icon={faLine}
            style={{ width: "2rem", height: "2rem" }}
            className="text-green-500"
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100088335600794"
          className="text-blue-600"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ width: "2rem", height: "2rem" }}
          />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 px-2 gap-8 bg-white rounded-xl shadow-lg">
        {/* ฟอร์ม */}
        <ContactForm />
        <Map />
      </div>
      {/* ช่องทางการติดต่อ */}
    </div>
  );
}
