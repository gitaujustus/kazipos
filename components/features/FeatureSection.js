"use client"
import Image from "next/image";
import { NextIcon } from "../icons";
import Link from "next/link";
import { motion } from "framer-motion";

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isImageFirst = false,
  link = "/contact",
}) => {
  const contentSection = (
    <motion.div
    initial={{ opacity: 0.5, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8,  delay: 0.3 }}
    viewport={{ once: false }}
    className=" w-full sm:w-[44.72vw]  sm:h-[500px] lg:h-[600px] xl:h-[494px] bg-red_republic rounded-lg md:rounded-xl lg:rounded-[25px] bg-gradient-to-b from-[#D80000] to-[#7F0808] p-6 md:p-8 lg:px-[69px] lg:py-[50px] flex flex-col gap-10 md:gap-[60px]">
      <div className="flex flex-col gap-[32px]">
        <h1 className="text-2xl md:text-3xl lg:text-[48px] font-inter font-bold text-white leading-[120%] ]">
          {title}
        </h1>
        <p className="text-white text-sm md:text-base lg:text-[16px] font-inter font-400 leading-[28px]">
          {description}
        </p>
      </div>
      <Link href={link}>
        {/* <button className="font-inter font-normal text-sm md:text-base lg:text-[16px] px-2 py-1 text-nowrap hover:border-2 hover:border-white  leading-normal lg:leading-[28px] text-white w-full md:w-auto  flex items-center justify-center md:justify-start gap-2 lg:gap-[10px] h-10 md:h-12 lg:h-[48px]  rounded-full lg:rounded-[35px]">
          <span>Get Started Today</span>
          <NextIcon />
        </button> */}
        <ButtonWithHover />
      </Link>
    </motion.div>
  );

  const imageSection = (
    <motion.div 
    initial={{ opacity: 0.2, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8,  delay: 0.3 }}
    viewport={{ once: false }}
    className=" w-full sm:w-[44.72vw] h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[484px] rounded-lg md:rounded-xl lg:rounded-[25px] relative">
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg md:rounded-xl lg:rounded-[25px]"
      />
    </motion.div>
  );

  return (
    <div>
        <div className="hidden sm:flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-[24px] w-full px-4 md:px-6 lg:px-0">
        {isImageFirst ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </div>

        <div className="flex sm:hidden flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-[24px] w-full ">
        {isImageFirst ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {imageSection}
            {contentSection}
          </>
        )}
      </div>
    </div>
  );
};

export default FeatureSection;



const ButtonWithHover = () => {
  return (
    <motion.button
  className="font-inter font-normal text-sm md:text-base lg:text-[16px] px-3 py-1 text-nowrap leading-normal lg:leading-[28px] text-white w-full md:w-auto flex items-center justify-center md:justify-start gap-2 lg:gap-[10px] h-10 md:h-12 lg:h-[48px] rounded-full lg:rounded-[35px] border-2 border-transparent"
  variants={{
    initial: {
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 0)',
      boxShadow: '0 0 0 rgba(255, 255, 255, 0)',
    },
    hover: {
      borderWidth: 2,
      borderColor: 'rgba(255, 255, 255, 1)',
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }}
  initial="initial"
  whileHover="hover"
>
  <span>Get Started Today</span>
  <NextIcon />
</motion.button>
  )
}


