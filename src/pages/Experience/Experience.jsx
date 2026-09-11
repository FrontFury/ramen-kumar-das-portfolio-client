import React from "react";
import AwardBanner from "./AwardBanner/AwardBanner";
import Award from "./Award/Award";
import ProfessionalExperience from "./ProfessionalExperience/ProfessionalExperience";

const Experience = () => {
  return (
    <div className="font-['Playfair_Display',serif]">
      <AwardBanner></AwardBanner>
      <Award></Award>
      <ProfessionalExperience></ProfessionalExperience>
    </div>
  );
};

export default Experience;