import { UserDataType } from "@/app/types";
import React from "react";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Quote from "./Quote";
import Contact from "./Contact";
import Education from "./Education";
import WorkEx from "./WorkEx";

const PortfolioOverview = ({ userData }: { userData: UserDataType }) => {
  return (
    <div className="bg-bgPeach">
      <AboutMe aboutMe={userData.aboutMe} />
      {userData.workExperience && <WorkEx workex={userData.workExperience} />}
      {userData.education && <Education education={userData.education} />}
      {userData.quote && <Quote quote={userData.quote} />}
      <Skills skills={userData.skills} />
      <Contact
        email={userData.email}
        linkedin={userData.linkedin}
        github={userData.github}
      />
    </div>
  );
};

export default PortfolioOverview;
