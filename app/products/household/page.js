import ProductCard from "@/components/ProductCard";
import householdProducts from "@/data/household.json";

export default function HouseholdPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        เครื่องกรองน้ำ, ไส้กรอง
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {householdProducts.map((product, index) => (
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
