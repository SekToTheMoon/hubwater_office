import ProductListLayout from "@/components/ProductListLayout";
import Products from "@/data/chemical.json";

export default function Page() {
  return (
    <ProductListLayout
      tittle="เคมีภัณฑ์"
      subtittle="ครบครันตามการใช้งาน"
      Products={Products}
      topic1=""
      topic2=""
      topic3=""
    />
  );
}
