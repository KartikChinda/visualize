"use client";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { contactMeProps } from "@/app/types";
import Link from "next/link";

export default function Contact({ email, github, linkedin }: contactMeProps) {
  return (
    <section id="contact" className="py-20">
      <div className="relative w-[90%] mx-auto bg-black text-textPeach py-16 flex flex-col items-center justify-center min-h-[70vh] rounded-lg">
        <h1 className="text-5xl md:text-8xl font-bold text-center font-heading-barlow uppercase">
          Got an idea?
        </h1>
        <p className="text-base md:text-xl text-center mt-4 font-subtext-mont">
          I've got the skills. Let's team up.
        </p>
        <button
          className="mt-14 px-6 py-3 bg-orange-300 text-black rounded-lg font-medium font-subtext-mont uppercase duration-300 hover:bg-bgPeach"
          onClick={() => (window.location.href = `mailto:${email}`)}
        >
          Contact me
        </button>
        <div className="flex gap-6 mt-12 bottom-8 absolute">
          <Link
            href={github!}
            target="_blank"
            className="text-white hover:text-bgPeach duration-300 hover:scale-105"
          >
            <GithubLogo size={32} />
          </Link>
          <Link
            href={linkedin!}
            target="_blank"
            className="text-white hover:text-bgPeach duration-300 hover:scale-105"
          >
            <LinkedinLogo size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
