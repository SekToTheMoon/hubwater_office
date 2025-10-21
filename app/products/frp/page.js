import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/frp.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="ถังไฟเบอร์"
      subtittle="ตอบโจทย์สำหรับคุณ"
      Products={Products}
      topic1="ขนาด"
      topic2="แรงดัน"
      topic3="ปากถัง"
    />
  );
}
