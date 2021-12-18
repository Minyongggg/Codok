import React from "react";
import MaleImg from "../../../assets/img/male.png";
import FemaleImg from "../../../assets/img/female.png";
import * as S from "./style";

function BeforeRegistration() {
  return (
    <S.Container>
      <S.ImgWrapper>
        <img src={MaleImg} alt="남" />
        <img src={FemaleImg} alt="여" />
      </S.ImgWrapper>
      <h1>내 시간표 등록하기</h1>
      <p>
        우측 상단 플러스 버튼을 눌러서 <br /> 자동으로 나의 시간표를 등록하고
        <br />
        독강메이트를 찾아보세요 :)
      </p>
    </S.Container>
  );
}

export default BeforeRegistration;
