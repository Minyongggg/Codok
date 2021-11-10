import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    line-height: 1.5;
    max-width: 420px;
    min-height: 100vh;
    margin: auto;

  }
`;

export default GlobalStyle;
