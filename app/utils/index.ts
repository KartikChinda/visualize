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
  
export const handleArrayChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<any>>, 
    setFormData: React.Dispatch<React.SetStateAction<any>>, fieldName: string) => {
    const { name, value } = event.target;
    setState((prev: any) => {
        const updatedArray = [...prev]; 
        updatedArray[index] = {...updatedArray[index], [name]: value}; 
        setFormData((prev: any) => ({
            ...prev, 
            [fieldName]: updatedArray, 
        }))
        return updatedArray;
    });

  };
  