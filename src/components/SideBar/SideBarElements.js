import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SideBarContainer = styled.div`
  display: flex;
  background: #414cd9;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  top: ${({ sidebar }) => (sidebar ? "0" : "-110%")};
  transition: 1s ease;
  z-index: 10;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const SideBarIcon = styled.div`
  color: whitesmoke;
  font-size: 2rem;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const NavLinkS = styled(LinkS)`
  /* display: flex; */
  margin: 20px;
  padding: 10px;
  height: 100%;
  align-items: center;
  color: whitesmoke;
  background: #414cd9;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transition: ease;
    border-radius: 10px;
    filter: brightness(1.5);
  }

  /* @media screen and (max-width: 930px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  } */
`;
