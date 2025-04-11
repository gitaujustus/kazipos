import Image from "next/image";
import { ArrowTopRightIcon } from "../icons";
import { motion } from "framer-motion";

const additionalFeaturesData = [
  {
    id: 1,
    image: "/assets/features/insight.jpeg",
    title: "Insightful Business Analytics",
    description:
      "Unlock data-driven decisions with detailed sales reports, product performance metrics, and customer behavior insights to propel your business forward.",
  },
  {
    id: 2,
    image: "/assets/features/operations.jpeg",
    title: "Uninterrupted Operations",
    description:
      "Keep selling even without internet. KaziPOS's offline mode syncs data automatically when you're back online, ideal for areas with spotty connectivity.",
  },
  {
    id: 3,
    image: "/assets/features/transactions.jpeg",
    title: "Personalized Transaction Records",
    description:
      "Customize receipts with your logo, promotions, or thank-you notes to leave a professional impression with every sale.",
  }
];

const AdditionalFeatures = () => {
  return (
    <section
      
      className="bg-white px-0 sm:px-6 md:px-8 lg:px-12 xl:px-[64px] 2xl:px-20 py-[56px] 2xl:py-28 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[56px] 2xl:gap-16 min-h-screen"
    >
      
     <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[41px] 2xl:gap-16"
     >
      <h1 className="font-inter font-semibold text-3xl sm:text-4xl md:text-5xl  xl:text-[48px] 2xl:text-[72px] leading-tight text-center text-red_republic">
          Additional Features
        </h1>

        <p className="font-inter font-normal text-base sm:text-lg md:text-xl lg:text-[18px] 2xl:text-xl text-center text-black w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[500px] xl:max-w-[557px] 2xl:max-w-[600px] leading-[28px]">
        KaziPOS has more capabilities addressing common needs for Kenyan businesses and enhancing the value proposition.
        </p>
     </motion.div>
      <div className="w-full max-w-7xl 2xl:max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[18px] 2xl:gap-10 px-4 sm:px-6 md:px-8 lg:px-0">
        {additionalFeaturesData.map((feature) => (
          <AdditionalCard
            key={feature.id}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <button
            style={{
              boxShadow:
                "2px 2px 15px 0px rgba(0, 0, 0, 0.25), inset 0px -2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
            className="mt-[40px] w-[198px] gap-[10px] bg-red_republic h-[48px] text-red_shimmer text-[16px] leading-[100%] font-400 p-[10px] rounded-[35px] hover:bg-red_reign transition-all duration-300 cursor-pointer"
          >
            Get Started Today
          </button>
    </section>
  );
};

export default AdditionalFeatures;






const AdditionalCard = ({ image, title, description }) => {
    return ( 
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full h-full rounded-[20px] bg-white px-3 py-5 sm:p-4 lg:p-[37px] 2xl:p-5 flex flex-col gap-5 sm:gap-[15px] lg:gap-[28px] 2xl:gap-[37px] shadow-[0_0_3.8px_#0057B840] 2xl:shadow-md">
            <div className="w-full aspect-[294/230] relative rounded-[10px] overflow-hidden">
                <Image 
                    src={image} 
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[10px]"
                />
            </div>

            <h3 className="font-inter font-medium text-lg sm:text-xl lg:text-[20px] 2xl:text-[22px] text-red_republic">{title}</h3>

            <p className="font-inter font-normal text-sm sm:text-base lg:text-[18px] 2xl:text-[20px] text-baragon_brown leading-[28px]">{description}</p>
        </motion.div>
     );
}
 

