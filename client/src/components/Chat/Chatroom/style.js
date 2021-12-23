import styled from "styled-components";

export const InputWrapper = styled.div`
  position: fixed;
  bottom: 95px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  width: 80%;
  box-shadow: 0px 2px 28px rgba(75, 88, 208, 0.1);
  border-radius: 36px;
  padding: 10px;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 80%;
      font-size: 16px;
      border: none;
      padding: 10px;
      margin-right: 10px;
    }
    button {
      border: none;
      background-color: white;
      width: fit-content;
      height: fit-content;
    }
  }
`;

export const Container = styled.div`
  padding: 24px;
  padding-bottom: 170px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Receive = styled.div`
  margin-right: auto;
  width: fit-content;
  padding: 10px;
  background-color: #f8fafd;
  border-radius: 24px 24px 24px 0px;
`;

export const Send = styled.div`
  margin-left: auto;
  width: fit-content;
  padding: 10px 12px;
  background-color: #18a0fb;

  border-radius: 24px 0px 24px 24px;
`;

export const CreatedAt = styled.span``;
