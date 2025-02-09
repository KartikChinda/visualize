import React, { useState } from "react";
import { FormDataSectionProps } from "@/app/types";
import { educationProps } from "@/app/types";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import CustomInput from "./CustomInput";
import TextAreaInput from "./CustomTextArea";
import { handleArrayChange, handleChange } from "@/app/utils";

const EducationAndQuote = ({
  formData,
  setFormData,
  handleValidateAndNext,
  errors,
}: FormDataSectionProps) => {
  const [universities, setUniversities] = useState<educationProps[]>(
    formData.education || []
  );

  const addEducation = () => {
    setUniversities([
      ...universities,
      {
        university: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeEducation = () => {
    setUniversities((prev) => prev.slice(0, -1));
  };

  return (
    <div className="p-4 text-primaryDark font-subtext-mont">
      <h2 className="text-4xl font-bold mb-2">Education</h2>
      <h3>Tell us where you've studied. </h3>
      <div className="mt-10 flex flex-col gap-20">
        {universities.map((exp, index) => (
          <div key={index}>
            <CustomInput
              type="text"
              name="university"
              placeholder="Enter your University"
              inputValue={exp.university}
              labelName="University"
              handleChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setUniversities,
                  setFormData,
                  "education"
                )
              }
              errors={errors}
            />
            <CustomInput
              type="text"
              name="degree"
              placeholder="Enter your Degree"
              inputValue={exp.degree}
              labelName="Degree"
              handleChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setUniversities,
                  setFormData,
                  "workExperience"
                )
              }
              errors={errors}
            />
            <CustomInput
              type="text"
              name="startDate"
              placeholder="Format: Month-YYYY"
              inputValue={exp.startDate}
              labelName="Starting Date"
              handleChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setUniversities,
                  setFormData,
                  "workExperience"
                )
              }
              errors={errors}
            />
            <CustomInput
              type="text"
              name="endDate"
              placeholder="Format: Month-YYYY (Enter present if you're still studying.)"
              inputValue={exp.endDate}
              labelName="Ending Date"
              handleChange={(e) =>
                handleArrayChange(
                  index,
                  e,
                  setUniversities,
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
          onClick={removeEducation}
          disabled={universities.length === 0}
          className={`${universities.length === 0 ? "opacity-45" : ""}`}
        >
          <MinusCircle size={30} />
        </button>
        <button onClick={addEducation}>
          <PlusCircle size={30} />
        </button>{" "}
      </div>
      {universities.length === 0 && (
        <div className="w-full text-center text-sm mt-4 text-green-600">
          Click to add.
        </div>
      )}
      <div className="mt-8">
        <h2 className="text-4xl font-bold mb-2">Quote</h2>
        <h3>
          Optional, but write a quote that inspires you the most, a quote that
          you relate to, a quote that screams YOU.{" "}
        </h3>
      </div>
      <CustomInput
        name="quote"
        labelName="Quote"
        inputValue={formData.quote || ""}
        type="text"
        errors={errors}
        handleChange={(e) => handleChange(e, setFormData)}
      />
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

export default EducationAndQuote;
