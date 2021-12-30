import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
  &::-webkit-scrollbar{
    display: none;
  }
}
  body {
    margin: 0;
    padding: 0;
      }
`;

export default GlobalStyle;
