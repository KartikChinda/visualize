"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationProps } from "@/app/types";
import { GraduationCap } from "@phosphor-icons/react";

type educationArrayProps = {
  education: educationProps[];
};

const Education = ({ education }: educationArrayProps) => {
  return (
    <div className="p-8 my-10">
      <div className="mt-4 mb-14 w-full p-4">
        <p className="xl:p-8 text-6xl md:text-8xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase">
          Education
        </p>
      </div>
      <VerticalTimeline>
        {education.map((edu, index) => {
          return (
            <VerticalTimelineElement
              visible={true}
              key={index}
              className=""
              contentStyle={{
                background: "#FCFAF6",
                color: "#000",
                borderRadius: "15px",
                border: "2px solid black",
                boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)",
              }}
              iconStyle={{
                background: "#fff",
                border: "4px solid black",
                overflow: "hidden",
                height: "50px",
                width: "50px",
              }}
              contentArrowStyle={{ visibility: "hidden" }}
              icon={
                <div className="absolute top-5 right-4 scale-125">
                  <GraduationCap />
                </div>
              }
            >
              <div className="flex flex-col text-textBrown font-subtext-mont p-4 text-lg">
                <div className="font-heading-barlow tracking-wider text-xl">
                  {edu.university}
                </div>
                <div className="mt-1 font-semibold">{edu.degree}</div>
                <div className="mt-2 text-sm rounded-xl  border-bgPeach font-light  font-subtext-mont">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
