import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  > h1 {
    text-align: center;
    color: #8c94a4;
    margin: 10px;
  }
  > p {
    text-align: center;
    color: #a7b0c0;
    font-size: 14px;
    line-height: 22px;
    margin: 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 52px;
    height: 52px;
    margin: 10px;
  }
`;
