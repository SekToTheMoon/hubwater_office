import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/membrane.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="เมมเบรนด์"
      subtittle="หลากหลายแบร์ด"
      Products={Products}
      topic1="รุ่น"
      topic2="ขนาด"
      topic3="กำลังการผลิต"
    />
  );
}
