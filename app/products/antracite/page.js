import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/antracite.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="แอนทราไซต์"
      subtittle="หลายเกรดตามใจคุณ"
      Products={Products}
      topic1="เกรด"
      topic2="คาร์บอนคงที่"
      topic3="ปริมาณ"
    />
  );
}
