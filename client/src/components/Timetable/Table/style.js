import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  width: 14vw;
  max-width: 52px;
  text-align: center;
  &:first-child {
    border-bottom: 1px solid #a7b0c0;
    width: 10vw;
    max-width: 42px;
    color: #a7b0c0;
  }
`;

export const Time = styled.div`
  height: 14vw;
  max-height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    border-bottom: 1px solid #a7b0c0;
  }
`;

export const Col = styled.div`
  > div {
    height: 14vw;
    max-height: 52px;
  }
  &:last-child {
    border-bottom: 1px solid #a7b0c0;
  }
`;

export const colorList = [
  "#73DBE8",
  "#7BA7FE",
  "#BCA4FF",
  "#FF94BE",
  "#70C1F9",
  "#DF91FF",
];

export const FilledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: ${(props) => colorList[props.id]};
    margin: 0;
    font-size: 8px;
  }
`;

export const DayOfWeek = styled.div`
  border-bottom: 1px solid #a7b0c0;
  height: 14vw;
  max-height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a7b0c0;
`;
