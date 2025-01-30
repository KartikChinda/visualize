import { UserDataType } from "@/app/types";
import React from "react";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Quote from "./Quote";

const PortfolioOverview = ({ userData }: { userData: UserDataType }) => {
  return (
    <div className="bg-bgPeach">
      <AboutMe aboutMe={userData.aboutMe} />
      {userData.quote && <Quote quote={userData.quote} />}
      <Skills skills={userData.skills} />
    </div>
  );
};

export default PortfolioOverview;
