import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
`;

export const ProfileImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  svg {
    width: 18px;
    height: 18px;
    margin-left: 4px;
  }
  > div {
    display: flex;
  }
`;

export const Nickname = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const Introduce = styled.div`
  color: #a7b0c0;
  font-size: 14px;
`;
