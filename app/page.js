import SwiperMenu from "@/components/SwiperMenu";
import SwiperPromod from "@/components/SwiperPromod";
import SwiperStatic from "@/components/SwiperStatic";

export default function HomePage() {
  return (
    <div>
      <section className="py-8 lg:pt-10 lg:pb-16">
        <div className="flex gap-4">
          <div>
            <span className="md:text-balance">
              <h1 className="text-3xl font-bold text-gray-800 mr-1">
                ร้าน ฮับวอเตอร์เทค
              </h1>
              <h1 className="text-3xl font-bold text-gray-500 tracking-wide mb-4">
                เราใส่ใจเรื่องคุณภาพของสินค้า เพิ่มกำไรให้กับธุรกิจของคุณ
              </h1>
              <p className="hidden lg:block text-gray-600  max-w-3xl ">
                เราเป็นผู้จำหน่ายเครื่องกรองน้ำคุณภาพสูง
                ครอบคลุมการใช้งานทั้งในระดับครัวเรือน ร้านอาหาร
                ธุรกิจเชิงพาณิชย์ รวมถึงโรงงานอุตสาหกรรม
                พร้อมให้คำปรึกษาและบริการติดตั้งอย่างมืออาชีพ
                เพื่อคุณภาพน้ำที่สะอาด ปลอดภัย และเหมาะสมกับทุกการใช้งาน
              </p>
            </span>
          </div>

          <div className="hidden mx-auto md:flex items-center justify-center">
            <img
              src="/images/logo/hubwatertechLogo.png"
              alt="hero"
              className="max-w-68 object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <SwiperMenu />
      </section>
      <section className="py-7 md:py-12">
        <h1 className="text-gray-800 text-md sm:text-xl md:text-2xl font-bold inline tracking-wider">
          ผลิตภัณฑ์ล่าสุดของเรา{" "}
          <span className="text-gray-500 ">มาดูว่ามีอะไรใหม่บ้างได้เลย</span>
        </h1>
        <SwiperPromod />
      </section>
      <section className="">
        <h1 className="text-gray-800 text-md sm:text-xl md:text-2xl font-bold inline tracking-wider">
          หน้าร้านของเรา{" "}
          <span className="text-gray-500 ">แวะมาชมสินค้าหลากหลายได้เลย</span>
        </h1>
        <SwiperStatic />
      </section>
    </div>
  );
}
