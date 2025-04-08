import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-red_republic to-red_reign min-h-screen pb-16">
      {/* Heading  */}
      <h1 className="xl:pt-[86px] xl:w-[1075px] text-4xl md:text-5xl xl:text-[64px] font-bold font-inter leading-[120%] text-white text-center mx-auto px-4">A powerful POS system for Kenyan retail—perfect for small shops to large enterprises.</h1>

      <p className="xl:pt-[41px] xl:pb-[55px] pt-6 pb-8 text-white font-inter text-base xl:text-[18px] text-center px-4">The First AI-Powered POS That Automates Inventory, accounting, and Sales for Unlimited Businesses.</p>

      {/* Buttons  */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 xl:gap-[40px] max-w-md mx-auto px-4">
        {/* Button 1  */}
        <button className="flex gap-[10px] w-full sm:w-auto xl:w-[198px] h-[48px] bg-neutral-light p-[10px] rounded-[35px] text-nowrap justify-center items-center text-baragon_brown">Start Free Trial</button>

        {/* Button 2 */}
        <button className="flex gap-[10px] w-full sm:w-auto xl:w-[198px] h-[48px] bg-neutral-light p-[10px] rounded-[35px] text-nowrap justify-center items-center text-baragon_brown">Book a Demo</button>
      </div>

      {/* Circular Feature Showcase with nested circles */}
      <div className="relative max-w-4xl mx-auto mt-16 px-4">
        {/* Circle 5 (Outermost) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] md:w-[650px] md:h-[650px] rounded-full border border-white/70"></div>
        
        {/* Circle 4 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] md:w-[550px] md:h-[550px] rounded-full border border-white/70"></div>
        
        {/* Circle 3 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] md:w-[450px] md:h-[450px] rounded-full border border-white/70"></div>
        
        {/* Circle 2 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] md:w-[350px] md:h-[350px] rounded-full border border-white/70"></div>
        
        {/* Circle 1 (Innermost with photo) */}
        <div className="relative w-64 h-64 md:w-[250px] md:h-[250px] mx-auto rounded-full overflow-hidden border-2 border-white/70 z-10">
          <Image 
            src="/assets/home/Hero-Home-Circle.png" 
            alt="Shop Owner" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Feature Boxes */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Inventory Management</h3>
            <p className="text-gray-700 text-xs">Real-time stock updates</p>
          </div>
        </div>

        <div className="absolute top-1/4 right-0 transform translate-x-1/4 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">AI-Powered Analytics</h3>
            <p className="text-gray-700 text-xs">Smart sales predictions</p>
          </div>
        </div>

        <div className="absolute top-3/4 right-0 transform translate-x-1/4 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Mobile POS Support</h3>
            <p className="text-gray-700 text-xs">Sell anywhere, anytime</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Customer Management</h3>
            <p className="text-gray-700 text-xs">Build loyalty programs</p>
          </div>
        </div>

        <div className="absolute top-3/4 left-0 transform -translate-x-1/4 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Financial Insights</h3>
            <p className="text-gray-700 text-xs">Real-time profitability data</p>
          </div>
        </div>

        <div className="absolute top-1/4 left-0 transform -translate-x-1/4 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">Payment Integration</h3>
            <p className="text-gray-700 text-xs">M-Pesa, cards & more</p>
          </div>
        </div>

        {/* Middle bottom feature box */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <h3 className="text-red-600 text-xs font-semibold">User-friendly Interface</h3>
            <p className="text-gray-700 text-xs">Easy to set up, easy to use</p>
          </div>
        </div>
      </div>
    </main>
  );
}