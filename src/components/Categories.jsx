import { Link } from "react-router-dom";
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";

const categoryData = [
  {
    name: "Headphones",
    image: Headphones,
    link: "/headphones",
  },
  {
    name: "Speakers",
    image: Speakers,
    link: "/speakers",
  },
  {
    name: "Earphones",
    image: Earphones,
    link: "/earphones",
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col mt-24 md:flex-row md:space-x-6 gap-14">
      {categoryData.map(({ name, image, link }) => (
        <div
          key={name}
          className="flex flex-col items-center p-4 space-y-4 rounded-lg bg-[#F1F1F1] md:w-1/3"
        >
          <img src={image} className="w-32 -mt-14" alt={name} />
          <h5 className="text-md font-bold uppercase tracking-wide">{name}</h5>

          <Link
            to={link}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200"
          >
            <span>Shop</span>
            <img src={ArrowRight} alt="arrow right" className="w-2.5" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
