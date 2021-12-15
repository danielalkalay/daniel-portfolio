import styled from "styled-components";

export const MainSectionS = styled.div`
  display: flex;
  flex-direction: column;
  /* top: 80px; */
  position: relative;
  text-align: center;
  justify-content: center;
  background-color: #6abcff;
  /* height: 100%; */
`;
export const MainWrap = styled.div`
  display: flex;
  /* height: 100vh; */
  position: relative;
  background-color: #6abcff;
  top: 80px;
`;

export const MainContainer = styled.div`
  background-color: #6abcff;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: center;
  z-index: 1;
  width: 100%;
  position: relative;
  top: 80px;
  position: relative;
  /* height: calc(100vh - 80px); */
  height: fit-content;
`;

export const Header = styled.div`
  font-size: 4rem;
  display: flex;
  color: whitesmoke;
  margin: 20px;

  @media screen and (max-width: 768px) {
  } ;
`;

export const MainContant = styled.div`
  display: flex;
`;
