import styled from "styled-components";

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
  height: 14vw;
  max-height: 52px;
`;

export const DayOfWeek = styled.div`
  border-bottom: 1px solid #a7b0c0;
  height: 14vw;
  max-height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
