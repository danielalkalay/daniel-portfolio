import { FaBars, FaDog } from "react-icons/fa";
import {
  // HeaderStyle,
  Logo,
  MobileIcon,
  NavBarStyle,
  NavLinkS,
  NavLinksContainer,
} from "./NavBar.styled";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
  const [sidebar, SetSidebar] = useState(+false);

  const SideBarHandler = () => {
    SetSidebar(+!sidebar);
  };

  return (
    <NavBarStyle>
      <Logo spy={true} smooth={true} duration={1000} to="home">
        <FaDog />
      </Logo>

      <NavLinksContainer onClick={SideBarHandler}>
        <NavLinkS smooth={true} duration={500} to="about" offset={50}>
          About
        </NavLinkS>
        <NavLinkS smooth={true} duration={500} to="skills">
          Skills
        </NavLinkS>
        <NavLinkS smooth={true} duration={500} to="projects">
          Projects
        </NavLinkS>
        <NavLinkS smooth={true} duration={500} to="contact">
          Contact
        </NavLinkS>
      </NavLinksContainer>

      <MobileIcon>
        <FaBars onClick={SideBarHandler} />
      </MobileIcon>

      <SideBar
        SideBarHandler={SideBarHandler}
        sidebar={sidebar}
        SetSidebar={SetSidebar}
      />
    </NavBarStyle>
  );
};

export default NavBar;
