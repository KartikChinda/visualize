import React from "react";

type TextAreaInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errors?: { [key: string]: string };
  placeholder?: string;
  rows?: number;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  name,
  value,
  onChange,
  errors,
  placeholder = "Enter your text...",
  rows = 4,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1 font-bold ">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full border p-2 bg-black border-primaryLight rounded-xl ${
          errors && errors[name] ? "border-red-500" : "border-primaryLight"
        }`}
      />
      {errors && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
    </div>
  );
};

export default TextAreaInput;
