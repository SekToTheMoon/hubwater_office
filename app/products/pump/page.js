import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/pump.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="ปั๊มน้ำ"
      subtittle="แรงทนทานที่คุณต้องการ"
      Products={Products}
      topic1="HP"
      topic2="voltage"
      topic3="stage"
    />
  );
}
