import HeroDesktop from "../assets/home/desktop/image-hero.jpg";
import HeroTablet from "../assets/home/tablet/image-header.jpg";
import HeroMobile from "../assets/home/mobile/image-header.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <header className="relative bg-[#191919] overflow-hidden">
      <div className="relative w-full max-w-screen-xl mx-auto">
        {/* Images */}
        <img
          src={HeroDesktop}
          alt="Hero Desktop"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={HeroTablet}
          alt="Hero Tablet"
          className="hidden md:block lg:hidden absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={HeroMobile}
          alt="Hero Mobile"
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />

        {/* Text content */}
        <div className="relative z-10 flex items-center justify-center xl:px-[165px] px-6 sm:px-12 min-h-[600px]">
          <div className="w-full text-center lg:text-left">
            <h3 className="font-bold text-white uppercase tracking-[0.5em] text-sm opacity-50">
              New Product
            </h3>

            <h1 className="text-white font-black text-5xl sm:text-5xl mt-4 uppercase leading-tight">
              XX99 Mark II <span className="block">Headphones</span>
            </h1>

            <p className="text-white text-base opacity-75 mt-6 leading-relaxed">
              Experience natural, lifelike audio and exceptional
              <span className="block">
                build quality made for the passionate music
              </span>
              <span className="block">enthusiast.</span>
            </p>

            <Link
              to="/headphones/xx99MarkII"
              className="inline-block mt-8 bg-[#D87D4A] text-white px-6 py-3 hover:bg-[#FBAF85] transition-colors duration-200 uppercase font-bold text-sm tracking-wide"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
