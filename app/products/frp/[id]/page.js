const { default: ProductDetail } = require("@/components/ProductDetail");

const products = [
  {
    id: "Image_Frp_Tank",
    name: "Image Frp",
    price: 999,
    image: "/product-image.jpg",
    description: "Experience innovation like never before.",
  },
  {
    id: "Extrapure_Resin",
    name: "Extrapure Resin",
    price: 999,
    image: "/product-image.jpg",
    description: "Experience innovation like never before.",
  },
];

const page = async ({ params }) => {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  return <ProductDetail product={product} />;
};

export default page;
