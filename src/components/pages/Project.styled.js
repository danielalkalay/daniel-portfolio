import styled from "styled-components";

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  position: relative;
  top: 80px;

  @media screen and (max-widh: 768px) {
  }
`;

export const ProjectsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 50px; */
  justify-items: center;

  width: 80%;
  /* @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  } */
`;

export const ProjectHeder = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  color: rgb(45 49 159);
  margin: 5px;
  height: 60px;
  align-items: center;
  border-radius: 10px;

  &:hover {
    filter: brightness(1.6);
  }
`;
export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 50px;
  align-items: center;
  background: linear-gradient(180deg, white, 25%, #6abcff);
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const ProjectImg = styled.div``;

export const ProjectInfo = styled.p``;
