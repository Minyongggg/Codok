import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;
  cursor:pointer;

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
  width:100%;
  svg {
    width: 18px;
    height: 18px;
    margin-left: 4px;
  }
  // > div {
  //   display: flex;
  // }
  // > div:last-child {
  //   color: #a7b0c0;
  //   font-size: 14px;
  // }
`;

export const Nickname = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
  max-width: 100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-family:'Spoqa Han Sans Neo', 'sans-serif';
`;

export const LastChat = styled.div`
  color: #a7b0c0;
  font-size: 0.875rem;
  font-family:'Spoqa Han Sans Neo', 'sans-serif';
  max-width: calc(100% - 60px);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`;
