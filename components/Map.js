"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// ข้อมูลร้าน (เปลี่ยนตามพิกัดจริง)
const shopLocation = {
  lat: 13.799042464561877, // ละติจูด
  lng: 100.68964465767255, // ลองจิจูด
  name: "ฮับ วอเตอร์เทค",
  address: "123 ถนนตัวอย่าง, กรุงเทพฯ 10100",
  phone: "02-123-4567",
};

export default function ShopMap() {
  const position = [shopLocation.lat, shopLocation.lng];

  return (
    <div className="w-full ">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center max-w-60">
              <h3 className="font-bold text-lg">ฮับ วอเตอร์เทค</h3>
              <p>
                282,284 ถนนสวนสยาม แขวงคันนายาว เขตคันนายาว กรุงเทพมหานคร 10230
              </p>
              <p>
                โทร:{" "}
                <a href="tel:0812345678" className="text-blue-600">
                  080-678-4088
                </a>
              </p>
              <a
                href="https://maps.app.goo.gl/hN8wJvTKDSmzsx6d9"
                className="mt-2 inline-block px-4  bg-blue-500  rounded hover:bg-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">ดูเส้นทาง</p>
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
