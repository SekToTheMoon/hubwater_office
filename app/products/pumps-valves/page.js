import ProductCard from "@/components/ProductCard";
import pumpsProducts from "@/data/pumps-valves.json";

export default function HouseholdPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">ปั๊ม และ อื่นๆ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pumpsProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
