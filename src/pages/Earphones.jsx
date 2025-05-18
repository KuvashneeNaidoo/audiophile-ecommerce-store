import Categories from "../components/Categories";
import AboutUseSection from "../components/AboutUsSection";
import { yx1Data } from "../data/productYX1";
import { useNavigate } from "react-router-dom";

const Earphones = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <section>
        <header className="w-full bg-[#191919] flex items-center justify-center py-30">
          <h1 className="text-white text-4xl font-black uppercase tracking-widest">
            Earphones
          </h1>
        </header>
      </section>

      {/* Image and Text Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto xl:px-[165px] px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-1/2 flex-1 lg:pr-20 mb-8 lg:mb-0">
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet={yx1Data.preview.mobile}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={yx1Data.preview.tablet}
              />
              <img
                src={yx1Data.preview.desktop}
                alt="Headphones"
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
            <button
              onClick={() => navigate("/earphones/yx1")}
              className="mt-8 bg-[#D87D4A] text-white px-6 py-3 hover:bg-[#FBAF85] transition-colors duration-200 uppercase font-bold text-sm tracking-wide"
            >
              See Product
            </button>
          </div>
        </div>
      </section>

      <section>
        {/* Categories */}
        <div className="xl:px-[165px] px-6 sm:px-12 mx-auto mt-26 text-center max-w-screen-xl">
          <Categories />
          <AboutUseSection />
        </div>
      </section>
    </>
  );
};

export default Earphones;
