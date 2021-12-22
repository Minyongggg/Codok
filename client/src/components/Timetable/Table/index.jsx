import React, { useEffect, useState } from "react";
import * as S from "./style";

function Table({ timeLecture, handleModalData }) {
  const days = ["월", "화", "수", "목", "금"];
  const [times, setTimes] = useState(["1", "2", "3", "4", "5", "6", "7", "8"]);
  const [tableLectureList, setTableLectureList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 색깔 할당해주려고
  const [pkList, setPkList] = useState([]);

  useEffect(() => {
    console.log(timeLecture);
    if (timeLecture.length > 0) dayTimeFormatter(timeLecture);
  }, [timeLecture]);

  const dayTimeFormatter = (timeLecture) => {
    timeLecture.map((id) => {
      const dayOfWeekList = id.dayTime.includes("//")
        ? id.dayTime.split("//")
        : [id.dayTime];

      const dayTimeObject = {
        월: "",
        화: "",
        수: "",
        목: "",
        금: "",
      };

      if (dayOfWeekList) {
        dayOfWeekList.map((i) => {
          const timeList = i.split(":")[1].split(".");
          if (Number(timeList[1]) - Number(timeList[0]) >= 1) {
            const List = [];
            let j = 0;
            for (
              j = 0;
              j < Number(timeList[1]) - Number(timeList[0]) + 1;
              j++
            ) {
              List.push(String(Number(timeList[0]) + j));
            }
            dayTimeObject[i.split(":")[0]] = List;
          } else dayTimeObject[i.split(":")[0]] = timeList;
        });

        id["dayTime"] = dayTimeObject;
        setTableLectureList((prev) => [...prev, id]);
        setPkList((prev) => [...prev, id.pk]);
      }
    });
  };

  useEffect(() => {
    if (tableLectureList.length > 0) {
      setIsLoading(false);
    }
  }, [tableLectureList]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <S.Container>
        {/* 몇 교시까지 수업이 있는지 */}
        <S.Row>
          <S.Time></S.Time>
          {times.map((time, i) => {
            return <S.Time key={i}>{time}</S.Time>;
          })}
        </S.Row>

        {/* 요일 별로 돌면서 시간표 채우기 */}
        {days.map((day, i) => {
          return (
            <>
              <S.Row key={i}>
                <S.DayOfWeek key={i}>{day}</S.DayOfWeek>
                {times.map((time, i) => {
                  return (
                    <S.Col id={day} key={i}>
                      {tableLectureList.find((v) => v.dayTime[day] == time) ? (
                        <S.FilledCol key={i}
                          id={pkList.indexOf(
                            tableLectureList.find((v) => v.dayTime[day] == time)
                              .pk
                          )}
                          onClick={() =>
                            handleModalData(
                              tableLectureList.find(
                                (v) => v.dayTime[day] == time
                              )
                            )
                          }
                        >
                          <p>
                            {
                              tableLectureList.find(
                                (v) => v.dayTime[day] == time
                              ).name
                            }
                          </p>
                          <p>
                            {
                              tableLectureList.find(
                                (v) => v.dayTime[day] == time
                              ).professor
                            }
                          </p>
                        </S.FilledCol>
                      ) : (
                        <div></div>
                      )}
                    </S.Col>
                  );
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
