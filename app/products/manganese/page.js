import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/manganese.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="แมงการนีส"
      subtittle="ราคาโดนใจคุณ"
      Products={Products}
      topic1="ขนาด"
      topic2="เกลียว"
      topic3="ปุ่มไล่ลม"
    />
  );
}
