import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  padding-bottom: 96px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const PlusButton = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #f9f9f9;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 20px rgba(174, 174, 192, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    color:white;
    background: #18A0FB;
  }
  > svg {
    width: 24px;
    height: 24px;
  }
`;
export const NontableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Nontable = styled.div`
  width: 90%;
  margin-top: 12px;
  padding: 16px;
  font-size: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 28px rgba(75, 88, 208, 0.15);
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
`;
