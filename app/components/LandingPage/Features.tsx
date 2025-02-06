"use client";
import { projectFeatures } from "@/app/constants";
import { div } from "framer-motion/client";
import React from "react";

const Features = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row p-0 md:p-4 mb-20 gap-4">
      <div className="w-full lg:w-[60%] h-[610px]">
        <div className="relative h-full overflow-auto rounded-2xl">
          <iframe
            src={process.env.NEXT_PUBLIC_SAMPLE_USER_PORTFOLIO}
            className="w-full h-full border-none"
            title="User Portfolio"
          ></iframe>
        </div>
      </div>
      <div className="lg:w-[40%] w-full">
        <div className="w-full h-auto lg:h-[600px] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4">
          {projectFeatures.map((feature) => (
            <div
              key={feature.id}
              className="p-8 h-[300px] bento-cell relative group text-[14px] flex flex-col group"
              style={{ background: feature.color }}
            >
              <div className="text-2xl lg:text-xl xl:text-2xl text-center w-full font-hero-heading group-hover:scale-90 duration-300">
                {feature.title}
              </div>
              <div className="mt-4 text-center group-hover:scale-110 duration-300">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

//  <div className="p-8 w-full h-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
//           {projectFeatures.map((feature) => (
//             <div
//               key={feature.id}
//               className="p-8 h-[300px] lg:h-[300px] bento-cell relative group text-[14px] flex flex-col group"
//               style={{ background: feature.color }}
//             >
//               <div className="text-2xl lg:text-xl xl:text-2xl text-center w-full font-hero-heading group-hover:scale-90 duration-300">
//                 {feature.title}
//               </div>
//               <div className="mt-4 text-center group-hover:scale-110 duration-300">
//                 {feature.description}
//               </div>
//             </div>
//           ))}
//         </div>
