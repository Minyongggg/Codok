import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as BackSVG } from "../../../assets/icon/header-back.svg";
import * as S from "./style";

function Header({ type = "main", content = "" }) {
  const history = useHistory();
  switch (type) {
    case "main":
      return (
        <>
          <S.HeaderBoard>
            <S.IconsWrapper>
              <S.IconBox onClick={() => history.goBack()}>
                <BackSVG />
              </S.IconBox>
              {content}
              <S.IconBox />
            </S.IconsWrapper>
          </S.HeaderBoard>
          <S.HeaderWhiteSpace />
        </>
      );
    default:
      return <></>;
  }
}
export default Header;
