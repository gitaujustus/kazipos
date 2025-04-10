"use client"
import { BulletIcon, NextIcon } from "@/components/icons";
import Image from "next/image";
import FeatureSection from "@/components/features/FeatureSection";
import AdditionalFeatures from "@/components/features/additionalFeatures";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <main>
      <section className="pt-10  md:pt-28 lg:pt-32 xl:pt-[162px] 2xl:pt-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[64px] h-auto min-h-[600px] xl:h-[1024px]">
        <div className="max-w-7xl mx-auto"
        >
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full max-w-[815px] flex flex-col gap-6 sm:gap-8 xl:gap-[40px] mb-6 sm:mb-8 xl:mb-[40px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-inter font-bold text-red_republic leading-[120%] h-auto xl:h-[154px] ">
              Power Your
              <br />
              Business with KaziPOS
            </h1>

            <p className="text-sm sm:text-base md:text-lg xl:text-[18px] font-inter font-medium leading-[120%] w-full max-w-[488px] text-baragon_brown">
              One POS to simplify sales, manage stock, and grow your customer base
            </p>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
            {/* Features list column */}
            <div 
            
            className="space-y-3 w-full sm:w-[45%] lg:w-[40%] max-w-[450px]">
              {[
                "Effortless Transaction Handling",
                "Instant Stock Updates",
                "Client Engagement Solutions",
                "Adaptable to Your Business Size",
                "Insightful Business Analytics",
                "Uninterrupted Operations",
                "Personalized Transaction Records",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 xl:gap-4 mb-4 sm:mb-5 xl:mb-6"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <BulletIcon />
                  </div>
                  <p className="font-inter font-normal text-sm sm:text-base xl:text-lg leading-tight text-baragon_brown">
                    {feature}
                  </p>
                </div>
              ))}

              <div className="flex justify-center sm:justify-start">
                {/*  */}
                <button
                  style={{
                    boxShadow:
                      "2px 2px 15px 0px rgba(0, 0, 0, 0.25), inset 0px -2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  className=" mt-6 sm:mt-8 xl:mt-10 w-full max-w-[198px] bg-red_republic h-10 sm:h-12 xl:h-12 text-red_shimmer text-sm sm:text-base xl:text-base leading-none font-medium p-2.5 sm:p-3 xl:p-3 rounded-full hover:bg-red_reign transition-all duration-300 cursor-pointer"
                >
                  Get Started Today
                </button>
              </div>
                  
            </div>

            {/* Image column */}
            <div 
            className="w-full  sm:w-[90%]  lg:w-[100%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]  md:mt-[-100px] relative">
              <Image
                src="/assets/features/illustrations.svg"
                alt="Person using KaziPOS software with analytics dashboard"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing section */}
     

      {/* section 2 */}
      <section className="px-4  sm:px-6 md:px-8 lg:px-12 xl:px-[64px] 2xl:px-24 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-[82px] 2xl:pt-48 2xl:pb-32 ">
        <motion.div
        initial={{ opacity: 0, y:  50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false }}
        className="">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] 2xl:text-6xl font-inter font-bold text-red_republic leading-tight xl:leading-[120%] text-center mb-6 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-[41px] 2xl:mb-12">
            Learn more about KaziPOS&apos;s features
          </h1>
          <p className="text-black text-base sm:text-base md:text-lg lg:text-lg xl:text-[18px] 2xl:text-xl font-inter font-normal leading-tight xl:leading-[120%] text-center w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[557px] 2xl:max-w-[650px] mx-auto">
            KaziPOS is packed full of features that help you save time and work more effectively.
          </p>
        </motion.div>

        <div className="mt-16  sm:mt-20 md:mt-24 lg:mt-28 xl:mt-[106px] 2xl:mt-32 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-[25px] 2xl:gap-20">
         
            <FeatureSection
              title="Effortless Transaction Handling"
              description="Handle sales quickly and accurately with KaziPOS. Accept cash, cards, and mobile money like M-Pesa, generate instant digital or printed receipts, and keep your customers moving with fast, error-free transactions."
              imageSrc="/assets/features/features-1.png"
              imageAlt="Person"
              isImageFirst={false}
              link="#"
            />

         
            <FeatureSection
              title="Instant Stock Updates"
              description="Stay on top of your inventory with live tracking. KaziPOS updates stock levels as sales happen, sends low-stock alerts, and simplifies reordering—perfect for managing daily essentials or specialty items."
              imageSrc="/assets/features/features-2.png"
              imageAlt="Person"
              isImageFirst={true}
              link="#"
            />

          
            <FeatureSection
              title="Client Engagement Solutions"
              description="Build lasting relationships with loyalty programs, purchase history tracking, and personalized marketing. Send targeted offers via SMS or email to bring customers back again and again."
              imageSrc="/assets/features/features-1.png"
              imageAlt="Person"
              isImageFirst={false}
              link="#"
            />

            <FeatureSection
              title="Adaptable to Your Business Size"
              description="From solo entrepreneurs to growing enterprises, KaziPOS adapts to your needs. Start with core features and scale up with multi-user access and advanced reporting as your business expands."
              imageSrc="/assets/features/features-2.png"
              imageAlt="Person"
              isImageFirst={true}
              link="#"
            />
        </div>
      </section>

      {/* section 3 */}
      <section>
        <AdditionalFeatures />
      </section>
    </main>
  );
}