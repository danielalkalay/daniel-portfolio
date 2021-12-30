import styled from "styled-components";

export const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 4px navy;
  border-radius: 30px;
  height: 60%;
  /* width: -webkit-fill-available; */
  margin: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const AboutP = styled.div`
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  width: 50%;
  /* margin: 50px; */
`;

export const AboutImg = styled.img`
  margin: 10px;
  width: 10rem;
  height: auto;

  border-radius: 50%;
  &:hover {
    filter: brightness(1.2);
  }
`;
