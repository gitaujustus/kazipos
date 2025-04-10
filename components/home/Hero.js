import { Cloud } from "@/icons";
import React from "react";

export default function Hero() {
  const features = [
    {
      text: "AI-Powered",
      desc: "Handles stock, payments, trends, and more.",
      position: { top: "5%", left: "-20%" },
    },
    {
      text: "Customer Management",
      desc: "Track leads, campaigns, and loyalty.",
      position: { top: "5%", right: "-20%" },
    },
    {
      text: "Access Anywhere",
      desc: "Real-time, syncable data. Anytime, anywhere.",
      position: { top: "40%", right: "-20%" },
    },
    {
      text: "No Installation",
      desc: "Just open your browser—no setup needed.",
      position: { bottom: "10%", right: "-15%" },
    },
    {
      text: "User Access Limit",
      desc: "Control who sees what with user roles.",
      position: { bottom: "0%", left: "50%", transform: "translateX(-50%)" },
    },
    {
      text: "Service Management",
      desc: "Handle services: bookings, repairs, & escalations.",
      position: { bottom: "10%", left: "-20%" },
    },
    {
      text: "Reports",
      desc: "Smart reports for sales, stock, profit & insights.",
      position: { top: "40%", left: "-20%" },
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
        <button className="bg-neutral-light text-baragon_brown font-inter xl:w-[198px] xl:h-[48px] font-semibold p-[10px] rounded-[35px] shadow-md shadow-black hover:bg-gray-100">
          Start Free Trial
        </button>
        <button className="bg-neutral-light text-baragon_brown font-inter xl:w-[198px] xl:h-[48px] font-semibold p-[10px] rounded-[35px] shadow-md shadow-black hover:bg-gray-100">
          Book a Demo
        </button>
      </div>

      <div className="relative w-full max-w-[720px] mx-auto aspect-square mt-10 sm:mt-20">
        {/* Concentric Rings */}
        <ConcentricRings className="absolute inset-0" />

        {/* Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-black rounded-full border-4 border-red-500 p-2">
            <img
              src="/assets/Hero-Center.png"
              alt="Barista using POS"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Feature bubbles for large screens */}
        <div className="hidden lg:block">
          {features.map((feature, index) => (
            <div key={index} className="absolute z-20" style={feature.position}>
              <Feature icon={<Cloud />} text={feature.text} desc={feature.desc} />
            </div>
          ))}
        </div>


        {/* Feature bubbles for small screens */}
        <div className="block lg:hidden">
          {featuresSmall.map((featuresSmall, index) => (
            <div key={index} className="absolute z-20" style={featuresSmall.position}>
              <Feature icon={<Cloud />} text={featuresSmall.text} desc={featuresSmall.desc} />
            </div>
          ))}
        </div>




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
    <div className="w-[150px] md:w-[262px]  max-w-[262px] bg-white shadow-lg py-[6px] md:py-[26px] px-[15px] md:px-[25px] rounded-[30px]">
      <div className="flex items-center gap-[10px]">
        {icon}
        <h3 className="text-[6px] md:text-[12px] font-inter text-red_republic">{text}</h3>
      </div>
      <p className="text-[7px] md:text-[14px] text-neutral-dark">{desc}</p>
    </div>
  );
}

function ConcentricRings() {
  const rings = [33.3, 50, 66.7, 83.3, 100]; // Percentages of the parent container

  return (
    <div className="absolute inset-0 z-0">
      {rings.map((percent, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/70"
          style={{
            width: `${percent}%`,
            height: `${percent}%`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}