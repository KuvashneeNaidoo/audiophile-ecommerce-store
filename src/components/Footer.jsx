import Logo from "../assets/shared/desktop/logo.svg";
import FacebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-[#101010]">
      {" "}
      <footer className="text-white px-6 py-10 sm:px-12 xl:px-[165px] max-w-screen-xl mx-auto space-y-10 text-sm">
        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-6">
          <img src={Logo} alt="Audiophile Logo" className="h-6" />
          <nav>
            <ul className="flex flex-col items-center md:flex-row lg:flex-row lg:items-start gap-8 uppercase font-bold tracking-widest">
              <li>
                <a href="/" className="hover:text-[#D87D4A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/headphones"
                  className="hover:text-[#D87D4A] transition-colors"
                >
                  Headphones
                </a>
              </li>
              <li>
                <a
                  href="/speakers"
                  className="hover:text-[#D87D4A] transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="/earphones"
                  className="hover:text-[#D87D4A] transition-colors"
                >
                  Earphones
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Description and Social Icons*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Text Description */}
          <p className="text-center lg:text-left opacity-60 leading-relaxed lg:pr-22">
            Audiophile is an all-in-one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-end gap-6 self-end">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="h-6 hover:opacity-70"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img
                src={TwitterIcon}
                alt="Twitter"
                className="h-6 hover:opacity-70"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="h-6 hover:opacity-70"
              />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <p className="text-center lg:text-left opacity-60">
            Copyright 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
