import styled from "styled-components";

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background-color: #ffd54f;
  position: relative;
  padding-top: 20px;
`;

export const AboutContant = styled.div`
  font-weight: 800;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: auto;
  border: solid 4px navy;
  border-radius: 30px;
  padding: 10px;
  margin: 10px;

  p {
    font-size: 1.2rem;
    width: 40%;
  }
`;

export const AboutImg = styled.img`
  margin: 10px;
  width: 30%;
  height: auto;

  border-radius: 20px;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const AboutCarusel = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 800;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: auto;
  border-radius: 30px;
  padding: 10px;

  img {
    height: auto;
    width: 100%;
    border-radius: 40px;
  }
  .slide-container {
    background-color: inherit;

    margin: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    justify-content: center;
    align-content: center;
    max-width: 220px;
  }

  /* .react-slideshow-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  } */
`;
