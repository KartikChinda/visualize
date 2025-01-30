import { z } from "zod";
import { projectSchema, workExperienceSchema, testimonialSchema, userSchema } from "../schemas/userSchema";

export type UserDataType = z.infer<typeof userSchema>; 
export type ProjectDataType = z.infer<typeof projectSchema>; 
export type WorkExperienceType = z.infer<typeof workExperienceSchema>; 
export type TestimonialType = z.infer<typeof testimonialSchema>; 