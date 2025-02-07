import React from "react";
import { fullFormProps } from "@/app/types";
import { z } from "zod";

type BasicsProps = {
  formData: Partial<fullFormProps>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
};

const Basics = ({ formData, setFormData, nextStep, prevStep }: BasicsProps) => {
  return <div>Basics</div>;
};

export default Basics;
