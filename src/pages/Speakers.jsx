import { zx9Data } from "../data/productZX9";
import { zx7Data } from "../data/productZX7";
import Categories from "../components/Categories";
import AboutUseSection from "../components/AboutUsSection";
import { useNavigate } from "react-router-dom";

const Speakers = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Header Section */}
      <section>
        <header className="w-full bg-[#191919] flex items-center justify-center py-30">
          <h1 className="text-white text-4xl font-black uppercase tracking-widest">
            Speakers
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
                srcSet={zx9Data.preview.mobile}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={zx9Data.preview.tablet}
              />
              <img
                src={zx9Data.preview.desktop}
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
              ZX9 Speaker
            </h1>
            <p className="text-base opacity-75 mt-6 leading-relaxed">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button
              onClick={() => navigate("/speakers/zx9")}
              className="mt-8 bg-[#D87D4A] text-white px-6 py-3 hover:bg-[#FBAF85] transition-colors duration-200 uppercase font-bold text-sm tracking-wide"
            >
              See Product
            </button>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto xl:px-[165px] px-6 sm:px-12 flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex-1 text-center lg:text-left">
            <h1 className="font-black text-3xl sm:text-4xl md:text-3xl mt-4 uppercase leading-tight">
              ZX7 Speaker
            </h1>
            <p className="text-base opacity-75 mt-6 leading-relaxed">
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <button
              onClick={() => navigate("/speakers/zx7")}
              className="mt-8 bg-[#D87D4A] text-white px-6 py-3 hover:bg-[#FBAF85] transition-colors duration-200 uppercase font-bold text-sm tracking-wide"
            >
              See Product
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex-1 mb-8 lg:mb-0">
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet={zx7Data.preview.mobile}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={zx7Data.preview.tablet}
              />
              <img
                src={zx7Data.preview.desktop}
                alt="Headphones"
                className="w-full object-cover rounded-lg"
              />
            </picture>
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

export default Speakers;
