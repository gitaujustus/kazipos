import FeatureCard from "@/components/home/FeatureCard";
import SectionLayout from "@/components/home/Section2";
import ContentWithImage from "@/components/home/Section2";
import { Cloud } from "@/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-red_republic to-red_reign h-[120vh]  pb-16">
      {/* Heading  */}
      <h1 className="xl:pt-[86px] xl:w-[1075px] text-4xl md:text-5xl xl:text-[64px] font-bold font-inter leading-[120%] text-white text-center mx-auto px-4">A powerful POS system for Kenyan retail—perfect for small shops to large enterprises.</h1>

      <p className="xl:pt-[41px] xl:pb-[55px] pt-6 pb-8 text-white font-inter text-base xl:text-[18px] text-center px-4">The First AI-Powered POS That Automates Inventory, accounting, and Sales for Unlimited Businesses.</p>

      {/* Buttons  */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 xl:gap-[40px] max-w-md mx-auto px-4 xl:mb-[64px]">
        {/* Button 1  */}
        <button className="flex gap-[10px] w-full sm:w-auto xl:w-[198px] h-[48px] bg-neutral-light p-[10px] rounded-[35px] text-nowrap justify-center items-center text-baragon_brown">Start Free Trial</button>

        {/* Button 2 */}
        <button className="flex gap-[10px] w-full sm:w-auto xl:w-[198px] h-[48px] bg-neutral-light p-[10px] rounded-[35px] text-nowrap justify-center items-center text-baragon_brown">Book a Demo</button>
      </div>



      {/* Circular Feature Showcase with nested circles */}
      <div className="relative max-w-4xl mx-auto top-16 px-4">
        {/* Circle 5 (Outermost) */}
        <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] md:w-[650px] md:h-[650px] rounded-full border border-white/70"></div>
        
        {/* Circle 4 */}
        <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] md:w-[550px] md:h-[550px] rounded-full border border-white/70"></div>
        
        {/* Circle 3 */}
        <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] md:w-[450px] md:h-[450px] rounded-full border border-white/70"></div>
        
        {/* Circle 2 */}
        <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] md:w-[350px] md:h-[350px] rounded-full border border-white/70"></div>
        
        {/* Circle 1 (Innermost with photo) */}
        <div className="relative  transform translate-y-[45%] w-64 h-64 md:w-[250px] md:h-[250px] mx-auto rounded-full overflow-hidden border-2 border-white/70 z-10">
          <Image 
            src="/assets/home/Hero-Home-Circle.png" 
            alt="Shop Owner" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Feature Boxes */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Inventory Management</h3>
            <p className="text-gray-700 text-xs">Real-time stock updates</p>
          </div>
        </div> */}

        <FeatureCard icon={<Cloud />} title={"Access Anywhere"} description={"Real-time business data, anytime, anywhere."} className={"top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"} />

        {/* <div className="absolute top-1/4 right-0 transform translate-x-1/4 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">AI-Powered Analytics</h3>
            <p className="text-gray-700 text-xs">Smart sales predictions</p>
          </div>
        </div> */}
         <FeatureCard icon={<Cloud />} title={"Access Anywhere"} description={"Real-time business data, anytime, anywhere."} className={"top-0 top-1/4 right-0 transform translate-x-1/4"} />

        {/* <div className="absolute top-3/4 right-0 transform translate-x-1/4 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Mobile POS Support</h3>
            <p className="text-gray-700 text-xs">Sell anywhere, anytime</p>
          </div>
        </div> */}
         <FeatureCard icon={<Cloud />} title={"Access Anywhere"} description={"Real-time business data, anytime, anywhere."} className={"top-3/4 right-0 transform translate-x-1/4 "} />

        {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Customer Management</h3>
            <p className="text-gray-700 text-xs">Build loyalty programs</p>
          </div>
        </div> */}
         <FeatureCard icon={<Cloud />} title={"Access Anywhere"} description={"Real-time business data, anytime, anywhere."} className={"top-3/4 left-0 transform -translate-x-1/4 "} />

        {/* <div className="absolute top-3/4 left-0 transform -translate-x-1/4 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Financial Insights</h3>
            <p className="text-gray-700 text-xs">Real-time profitability data</p>
          </div>
        </div> */}
         <FeatureCard icon={<Cloud />} title={"Access Anywhere"} description={"Real-time business data, anytime, anywhere."} className={"top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"} />

        {/* <div className="absolute top-1/4 left-0 transform -translate-x-1/4 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Payment Integration</h3>
            <p className="text-gray-700 text-xs">M-Pesa, cards & more</p>
          </div>
        </div> */}
         <FeatureCard icon={<Cloud />} title={"Access Anywhere"} description={"Real-time business data, anytime, anywhere."} className={"top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"} />

        {/* Middle bottom feature box */}
        {/* <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">User-friendly Interface</h3>
            <p className="text-gray-700 text-xs">Easy to set up, easy to use</p>
          </div>
        </div> */}
         <FeatureCard icon={<Cloud />} title={"Access Anywhere"} description={"Real-time business data, anytime, anywhere."} className={"top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"} />
      </div>

      {/* Section 2  */}
      <section className="min-h-[100vh]">
        <h1 className="text-red_republic text-center text-[64px] leading-[120%] font-inter font-bold">Key Benefits</h1>

        <div>

          <SectionLayout title="1. Easy Sales Management" description={"Simplify your daily transactions with a user-friendly system that speeds up sales and reduces errors. Whether you're ringing up items, processing payments, or issuing receipts, KaziPOS makes it effortless—saving you time and keeping your customers happy. Perfect for busy Kenyan retailers who need quick, reliable tools at their fingertips."} image="/assets/home/Section_2_1.png"  isReversed={false} />
          <SectionLayout
            title = "2. Real-Time Inventory"
            description={"Stay on top of your stock levels with instant updates—no more guesswork or manual counts. KaziPOS tracks what’s in store as sales happen, alerting you when items run low. Ideal for Kenyan shopkeepers managing small grocery stores or bustling market stalls, ensuring you never miss a sale due to stockouts."}
            image="/assets/home/Section_2_2.png" 
           isReversed={true} />

          <SectionLayout title="3. Customer Tools" description={"Simplify your daily transactions with a user-friendly system that speeds up sales and reduces errors. Whether you're ringing up items, processing payments, or issuing receipts, KaziPOS makes it effortless—saving you time and keeping your customers happy. Perfect for busy Kenyan retailers who need quick, reliable tools at their fingertips."} image="/assets/home/Section_2_3.png"  isReversed={false} />
          <SectionLayout
            title = "4. Scales to Any Business"
            description={"Whether you run a roadside kiosk, a mid-sized shop, or a large store, KaziPOS adapts to your needs. It’s flexible enough for startups and powerful enough for growing enterprises, making it the perfect fit for Kenyan businesses of all sizes—from rural vendors to urban chains."}
            image="/assets/home/Section_2_4.png" 
           isReversed={true} />
          
  







        </div>
      </section>



    </main>
  );
}