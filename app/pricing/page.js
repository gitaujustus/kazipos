
"use client";
import { TickIcon, TickWhiteIcon } from "@/components/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Pricing = () => {
  const basicPlanIncluded = [
    "Sales Tracking",
    "Basic Inventory Management",
    "M-Pesa Integration",
    "Basic Sales Reporting",
    "Customer Database",
    "Receipt Options",
    "Support",
  ];

  const professionalPlanIncluded = [
    "All Basic Plan features",
    "Advanced Sales Reporting",
    "Customer Loyalty Programs",
    "Promotional Tools",
    "Staff Management",
    "Accounting Integration",
  ];

  const enterprisePlanIncluded = [
    "All Standard Plan features",
    "Multi-Location Management",
    "Advanced Analytics",
    "CRM Integration",
    "Priority Support",
    "Customizable POS Interface",
  ];

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Pricing calculations (10% discount for annual)
  const plans = {
    essential: {
      monthly: 2000,
      annual: Math.round(2000 * 12 * 0.9),
    },
    professional: {
      monthly: 5000,
      annual: Math.round(5000 * 12 * 0.9),
    },
    enterprise: {
      monthly: 10000,
      annual: Math.round(10000 * 12 * 0.9),
    },
  };

  // Animation variants for pricing cards toggle effect
  const cardAnimationVariants = {
    monthly: {
      rotateY: [90, 0],
      scale: [0.9, 1],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    annual: {
      rotateY: [90, 0],
      scale: [0.9, 1],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  };

  // Animation for price change
  const priceAnimationVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[64px] pb-[120px]">
      <motion.div
        className="flex flex-col gap-[40px] my-[70px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h1 className="text-center = text-baragon_brown text-[28px] md:text-[32px] lg:text-[48px] leading-[120%] font-inter font-semibold md:max-w-[56.6vw] mx-auto">
          Affordable Pricing
        </h1>

        {/* Toggle button */}
        <div className="flex items-center gap-[14px] h-[30px] md:h-[40px] px-2 sm:px-4 w-[200px] justify-center mx-auto">
          <span className="text-[18px] md:text-[20px] font-medium text-baragon_brown font-inter leading-[120%]">
            Monthly
          </span>
          <div
            className="relative inline-flex items-center cursor-pointer"
            onClick={handleToggle}
          >
            <div
              className={`w-10 sm:w-11 h-5 sm:h-6 rounded-full transition-colors duration-300 bg-red_republic`}
            >
              <div
                className={`w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-full shadow-md absolute top-0.5 transition-transform duration-300 ${
                  isToggled ? "translate-x-5 sm:translate-x-5" : "left-0.5"
                }`}
              ></div>
            </div>
          </div>
          <span className="text-[18px] md:text-[20px] font-medium text-baragon_brown font-inter leading-[120%]">
            Annually
          </span>
        </div>
      </motion.div>

      <section className="flex flex-wrap gap-10 md:gap-6 justify-between">
        {/* Basic Plan */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="p-[20px] sm:p-[25px] md:p-[30px] rounded-[15px] sm:rounded-[20px] flex flex-col gap-[8px] sm:gap-[10px] bg-white w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[28vw]"
          style={{
            boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
          }}
          variants={cardAnimationVariants}
          animate={isToggled ? "annual" : "monthly"}
          key={`basic-${isToggled ? "annual" : "monthly"}`}
        >
          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px] leading-[120%] text-baragon_brown">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-semibold">
              Basic Plan
            </h3>
            <p className="font-inter font-400 text-[14px] sm:text-[16px]">
              Small businesses
            </p>
            <div className="relative h-[30px] sm:h-[35px] md:h-[40px]">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={isToggled ? "annual" : "monthly"}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={priceAnimationVariants}
                  className="font-inter text-[20px] sm:text-[22px] md:text-[24px] absolute"
                >
                  <span className="font-bold">
                    Ksh{" "}
                    {isToggled
                      ? plans.essential.annual.toLocaleString()
                      : plans.essential.monthly.toLocaleString()}
                  </span>
                  /{isToggled ? " year" : " month"}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <button className="my-[15px] sm:my-[20px] md:my-[29px] px-[30px] sm:px-[40px] md:px-[50px] py-[10px] rounded-[8px] sm:rounded-[10px] bg-red-700 text-white font-inter font-400 text-[14px] sm:text-[16px] leading-[120%] hover:bg-white hover:text-red-700 border-2 border-red-700 transition-all duration-700 ease-in-out cursor-pointer">
            Get Started
          </button>

          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px]">
            {basicPlanIncluded.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-[8px] sm:gap-[10px] max-w-full sm:max-w-[90%] md:max-w-[80%]"
              >
                <p className="flex-shrink-0">
                  <TickIcon className="w-[16px] h-[16px] sm:w-auto sm:h-auto" />
                </p>
                <p className="font-inter text-[14px] sm:text-[16px] font-400 leading-[28px] text-inter text-baragon_brown">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Professional Plan */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="p-[20px] font-inter sm:p-[25px] md:p-[30px] rounded-[15px] sm:rounded-[20px] flex flex-col gap-[8px] sm:gap-[10px] bg-red-700 text-white w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[28vw]"
          style={{
            boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
          }}
          variants={cardAnimationVariants}
          animate={isToggled ? "annual" : "monthly"}
          key={`professional-${isToggled ? "annual" : "monthly"}`}
        >
          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px] leading-[120%]">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-semibold">
              Professional Plan
            </h3>
            <p className="font-inter font-normal text-[14px] sm:text-[16px]">
              Medium-sized businesses
            </p>
            <div className="relative h-[30px] sm:h-[35px] md:h-[40px]">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={isToggled ? "annual" : "monthly"}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={priceAnimationVariants}
                  className="font-inter text-[20px] sm:text-[22px] md:text-[24px] absolute"
                >
                  <span className="font-bold">
                    {isToggled
                      ? plans.professional.annual.toLocaleString()
                      : plans.professional.monthly.toLocaleString()}
                  </span>
                  /{isToggled ? " year" : " month"}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <button className="my-[15px] sm:my-[20px] md:my-[29px] px-[30px] sm:px-[40px] md:px-[50px] py-[8px] sm:py-[10px] rounded-[8px] sm:rounded-[10px] bg-white text-red-700 font-inter font-400 text-[14px] sm:text-[16px] leading-[120%] hover:bg-red-700 hover:text-white border-2 border-white transition-all duration-700 ease-in-out cursor-pointer">
            Get Started
          </button>

          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px]">
            {professionalPlanIncluded.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-[8px] sm:gap-[10px] max-w-full sm:max-w-[90%] md:max-w-[80%]"
              >
                <p className="flex-shrink-0">
                  <TickWhiteIcon className="w-[16px] h-[16px] sm:w-auto sm:h-auto" />
                </p>
                <p className="font-inter text-[14px] sm:text-[16px] font-400 leading-[28px] text-inter">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="p-[20px] sm:p-[25px] md:p-[30px] rounded-[15px] sm:rounded-[20px] flex flex-col gap-[8px] sm:gap-[10px] bg-white w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[28vw]"
          style={{
            boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
          }}
          variants={cardAnimationVariants}
          animate={isToggled ? "annual" : "monthly"}
          key={`enterprise-${isToggled ? "annual" : "monthly"}`}
        >
          <div className="flex font-inter text-baragon_brown flex-col gap-[15px] sm:gap-[20px] md:gap-[27px] leading-[120%]">
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-semibold">
              Enterprise Plan
            </h3>
            <p className="font-inter font-400 text-[14px] sm:text-[16px]">
              Large enterprises
            </p>
            <div className="relative h-[30px] sm:h-[35px] md:h-[40px]">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={isToggled ? "annual" : "monthly"}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={priceAnimationVariants}
                  className="font-inter text-[20px] sm:text-[22px] md:text-[24px] absolute"
                >
                  <span className="text-london-rain font-bold">
                    {isToggled
                      ? plans.enterprise.annual.toLocaleString()
                      : plans.enterprise.monthly.toLocaleString()}
                  </span>
                  /{isToggled ? " year" : " month"}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <button className="my-[15px] sm:my-[20px] md:my-[29px] px-[30px] sm:px-[40px] md:px-[50px] py-[8px] sm:py-[10px] rounded-[8px] sm:rounded-[10px] bg-red-700 text-white font-inter font-400 text-[14px] sm:text-[16px] leading-[120%] hover:bg-white hover:text-red-700 border-2 border-red-700 transition-all duration-700 ease-in-out cursor-pointer">
            Get Started
          </button>

          <div className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[27px]">
            {enterprisePlanIncluded.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-[8px] sm:gap-[10px] max-w-full sm:max-w-[90%] md:max-w-[80%]"
              >
                <p className="flex-shrink-0">
                  <TickIcon className="w-[16px] h-[16px] sm:w-auto sm:h-auto" />
                </p>
                {index === 0 ? (
                  <p className="text-[14px] sm:text-[16px] font-400 leading-[28px] font-inter text-red_republic">
                    {feature}
                  </p>
                ) : (
                  <p className="text-[14px] sm:text-[16px] font-400 leading-[28px] font-inter text-baragon_brown">
                    {feature}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Pricing;