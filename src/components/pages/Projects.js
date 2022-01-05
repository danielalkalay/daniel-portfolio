import React from "react";
import { Header, MainContainer, Ptag } from "../MainSection/MainSection.styled";
import { ProjectsSection, ProjectsWraper } from "./Projects.style";
import MagicList from "../Assets/MagicList.png";

const Projects = () => {
  return (
    <MainContainer>
      <ProjectsSection>
        <Header>Projects</Header>
        <ProjectsWraper>
          <a href="https://danielalkalay.github.io/magic-list">
            <img src={MagicList} alt="" />
          </a>
          {/* <a href="https://danielalkalay.github.io/magic-list">
            <img src={MagicList} alt="" />
          </a> */}
        </ProjectsWraper>

        {/* <Ptag>under construction</Ptag> */}
      </ProjectsSection>
    </MainContainer>
  );
};

export default Projects;
