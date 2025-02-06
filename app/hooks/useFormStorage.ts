import { useState, useEffect } from "react";

const FORM_STORAGE_KEY="portfolioFormData"; 

export const useFormStorage = () => {
    const initialState = {
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        linkedin: "",
        github: "",
        education: [],
        workExperience: [],
        profilePicture: "",
        aboutMe: "",
        projects: [],
        skills: "",
        testimonials: [],
        quote: "",
      };
    const [formData, setFormData] = useState(() => {
        if(typeof window !== "undefined"){
            const savedFormData = localStorage.getItem(FORM_STORAGE_KEY); 
            return savedFormData ? JSON.parse(savedFormData) : initialState; 
        }
        return initialState; 
    }); 

    useEffect(() => {
      if(typeof window !== "undefined"){
        localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData)); 
      }
    }, [formData])

    return {formData, setFormData}; 
    
}