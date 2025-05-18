import { xx59Data } from "../data/productXX59Data";
import { xx99MarkIData } from "../data/productXX99MarkI";
import { xx99MarkIIData } from "../data/productXX99MarkII";
import Categories from "../components/Categories";
import AboutUseSection from "../components/AboutUsSection";

import { useNavigate } from "react-router-dom";

const Headphones = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <section>
        <header className="w-full bg-[#191919] flex items-center justify-center py-30">
          <h1 className="text-white text-4xl font-black uppercase tracking-widest">
            Headphones
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
                srcSet={xx99MarkIIData.preview.mobile}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={xx99MarkIIData.preview.tablet}
              />
              <img
                src={xx99MarkIIData.preview.desktop}
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
              XX99 Mark II <span className="block">Headphones</span>
            </h1>
            <p className="text-base opacity-75 mt-6 leading-relaxed">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button
              onClick={() => navigate("/headphones/xx99MarkII")}
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
              XX99 Mark I <span className="block">Headphones</span>
            </h1>
            <p className="text-base opacity-75 mt-6 leading-relaxed">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button
              onClick={() => navigate("/headphones/xx99MarkI")}
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
                srcSet={xx99MarkIData.preview.mobile}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={xx99MarkIData.preview.tablet}
              />
              <img
                src={xx99MarkIData.preview.desktop}
                alt="Headphones"
                className="w-full object-cover rounded-lg"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto xl:px-[165px] px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-1/2 flex-1 lg:pr-20 mb-8 lg:mb-0">
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet={xx59Data.preview.mobile}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={xx59Data.preview.tablet}
              />
              <img
                src={xx59Data.preview.desktop}
                alt="Headphones"
                className="w-full object-cover rounded-lg"
              />
            </picture>
          </div>
          <div className="w-full lg:w-1/2 flex-1 text-center lg:text-left">
            <h1 className="font-black text-3xl sm:text-4xl md:text-3xl mt-4 uppercase leading-tight">
              XX59 <span className="block">Headphones</span>
            </h1>
            <p className="text-base opacity-75 mt-6 leading-relaxed">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <button
              onClick={() => navigate("/headphones/xx59")}
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

export default Headphones;
