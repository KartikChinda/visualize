import { z } from "zod";

export const testimonialSchema = z.object({
    name: z.string(),
    designation: z.string().optional(), 
    testimonial: z.string().min(1),
});

export const educationSchema = z.object({
    university: z.string(),
    startDate: z.date(), 
    endDate: z.date(), 
    degree: z.string(), 
});

export const projectSchema = z.object({
    image: z.string(), 
    projectTitle: z.string().min(1), 
    projectDescription: z.string().min(10).max(150), 
    githubLink: z.string().url(),
    websiteLink: z.string().url().optional(), 
});

export const workExperienceSchema = z.object({
    company: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    role: z.string(),
    description: z.string(),
})

export const userSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3).max(20),
    firstName: z.string().min(1),
    lastName: z.string().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    education: z.array(educationSchema).optional(),
    workExperience: z.array(workExperienceSchema).optional(),
    profilePicture: z.string(),
    aboutMe: z.string(),
    projects: z.array(projectSchema).optional(),
    skills: z.string(),
    testimonials: z.array(testimonialSchema).optional(),
    quote: z.string().optional(),
});
