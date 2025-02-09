import { userSchema } from "./userSchema";

export const basicsSchema = userSchema.pick({
    email: true, 
    username: true, 
    firstName: true, 
    lastName: true, 
    linkedin: true, 
    github: true, 
})

export const aboutAndSkillsSchema = userSchema.pick({
    aboutMe: true, 
    skills: true, 
    profilePicture: true, 
})

export const workExperienceFormSchema = userSchema.pick({
    workExperience: true, 
})

export const educationAndQuoteSchema = userSchema.pick({
    education: true, 
    quote: true, 
})

export const projectsAndTestimonialsSchema = userSchema.pick({
    projects: true, 
    testimonials: true, 
})

export const fullFormSchema = basicsSchema
  .merge(aboutAndSkillsSchema)
  .merge(workExperienceFormSchema)
  .merge(educationAndQuoteSchema)
  .merge(projectsAndTestimonialsSchema);