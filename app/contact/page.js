"use client";

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">ติดต่อเรา</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ฟอร์ม */}
        <ContactForm />
        {/* ช่องทางการติดต่อ */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            ช่องทางการติดต่อ
          </h2>
          <p className="text-gray-600">
            โทรศัพท์:
            <a href="tel:0812345678" className="text-blue-600">
              080-678-4088
            </a>
          </p>
          <p className="text-gray-600">
            Line:
            <a href="https://lin.ee/whmWvGS" className="text-blue-600">
              @512bhoam
            </a>
          </p>
          <p className="text-gray-600">
            Facebook:
            <a
              href="https://www.facebook.com/profile.php?id=100088335600794"
              className="text-blue-600"
            >
              Hub WaterTech สินค้าเครื่องกรองน้ำ อะไหล่ทุกประเภท
            </a>
          </p>
          <p className="text-gray-600">
            ที่อยู่:
            <a
              href="https://maps.app.goo.gl/hN8wJvTKDSmzsx6d9"
              className="text-blue-600"
            >
              282,284 ถนนสวนสยาม แขวงคันนายาว เขตคันนายาว กรุงเทพมหานคร 10230
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
