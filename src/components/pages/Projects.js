import React from "react";
import { Header, MainContainer, Ptag } from "../MainSection/MainSection.styled";
import { ProjectsSection } from "./Projects.style";

const Projects = () => {
  return (
    <MainContainer>
      <ProjectsSection>
        <Header>Projects</Header>
        <input type="color" name="color1" value={"blue"} />
        <input type="color" name="color2" value={"green"} />
        <Ptag>under construction</Ptag>
      </ProjectsSection>
    </MainContainer>
  );
};

export default Projects;
