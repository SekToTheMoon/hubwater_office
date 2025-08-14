import Products from "@/data/carbon.json";
import ProductListLayout from "@/components/ProductListLayout";

export default function Page() {
  return (
    <ProductListLayout
      tittle="คาร์บอน"
      subtittle="เรารวมไว้ที่นี่สำหรับคุณ"
      Products={Products}
      topic1="Iodine"
      topic2="วัสถุดิบ"
      topic3="ขนาดเม็ด"
    />
  );
}
