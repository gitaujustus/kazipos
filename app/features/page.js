import { BulletIcon, NextIcon } from "@/componets/icons";
import Image from "next/image";

export default function Features() {
  return (
    <main>
      {/* hero section */}
      <section className="pt-[162px] px-[64px] h-[1024px]  ">
        <div className=" ">
          <div className="w-[815px] flex flex-col gap-[40px] h-[238px]  mb-[40px]">
            <h1 className="text-[64px] md:text-[64px] font-inter font-bold text-red_republic leading-[120%] h-[154px]">
              Power Your
              <br />
              Business with KaziPOS
            </h1>

            <p className="text-baragon_brown text-[18px] font-inter font-500 leading-[120%] w-[488px]">
              One POS to simplify sales, manage stock, and grow your customer
              base
            </p>
          </div>

          <div className="w-full flex items-start  justify-between" >
            <div className="space-y-3">
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
                  className="flex items-start gap-[10px] mb-[22px] w-[323px]"
                >
                  <div className="flex-shrink-0 ">
                    <BulletIcon />
                  </div>
                  <p className="font-inter font-400 text-[16px] leading-[120%] text-baragon_brown">
                    {feature}
                  </p>
                </div>
              ))}

        <button
            style={{
              boxShadow:
                "2px 2px 15px 0px rgba(0, 0, 0, 0.25), inset 0px -2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
            className="mt-[40px] w-[198px] gap-[10px] bg-red_republic h-[48px] text-red_shimmer text-[16px] leading-[100%] font-400 p-[10px] rounded-[35px]"
          >
            Get Started Today
          </button>
            </div>
            <div className="w-[708px] h-[500px] relative mt-[-70px]">
              <Image
                src="/assets/features-hero.png"
                alt="Person using KaziPOS software with analytics dashboard"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* section 2 */}
      <section className="px-[64px] pt-[162px] min-h-screen">
            <div>
                <h1 className="text-[48px] font-inter font-bold text-red_republic leading-[120%] h-[58px] text-center mb-[41px]"> Learn more about KaziPOS's features</h1>
                <p className="text-black text-[18px] font-inter font-400 leading-[120%] text-center w-[557px] h-[56px] mx-auto">KaziPOS is packed full of features that help you save time and work more effectively.</p>
            </div>

            <div className="mt-[106px] flex flex-col gap-[25px]">
                {/* part 1 */}
                <div className="flex items-center gap-[24px] ">
                    <div className="px-[69px] py-[143px] w-[644px] h-[650px] flex flex-col gap-[10px] bg-red_republic rounded-[25px] bg-gradient-to-b from-[#D80000] to-[#7F0808] ">
                        <h1 className="text-[48px] font-inter font-bold text-white leading-[120%]  mb-[40px]">Effortless Transaction Handling</h1>
                        <p className="text-white text-[16px] font-inter font-400 leading-[120%] ">Handle sales quickly and accurately with KaziPOS. Accept cash, cards, and mobile money like M-Pesa, generate instant digital or printed receipts, and keep your customers moving with fast, error-free transactions.</p>

                        <button className="font-inter font-400 text-[16px] leading-[28px] text-white w-[167px] flex items-center  gap-[10px] h-[48px] mt-[68px] rounded-[35px]">
                        <span>Get Started Today</span>
                        <NextIcon/>
                        </button>
                    </div>

                    <div className="w-[644px] h-[650px]  rounded-[25px] relative">
                        <Image src="/assets/features/features-1.png" alt="Person" layout="fill" className="rounded-[25px]" />
                    </div>
                </div>

                {/* part 2 */}
                <div className="flex items-center gap-[24px]">
                    <div className="w-[644px] h-[650px]  rounded-[25px] relative">
                        <Image src="/assets/features/features-2.png" alt="Person" layout="fill" className="rounded-[25px]" />
                    </div>

                    <div className="px-[69px] py-[143px] w-[644px] h-[650px] flex flex-col gap-[10px] bg-red_republic rounded-[25px] bg-gradient-to-b from-[#D80000] to-[#7F0808] ">
                        <h1 className="text-[48px] font-inter font-bold text-white leading-[120%]  mb-[40px]">Instant Stock Updates</h1>
                        <p className="text-white text-[16px] font-inter font-400 leading-[120%] ">Stay on top of your inventory with live tracking. KaziPOS updates stock levels as sales happen, sends low-stock alerts, and simplifies reordering—perfect for managing daily essentials or specialty items.</p>

                        <button className="font-inter font-400 text-[16px] leading-[28px] text-white w-[167px] flex items-center  gap-[10px] h-[48px] mt-[68px] rounded-[35px]">
                        <span>Get Started Today</span>
                        <NextIcon/>
                        </button>
                    </div>
                </div>

            </div>
      </section>
      
    </main>
  );
}
