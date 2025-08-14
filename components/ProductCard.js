import Link from "next/link";

export default function ProductCard({
  name,
  topic1,
  topic2,
  topic3,
  description1,
  description2,
  description3,
  image,
  index,
}) {
  return (
    <div className="border-b border-gray-200 pb-8 flex gap-6 list-fade-in-down lg:relative">
      <div className="flex items-center justify-center bg-gray-200 rounded-xl  w-4/10 sm:w-6/10 lg:w-5/10 ">
        <img
          src={image}
          alt={name}
          className="h-38 object-cover rounded-t-xl"
        />
      </div>
      <div className="w-6/10 lg:w-5/10 flex flex-col items-center justify-center  gap-4 ">
        <h3 className="font-semibold text-xs text-black text-pretty">{name}</h3>
        <div className="text-gray-800 text-[11px] text-pretty w-full flex items-center gap-2">
          <div className="text-right w-2/4">{topic1}</div>
          <div className="text-center w-full">{description1}</div>
        </div>
        <div className="text-gray-800 text-[11px] text-pretty w-full flex items-center gap-2">
          <div className="text-right w-2/4">{topic2}</div>
          <div className="text-center w-full">{description2}</div>
        </div>
        <div className="text-gray-800 text-[11px] text-pretty w-full flex items-center gap-2">
          <div className="text-right w-2/4">{topic3}</div>
          <div className="text-center w-full">{description3}</div>
        </div>
        {/* <Link
          href="/products/frp/Image_Frp_Tank"
          className="text-[11px] text-primary-700 text-center  hover:underline"
        >
          ดูเพิ่มเติม
        </Link> */}
      </div>
    </div>
  );
}
