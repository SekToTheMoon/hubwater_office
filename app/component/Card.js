import Link from "next/link";

const Card = ({ link, image }) => {
  return (
    <Link href={link} className="">
      <img
        src={image}
        alt="banner"
        className="object-cover w-full  shadow-md transition-transform duration-300 hover:scale-101 hover:shadow-gray-500/40 rounded-xl"
      />
    </Link>
  );
};

export default Card;
