import React from "react";
import CustomInput from "./CustomInput";
import { FormDataSectionProps } from "@/app/types";
import { handleChange } from "@/app/utils";
import TextAreaInput from "./CustomTextArea";

const AboutAndSkills = ({
  formData,
  setFormData,
  handleValidateAndNext,
  errors,
}: FormDataSectionProps) => {
  return (
    <div className="p-4 text-primaryDark font-subtext-mont">
      <h2 className="text-4xl font-bold mb-2">About yourself</h2>
      <h3>Let's fuel your narcissistic complex, and make this about you. </h3>
      <div className="mt-10 flex flex-col gap-4">
        <TextAreaInput
          label="About You"
          name="aboutMe"
          value={formData.aboutMe || ""}
          onChange={(e) => handleChange(e, setFormData)}
          errors={errors}
          placeholder="Enter a long paragraph here. Max 1000 characters."
        />
        <CustomInput
          labelName="Skills"
          name="skills"
          type="text"
          inputValue={formData.skills}
          errors={errors}
          placeholder="Comma separated (a, b, c, ...)"
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e, setFormData);
          }}
        />
        {/* need to do this */}
        {/* <CustomInput
          labelName="Profile Picture"
          name="profilePicture"
          type="file"
          inputValue={formData.profilePicture}
          errors={errors}
          accept="image/*"
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e, setFormData);
          }}
        /> */}
      </div>

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

export default AboutAndSkills;
