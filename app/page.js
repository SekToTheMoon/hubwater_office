import SwiperProduct from "@/components/SwiperProduct";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="text-center py lg:py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          บริษัท ฮับ วอเตอร์เทค จำกัด
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto pr-1.5">
          เราเป็นผู้จำหน่ายเครื่องกรองน้ำคุณภาพสูง
          ครอบคลุมการใช้งานทั้งในระดับครัวเรือน ร้านอาหาร ธุรกิจเชิงพาณิชย์
          รวมถึงโรงงานอุตสาหกรรม พร้อมให้คำปรึกษาและบริการติดตั้งอย่างมืออาชีพ
          เพื่อคุณภาพน้ำที่สะอาด ปลอดภัย และเหมาะสมกับทุกการใช้งาน
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link
          href="/products/household"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition "
        >
          <h2 className=" font-semibold text-gray-800">
            เครื่องกรองน้ำบ้าน และ ไส้กรอง
          </h2>
          <p className="text-gray-600 mt-2 text-lg">สำหรับธุรกิจและร้านค้า</p>
        </Link>
        <Link
          href="/products/commercial"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h2 className=" font-semibold text-gray-800">สารกรอง</h2>
          <p className="text-gray-600 mt-2 text-lg">
            สารกรองคุณภาพดีสำหรับถังกรอง
          </p>
        </Link>
        <Link
          href="/products/industrial"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h2 className=" font-semibold text-gray-800">
            อุปกรณ์กรองน้ำอุตสาหกรรม
          </h2>
          <p className="text-gray-600 mt-2 text-lg">ระบบกรองขนาดใหญ่</p>
        </Link>
        <Link
          href="/products/pumps-valves"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h2 className=" font-semibold text-gray-800">ปั๊ม และ อื่นๆ</h2>
          <p className="text-gray-600 mt-2 text-lg">อุปกรณ์เสริมคุณภาพ</p>
        </Link>
      </section>
      <section className="text-center py-12">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-5">
          <img
            src="/images/111.jpg"
            alt="banner"
            className="h-[271px] md:h-96 object-cover rounded-xl "
          />
          <SwiperProduct />
        </div>
      </section>
    </div>
  );
}
