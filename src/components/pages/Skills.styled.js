import styled from "styled-components";

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #2845ac;
  position: relative;

  .each-fade {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-content: center;
    /* height: inherit; */
  }

  .slide-container {
    background-color: lightblue;
    /* max-height: 250px; */
    max-width: 300px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    justify-content: center;
    align-content: center;
    box-shadow: 10px 5px 10px 5px black;
    @media screen and (max-width: 768px) {
      max-width: 220px;
    }
  }

  .react-slideshow-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }
`;
export const Contant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  align-content: center;
  align-items: center;
`;
export const SkillImg = styled.img`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const CaruselWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const ContantInfo = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
  padding: 5px;

  h2 {
    font-size: 2rem;
    font-family: "Bangers", cursive;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    align-self: center;
    font-size: 1rem;
    font-family: "Bangers", cursive;
  }
`;
