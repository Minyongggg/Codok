import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./pages/Router";

function App() {
  return (
    <>
      <GlobalStyle>
        <Router />
      </GlobalStyle>
    </>
  );
}

export default App;
