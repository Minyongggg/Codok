import axios from "axios";
import React, { useState } from "react";
import Modal from "../../common/Modal";
import * as S from "./style";

import { useInput } from "../../../hooks/useInput";

function BBLoginModal({ isOpen, setIsOpen }) {
  const profilePk = localStorage.getItem("CodokId");
  const [bbId, handleBbId, setBbId] = useInput("");
  const [bbPassword, handleBbPassword, setBbPassword] = useInput("");
  const [isLoading, setIsLoading] = useState(false);

  const crawlBB = async (profilePk, bbInfo) => {
    console.log("블랙보드 연동 request");
    await axios({
      method: "post",
      url: `http://localhost:8000/api/takes/${profilePk}`,
      data: bbInfo,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const onSubmitHandler = () => {
    if (!bbId || !bbPassword) {
      alert("아이디와 비밀번호를 입력해주세요.(클립보드 붙여넣기X)");
      return;
    }
    setIsLoading(true);
    crawlBB(profilePk, { id: bbId, password: bbPassword });
  };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeButton={false}>
      <S.Container>
        <S.Title>블랙보드로 시간표 가져오기</S.Title>

        {isLoading && <div>크롤링 중...</div>}

        {!isLoading && (
          <>
            <S.Text>
              블랙보드 로그인을 하시면 자동으로 시간표 등록 가능! 로그인 개인
              정보는 시간표를 불러온 즉시 파기됩니다.
            </S.Text>

            <S.Input
              placeholder="블랙보드 아이디"
              onChange={handleBbId}
              value={bbId}
            />
            <S.Input
              placeholder="블랙보드 비밀번호"
              onChange={handleBbPassword}
              value={bbPassword}
            />
            <S.Button onClick={onSubmitHandler}>확인</S.Button>

            <S.Button id="cancel" onClick={() => setIsOpen(false)}>
              취소하기
            </S.Button>
          </>
        )}
      </S.Container>
    </Modal>
  );
}

export default BBLoginModal;
