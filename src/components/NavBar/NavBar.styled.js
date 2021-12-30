import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const NavBarStyle = styled.div`
  display: flex;
  font-size: 2rem;
  background: #414cd9;
  height: 60px;
  width: 100vw;
  position: fixed;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const NavLinksContainer = styled.ul`
  display: flex;
  font-weight: bold;
  font-size: 2rem;
  justify-content: center;
  align-content: center;
  border-radius: 8px;
`;

export const NavLinkS = styled(LinkS)`
  display: flex;
  margin: 0 30px;
  padding: 10px;
  height: 100%;
  align-items: center;
  color: whitesmoke;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transition: ease;
    border-radius: 10px;
    filter: brightness(1.5);
  }
  @media screen and (max-width: 930px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const MobileIcon = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: whitesmoke;
    cursor: pointer;
    position: relative;
    bottom: 17px;
  } ;
`;
export const Logo = styled(LinkS)`
  padding: 0 20px;
  font-size: 2.5rem;
  color: whitesmoke;

  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
