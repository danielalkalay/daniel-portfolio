import styled from "styled-components";

export const FooterWrap = styled.div`
  display: flex;
  position: relative;
  height: 60px;
  background-color: navy;
  font-size: 2rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  z-index: 999;
  bottom: -60px;
  top: 100px;
`;

export const FooterLinksWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const FooterLink = styled.a`
  padding: 0 20px;
  height: 100%;
  align-items: center;
  color: whitesmoke;
  background: navy;
  /* text-decoration: none; */

  & :hover {
    transition: ease;
    cursor: pointer;
    border-radius: 10px;
    color: orange;
  }
`;
