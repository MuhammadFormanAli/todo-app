import React from "react";
import WorkCard from "../ourWorks/WorkCard";
import Image from "next/image";
import img from "@/public/experience.svg"
import compass from "@/public/compass.png"

const FunFact = () => {
  return (
    <div className="p-9">
      <div className="mb-20">
        <p className="text-6xl font-bold text-center">
          Fun{" "}
          <span className=" inline-block mb-6 text-6xl font-bold bg-gradient-to-r from-[#FF77AD] to-[#FFAC61] text-transparent bg-clip-text transition-colors duration-700  ">
            Fact
          </span>
        </p>

        <p className="max-w-[600px] mx-auto text-center">
          We are a passionate team of UI/UX Designers, dedicated to crafting
          unique and intuitive digital experiences. With a blend of creativity
          and technical expertise, we bring ideas to life.
        </p>
      </div>

      {/* fun fact cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center  gap-4 max-w-[1296px] mx-auto ">

{/* card one  */}
        <div className=" h-full border rounded-xl p-7 max-w-[300px] text-[#0D050F] font-medium bg-white bg-opacity-20 flex flex-col gap-4 hover:bg-[#0D050F] hover:text-white transition-all duration-500 ">
            <div className="flex justify-between  ">
                <Image className="border rounded-full p-2 h-16 w-16" src={compass} alt="img" />
                <div className="relative p-2 h-16 w-16  flex items-center justify-center">
                <Image src={img} alt="img" />
                <div className="w-full h-[50%] absolute bottom-0 bg-white bg-opacity-50 backdrop-blur-[3px] rounded-lg"></div>
                </div>
            </div>

          <section className="flex items-center gap-4">
            <h1 className="text-5xl font-bold">3</h1>
            <p className="text-[14px] ">Awards <br /> World wide</p>
          </section>
          <p className=" text-4 opacity-65">Signature Park jave been honored to receive three Awards in the field of UI/UX.</p>

        </div>

{/* card two  */}
        <div className="border h-full rounded-xl p-7 max-w-[300px] text-[#0D050F] font-medium bg-white bg-opacity-20 flex flex-col gap-4 hover:bg-[#0D050F] hover:text-white transition-all duration-500 ">
            <div className="flex justify-between  ">
                <Image className="border rounded-full p-2 h-16 w-16" src={compass} alt="img" />
                <div className="relative p-2 h-16 w-16  flex items-center justify-center">
                <Image src={img} alt="img" />
                <div className="w-full h-[50%] absolute bottom-0 bg-white bg-opacity-50 backdrop-blur-[3px] rounded-lg"></div>
                </div>
            </div>

          <section className="flex items-center gap-4">
            <h1 className="text-5xl font-bold">5Y+</h1>
            <p className="text-[14px] ">Experience <br />On UIUX</p>
          </section>
          <p className="font-medium text-4 opacity-65">We have five years of solid experience in the respective field.</p>

        </div>

{/* card three  */}
        <div className="border h-full rounded-xl p-7 max-w-[300px] text-[#0D050F] font-medium bg-white bg-opacity-20 flex flex-col gap-4 hover:bg-[#0D050F] hover:text-white transition-all duration-500 ">
            <div className="flex justify-between  ">
                <Image className="border rounded-full p-2 h-16 w-16" src={compass} alt="img" />
                <div className="relative p-2 h-16 w-16  flex items-center justify-center">
                <Image src={img} alt="img" />
                <div className="w-full h-[50%] absolute bottom-0 bg-white bg-opacity-50 backdrop-blur-[3px] rounded-lg"></div>
                </div>
            </div>

          <section className="flex items-center gap-4">
            <h1 className="text-5xl font-bold">250</h1>
            <p className="text-[14px] ">Clients On<br />Marketplace</p>
          </section>
          <p className="font-medium   opacity-65">We have served approximately 350 clients, offering our expertise and solutions in the field.</p>

        </div>

{/* card four  */}
        <div className="border h-full rounded-xl p-7 max-w-[300px] text-[#0D050F] font-medium bg-white bg-opacity-20 flex flex-col gap-4 hover:bg-[#0D050F] hover:text-white transition-all duration-500 ">
            <div className="flex justify-between  ">
                <Image className="border rounded-full p-2 h-16 w-16" src={compass} alt="img" />
                <div className="relative p-2 h-16 w-16  flex items-center justify-center">
                <Image src={img} alt="img" />
                <div className="w-full h-[50%] absolute bottom-0 bg-white bg-opacity-50 backdrop-blur-[3px] rounded-lg"></div>
                </div>
            </div>

          <section className="flex items-center gap-4">
            <h1 className="text-5xl font-bold">410+</h1>
            <p className="text-[14px] ">Projects On <br /> MarketPlace</p>
          </section>
          <p className="font-medium text-4  opacity-65">We completed around 410 UI UX projects so far.</p>

        </div>


        
      
      </div>

    </div>
  );
};

export default FunFact;
