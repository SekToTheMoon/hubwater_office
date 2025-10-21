import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/resin.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="สารกรองเรซิ่น"
      subtittle="ออกแบบมาเพื่องานของคุณ"
      Products={Products}
      topic1="เกรด"
      topic2="ชนิดไอออน"
      topic3="ปริมาณ"
    />
  );
}
