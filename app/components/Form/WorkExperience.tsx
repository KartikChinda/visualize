import React, { useState } from "react";
import { workExperienceFormSchema } from "@/app/schemas/formSchema";
import { FormDataSectionProps } from "@/app/types";
import { workExperienceProps } from "@/app/types";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import CustomInput from "./CustomInput";
import TextAreaInput from "./CustomTextArea";
import { handleArrayChange } from "@/app/utils";

const WorkExperience = ({
  formData,
  setFormData,
  handleValidateAndNext,
  errors,
}: FormDataSectionProps) => {
  const [workExperiences, setworkExperiences] = useState<workExperienceProps[]>(
    formData.workExperience || []
  );

  const addExperience = () => {
    setworkExperiences([
      ...workExperiences,
      {
        startDate: "",
        company: "",
        endDate: "",
        description: "",
        role: "",
      },
    ]);
  };

  const removeExperience = () => {
    setworkExperiences((prev) => prev.slice(0, -1));
  };

  return (
    <div className="p-4 text-primaryDark font-subtext-mont">
      <h2 className="text-4xl font-bold mb-2">Work Experience</h2>
      <h3>Tell us where you've worked. </h3>
      <div className="mt-10 flex flex-col gap-4">
        {workExperiences.map((exp, index) => (
          <div key={index}>
            <CustomInput
              type="text"
              name="company"
              placeholder="Enter your organization"
              inputValue={exp.company}
              labelName="Company"
              handleChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setworkExperiences,
                  setFormData,
                  "workExperience"
                )
              }
              errors={errors}
            />
            <CustomInput
              type="text"
              name="role"
              placeholder="Enter your designation"
              inputValue={exp.role}
              labelName="Role"
              handleChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setworkExperiences,
                  setFormData,
                  "workExperience"
                )
              }
              errors={errors}
            />
            <CustomInput
              type="text"
              name="startDate"
              placeholder="Format: MM-YY"
              inputValue={exp.startDate}
              labelName="Starting Date"
              handleChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setworkExperiences,
                  setFormData,
                  "workExperience"
                )
              }
              errors={errors}
            />
            <CustomInput
              type="text"
              name="endDate"
              placeholder="Format: MM-YY (Enter present if you're still working.)"
              inputValue={exp.endDate}
              labelName="Ending Date"
              handleChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setworkExperiences,
                  setFormData,
                  "workExperience"
                )
              }
              errors={errors}
            />
            <TextAreaInput
              // type="description"
              name="description"
              placeholder="Enter what you did at your work."
              value={exp.description}
              label="Description"
              onChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setworkExperiences,
                  setFormData,
                  "workExperience"
                )
              }
              errors={errors}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-10">
        <button
          onClick={removeExperience}
          disabled={workExperiences.length === 0}
          className={`${workExperiences.length === 0 ? "opacity-45" : ""}`}
        >
          <MinusCircle size={30} />
        </button>
        <button onClick={addExperience}>
          <PlusCircle size={30} />
        </button>{" "}
      </div>
      {workExperiences.length === 0 && (
        <div className="w-full text-center text-sm mt-4 text-green-600">
          Click to add an experience.
        </div>
      )}
      <div className="mt-10 flex justify-center items-center w-full">
        <button
          className="bg-[#7CD213] text-gray-900 px-10 py-3 rounded-lg text-lg font-medium hover:bg-[#96eb2e] duration-300 font-subtext-mont uppercase"
          onClick={handleValidateAndNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
