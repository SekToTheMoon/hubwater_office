import ProductCard from "@/components/ProductCard";
const ProductListLayout = ({
  tittle,
  subtittle,
  Products,
  topic1,
  topic2,
  topic3,
}) => {
  return (
    <div className="mt-3 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end text-animate-fade-in-up mb-8">
        <div className="text-3xl font-bold text-gray-800  tracking-wider ">
          {tittle}
        </div>
        <div className="text-xl font-bold text-gray-600  tracking-wider ">
          {subtittle}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-7 mx-auto">
        {Products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            topic1={topic1}
            topic2={topic2}
            topic3={topic3}
            description1={product.description1}
            description2={product.description2}
            description3={product.description3}
            image={product.image}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListLayout;
