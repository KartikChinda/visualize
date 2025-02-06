"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperienceProps } from "@/app/types";
import { DesktopTower } from "@phosphor-icons/react";

type workExperienceArrayProps = {
  workex: workExperienceProps[];
};

const WorkEx = ({ workex }: workExperienceArrayProps) => {
  return (
    <div className="py-20 p-8">
      <div className="md:w-[95%] flex flex-col p-4 justify-end items-end xl:pr-8 mb-20">
        <p className="text-lg md:text-xl  mt-5 mr-2 font-extralight font-subtext-mont text-textBrown ">
          A glimpse into my professional journey
        </p>
        <p className="text-6xl md:text-8xl mt-1 font-bold  text-right text-textBrown font-heading-barlow uppercase">
          Work Experience.
        </p>
      </div>
      <VerticalTimeline>
        {workex.map((workExperience, index) => {
          return (
            <VerticalTimelineElement
              visible={true}
              key={index}
              className=""
              contentStyle={{
                background: "#292420",
                color: "#000",
                borderRadius: "15px",
                boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)",
              }}
              iconStyle={{
                background: "#fff",
                border: "4px solid black",
                overflow: "hidden",
                height: "50px",
                width: "50px",
              }}
              icon={
                <div className="absolute top-5 right-4 scale-125">
                  <DesktopTower />
                </div>
              }
            >
              <div className="flex flex-col text-textPeach font-subtext-mont p-4 text-lg">
                <div className="font-heading-barlow tracking-wider text-xl">
                  {workExperience.role}
                </div>
                <div className="mt-1 font-semibold">
                  {workExperience.company}
                </div>
                <div className="mt-2 text-sm rounded-xl  border-bgPeach font-light  font-subtext-mont">
                  {workExperience.startDate} - {workExperience.endDate}
                </div>
                <p>{workExperience.description}</p>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default WorkEx;
