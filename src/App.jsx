import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductYX1 from "./pages/ProductYX1";
import ProductZX9 from "./pages/ProductZX9";
import ProductZX7 from "./pages/ProductZX7";
import ProductXX99MarkII from "./pages/ProductXX99MarkII";
import ProductXX99MarkI from "./pages/ProductXX99MarkI";
import ProductXX59 from "./pages/ProductXX59";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />

        <Route
          path="/earphones/yx1"
          element={
            <ProductYX1 cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/speakers/zx9"
          element={
            <ProductZX9 cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/speakers/zx7"
          element={
            <ProductZX7 cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/headphones/xx99MarkII"
          element={
            <ProductXX99MarkII
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/headphones/xx99MarkI"
          element={
            <ProductXX99MarkI
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/headphones/xx59"
          element={
            <ProductXX59 cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
