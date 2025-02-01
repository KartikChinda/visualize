"use client";
import React from "react";
import { projectsProps } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, Globe } from "@phosphor-icons/react";

type ProjectArrayProps = {
  projects: projectsProps[];
};

const Projects = ({ projects }: ProjectArrayProps) => {
  return (
    <section id="projects" className="bg-lightPeachbg p-8 my-10">
      <div className="flex flex-col justify-start items-start w-full gap-2">
        <p className="text-xl  mt-5 font-extralight font-subtext-mont text-black ">
          Gettin' my hands dirty
        </p>
        <p className="text-6xl lg:text-7xl xl:text-8xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase">
          My Projects.
        </p>
      </div>
      <div className="mt-20 flex flex-col gap-[100px] justify-center items-center">
        {projects.map((project, index) => {
          return (
            <div key={index} className="w-full 3xl:w-[75%]">
              <div className="w-full flex justify-between items-center px-4">
                <p className=" font-subtext-heebo font-extralight text-base italic">
                  Project 0{index + 1}
                </p>
                <p className=" font-subtext-mont font-semibold text-2xl ">
                  {project.projectTitle}
                </p>
              </div>
              <div className="mt-2 border-2 border-[#00000080] rounded-xl w-full lg:min-h-[60vh] flex flex-col lg:flex-row justify-start items-center lg:justify-between p-4">
                <div className=" p-2 rounded-xl w-full xl:w-[50%]  flex justify-center items-center ">
                  <Image
                    src={project.image}
                    alt={project.projectTitle}
                    height={300}
                    width={300}
                    className="my-2 rounded-xl hover:scale-105 lg:hover:scale-[1.30]  duration-300 border-2 border-black shadow-lg lg:scale-125"
                  />
                </div>
                <div className="p-4 mt-4 w-[90%] font-subtext-mont lg:text-lg lg:w-[50%] flex flex-col">
                  <div>{project.projectDescription}</div>
                  <div className="mt-8 font-semilight italic font-subtext-heebo">
                    {project.skills}
                  </div>
                  <div className="flex gap-2 text-3xl mt-8">
                    <Link
                      href={project.githubLink}
                      className="duration-500 bg-black rounded-full p-2 hover:invert"
                    >
                      <GithubLogo color="white" />
                    </Link>
                    {project.websiteLink && (
                      <Link
                        className="duration-500 bg-black rounded-full p-2 hover:invert"
                        href={project.websiteLink}
                      >
                        <Globe color="white" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
