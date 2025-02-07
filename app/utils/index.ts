import { fullFormProps } from "../types";

export const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setFormData((prev: Partial<fullFormProps>) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  