import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/ro.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="เครื่อง RO"
      subtittle="โปรเจ็คใหญ่ของคุณ"
      Products={Products}
      topic1="เมมเบรน"
      topic2="ปั๊มน้ำ"
      topic3="แรงดันไฟ"
    />
  );
}
