import Link from "next/link";

const ProductDetail = ({ product }) => {
  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <h1 className="text-3xl font-light text-gray-900">ไม่พบสินค้า</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative w-full aspect-square  max-w-[600px] mx-auto lg:mx-0">
              <img
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 font-light">
                {product.description}
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                ${product.price}
              </p>
              <Link
                href="/products"
                className="block text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore More Products
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Technology",
                description:
                  "Cutting-edge innovation for superior performance.",
                icon: "⚙️",
              },
              {
                title: "Sleek Design",
                description: "Elegant and minimalist aesthetic.",
                icon: "🎨",
              },
              {
                title: "Long-lasting Durability",
                description: "Built to withstand the test of time.",
                icon: "🛡️",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
