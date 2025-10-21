import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/housing.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="เฮ้าส์ซิ่ง"
      subtittle="หลากหลายสีทีคุณชอบ"
      Products={Products}
      topic1="ขนาด"
      topic2="เกลียว"
      topic3="ปุ่มไล่ลม"
    />
  );
}
