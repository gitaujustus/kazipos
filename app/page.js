import FeatureCard from "@/components/home/FeatureCard";
import Hero from "@/components/home/Hero";
import SectionLayout from "@/components/home/Section2";
import ContentWithImage from "@/components/home/Section2";
import Testimonials from "@/components/home/Testimonials";
import TestimonialCarousel from "@/components/home/Testimonials";
import { Cloud } from "@/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-red_republic to-[#3f0101] h-[100vh]">
      <Hero />

      {/* Section 2 - Features */}
      <section className="min-h-screen relative flex flex-col justify-center py-12 md:py-20">
        {/* Background image instead of dot pattern */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/home/Noise-Texture.png')" }}></div>
        
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white opacity-100"></div>

        <div className="relative w-full z-10 mx-auto">
          <SectionLayout
            title="1. Easy Sales Management"
            description="Simplify your daily transactions with a user-friendly system that speeds up sales and reduces errors. Whether you're ringing up items, processing payments, or issuing receipts, KaziPOS makes it effortless—saving you time and keeping your customers happy. Perfect for busy Kenyan retailers who need quick, reliable tools at their fingertips."
            image="/assets/home/Section_2_1.png"
            isReversed={false}
          />

          <SectionLayout
            title="2. Real-Time Inventory"
            description="Stay on top of your stock levels with instant updates—no more guesswork or manual counts. KaziPOS tracks what's in store as sales happen, alerting you when items run low. Ideal for Kenyan shopkeepers managing small grocery stores or bustling market stalls, ensuring you never miss a sale due to stockouts."
            image="/assets/home/Section_2_2.png"
            isReversed={true}
          />

          <SectionLayout
            title="3. Customer Tools"
            description="Build stronger customer relationships with features like loyalty programs, purchase tracking, and personalized offers. KaziPOS helps you know your customers better, reward regulars, and keep them coming back. A must-have for Kenyan businesses aiming to stand out in competitive markets."
            image="/assets/home/Section_2_3.png"
            isReversed={false}
          />

          <SectionLayout
            title="4. Scales to Any Business"
            description="Whether you run a roadside kiosk, a mid-sized shop, or a large store, KaziPOS adapts to your needs. It's flexible enough for startups and powerful enough for growing enterprises, making it the perfect fit for Kenyan businesses of all sizes—from rural vendors to urban chains."
            image="/assets/home/Section_2_4.png"
            isReversed={true}
          />
        </div>

        <div className="relative flex justify-center mt-10 md:mt-20 mb-20 w-full">
          <button className="bg-red_republic p-2 md:p-3 rounded-full w-40 md:w-48 h-12 text-center text-white font-inter text-sm md:text-base shadow-md hover:brightness-105 transition-all relative">
            Get Started
            <span className="absolute inset-0 rounded-full shadow-[inset_0px_-2px_10px_0px_rgba(0,0,0,0.25)] pointer-events-none"></span>
          </button>
        </div>
      </section>

      {/* Testimonials Section  */}
      {/* <TestimonialCarousel /> */}
      <Testimonials />
    </main>
  );
}