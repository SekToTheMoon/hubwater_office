import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/filter.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="ไส้กรองน้ำ"
      subtittle="หลายชนิดเรามีหมด"
      Products={Products}
      topic1="ความละเอียด"
      topic2="ขนาด"
      topic3="คุณสมบัติ"
    />
  );
}
