"use client";

import Image from "next/image";
import { Locations } from "@/components/icons";
import ContactForm from "@/components/contactForm";

const Contacts = () => {
  return (
    <main className="flex flex-col md:flex-row">
      {/* locations */}
      <div className="pt-[80px] pb-[65px] sm:pt-[100px] md:pt-[155px]  px-[20px] sm:px-[30px] md:px-[42px] xl:px-[56px] gap-[10px] w-full md:min-w-[37vw] bg-red_shimmer">
        <h1 className="text-[48px] sm:text-[60px] md:text-[72px] xl:text-[96px] leading-[120%] font-inter font-semibold text-red_republic">
          Our locations
        </h1>
        <div className="flex flex-col gap-[11px] pb-[30px] sm:pb-[40px] md:pb-[50px] xl:pb-[67px] pt-[40px] sm:pt-[60px] md:pt-[75px] xl:pt-[91px]">
          <p className="flex items-center gap-[5px]">
            <span>
              <Locations />
            </span>
            <span className="text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-inter font-medium text-baragon_brown">
              Kenya
            </span>
          </p>
        
          <p className="font-inter font-normal text-[16px] sm:text-[18px] xl:text-[20px] text-baragon_brown">
            39 Woodvale Grove, Westlands
          </p>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] xl:text-[20px] text-baragon_brown">
            Jimkan House
          </p>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] xl:text-[20px] text-baragon_brown">
            Nairobi, Kenya
          </p>
        </div>

        <div className="flex flex-col gap-[11px]">
          <p className="">
            <span className="text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-inter font-medium text-baragon_brown">
            Contact Information
            </span>
          </p>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] xl:text-[20px] text-baragon_brown">
          Email: info@kazipos.co.ke
          </p>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] xl:text-[20px] text-baragon_brown">
          Phone: +254 113 306358,+254 113 305897
          </p>
        </div>
      </div>

      {/* form */}
      <div className="py-[20px] sm:py-[30px] md:py-[35px] xl:py-[41px] px-[20px] sm:px-[40px] md:px-[40px] xl:px-[78px] gap-[10px] w-full md:min-w-[47vw]">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contacts;
