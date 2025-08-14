import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/other.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="สินค้าอื่นๆ"
      subtittle="ที่คุณอาจจำเป็นต้องซื้อ"
      Products={Products}
      topic1="-"
      topic2="-"
      topic3="-"
    />
  );
}
