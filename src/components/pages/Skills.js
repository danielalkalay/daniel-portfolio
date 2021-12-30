import React from "react";
import { Header, MainContainer } from "../MainSection/MainSection.styled";
import { SkillsSection } from "./Skills.styled";

import Carusel from "../Carusel";
import { Front, Languege, Back } from "../SkillData";

const Skills = () => {
  return (
    <MainContainer>
      <SkillsSection>
        <Header>Skills</Header>
        <Carusel data={Front} />
        <Carusel data={Back} />
        <Carusel data={Languege} />
      </SkillsSection>
    </MainContainer>
  );
};

export default Skills;
// <div className="slide-container">
// <Fade duration={3000} arrows={true} autoplay={false}>
//   <div className="each-fade">
//     <Contant>
//       <SkillImg src={Node} />
//       <ContantInfo>
//         <h2>header</h2>
//         <p>First Slide</p>
//       </ContantInfo>
//     </Contant>
//   </div>

//   <div className="each-fade">
//     <Contant>
//       <SkillImg src={ReactLogo} />
//       <ContantInfo>
//         <h2>header</h2>
//         <p>Second Slide</p>
//       </ContantInfo>
//     </Contant>
//   </div>

//   <div className="each-fade">
//     <Contant>
//       <SkillImg src={aboutpic} />
//       <ContantInfo>
//         <h2>header</h2>
//         <p>Thired Slide</p>
//       </ContantInfo>
//     </Contant>
//   </div>

//   <div className="each-fade">
//     <Contant>
//       <SkillImg src={aboutpic} />
//       <ContantInfo>
//         <h2>header</h2>
//         <p>4th Slide</p>
//       </ContantInfo>
//     </Contant>
//   </div>

//   <div className="each-fade">
//     <Contant>
//       <SkillImg src={aboutpic} />
//       <ContantInfo>
//         <h2>header</h2>
//         <p>5th Slide</p>
//       </ContantInfo>
//     </Contant>
//   </div>
//   <div className="each-fade">
//     <Contant>
//       <SkillImg src={aboutpic} />
//       <ContantInfo>
//         <h2>header</h2>
//         <p>6th Slide</p>
//       </ContantInfo>
//     </Contant>
//   </div>
// </Fade>
// </div>
// <div className="slide-container">
// <Fade duration={3000} arrows={true} autoplay={false}>
//   <div className="each-fade">
//     <Contant>
//       <SkillImg src={Node} />
//       <ContantInfo>
//         <h2>header</h2>
//         <p>First Slide</p>
//       </ContantInfo>
//     </Contant>
//   </div>
// </Fade>
// {/* </div */}

// <Fade>
//   <div className="each-fade">
//     <div>
//       <SkillImg src={aboutpic} alt="about pic" />
//       {/* <SkillImg src={aboutpic} alt="about pic" /> */}
//     </div>
//     <p>First Slide</p>
//   </div>
//   {/* <div className="each-fade">
//     <div>
//       <SkillImg src={aboutpic} alt="about pic" />
//     </div>
//     <p>First Slide</p>
//   </div> */}
// </Fade>
