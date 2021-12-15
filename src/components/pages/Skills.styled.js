import styled from "styled-components";

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  position: relative;
  top: 80px;
`;

export const SkillsWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    display: flex;
  } ;
`;

export const SkillsContainer = styled.div`
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
  } ;
`;

export const SkillHeader = styled.h2`
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

export const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
`;

export const SkillWraper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  font-size: 1.2rem;
  width: 100%;
  /* width: inherit; */
  /* color: ${({ icon }) => (icon ? "yellow" : "black")}; */

  @media screen and (max-widh: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
  }
`;
export const SkillImg = styled.div`
  display: flex;
  /* font-size: 2rem; */
  margin: 5px;
`;
