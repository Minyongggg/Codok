import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./pages/Router";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <>
      <GlobalStyle>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </GlobalStyle>
    </>
  );
}

export default App;
