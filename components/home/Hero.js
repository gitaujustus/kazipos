import { Cloud } from "@/icons";
import React from "react";

export default function Hero() {
  const features = [
    {
      text: "AI-Powered",
      desc: "Handles stock, payments, trends, and more.",
      position: { top: "27%", left: "-15%" },
    },
    {
      text: "Customer Management",
      desc: "Track leads, campaigns, and loyalty.",
      position: { top: "25%", right: "-20%" },
    },
    {
      text: "Access Anywhere",
      desc: "Real-time, syncable data. Anytime, anywhere.",
      position: { top: "52%", right: "-20%" },
    },
    {
      text: "No Installation",
      desc: "Just open your browser—no setup needed.",
      position: { bottom: "10%", right: "-13%" },
    },
    {
      text: "User Access Limit",
      desc: "Control who sees what with user roles.",
      position: { bottom: "-8%", left: "50%", transform: "translateX(-50%)" },
    },
    {
      text: "Service Management",
      desc: "Handle services: bookings, repairs, & escalations.",
      position: { bottom: "8%", left: "-10%" },
    },
    {
      text: "Reports",
      desc: "Smart reports for sales, stock, profit & insights.",
      position: { top: "53%", left: "-20%" },
    },
  ];

  const featuresSmall = [
    {
      text: "AI-Powered",
      desc: "Handles stock, payments, trends, and more.",
      position: { top: "3%", left: "-4%" },
    },
    {
      text: "Customer Management",
      desc: "Track leads, campaigns, and loyalty.",
      position: { top: "5%", right: "-5%" },
    },
    {
      text: "Access Anywhere",
      desc: "Real-time, syncable data. Anytime, anywhere.",
      position: { top: "35%", right: "-5%" },
    },
    {
      text: "No Installation",
      desc: "Just open your browser—no setup needed.",
      position: { bottom: "15%", right: "0%" },
    },
    {
      text: "User Access Limit",
      desc: "Control who sees what with user roles.",
      position: { bottom: "-10%", left: "50%", transform: "translateX(-50%)" },
    },
    {
      text: "Service Management",
      desc: "Handle services: bookings, repairs, & escalations.",
      position: { bottom: "15%", left: "-3%" },
    },
    {
      text: "Reports",
      desc: "Smart reports for sales, stock, profit & insights.",
      position: { top: "36%", left: "-3%" },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 to-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl sm:text-5xl xl:text-[64px] font-semibold text-center xl:max-w-[1075px] leading-[120%]">
        A powerful POS system for Kenyan retail—perfect for small shops to large
        enterprises.
      </h1>
      <p className="text-center text-sm sm:text-lg xl:text-[18px] pt-[41px] pb-[55px] font-inter">
        The First AI-Powered POS That Automates Inventory, Accounting & More for
        Unlimited Businesses.
      </p>

      <div className="flex gap-[40px]">
        <button className="bg-neutral-light  hover:bg-red_reign  text-baragon_brown hover:text-white font-inter xl:w-[198px] xl:h-[48px] p-[10px] rounded-[35px] shadow-[2px_2px_15px_rgba(0,0,0,0.25),inset_0px_-2px_10px_rgba(0,0,0,0.25)] relative z-20">
          Start Free Trial
        </button>
       
        <button className="border border-white text-white font-inter xl:w-[198px] xl:h-[48px] p-[10px] rounded-[35px] shadow-[2px_2px_15px_rgba(0,0,0,0.25),inset_0px_-2px_10px_rgba(0,0,0,0.25)] hover:bg-gray-100 relative z-20">
          Book a Demo
        </button>
      </div>

      <div className="relative w-full max-w-[920px] mx-auto aspect-square -top-32">
        {/* Concentric Rings - Replaced with gradient rings */}
        <ConcentricRingsWithGradient className="absolute inset-0" />

        {/* Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-black rounded-full w-[60%] h-[60%]">
            <img
              src="/assets/Hero-Center.png"
              alt="Barista using POS"
              className="rounded-full w-44 h-44 sm:w-full sm:h-full object-cover"
            />
          </div>
        </div>

        {/* Feature bubbles for large screens */}
        <div className="hidden xl:block">
          {features.map((feature, index) => (
            <div key={index} className="absolute z-20" style={feature.position}>
              <Feature
                icon={<Cloud />}
                text={feature.text}
                desc={feature.desc}
              />
            </div>
          ))}
        </div>

        {/* Feature bubbles for small screens */}
        {/* <div className="block xl:hidden">
          {featuresSmall.map((featuresSmall, index) => (
            <div key={index} className="absolute z-20" style={featuresSmall.position}>
              <Feature icon={<Cloud />} text={featuresSmall.text} desc={featuresSmall.desc} />
            </div>
          ))}
        </div> */}
      </div>

      {/* Feature bubbles for smaller screens */}
      {/* <div className="lg:hidden mt-10 px-4">
        <div className="grid grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} icon={<Cloud />} text={feature.text} desc={feature.desc} />
          ))}
        </div>
      </div> */}
    </div>
  );
}

function Feature({ icon, text, desc }) {
  return (
    <div className="w-[150px] md:w-[262px] max-w-[262px] bg-white shadow-lg py-[6px] md:py-[26px] px-[15px] md:px-[25px] rounded-[30px]">
      <div className="flex items-center gap-[10px]">
        {icon}
        <h3 className="text-[6px] md:text-[12px] font-inter text-red_republic">
          {text}
        </h3>
      </div>
      <p className="text-[7px] md:text-[14px] text-neutral-dark">{desc}</p>
    </div>
  );
}

// New component with gradient rings using pseudo-elements
function ConcentricRingsWithGradient() {
  const rings = [49.95, 75, 100.05, 124.95, 150]; // Percentages of the parent container

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {rings.map((percent, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${percent}%`,
            height: `${percent}%`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            border: "4px solid #FFFFFF", // Switch to border for clearer stroke
            maskImage: "linear-gradient(to bottom, transparent 20%, black 80%)", // Keep your original partial visibility
            WebkitMaskImage: "linear-gradient(to bottom, transparent 20%, black 80%)",
            opacity: 0.1, // Subtle effect
          }}
        />
      ))}
    </div>
  );
}