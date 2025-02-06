"use client";
import React, { useState } from "react";
import Basics from "../components/Form/Basics";
import AboutAndSkills from "../components/Form/AboutAndSkills";
import WorkExperience from "../components/Form/WorkExperience";
import ProjectsAndTestimonials from "../components/Form/ProjectsAndTestimonials";
import EducationAndQuote from "../components/Form/EducationAndQuote";
import ProgressBar from "../components/Form/ProgressBar";
import { useFormStorage } from "../hooks/useFormStorage";
import { div } from "framer-motion/client";

const steps = [
  Basics,
  AboutAndSkills,
  WorkExperience,
  ProjectsAndTestimonials,
  EducationAndQuote,
];

const page = () => {
  const [step, setstep] = useState(0);
  const { formData, setFormData } = useFormStorage();
  const handleNextStep = () =>
    setstep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrevStep = () => setstep((prev) => Math.max(prev - 1, 0));
  const CurrentComponent = steps[step] || Basics;

  return (
    <div className="bg-black text-primaryDark min-h-screen p-4 md:p-10 font-subtext-mont">
      <div className="flex flex-col">
        <h1 className="font-heading-barlow text-4xl font-bold">
          Welcome, to Visualize.{" "}
        </h1>
        <p className="mt-4 mb-10">
          In the form below, will be all the information I will need from you,
          to spin out a beautiful portfolio for you. <br />
          The form is a bit long and has some sections, so grab a drink, and
          let's get started.
        </p>
      </div>
      <ProgressBar step={step} totalSteps={steps.length} />
      {/* <CurrentComponent formData={formData} setFormData={setFormData} nextStep={handleNextStep} prevStep={handlePrevStep} /> */}
    </div>
  );
};

export default page;
