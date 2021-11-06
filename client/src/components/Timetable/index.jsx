import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory, Link } from "react-router-dom";
import Table from "./Table";
import * as S from "./style";

function Timetable() {
  const [nonTime, setNonTime] = useState([]);
  const getLectureData = async (e) => {
    await axios({
      method: "get",
      url: "http://localhost:8000/lectures/courseId",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getLectureData();
  }, []);
  return (
    <>
      <S.Container>
        <S.Title>코독한 시간표</S.Title>
        <Table />
        {/* 시간이 배정되어있지 않은 수업 ex)정보적 사고 */}
        {nonTime.length == 0 && <S.Nontable>있음?</S.Nontable>}
      </S.Container>
    </>
  );
}

export default Timetable;
