import AboutImage from "../assets/shared/desktop/image-best-gear.jpg";

const AboutUsSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 mb-16">
      {/* Text on the Left */}
      <div className="flex flex-col items-start justify-center lg:pr-22 py-12 text-left">
        <h2 className="text-4xl font-black mb-6 tracking-wide uppercase">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h2>
        <p className="text-base text-black text-opacity-60 leading-relaxed">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      {/* Image on the Right */}
      <div>
        <img
          src={AboutImage}
          alt="Person enjoying audio gear"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
