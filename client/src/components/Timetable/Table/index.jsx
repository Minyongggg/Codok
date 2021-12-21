import React, { useEffect, useState } from "react";
import * as S from "./style";

function Table({ timeLecture, handleModalData }) {
  const [days, setDays] = useState(["월", "화", "수", "목", "금"]);
  const [times, setTimes] = useState(["1", "2", "3", "4", "5", "6", "7"]);
  const [tableLectureList, setTableLectureList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 색깔 할당해주려고
  const [pkList, setPkList] = useState([]);

  useEffect(() => {
    console.log(timeLecture);
    dayTimeFormatter(timeLecture);
  }, []);

  const dayTimeFormatter = (timeLecture) => {
    timeLecture.map((id) => {
      const dayOfWeekList = id.dayTime.split("//");
      const dayTimeObject = {
        월: "",
        화: "",
        수: "",
        목: "",
        금: "",
      };
      dayOfWeekList.map((i) => {
        const timeList = i.split(":")[1].split(".");
        if (Number(timeList[1]) - Number(timeList[0]) >= 1) {
          const List = [];
          let j = 0;
          for (j = 0; j < Number(timeList[1]) - Number(timeList[0]) + 1; j++) {
            List.push(String(Number(timeList[0]) + j));
          }
          dayTimeObject[i.split(":")[0]] = List;
        } else dayTimeObject[i.split(":")[0]] = timeList;
      });

      id["dayTime"] = dayTimeObject;
      setTableLectureList((prev) => [...prev, id]);
      setPkList((prev) => [...prev, id.pk]);
      console.log(id["dayTime"].금);
    });
  };

  useEffect(() => {
    if (tableLectureList.length > 0) {
      setIsLoading(false);
    }
  }, [tableLectureList]);

  // if (isLoading) {
  //   return <div>로딩중</div>;
  // }

  return (
    <>
      <S.Container>
        {/* 몇 교시까지 수업이 있는지 */}
        <S.Row>
          <S.Time></S.Time>
          {times.map((time) => {
            return <S.Time>{time}</S.Time>;
          })}
        </S.Row>

        {/* 요일 별로 돌면서 시간표 채우기 */}
        {days.map((day) => {
          return (
            <>
              <S.Row>
                <S.DayOfWeek>{day}</S.DayOfWeek>
                {tableLectureList.map((id) => {
                  if (id.dayTime[day] !== "") {
                    return (
                      <S.Col>
                        {times.map((time) => {
                          if (id.dayTime[day].find((e) => e == time)) {
                            return (
                              <S.FilledCol
                                id={pkList.indexOf(id.pk)}
                                onClick={() => handleModalData(id)}
                              >
                                <p>{id.name}</p>
                                <p>{id.professor}</p>
                              </S.FilledCol>
                            );
                          }

                          return <div></div>;
                        })}
                      </S.Col>
                    );
                  }
                })}
              </S.Row>
            </>
          );
        })}
      </S.Container>
    </>
  );
}

export default Table;
