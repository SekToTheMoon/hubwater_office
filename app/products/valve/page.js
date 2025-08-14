import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/valve.json";

export default function HouseholdPage() {
  return (
    <ProductListLayout
      tittle="วาล์ว "
      subtittle="สำหรับถังไฟเบอร์ของคุณ"
      Products={Products}
      topic1="ใช้ร่วมกับ"
      topic2="น้ำเข้า-ออก"
      topic3="แรงดันไฟ"
    />
  );
}
