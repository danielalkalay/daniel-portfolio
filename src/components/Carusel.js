import React from "react";
import { Contant, ContantInfo, SkillImg } from "./pages/Skills.styled";
import { Fade } from "react-slideshow-image";

const Carusel = ({ data }) => {
  return (
    <div className="slide-container">
      <Fade duration={3000} arrows={false} autoplay={true} indicators={false}>
        {data.map((item) => (
          <div className="each-fade" key={item.id}>
            <Contant>
              <SkillImg src={item.img} />
              <ContantInfo>
                <h2>{item.header}</h2>
                <p>{item.info}</p>
              </ContantInfo>
            </Contant>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Carusel;
// <>
//   <div className="slide-container">
//     <Fade duration={3000} arrows={true} autoplay={false}>
//       <div className="each-fade">
//         <Contant>
//           <SkillImg src={Node} />
//           <ContantInfo>
//             <h2>header</h2>
//             <p>First Slide</p>
//           </ContantInfo>
//         </Contant>
//       </div>

//       <div className="each-fade">
//         <Contant>
//           <SkillImg src={ReactLogo} />
//           <ContantInfo>
//             <h2>header</h2>
//             <p>Second Slide</p>
//           </ContantInfo>
//         </Contant>
//       </div>

//       <div className="each-fade">
//         <Contant>
//           <SkillImg src={aboutpic} />
//           <ContantInfo>
//             <h2>header</h2>
//             <p>Thired Slide</p>
//           </ContantInfo>
//         </Contant>
//       </div>

//       <div className="each-fade">
//         <Contant>
//           <SkillImg src={aboutpic} />
//           <ContantInfo>
//             <h2>header</h2>
//             <p>4th Slide</p>
//           </ContantInfo>
//         </Contant>
//       </div>

//       <div className="each-fade">
//         <Contant>
//           <SkillImg src={aboutpic} />
//           <ContantInfo>
//             <h2>header</h2>
//             <p>5th Slide</p>
//           </ContantInfo>
//         </Contant>
//       </div>
//       <div className="each-fade">
//         <Contant>
//           <SkillImg src={aboutpic} />
//           <ContantInfo>
//             <h2>header</h2>
//             <p>6th Slide</p>
//           </ContantInfo>
//         </Contant>
//       </div>
//     </Fade>
//   </div>
// </>
