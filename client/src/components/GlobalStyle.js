import styled, { createGlobalStyle } from "styled-components";

const GlobalStyleWrapper = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    padding: 0;
    margin: 0;
  }

  body { 
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  position: relative;
  @media (min-width: 420px) {
    background-color: #e6e9ec;
  }
`;

const Body = styled.div`
  max-width: 420px;
  margin: 0 auto;
  background-color: white;
  @media (min-width: 420px) {
    min-height: 100vh;
  }
`;

function GlobalStyle({ children }) {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        <Body>{children}</Body>
      </Container>
    </>
  );
}

export default GlobalStyle;
