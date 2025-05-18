import DesktopSpeakerZX9 from "../assets/home/desktop/image-speaker-zx9.png";
import TabletSpeakerZX9 from "../assets/home/tablet/image-speaker-zx9.png";
import MobileSpeakerZX9 from "../assets/home/mobile/image-speaker-zx9.png";
import DesktopSpeakerZX7 from "../assets/home/desktop/image-speaker-zx7.jpg";
import TabletSpeakerZX7 from "../assets/home/tablet/image-speaker-zx7.jpg";
import MobileSpeakerZX7 from "../assets/home/mobile/image-speaker-zx7.jpg";
import DesktopEarphonesYX1 from "../assets/home/desktop/image-earphones-yx1.jpg";
import TabletEarphonesYX1 from "../assets/home/tablet/image-earphones-yx1.jpg";
import MobileEarphonesYX1 from "../assets/home/mobile/image-earphones-yx1.jpg";
import PatternCircles from "../assets/home/desktop/pattern-circles.svg";
import AboutUsSection from "./AboutUsSection";
import Categories from "./Categories";
import { Link } from "react-router-dom";

const ContentSection = () => {
  return (
    <>
      <section>
        {/* Categories */}
        <div className="xl:px-[165px] px-6 sm:px-12 mx-auto mt-26 text-center max-w-screen-xl">
          <Categories />
          {/* ZX9 Speaker section */}
          <div className="relative mt-16 mb-16 min-h-[560px] bg-[#D87D4A] rounded-lg flex flex-col items-center justify-center text-center lg:flex-row lg:items-center lg:justify-start lg:pl-32 lg:text-left overflow-hidden">
            <img
              src={PatternCircles}
              alt="Pattern Circles"
              className="absolute z-0 top-0 left-1/2 transform -translate-x-1/2 lg:left-[-14%] lg:translate-x-0"
            />
            <picture className="z-10 w-40 lg:w-96 lg:mr-8 mb-[-10px] lg:mt-auto">
              <source media="(max-width: 767px)" srcSet={MobileSpeakerZX9} />
              <source media="(max-width: 1023px)" srcSet={TabletSpeakerZX9} />
              <img src={DesktopSpeakerZX9} alt="ZX9 Speaker" />
            </picture>
            <div className="z-10 text-white lg:w-1/2 lg:ml-18 mt-4 lg:mt-[-80px]">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                ZX9 <span className="block mt-4">SPEAKER</span>
              </h2>
              <p className="text-lg mb-6 max-w-[400px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to="/speakers/zx9"
                className="bg-black text-white uppercase py-3 px-8 text-sm font-bold"
              >
                See Product
              </Link>
            </div>
          </div>

          {/* ZX7 Speaker section */}
          <div className="relative mt-16 mb-16">
            <picture>
              <source media="(max-width: 767px)" srcSet={MobileSpeakerZX7} />
              <source media="(max-width: 1023px)" srcSet={TabletSpeakerZX7} />
              <img
                src={DesktopSpeakerZX7}
                alt="ZX7 Speaker"
                className="w-full h-full object-cover rounded-lg"
              />
            </picture>
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-start text-white px-8 lg:ml-20">
              <h2 className="text-3xl text-black font-black mb-4 text-left">
                ZX7 SPEAKER
              </h2>
              <Link
                to="/speakers/zx7"
                className="border border-black text-black uppercase py-3 px-8 text-sm font-bold"
              >
                See Product
              </Link>
            </div>
          </div>

          {/* YX1 Earphones Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 mb-16">
            {/* Image on the Left */}
            <picture>
              <source media="(max-width: 767px)" srcSet={MobileEarphonesYX1} />
              <source media="(max-width: 1023px)" srcSet={TabletEarphonesYX1} />
              <img
                src={DesktopEarphonesYX1}
                alt="YX1 Earphones"
                className="w-full h-full object-cover rounded-lg"
              />
            </picture>

            {/* Text on the Right */}
            <div className="bg-[#F1F1F1] rounded-lg flex flex-col items-start justify-center px-6 py-12 lg:px-20">
              <h2 className="text-3xl font-black mb-4 tracking-wide">
                YX1 EARPHONES
              </h2>
              <Link
                to="/earphones/yx1"
                className="w-fit border border-black text-black uppercase py-3 px-6 text-sm font-bold hover:bg-black hover:text-white transition-colors"
              >
                See Product
              </Link>
            </div>
          </div>
          <AboutUsSection />
        </div>
      </section>
    </>
  );
};

export default ContentSection;
