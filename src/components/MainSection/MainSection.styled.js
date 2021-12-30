import styled from "styled-components";

export const MainSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6abcff;
  position: relative;
  text-align: center;
  justify-content: center;
  top: 60px;
`;

export const MainContainer = styled.div`
  display: flex;
  background-color: #6abcff;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  top: 100px;
  bottom: -60px;
  min-height: 100vh;
`;

export const Ptag = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 5rem;
  justify-content: center;
  align-content: center;
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
