import React, {useEffect, useState}from "react";
import { useHistory ,useLocation } from "react-router-dom";
import axios from "axios";
import { useRecoilState , useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";
import * as S from "../style";
import MenuModal from "./modal/index";
function Write() {
    const history = useHistory();
    const location = useLocation();
    const data = location.state.data;
    const [isMenuModalOn, setIsMenuModalOn] = useState(false);
    const profile = useRecoilValue(profileState);
    const clickedLecture = location.state.clickedLecture;
    const handleModalData = () => {
        setIsMenuModalOn(true);
      };
    console.log(clickedLecture);
      const goBack = () => {
          history.goBack();
      };
      function timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
 }
    if (data.authorPk == profile.pk){
        return(
            <>
                 <MenuModal
        isOpen={isMenuModalOn}
        setIsOpen={setIsMenuModalOn}
        postPk={data.pk}
      />
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <S.Circle onClick={goBack} style={{marginTop:"0"}}>
                    <i className="fas fa-arrow-left"></i>
                </S.Circle>
                <div onClick={() => handleModalData()} style={{ width: '44px',cursor:'pointer', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-ellipsis-v"></i></div>
            </div>
            <div style={{width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"center",flexDirection: "column", borderBottom: "1px solid #d9d9d9"}}>
                <S.PostTitle>{data.title}</S.PostTitle>
                <S.PostContent>{data.content}</S.PostContent>
                <div style={{width:"100%",height:"36px"}}></div>
                <S.PostTime>{timeForToday(data.createdAt)}</S.PostTime>
            </div>
            </>
        )
    } else{

    return (
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <S.Circle onClick={goBack} style={{marginTop:"0"}}>
                <i className="fas fa-arrow-left"></i>
            </S.Circle>
            <div style={{visibility:'hidden', width: '44px',cursor:'pointer', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-ellipsis-v"></i></div>
        </div>
        <div style={{width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"center",flexDirection: "column", borderBottom: "1px solid #d9d9d9"}}>
            <S.PostTitle>{data.title}</S.PostTitle>
            <S.PostContent>{data.content}</S.PostContent>
            <div style={{width:"100%",height:"36px"}}></div>
            <S.PostTime>{timeForToday(data.createdAt)}</S.PostTime>
        </div>
        </>
    )}}
export default Write;