"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Features from "./components/LandingPage/Features";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-2xl md:text-3xl text-primaryDark font-heading-barlow text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Make Your Information a Visual Spectacle <br />
        That Speaks for Itself
      </motion.h1>

      <p className="text-primaryDark text-lg text-center mt-4 font-heading-barlow">
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
      <div className="mt-10 flex justify-center items-center w-full 2xl:w-[70%]">
        <Features />
      </div>
    </div>
  );
}
