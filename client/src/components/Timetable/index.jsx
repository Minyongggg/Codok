import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
// import { ReactComponent as PlusSVG } from "../../assets/icon/plus.svg";
import * as S from "./style";
import BBLoginModal from "./BBLoginModal";
import SlideUpModal from "./SlideUpModal";
import BeforeRegistration from "./BeforeRegistration";
import { useRecoilState } from "recoil";
import { profileState } from "../../atoms/atoms";
import { useHistory } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

function Timetable() {
  const profilePk = localStorage.getItem("CodokId");
  const [profile, setProfile] = useRecoilState(profileState);
  const history = useHistory();
  const [isModalOn, setIsModalOn] = useState(false);
  const [timeLecture, setTimeLecture] = useState(null);
  const [nonTimeLecture, setNonTimeLecture] = useState([]);
  const [lectureDataList, setLectureDataList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSlideUpModalOn, setIsSlideUpModalOn] = useState(false);
  const [clickedLecture, setClickedLecture] = useState({});
  const { user, setUser } = useUser();


  const getLectureDataByProfilePk = async (profilePk) => {
    await axios({
      method: "get",
      url: `http://localhost:8000/api/lectures/profiles/${profilePk}`,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data.data);
        setLectureDataList(() => res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: "http://localhost:8000/api/auth/logout",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("CodokId");
        setProfile(() => "none");
        setUser(() => "none");
        history.push({pathname: "/"});
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (profilePk && !isModalOn) getLectureDataByProfilePk(profilePk);
  }, [isModalOn]);

  useEffect(() => {
    if (lectureDataList !== null) {
      setIsLoading(false);
      setNonTimeLecture(() => []);
      setTimeLecture(() => []);

      // 1학년 세미나와 같은 시간이 없는 수업 리스트 추가
      lectureDataList.map((id) => {
        if (id.dayTime === "") {
          setNonTimeLecture((prev) => [...prev, id]);
        } else {
          setTimeLecture((prev) => [...prev, id]);
        }
      });
    }
  }, [lectureDataList]);

  const handleModalData = (id) => {
    setIsSlideUpModalOn(true);
    setClickedLecture(() => id);
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <BBLoginModal isOpen={isModalOn} setIsOpen={setIsModalOn} />
      <SlideUpModal
        isOpen={isSlideUpModalOn}
        setIsOpen={setIsSlideUpModalOn}
        clickedLecture={clickedLecture}
      />
      <S.Container>
        <S.Header>
          <S.Title>코독한 시간표</S.Title>
          <button onClick={logout} type="button">
            Log out
          </button>
          <S.PlusButton onClick={() => setIsModalOn(true)}>
            <i className="fas fa-plus"></i>
          </S.PlusButton>
        </S.Header>

        {/* 시간표 등록 전 */}
        {lectureDataList.length === 0 && <BeforeRegistration />}

        {/* 시간표 등록 후 */}
        {lectureDataList.length > 0 && nonTimeLecture.length === 0 && (
          <Table timeLecture={timeLecture} handleModalData={handleModalData} />
        )}

        {/* 시간이 배정되어있지 않은 수업 ex)정보적 사고 */}
        {lectureDataList.length > 0 && nonTimeLecture.length > 0 && (
          <>
            <Table
              timeLecture={timeLecture}
              handleModalData={handleModalData}
            />
            {nonTimeLecture.map((id) => {
              return (
                <S.NontableWrapper onClick={() => handleModalData(id)}>
                  <S.Nontable>
                    <div>{id.name}</div>
                    <div>{id.professor}</div>
                  </S.Nontable>
                </S.NontableWrapper>
              );
            })}
          </>
        )}
      </S.Container>
    </>
  );
}

export default Timetable;
