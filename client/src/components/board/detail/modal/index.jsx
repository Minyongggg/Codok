import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import { useBodyScrollLock } from "../../../../hooks/useBodyScrollLock";
import { useModalHandler } from "../../../../hooks/useModalHandler";
import * as S from "../../../Timetable/SlideUpModal/style";
import axios from "axios";

function MenuModal({isOpen, setIsOpen, postPk, courseId}) {
  const history = useHistory();
  const location = useLocation();

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const closeModal = useModalHandler(isOpen, setIsOpen)[1];

  useBodyScrollLock(isOpen);

  const DeletePost = async (e) => {
    e.preventDefault();
    await axios({
      method: "delete",
      url: `http://localhost:8000/api/posts/${postPk}`,
      withCredentials: true,
    })
      .then((res) => {
        history.push({pathname:`/board/${courseId}`})
      })
  }
  if (!isOpen) {
    return null;
  }

  return (
    <S.Container isOpen={isOpen} onClick={closeModal}>
      <div onClick={stopPropagation}>
        <S.CloseModalButton onClick={closeModal}>x</S.CloseModalButton>
        <S.Wrapper>
          <S.Info />
          <S.Button onClick={() => history.push({
            pathname: `/board/${courseId}/${postPk}/edit`,
          })}>
            수정하기
          </S.Button>
          <S.Button onClick={DeletePost}>
            삭제하기
          </S.Button>
        </S.Wrapper>
      </div>
    </S.Container>
  );
}

export default MenuModal;