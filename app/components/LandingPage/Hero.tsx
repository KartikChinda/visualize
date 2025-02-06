"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-[95vh]">
      <motion.h1
        className=" text-xl md:text-2xl text-primaryDark font-heading-barlow text-center lg:-mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Make Your Information a Visual Spectacle <br />
        That Speaks for Itself
      </motion.h1>

      <div className=" tracking-wider font-hero-heading text-primaryLight text-[25vw] lg:text-[20vw]">
        VISUALIZE
      </div>
      <p className="text-primaryDark text-lg text-center font-heading-barlow lg:-mt-20 tracking-wider mb-4">
        Because, resumes are boring.
      </p>

      <motion.button
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Link
          href="/"
          className="bg-primaryDark text-gray-900  px-4 py-3 rounded-lg text-lg font-medium hover:bg-primaryLight duration-300 font-subtext-mont uppercase group "
        >
          Get started <span className="group-hover:pl-4 duration-150">➟</span>
        </Link>
      </motion.button>
    </div>
  );
};

export default Hero;
