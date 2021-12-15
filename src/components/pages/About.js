import React from "react";
import { AboutImg, AboutP } from "./About.styled.js";
import daniel3 from "./daniel3.jpg";
import {
  Header,
  MainContainer,
  MainContant,
  MainWrap,
} from "../MainSection/MainSection.styled";

const About = () => {
  return (
    <MainContainer>
      <Header>About </Header>
      <MainContant>
        <AboutP>i'm Daniel, a self learner, Dreamer,</AboutP>
        <AboutImg src={daniel3} />
      </MainContant>
    </MainContainer>
    //     <MainWrap>
    // </MainWrap>
  );
};

export default About;
