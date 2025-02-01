import { heroDataProps } from "@/app/types";
import Image from "next/image";
import React from "react";

const Hero = ({ heroData }: { heroData: heroDataProps }) => {
  return (
    <div className="min-h-[90vh] lg:flex lg:justify-around lg:items-center p-8 mb-10">
      <div className="w-full flex justify-center items-center lg:justify-start lg:items-start flex-col group duration-300 p-4 lg:p-8">
        <div className=" font-subtext-mont text-2xl italic ml-4 ">Hi, I am</div>

        <div className="flex gap-4 mt-1 mb-4 scale-[0.7] md:scale-100  duration-300">
          <div className="relative inline-block font-heading-barlow font-extrabold">
            <span className="relative text-[#2D2424] font-extrabold text-8xl">
              {heroData.firstName}
            </span>
          </div>
          <div className="relative inline-block font-heading-barlow font-extrabold">
            <span className="relative text-[#2D2424] font-extrabold text-8xl">
              {heroData.lastName}
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-10 flex gap-4 p-2">
          <a
            href="#projects"
            className="bg-textPeach py-3 px-6 rounded-xl text-textBrown border-2 border-textBrown hover:text-textPeach hover:bg-textBrown duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-textPeach py-3 px-6 rounded-xl text-textBrown border-2 border-textBrown hover:text-textPeach hover:bg-textBrown duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-20 md:mt-0 lg:w-[60%]">
        <Image
          src={heroData.profilePicture}
          alt="Notebook"
          priority
          width={400}
          height={400}
          className=" rounded-2xl border-8 border-[#dbb0a15b] shadow-xl hover:brightness-105 duration-300 hover:scale-[1.01] hover:shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
