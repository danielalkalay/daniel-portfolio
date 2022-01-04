import React from "react";
import { Header, MainContainer } from "../MainSection/MainSection.styled";
import { CaruselWraper, SkillsSection } from "./Skills.styled";

import Carusel from "../Carusel";
import { Front, Languege, Back } from "../SkillData";

const Skills = () => {
  return (
    <MainContainer>
      <SkillsSection>
        <Header>Skills</Header>
        <CaruselWraper>
          <Carusel data={Front} />
          <Carusel data={Back} />
          <Carusel data={Languege} />
        </CaruselWraper>
      </SkillsSection>
    </MainContainer>
  );
};

export default Skills;
