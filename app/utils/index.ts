import { fullFormProps } from "../types";

export const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const file = e.target.files?.[0];
    if(file) {
        const reader = new FileReader(); 
        reader.readAsDataURL(file); 
        reader.onloadend = () => {
            const base64String = reader.result; 
            setFormData((prev: Partial<fullFormProps>) => ({
                ...prev,
                [e.target.name]: base64String, 
              }));
        }
    } else{
        setFormData((prev: Partial<fullFormProps>) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
    } 
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
  