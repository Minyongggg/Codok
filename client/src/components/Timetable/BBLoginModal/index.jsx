import React from "react";
import Modal from "../../common/Modal";
import * as S from "./style";

function BBLoginModal({ isOpen, setIsOpen }) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeButton={false}>
      <S.Container>
        <S.Title>블랙보드로 시간표 가져오기</S.Title>
        <S.Text>
          블랙보드 로그인을 하시면 자동으로 시간표 등록 가능! 로그인 개인 정보는
          시간표를 불러온 즉시 파기됩니다.
        </S.Text>
        <S.Input placeholder="블랙보드 아이디" />
        <S.Input placeholder="블랙보드 비밀번호" />
        <S.Button onClick={() => setIsOpen(false)}>확인</S.Button>
        <S.Button onClick={() => setIsOpen(false)}>취소하기</S.Button>
      </S.Container>
    </Modal>
  );
}

export default BBLoginModal;
