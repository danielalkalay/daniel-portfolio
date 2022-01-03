import styled from "styled-components";

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #ffd54f;
  position: relative;
  padding-top: 20px;
`;

export const AboutContant = styled.div`
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: auto;
  border: solid 4px navy;
  border-radius: 30px;
  padding: 10px;

  p {
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
