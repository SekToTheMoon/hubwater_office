import SwiperProduct from "@/components/SwiperProduct";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          บริษัท ฮับ วอเตอร์เทค จำกัด
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          เราให้บริการเครื่องกรองน้ำคุณภาพสูงสำหรับทุกความต้องการ
          ไม่ว่าจะเป็นครัวเรือน เชิงพาณิชย์ หรืออุตสาหกรรม เขายส่งเครื่องกรองน้ำ
          ผลิตภัณฑ์เกี่ยวกับระบบน้ำอย่างครบวงจร
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link
          href="/products/household"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition "
        >
          <h2 className="text-xl font-semibold text-gray-800">
            เครื่องกรองน้ำ และ ไส้กรอง
          </h2>
          <p className="text-gray-600 mt-2">สำหรับธุรกิจและร้านค้า</p>
        </Link>
        <Link
          href="/products/commercial"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">สารกรอง</h2>
          <p className="text-gray-600 mt-2">สารกรองคุณภาพดีสำหรับถังกรอง</p>
        </Link>
        <Link
          href="/products/industrial"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            ถังกรอง และ วาล์ว
          </h2>
          <p className="text-gray-600 mt-2">ระบบกรองขนาดใหญ่</p>
        </Link>
        <Link
          href="/products/pumps-valves"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            ปั๊ม และ อื่นๆ
          </h2>
          <p className="text-gray-600 mt-2">อุปกรณ์เสริมคุณภาพ</p>
        </Link>
      </section>
      <section className="text-center py-12">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-5">
          <img
            src="/images/111.jpg"
            alt="banner"
            className="h-[271px] md:h-64 object-cover rounded-xl "
          />

          <SwiperProduct />
        </div>
      </section>
    </div>
  );
}
