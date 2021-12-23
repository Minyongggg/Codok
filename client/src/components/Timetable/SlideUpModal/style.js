import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(65%);
    }
    15% {
      opacity: 0;
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  `;

export const Container = styled.div`
  position: fixed;
  text-align: center;
  margin: auto;
  max-width: 420px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);

  & > div {
    display: inline-block;
    background: white;
    width: 100%;
    border-radius: 12px 12px 0 0;
    user-select: none;
    z-index: 1012;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 420px;
    padding: 24px;
    animation-duration: 0.3s;
    animation-name: ${({ isOpen }) => isOpen && slideUp};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h1 {
    margin: 0;
    margin-top: 16px;
  }
  > p {
    margin: 0;
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 3%;
  top: 3%;
  background: transparent;
  border: none;
  color: gray;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  > svg {
    width: 22px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  > p {
    margin-right: 10px;
    color: #a7b0c0;
    font-size: 13px;
  }
`;

export const Button = styled.div`
  padding: 14px 0;
  cursor: pointer;
`;
