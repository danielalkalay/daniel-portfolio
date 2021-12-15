import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  background: #414cd9;
  align-items: center;
  height: 80px;
  width: 100vw;
  top: 0;
  position: fixed;
  z-index: 10;
`;

export const Logo = styled(LinkS)`
  padding: 20px;
  font-size: 3rem;
  color: whitesmoke;

  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

export const NavLinksContainer = styled.ul`
  display: flex;
  font-weight: bold;
  font-size: 2rem;
  justify-content: center;
  border-radius: 8px;
`;

export const NavLinkS = styled(LinkS)`
  display: flex;
  margin: 0 30px;
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
  @media screen and (max-width: 930px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: whitesmoke;
    cursor: pointer;
    top: 0;
    right: 0;
  } ;
`;
