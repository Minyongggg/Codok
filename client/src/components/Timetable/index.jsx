import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory, Link } from "react-router-dom";
import Table from "./Table";
import { ReactComponent as PlusSVG } from "../../assets/icon/plus.svg";
import * as S from "./style";

function Timetable() {
  const [nonTime, setNonTime] = useState([]);
  const [courseIdList, setCourseIdList] = useState([
    "COSE222-01",
    "COSE341-01",
    "GEKS006-02",
  ]);
  const [lectureDataList, setLectureDataList] = useState(null);
  const getLectureDataByCourseIdList = async (courseIdList) => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/lectures/courseIdList",
      data: { courseIdList: courseIdList },
      withCredentials: true,
    })
      .then((res) => {
        setLectureDataList(() => res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLectureDataByCourseIdList(courseIdList);
  }, []);

  return (
    <>
      <S.Container>
        <S.Header>
          <S.Title>코독한 시간표</S.Title>
          <S.PlusButton>
            <PlusSVG />
          </S.PlusButton>
        </S.Header>

        <Table />

        {/* 시간이 배정되어있지 않은 수업 ex)정보적 사고 */}
        {nonTime.length > 0 && (
          <S.NontableWrapper>
            <S.Nontable>
              <div>1학년 세미나</div>
              <div>양효령</div>
            </S.Nontable>
          </S.NontableWrapper>
        )}
      </S.Container>
    </>
  );
}

export default Timetable;
