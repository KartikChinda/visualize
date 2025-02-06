import React from "react";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-900 h-2 relative rounded-full my-4 mt-10">
      <div className="flex justify-between absolute -top-3 w-full">
        {[...Array(totalSteps)].map((_, index) => {
          return (
            <div
              key={`${index}`}
              className={`w-8 h-8 rounded-full  z-10 border-2 flex justify-center items-center ${
                index <= step
                  ? "bg-primaryDark text-black border-black"
                  : "bg-black"
              } 
              ${index === step ? "font-bold" : ""}
              `}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <div
        className="bg-primaryLight h-2 rounded-full relative"
        style={{ width: `${(step / totalSteps) * 125}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
