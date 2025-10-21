import Products from "@/data/carbon.json";
import ProductListLayout from "@/components/ProductListLayout";

export default function Page() {
  return (
    <>
      <div className="flex max-h-[300px] items-center justify-center rounded-xl bg-slate-300 mb-8">
        <video className="max-h-[300px] " autoPlay loop muted>
          <source src="/videos/carbon.webm" type="video/webm"></source>
          Your browser does not support the video tag.
        </video>
        <img
          src="/images/promode/Coke.webp"
          alt="banner"
          className="max-h-[300px] "
        />
      </div>
      <ProductListLayout
        tittle="คาร์บอน"
        subtittle="เรารวมไว้ที่นี่สำหรับคุณ"
        Products={Products}
        topic1="Iodine"
        topic2="วัสถุดิบ"
        topic3="ขนาดเม็ด"
      />
    </>
  );
}
