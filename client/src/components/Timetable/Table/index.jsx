import React, { useState } from "react";
import * as S from "./style";

function Table() {
  const [days, setDays] = useState(["월", "화", "수", "목", "금"]);
  const [times, setTimes] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <>
      <S.Container>
        {/* 몇 교시까지 수업이 있는지 */}
        <S.Row>
          <div>.</div>
          {times.map((time) => {
            return <div className="col">{time}</div>;
          })}
        </S.Row>

        {/* 요일 별로 돌면서 시간표 채우기 */}
        {days.map((day) => {
          return (
            <>
              <S.Row>
                <div>{day}</div>
                <S.Col>
                  {times.map((time) => {
                    return <div></div>;
                  })}
                </S.Col>
              </S.Row>
            </>
          );
        })}
      </S.Container>
    </>
  );
}

export default Table;
