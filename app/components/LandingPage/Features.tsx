"use client";
import { projectFeatures } from "@/app/constants";
import React from "react";

const Features = () => {
  return (
    <div className="p-8 lg:p-20 grid gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:h-[900px] w-full h-auto">
      <div className="rounded-xl lg:col-span-1 lg:row-span-2 h-[600px] lg:h-auto relative group overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-all duration-300"></div>
        <div className="relative h-full overflow-auto">
          <iframe
            src="http://localhost:3001/users/janedoe"
            className="w-full h-full border-none"
            title="User Portfolio"
          ></iframe>
        </div>
      </div>

      {projectFeatures.map((feature) => (
        <div
          key={feature.id}
          className="p-8 lg:col-span-1 lg:row-span-1 h-[300px] lg:h-auto bento-cell relative group text-[14px] flex flex-col group"
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
  );
};

export default Features;
