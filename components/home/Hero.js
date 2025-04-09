import { Cloud } from "@/icons";
import React from "react";

export default function Hero() {
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
              src="/barista.jpg"
              alt="Barista using POS"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Feature bubbles */}
        {/* <div className="hidden  grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 mt-[28rem] sm:mt-[32rem] px-4 z-20 relative">
          <div className="relative -top-96">
            <Feature
              icon={<Cloud />}
              text="AI-Powered"
              desc="Handles stock, payments, trends, and more."
            />
          </div>
          <div className="relative -top-96 left-96">
            <Feature
              icon={<Cloud />}
              text="Customer Management"
              desc="Track leads, campaigns, and loyalty."
            />
          </div>
          <div className="relative -top-52">
            <Feature
              icon={<Cloud />}
              text="Access Anywhere"
              desc="Real-time, syncable data. Anytime, anywhere."
            />
          </div>
          <div className="relative -top-72">
            <Feature
              icon={<Cloud />}
              text="No Installation"
              desc="Just open your browser—no setup needed."
            />
          </div>
          <div className="relative top-20">
            <Feature
              icon={<Cloud />}
              text="User Access Limit"
              desc="Control who sees what with user roles."
            />
          </div>
          <div className="relative -top-32">
            <Feature
              icon={<Cloud />}
              text="Service Management"
              desc="Handle services: bookings, repairs, & escalations."
            />
          </div>
          <div className="relative -top-52">
            <Feature
              icon={<Cloud />}
              text="Reports"
              desc="Smart reports for sales, stock, profit & insights."
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

function Feature({ icon, text, desc }) {
  return (
    <div className="max-w-[262px] bg-white shadow-lg py-[26px] px-[25px] rounded-[30px]">
      <div className="flex items-center gap-[10px]">
        {icon}
        <h3 className="text-[12px] font-inter text-red_republic">{text}</h3>
      </div>
      <p className="text-[14px] text-neutral-dark">{desc}</p>
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
