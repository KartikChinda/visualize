import { z } from "zod";
import { projectSchema, workExperienceSchema, testimonialSchema, userSchema, educationSchema } from "../schemas/userSchema";

export type UserDataType = z.infer<typeof userSchema>; 
export type ProjectDataType = z.infer<typeof projectSchema>; 
export type WorkExperienceType = z.infer<typeof workExperienceSchema>; 
export type TestimonialType = z.infer<typeof testimonialSchema>; 
const aboutMeProps = userSchema.pick({
    aboutMe: true, 
})
const contactMeProps = userSchema.pick({
    email: true, 
    linkedin: true, 
    github: true, 
})

const heroDataSchema = userSchema.pick({
    firstName: true, 
    lastName: true, 
    profilePicture: true, 
})

export type AboutMePropsType = z.infer<typeof aboutMeProps>; 
export type contactMeProps = z.infer<typeof contactMeProps>; 
export type educationProps = z.infer<typeof educationSchema>; 
export type workExperienceProps = z.infer<typeof workExperienceSchema>;
export type projectsProps = z.infer<typeof projectSchema>; 
export type heroDataProps = z.infer<typeof heroDataSchema>; 