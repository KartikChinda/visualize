import React from "react";

type InputProps = {
  labelName: string;
  type: string;
  name: string;
  inputValue: string | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { [key: string]: string };
  placeholder?: string;
  accept?: string;
};

const CustomInput = ({
  labelName,
  type,
  name,
  inputValue,
  handleChange,
  errors,
  placeholder,
  accept,
}: InputProps) => {
  return (
    <div className="my-4">
      <label className="block text-sm mb-1 font-bold ">{labelName}</label>
      <input
        accept={accept}
        type={type}
        placeholder={placeholder}
        name={name}
        value={inputValue || ""}
        onChange={handleChange}
        className="w-full border p-2 bg-black border-primaryLight rounded-xl"
      />
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]}</p>
      )}
    </div>
  );
};

export default CustomInput;
