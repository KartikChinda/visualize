import React from "react";
import { fullFormProps } from "@/app/types";
import { z } from "zod";
import CustomInput from "./CustomInput";

type BasicsProps = {
  formData: Partial<fullFormProps>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<fullFormProps>>>;
  handleValidateAndNext: () => void;
  errors: { [key: string]: string };
};

const Basics = ({
  formData,
  setFormData,
  handleValidateAndNext,
  errors,
}: BasicsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="p-4 text-primaryDark font-subtext-mont">
      <h2 className="text-4xl font-bold mb-2">Basics</h2>
      <h3>Let's start small. </h3>
      <div className="mt-10 flex flex-col gap-4">
        <CustomInput
          labelName="Email"
          name="email"
          type="email"
          inputValue={formData.email}
          errors={errors}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
        />
        <CustomInput
          labelName="Username"
          name="username"
          type="text"
          inputValue={formData.username}
          errors={errors}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
        />
        <CustomInput
          labelName="First Name"
          name="firstName"
          type="text"
          inputValue={formData.firstName}
          errors={errors}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
        />
        <CustomInput
          labelName="Last Name"
          name="lastName"
          type="text"
          inputValue={formData.lastName}
          errors={errors}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
        />
        <CustomInput
          labelName="LinkedIn URL"
          name="linkedin"
          type="url"
          inputValue={formData.linkedin}
          errors={errors}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
        />
        <CustomInput
          labelName="GitHub URL"
          name="github"
          type="url"
          inputValue={formData.github}
          errors={errors}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
          }}
        />
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

export default Basics;
