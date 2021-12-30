import React from "react";
import { Header, MainContainer } from "../MainSection/MainSection.styled";
import { AboutSection, AboutP, AboutImg } from "../pages/About.styled";
import aboutpic from "../Assets/aboutpic.jpg";
const About = () => {
  return (
    <MainContainer>
      <Header>About </Header>
      <AboutSection>
        <AboutP>
          hey,
          <br /> my name is Daniel, i'm an autodidact, curiuos and eager to
          learn all the time, trying to know a little bit of everything =]
        </AboutP>
        <AboutImg src={aboutpic} alt="about pic" />
      </AboutSection>
    </MainContainer>
  );
};

export default About;
