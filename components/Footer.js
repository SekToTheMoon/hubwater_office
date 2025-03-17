export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* ส่วนที่ 1: ชื่อร้านและคำอธิบาย */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              ร้านเครื่องกรองน้ำ
            </h2>
            <p className="text-gray-600 text-sm">
              จำหน่ายเครื่องกรองน้ำคุณภาพสูงสำหรับครัวเรือน เชิงพาณิชย์
              และอุตสาหกรรม
            </p>
          </div>

          {/* ส่วนที่ 2: ลิงก์หน้าเว็บ */}
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-2">เมนู</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="/" className="hover:text-blue-600 transition">
                  หน้าแรก
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-blue-600 transition">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* ส่วนที่ 3: ช่องทางการติดต่อ */}
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              ติดต่อเรา
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                โทรศัพท์:{" "}
                <a
                  href="tel:0806784088"
                  className="text-blue-600 hover:underline"
                >
                  080-678-4088
                </a>
              </li>
              <li>
                Line:{" "}
                <a
                  href="https://lin.ee/whmWvGS"
                  className="text-blue-600 hover:underline"
                >
                  @512bhoam
                </a>
              </li>
              <li>
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100088335600794"
                  className="text-blue-600 hover:underline"
                >
                  Hub WaterTech สินค้าเครื่องกรองน้ำ อะไหล่ทุกประเภท
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ลิขสิทธิ์ */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ร้านเครื่องกรองน้ำ. สงวนลิขสิทธิ์.
        </div>
      </div>
    </footer>
  );
}
