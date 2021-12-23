import styled from "styled-components";

export const HeaderBoard = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  width: 100%;
  max-width: 375px;
  height: 52px;
  padding: 12px 16px;
  background-color: white;
  /* box-shadow: 0 3px 3px 0 rgba(203, 203, 203, 0.16); */
  z-index: 20;
  font-size: 16px;
  font-weight: bold;
  height: ${(props) => props.type === "chat" && "80px"};
`;

export const HeaderWhiteSpace = styled.div`
  width: 100%;
  height: 52px;
  height: ${(props) => props.type === "chat" && "80px"};
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;

  > p {
    margin: 0;
    margin-top: 4px;
    font-size: 18px;
  }
`;

export const IconBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 28px;
  height: 28px;
  margin-right: 20px;

  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 10px;
`;
