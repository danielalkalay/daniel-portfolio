import React from "react";
import {
  NavLinkS,
  NavLinksContainer,
  SideBarContainer,
} from "./SideBarElements";

const SideBar = ({ SideBarHandler, sidebar, setSidebar }) => {
  return (
    <SideBarContainer
      onClick={SideBarHandler}
      sidebar={sidebar}
      setSideBar={setSidebar}
      SideBarHandler={SideBarHandler}
    >
      {/* <SideBarIcon>
        <AiOutlineClose onClick={SideBarHandler} sidebar={sidebar} />
      </SideBarIcon> */}

      <NavLinksContainer onClick={SideBarHandler}>
        <NavLinkS onClick={SideBarHandler} smooth={true} to="home">
          Daniel's Portfolio
        </NavLinkS>
        <NavLinkS onClick={SideBarHandler} smooth={true} to="about">
          About
        </NavLinkS>
        <NavLinkS onClick={SideBarHandler} smooth={true} to="skills">
          Skills
        </NavLinkS>
        <NavLinkS onClick={SideBarHandler} smooth={true} to="projects">
          Projects
        </NavLinkS>
        <NavLinkS onClick={SideBarHandler} smooth={true} to="contact">
          Contact
        </NavLinkS>
      </NavLinksContainer>
    </SideBarContainer>
  );
};

export default SideBar;
