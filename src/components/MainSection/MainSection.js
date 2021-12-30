import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { MainSectionStyle } from "./MainSection.styled";
import { Element } from "react-scroll";

const MainSection = () => {
  return (
    <MainSectionStyle>
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </MainSectionStyle>
  );
};

export default MainSection;
