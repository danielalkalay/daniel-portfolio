import React from "react";
import { Header, MainContainer } from "../MainSection/MainSection.styled";
import { AboutSection, AboutImg, AboutContant } from "../pages/About.styled";
import aboutpic from "../Assets/aboutpic.jpg";
const About = () => {
  return (
    <MainContainer>
      <AboutSection>
        <Header>About </Header>
        <AboutContant>
          <p>
            Hey,
            <br /> my name is Daniel, i'm an autodidact, curiuos and eager to
            learn all the time, trying to know a little bit of everything =]
          </p>
          <AboutImg src={aboutpic} alt="about pic" />
        </AboutContant>
      </AboutSection>
    </MainContainer>
  );
};

export default About;
