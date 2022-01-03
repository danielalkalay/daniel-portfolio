import styled from "styled-components";

export const MainSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #6abcff; */
  position: relative;
  text-align: center;
  justify-content: center;
  /* top: 60px; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  top: inherit;
  min-height: 100vh;
  top: 60px;

  /* background: rgb(12, 12, 12);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100vw;
  height: 100vh; */
`;

export const Ptag = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 5rem;
  justify-content: center;
  align-content: center;
  color: greenyellow;
  font-weight: 800;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    font-weight: 500;
  } ;
`;

export const Header = styled.div`
  font-size: 3rem;
  display: flex;
  color: whitesmoke;
  margin-top: 30px;
  font-family: "Bangers", cursive;

  @media screen and (max-width: 768px) {
  } ;
`;
