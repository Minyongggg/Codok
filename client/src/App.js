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
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </GlobalStyle>
    </>
  );
}

export default App;
