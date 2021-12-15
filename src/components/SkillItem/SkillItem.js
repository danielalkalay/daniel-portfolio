import React from "react";
import { SkillImg, SkillWraper } from "../pages/Skills.styled";

const SkillItem = ({ icon, name }) => {
  return (
    <SkillWraper>
      <SkillImg>{icon}</SkillImg>

      {name}
    </SkillWraper>
  );
};

export default SkillItem;
