import styled from "styled-components";

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  .each-fade {
    display: flex;
    flex-direction: column;
    /* max-height: 200px; */
    justify-content: center;
    align-content: center;
    align-items: center;
    max-height: 200px;
    border-radius: 20px;
  }

  .slide-container {
    max-width: 520px;
    width: 60%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  /* .slide-container > .react-slideshow-container {
    display: flex;
    align-items: center;
  } */
  .react-slideshow-container {
    display: flex;
    align-items: center;
    box-shadow: 10px 5px 20px black;
    border-radius: 20px;
  }
  .indicators {
    margin-top: 0px;
  }
`;
export const Contant = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  background-color: lightblue;
  margin: 0;
`;
export const SkillImg = styled.img`
  width: 60%;
  display: flex;
  justify-content: center;
  height: 150px;
  border-radius: 20px;
  padding: 5px;
`;

export const ContantInfo = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
  border-radius: 20px 20px 20px 20px;
  font-size: 1rem;
  /* background: #adceed; */
  font-family: "Bangers", cursive;

  h2 {
    font-size: 1rem;
    font-family: "Bangers", cursive;
  }

  p {
    align-self: center;
    font-size: 0.7rem;
    font-family: "Bangers", cursive;
  }
`;

export const CaruselStyle = styled.div`
  display: flex;
  /* box-shadow: black; */
`;
