import ProductCard from "@/components/ProductCard";
import commercialProducts from "@/data/commercial.json";

export default function commercialPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">สารกรอง</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {commercialProducts.map((product, index) => (
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
