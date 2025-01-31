import { UserDataType } from "@/app/types";
import React from "react";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Quote from "./Quote";
import Contact from "./Contact";

const PortfolioOverview = ({ userData }: { userData: UserDataType }) => {
  return (
    <div className="bg-bgPeach">
      <AboutMe aboutMe={userData.aboutMe} />
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
