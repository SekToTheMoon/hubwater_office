import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/water_filter.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="เครื่องกรองน้ำ"
      subtittle="เลือกที่คุณต้องการ"
      Products={Products}
      topic1="ชนิด"
      topic2="กรองละเอียด"
      topic3="เพิ่มเติม"
    />
  );
}
