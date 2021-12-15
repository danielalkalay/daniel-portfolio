import React from "react";
import {
  Header,
  MainContainer,
  MainWrap,
} from "../MainSection/MainSection.styled";
import SkillItem from "../SkillItem/SkillItem";
import {
  BackEnd,
  DataBase,
  FrontEnd,
  ProgramLang,
} from "../SkillItem/SkillsData";
import { ProjectCard } from "./Project.styled";
import {
  SkillHeader,
  SkillList,
  SkillsContainer,
  SkillsWraper,
} from "./Skills.styled";

const Projects = () => {
  return (
    <MainWrap>
      <MainContainer>
        <Header>Projects</Header>
      </MainContainer>
    </MainWrap>
  );
};

export default Projects;
