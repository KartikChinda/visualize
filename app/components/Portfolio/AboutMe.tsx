import React from "react";
import { AboutMePropsType } from "@/app/types";

const AboutMe = ({ aboutMe }: AboutMePropsType) => {
  return (
    <div className="py-20 md:w-[90%]">
      <div className=" p-4 flex flex-col lg:flex-row justify-center items-stretch">
        <div className="px-8 mt-16 w-full lg:w-[45%] flex justify-center items-start lg:items-end flex-col pr-8 h-full">
          <p className="text-lg md:text-xl mt-5 font-extralight font-subtext-mont text-textBrown">
            Get to know the next addition to your team
          </p>
          <p className="text-6xl lg:text-7xl xl:text-8xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase">
            About me
          </p>
        </div>
        <div className="w-full lg:w-[60%] px-8 lg:px-20">
          <div className="mt-10 text-lg font-base leading-8  text-textBrown font-subtext-mont">
            {aboutMe}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
