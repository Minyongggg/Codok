import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 18px;
`;

export const Text = styled.p`
  text-align: center;
  margin: 0 20px 20px;
  color: #a7b0c0;
  font-size: 14px;
  word-break: keep-all;
`;

export const Input = styled.input`
  border: 1px solid #e1e3e6;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  font-size: 16px;
  margin: 4px;

  &::placeholder {
    color: #c3c7ce;
  }
`;

export const Button = styled.button`
  background-color: black;
  padding: 14px;
  border-radius: 50px;
  color: white;
  width: 50%;
  margin-top: 20px;

  &#cancel {
    background-color: white;
    color: #a7b0c0;
    margin-top: 5px;
  }
`;
