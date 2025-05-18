const Features = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 mt-16 mb-16">
      <div className="w-full lg:w-3/4 flex flex-col py-12 text-left pr-6">
        <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">
          Features
        </h2>
        <p className="text-base text-black text-opacity-60 leading-relaxed mb-4">
          These headphones have been created from durable, high-quality
          materials tough enough to take anywhere. Its compact folding design
          fuses comfort and minimalist style making it perfect for travel.
          Flawless transmission is assured by the latest wireless technology
          engineered for audio synchronization with videos.
        </p>
        <p className="text-base text-black text-opacity-60 leading-relaxed">
          More than a simple pair of headphones, this headset features a pair of
          built-in microphones for clear, hands-free calling when paired with a
          compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how
          you use the XX59 headphones, you can do so all day thanks to an
          impressive 30-hour battery life that can be rapidly recharged via
          USB-C.
        </p>
      </div>

      <div className="w-full lg:w-1/4 py-12">
        <div className="flex flex-col md:flex-row lg:flex-col md:items-start lg:items-start">
          <h3 className="text-3xl text-left font-bold uppercase tracking-wide mb-6 md:mb-0 lg:mb-6 lg:mr-0">
            In the box
          </h3>
          <ul className="space-y-4 text-left lg:ml-0 md:ml-auto">
            <li className="flex items-center space-x-4">
              <span className="text-[#D87D4A] font-bold">1x</span>
              <span className="text-black text-opacity-60">Speaker Unit</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-[#D87D4A] font-bold">2x</span>
              <span className="text-black text-opacity-60">Speaker Cables</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-[#D87D4A] font-bold">1x</span>
              <span className="text-black text-opacity-60">User Manual</span>
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
  );
};

export default Features;
