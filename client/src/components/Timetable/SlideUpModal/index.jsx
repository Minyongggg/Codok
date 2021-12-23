import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { useBodyScrollLock } from "../../../hooks/useBodyScrollLock";
import { useModalHandler } from "../../../hooks/useModalHandler";
import * as S from "./style";

function SlideUpModal({ isOpen, setIsOpen, clickedLecture }) {
  const history = useHistory();

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  const closeModal = useModalHandler(isOpen, setIsOpen)[1];
  useBodyScrollLock(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <S.Container isOpen={isOpen} onClick={closeModal}>
      <div onClick={stopPropagation}>
        <S.CloseModalButton onClick={closeModal}>x</S.CloseModalButton>
        <S.Wrapper>
          <h1>{clickedLecture.name}</h1>
          <S.Info>
            <p>{clickedLecture.professor}</p>
            <p>{clickedLecture.courseId}</p>
          </S.Info>

          <S.Button onClick={() => history.push({
            pathname: '/friend',
            state: {
              courseId: clickedLecture.courseId,
              name: clickedLecture.name
            }
          })}>
            강의 코독친구 탐색
          </S.Button>
          <S.Button onClick={() => history.push({
            pathname: `/board/${clickedLecture.courseId}`,
          })}>
            수업 익명 커뮤니티
          </S.Button>
        </S.Wrapper>
      </div>
    </S.Container>
  );
}

export default SlideUpModal;
