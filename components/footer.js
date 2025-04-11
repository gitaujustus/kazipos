import { Facebook, Instagram,  WhatsApp, LinkedIn, Logooooo } from "./icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-[40px] xl:px-[68px] 2xl:px-[74px] py-8 md:py-10 lg:py-12 2xl:py-16 flex flex-col gap-8 md:gap-[32px] lg:gap-[52px] font-inter text-sm sm:text-base bg-red_shimmer text-baragon_brown">
      {/* Top div */}
      <div className="flex flex-col  md:flex-row gap-[38.6px] md:gap-[58px] lg:gap-[77px] xl:gap-[116px] 2xl:gap-[154.6px]">
        {/* Part one */}
        <div className="flex items-center text-center justify-center md:text-left  md:justify-start  flex-col gap-6 w-full md:w-2/5 lg:w-[472px]">
          <div className="w-full flex justify-center md:justify-start">
            {/* <Image
              src="/assets/Kazi Afya Logo.svg"
              alt="logo"
              width={1000}
              height={500}
              className="w-40 sm:w-48 md:w-56 lg:w-64 2xl:w-72"
            /> */}
            <Logooooo/>
          </div>

          <p className="text-sm sm:text-base lg:text-[16px] 2xl:text-xl leading-[24px] text-baragon_brown font-normal ">
          KaziPOS is the leading point-of-sale system designed to streamline operations for businesses, ensuring seamless transaction management, billing, and reporting—all in one secure, cloud-based platform.
          </p>
        </div>

        <div className="flex md:flex-col lg:flex-row justify-around md:justify-start gap-16  md:gap-5 lg:gap-24 2xl:gap-32">
          {/* Part two */}
          
          <div className="flex flex-col  md:min-w-[133px] ">
            <h3 className="font-semibold  pb-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl">
              Products
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-[8px] xl:gap-[10px] text-sm sm:text-[16px]">
              <li>
                <Link href="/features" className="leading-tight group relative">
                    Small Businesses
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="leading-tight group relative">
                Professional Plan
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="leading-tight group relative">
                Enterprise Plan
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Part three */}
          <div className="flex flex-col">
            <h3 className="font-semibold  pb-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl text-nowrap">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-[8px] xl:gap-[10px] text-sm sm:text-[16px]">
              <li>
                <Link href="/" className="leading-tight group relative">
                  Home
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              
              <li>
                <Link href="/features" className="leading-tight group relative">
                  Features
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="leading-tight group relative">
                  Pricing
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="leading-tight group relative"
                >
                  Contact
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Part three */}
        <div className="flex flex-col  mx-auto md:mx-0">
          <div>
            <h3 className="font-semibold pb-2 text-base sm:text-lg lg:text-xl 2xl:text-2xl text-center md:text-left">
              Reach Us
            </h3>
            <p className="text-sm sm:text-[16px] leading-[24px] font-normal font-inter">
              39 Jimkan House, Woodvale Grove
            </p>
            <p className="text-sm sm:text-[16px] leading-[24px] font-normal font-inter">
              Westlands - Nairobi
            </p>
          </div>
          <div className="mt-2 2xl:mt-5">
            <p className="text-sm sm:text-[16px] leading-[24px] font-normal font-inter">
              Phone: +254 113 306358, +254 113 305897
            </p>
            <p className="text-sm sm:text-[16px] leading-[24px] font-normal font-inter">
              Email: info@kazipos.co.ke
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-[34px] lg:gap-[64px] justify-center items-center font-inter ">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
          <p>
            <a
              href="#"
              className="leading-tight text-sm sm:text-base group relative"
            >
              Privacy Policy
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>
          <p>
            <a
              href="#"
              className="leading-tight text-sm sm:text-base group relative"
            >
              Terms & Conditions
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-baragon_brown transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>
        </div>

        <p className="leading-tight text-sm sm:text-base order-3 sm:order-none">
          &copy;2025 Kazi Pos. All rights reserved
        </p>

        <div className="flex gap-4 sm:gap-6 justify-center items-center">
          <p>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </p>
          <p>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </p>
          <p>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </p>
          <p>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <LinkedIn className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </p>
        </div>
      </div>

      {/* extreme bottom div */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-[34px] lg:gap-[64px] justify-center items-center font-inter ">
        <p className="text-sm sm:text-base lg:text-[16px] 2xl:text-xl leading-[24px] text-baragon_brown font-normal ">
          Powered by <Link href="https://hillganinnovations.com" target="_blank" className="font-semibold text-red_republic">Hillgan Innovations</Link>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
