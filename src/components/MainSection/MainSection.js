import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { MainSectionStyle } from "./MainSection.styled";
import { Element } from "react-scroll";
import Footer from "../Footer/Footer";

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
      <Footer />
    </MainSectionStyle>
  );
};

export default MainSection;
