import Link from "next/link";
function MenuLink({ link, img, label }) {
  return (
    <Link href={link}>
      <div className=" flex flex-col items-center   transition">
        <img
          src={img}
          alt="household"
          className="w-full aspect-9/8  object-cover rounded-xl mb-2"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-center  text-xs font-medium text-gray-800 ">
            {label}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MenuLink;
