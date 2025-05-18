import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "./Cart";
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

const Navbar = ({ menuOpen, setMenuOpen, cartItems, setCartItems }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef();

  const totalCartQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  return (
    <nav className="top-0 left-0 w-full bg-[#191919] border-b border-[#5d5d5d46] z-30 relative">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto xl:px-[165px] px-6 sm:px-12 py-6">
        {/* Left: Logo and Menu */}
        <div className="flex items-center md:w-1/3">
          <button
            className="md:hidden mr-4 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="z-20">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Nav Items */}
        <ul className="hidden md:flex gap-6 justify-center items-center md:w-1/3">
          <li>
            <Link
              to="/"
              className="text-white uppercase font-bold text-sm tracking-wide hover:text-[#D87D4A]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/headphones"
              className="text-white uppercase font-bold text-sm tracking-wide hover:text-[#D87D4A]"
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              to="/speakers"
              className="text-white uppercase font-bold text-sm tracking-wide hover:text-[#D87D4A]"
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              to="/earphones"
              className="text-white uppercase font-bold text-sm tracking-wide hover:text-[#D87D4A]"
            >
              Earphones
            </Link>
          </li>
        </ul>

        {/* Cart */}
        <div
          className="flex justify-end items-center md:w-1/3 relative z-20"
          ref={cartRef}
        >
          <button
            onClick={() => setCartOpen((prev) => !prev)}
            className="relative"
          >
            <ShoppingCart size={24} className="text-white" />
            {totalCartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalCartQuantity}
              </span>
            )}
          </button>
          {cartOpen && (
            <>
              <div
                className="fixed inset-0 bg-black opacity-50 z-10"
                onClick={() => setCartOpen(false)}
              ></div>
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                onClose={() => setCartOpen(false)}
              />
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-14 px-6 py-12 bg-white z-10">
          {categoryData.map(({ name, image, link }) => (
            <div
              key={name}
              className="flex flex-col items-center p-4 space-y-4 rounded-lg bg-[#F1F1F1]"
            >
              <img src={image} className="w-32 -mt-14" alt={name} />
              <h5 className="text-md font-bold uppercase tracking-wide">
                {name}
              </h5>
              <Link
                to={link}
                className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold opacity-50 hover:opacity-100 transition-opacity duration-200"
                onClick={() => setMenuOpen(false)}
              >
                <span>Shop</span>
                <img src={ArrowRight} alt="arrow right" className="w-2.5" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
