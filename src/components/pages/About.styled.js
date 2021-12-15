import styled from "styled-components";

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  align-items: center;
  position: relative;
  top: 80px;
`;
export const AboutWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin-top: 50px; */
`;

export const AboutP = styled.div`
  width: 30%;
  font-size: 1.5rem;
  display: flex;
  margin: 50px;
`;

export const AboutImg = styled.img`
  width: 25%;
  height: auto;
  border-radius: 80px;
  margin: 50px;
  &:hover {
    opacity: 0.4;
  }
`;
