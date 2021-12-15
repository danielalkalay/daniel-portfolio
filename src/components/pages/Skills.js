import React from "react";
import {
  SkillHeader,
  SkillList,
  SkillsContainer,
  SkillsSection,
  SkillsWraper,
} from "./Skills.styled";
import SkillItem from "../SkillItem/SkillItem";
import {
  FrontEnd,
  BackEnd,
  ProgramLang,
  DataBase,
} from "../SkillItem/SkillsData";
import {
  Header,
  MainContainer,
  MainWrap,
} from "../MainSection/MainSection.styled";

const Skills = () => {
  return (
    <MainWrap>
      <MainContainer>
        <Header>Skills</Header>
        <SkillsWraper>
          <SkillsContainer>
            <SkillHeader>Front end</SkillHeader>

            <SkillList>
              {FrontEnd.map((item) => (
                <SkillItem key={item.icon} icon={item.icon} name={item.name} />
              ))}
            </SkillList>
          </SkillsContainer>

          <SkillsContainer>
            <SkillHeader>Back end</SkillHeader>
            <SkillList>
              {BackEnd.map((item) => (
                <SkillItem key={item.icon} icon={item.icon} name={item.name} />
              ))}
            </SkillList>
          </SkillsContainer>

          <SkillsContainer>
            <SkillHeader>Programing langueges</SkillHeader>
            <SkillList>
              {ProgramLang.map((item) => (
                <SkillItem key={item.icon} icon={item.icon} name={item.name} />
              ))}
            </SkillList>
          </SkillsContainer>

          <SkillsContainer>
            <SkillHeader>Data Base</SkillHeader>
            <SkillList>
              {DataBase.map((item) => (
                <SkillItem key={item.icon} icon={item.icon} name={item.name} />
              ))}
            </SkillList>
          </SkillsContainer>
        </SkillsWraper>
      </MainContainer>
    </MainWrap>
  );
};

export default Skills;
