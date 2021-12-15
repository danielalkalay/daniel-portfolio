import React from "react";
import { Header, MainContainer } from "../MainSection/MainSection.styled";
import {
  ProjectHeder,
  ProjectImg,
  ProjectInfo,
  ProjectsSection,
} from "./Project.styled";

const ProjectCard = ({ name, img, info }) => {
  return (
    <MainContainer>
      <Header>{name}</Header>
      <ProjectImg>{img}</ProjectImg>
      <ProjectInfo>{info}</ProjectInfo>
    </MainContainer>
  );
};

export default ProjectCard;
