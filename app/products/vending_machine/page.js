import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/vanding_machine.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="ตู้กดน้ำ-อุปกรณ์"
      subtittle="เรารวมไว้ที่นี่"
      Products={Products}
      topic1="แรงดัน"
      topic2="กำลัง-ออก"
      topic3=""
    />
  );
}
