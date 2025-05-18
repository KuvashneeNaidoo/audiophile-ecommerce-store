import { useState } from "react";
import { yx1Data } from "../data/productYX1";
import Categories from "../components/Categories";
import AboutUseSection from "../components/AboutUsSection";
import { ToastContainer, toast } from "react-toastify";

const ProductYX1 = ({ cartItems, setCartItems }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === 6);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === 6 ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: 6,
          name: "YX1 Earphones",
          price: 599,
          quantity,
          image: yx1Data.main.desktop,
        },
      ]);
    }
    toast.success("Added to cart!", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {/* Go Back Button */}
      <div className="max-w-screen-xl mx-auto xl:px-[165px] px-6 pt-6 sm:px-12 mt-6">
        <a
          href="/earphones"
          className="text-md text-gray-500 font-medium opacity-70 hover:opacity-100"
        >
          Go Back
        </a>
      </div>
      {/* Image and Text Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto xl:px-[165px] px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-1/2 flex-1 lg:pr-20 mb-8 lg:mb-0">
            <picture>
              <source media="(max-width: 639px)" srcSet={yx1Data.main.mobile} />
              <source
                media="(max-width: 1023px)"
                srcSet={yx1Data.main.tablet}
              />
              <img
                src={yx1Data.main.desktop}
                alt="YX1 Wireless Earphones"
                className="w-full object-cover rounded-lg"
              />
            </picture>
          </div>
          <div className="w-full lg:w-1/2 flex-1 text-center lg:text-left">
            <h3 className="font-bold uppercase tracking-[0.5em] text-sm text-[#D87D4A]">
              New Product
            </h3>

            <h1 className="font-black text-3xl sm:text-4xl md:text-3xl mt-4 uppercase leading-tight">
              YX1 Wireless <span className="block">Earphones</span>
            </h1>
            <p className="text-base opacity-75 mt-6 leading-relaxed">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <p className="mt-4 font-bold text-lg">$599</p>

            <div className="mt-4 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center rounded overflow-hidden bg-gray-100">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-2 text-xl font-bold hover:bg-gray-200 hover:text-[#D87D4A]"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-5 py-2 text-base font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-2 text-xl font-bold hover:bg-gray-200 hover:text-[#D87D4A]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-[#D87D4A] text-white px-6 py-3 hover:bg-[#FBAF85] transition-colors duration-200 uppercase font-bold text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories + About Section */}
      <section>
        <div className="xl:px-[165px] px-6 sm:px-12 mx-auto text-center max-w-screen-xl">
          <section className="flex flex-col lg:flex-row gap-6 mb-16">
            {/* Features Description */}
            <div className="w-full lg:w-3/4 flex flex-col py-12 text-left pr-6">
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">
                Features
              </h2>
              <p className="text-base text-black text-opacity-60 leading-relaxed mb-4">
                These headphones have been created from durable, high-quality
                materials tough enough to take anywhere. Its compact folding
                design fuses comfort and minimalist style making it perfect for
                travel. Flawless transmission is assured by the latest wireless
                technology engineered for audio synchronization with videos.
              </p>
              <p className="text-base text-black text-opacity-60 leading-relaxed">
                More than a simple pair of headphones, this headset features a
                pair of built-in microphones for clear, hands-free calling when
                paired with a compatible smartphone. Controlling music and calls
                is also intuitive thanks to easy-access touch buttons on the
                earcups. Regardless of how you use the XX59 headphones, you can
                do so all day thanks to an impressive 30-hour battery life that
                can be rapidly recharged via USB-C.
              </p>
            </div>

            {/* What's in the Box */}
            <div className="w-full lg:w-1/4 py-12">
              <div className="flex flex-col md:flex-row lg:flex-col md:items-start lg:items-start">
                <h3 className="text-3xl text-left font-bold uppercase tracking-wide mb-6 md:mb-0 lg:mb-6 lg:mr-0">
                  In the box
                </h3>
                <ul className="space-y-4 text-left lg:ml-0 md:ml-auto">
                  <li className="flex items-center space-x-4">
                    <span className="text-[#D87D4A] font-bold">1x</span>
                    <span className="text-black text-opacity-60">
                      Speaker Unit
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-[#D87D4A] font-bold">2x</span>
                    <span className="text-black text-opacity-60">
                      Speaker Cables
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-[#D87D4A] font-bold">1x</span>
                    <span className="text-black text-opacity-60">
                      User Manual
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-[#D87D4A] font-bold">1x</span>
                    <span className="text-black text-opacity-60">
                      3.5mm Audio Cable
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={yx1Data.gallery[0].mobile}
                    />
                    <source
                      media="(max-width: 1023px)"
                      srcSet={yx1Data.gallery[0].tablet}
                    />
                    <img
                      src={yx1Data.gallery[0].desktop}
                      alt="Image 1"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </picture>
                </div>

                <div className="flex-1">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={yx1Data.gallery[1].mobile}
                    />
                    <source
                      media="(max-width: 1023px)"
                      srcSet={yx1Data.gallery[1].tablet}
                    />
                    <img
                      src={yx1Data.gallery[1].desktop}
                      alt="Image 2"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </picture>
                </div>
              </div>

              <div className="md:col-span-2">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={yx1Data.gallery[2].mobile}
                  />
                  <source
                    media="(max-width: 1023px)"
                    srcSet={yx1Data.gallery[2].tablet}
                  />
                  <img
                    src={yx1Data.gallery[2].desktop}
                    alt="Large Image"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </picture>
              </div>
            </div>
          </section>
          <Categories />
          <AboutUseSection />
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default ProductYX1;
