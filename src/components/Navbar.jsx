import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "./Cart";

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
    <nav className="top-0 left-0 w-full bg-[#191919] border-b border-[#5d5d5d46] z-20 relative">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto xl:px-[165px] px-6 sm:px-12 py-6">
        <button
          className="md:hidden mr-4 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <ul
          className={`md:flex md:gap-6 absolute md:static w-full left-0 top-14 p-4 md:p-0 flex justify-center ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-2">
            <Link
              to="/"
              className="text-white uppercase font-bold text-sm tracking-wide hover:text-[#D87D4A]"
            >
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/headphones"
              className="text-white uppercase font-bold text-sm tracking-wide hover:text-[#D87D4A]"
            >
              Headphones
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/speakers"
              className="text-white uppercase font-bold text-sm tracking-wide hover:text-[#D87D4A]"
            >
              Speakers
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/earphones"
              className="text-white uppercase font-bold text-sm tracking-wide hover:text-[#D87D4A]"
            >
              Earphones
            </Link>
          </li>
        </ul>

        <div className="ml-auto flex items-center relative" ref={cartRef}>
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
              {/* Backdrop overlay */}
              <div
                className="fixed inset-0 bg-black opacity-50 z-20"
                onClick={() => setCartOpen(false)}
              ></div>

              {/* Cart Panel */}
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                onClose={() => setCartOpen(false)}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
