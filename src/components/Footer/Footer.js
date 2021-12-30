import React from "react";
import { FooterLink, FooterLinksWrap, FooterWrap } from "./FooterStyled";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterLinksWrap>
        <FooterLink href="https://www.instagram.com/danielalkalay4/">
          <BsInstagram />
        </FooterLink>

        <FooterLink href="https://www.facebook.com/daniel.d.alkalay">
          <BsFacebook />
        </FooterLink>

        <FooterLink href="https://github.com/danielalkalay">
          <BsGithub />
        </FooterLink>
      </FooterLinksWrap>
    </FooterWrap>
  );
};

export default Footer;
