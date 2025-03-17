export default function ProductCard({ name, description, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition">
      <div className="flex items-center justify-center w-full">
        <img
          src={image}
          alt={name}
          className="h-48 object-cover rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{description}</p>
        {/* <p className="text-blue-600 font-bold mt-2">
          {price.toLocaleString()} บาท
        </p> */}
      </div>
    </div>
  );
}
