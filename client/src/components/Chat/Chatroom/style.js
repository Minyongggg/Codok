import styled from "styled-components";

export const InputWrapper = styled.div`
  position: fixed;
  bottom: 95px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  width: 80%;
  box-shadow: 0px 2px 28px rgba(75, 88, 208, 0.1);
  border-radius: 36px;
  padding: 10px;
  z-index: 1000;
  background-color: white;
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
  padding-bottom: 180px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100vh - 80px);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const WhiteSpace = styled.div`
  height: 170px;
`;

export const Receive = styled.div`
  width: fit-content;
  padding: 10px;
  background-color: #f8fafd;
  border-radius: 24px 24px 24px 0px;
  max-width: 90%;
`;

export const Send = styled.div`
  width: fit-content;
  padding: 10px 12px;
  background-color: #18a0fb;
  max-width: 90%;
  border-radius: 24px 0px 24px 24px;
  color: white;
`;

export const SendWrapper = styled.div`
  margin-left: auto;

  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

export const ReceiverWrapper = styled.div`
  margin-right: auto;

  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

export const CreatedAt = styled.span`
  color: #a7b0c0;
  font-size: 12px;
`;
