import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 to-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center max-w-3xl">
        A powerful POS system for Kenyan retail—perfect for small shops to large enterprises.
      </h1>
      <p className="text-center text-sm sm:text-lg mt-2 text-gray-300 max-w-xl">
        The First AI-Powered POS That Automates Inventory, Accounting & More for Unlimited Businesses.
      </p>

      <div className="flex gap-4 mt-6">
        <button className="bg-white text-red-700 font-semibold px-5 py-2 rounded-xl hover:bg-gray-100">
          Start Free Trial
        </button>
        <button className="bg-gray-900 text-white border border-gray-600 px-5 py-2 rounded-xl hover:bg-gray-800">
          Book a Demo
        </button>
      </div>

      <div className="relative mt-14 w-full max-w-4xl">
        <ConcentricRings />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-black rounded-full border-4 border-red-500 p-2">
            <img
              src="/barista.jpg"
              alt="Barista using POS"
              className="rounded-full w-48 h-48 object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Feature bubbles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-64 px-4 z-20 relative">
          <Feature text="AI-Powered" desc="Handles stock, payments, trends, and more." />
          <Feature text="Customer Management" desc="Track leads, campaigns, and loyalty." />
          <Feature text="Access Anywhere" desc="Real-time, syncable data. Anytime, anywhere." />
          <Feature text="No Installation" desc="Just open your browser—no setup needed." />
          <Feature text="User Access Limit" desc="Control who sees what with user roles." />
          <Feature text="Service Management" desc="Handle services: bookings, repairs, & escalations." />
          <Feature text="Reports" desc="Smart reports for sales, stock, profit & insights." />
        </div>
      </div>
    </div>
  );
}

function Feature({ text, desc }) {
  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-4">
      <h3 className="font-bold text-sm mb-1">{text}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
    </div>
  );
}

function ConcentricRings() {
  const rings = [200, 300, 400];

  return (
    <div className="absolute inset-0 flex items-center justify-center z-0">
      {rings.map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/20"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      ))}
    </div>
  );
}
