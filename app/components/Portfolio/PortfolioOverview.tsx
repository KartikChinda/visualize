import { UserDataType } from "@/app/types";
import React from "react";
import Skills from "./Skills";

const PortfolioOverview = ({ userData }: { userData: UserDataType }) => {
  return (
    <div>
      <Skills skills={userData.skills} />
    </div>
  );
};

export default PortfolioOverview;
