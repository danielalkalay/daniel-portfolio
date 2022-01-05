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
  width: 40%;
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
  /* justify-content: space-around; */
  width: 80%;
  height: auto;
  border-radius: 30px;
  padding: 10px;
  /* align-items: center; */
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  img {
    height: auto;
    width: 70%;
    border-radius: 40px;
  }
  .slide-container {
    background-color: inherit;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 60%;
    /* padding-left: 40%; */
  }
`;
