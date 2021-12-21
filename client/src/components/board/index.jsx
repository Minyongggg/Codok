import React, {useEffect, useState} from "react";
import { useHistory ,useLocation } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
// import '../../css/auth/signup.scss'
import { useRecoilState } from "recoil";
import { profileState } from "../../atoms/atoms.js";
import * as S from "./style";



function Board() {
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const clickedLecture = location.state.clickedLecture;
    const history = useHistory();
    console.log(clickedLecture)
    const Posts = async () =>  {axios.get(`http://localhost:8000/api/posts/lectures/${clickedLecture.courseId}`)
      .then( (res)=> {
        
           console.log(res);
           console.log(res.data.data);
           setPosts(res.data.data);
      })}
      useEffect(() => {
        Posts();
      }, []);
    const titleWrapper = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '28px',
    }
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
      
    return (
    <>
        <div style={titleWrapper}>
            <S.Title>{clickedLecture.name}</S.Title>
            <div style={{fontSize: "0.875rem",color: '#A7B0C0', }}>{clickedLecture.professor}</div>
        </div>
            {/* {posts && <textarea row={7} value={JSON.stringify(posts,null,2)}/>} */}
            {posts && posts.map(data => {
                return (
                <div style={{width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"center",flexDirection: "column"}}>
                <S.PostWrapper onClick={() => history.push({
                    pathname: "/board/detail",
                    state: {data: data}
                })}>
                    <S.PostTitle>{data.title}</S.PostTitle>
                    <S.PostContent>{data.content}</S.PostContent>
                    <div style={{width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"space-between",}}>
                        <S.PostTime>{timeForToday(data.createdAt)}</S.PostTime>
                    </div>
                </S.PostWrapper>
                </div>
                );
            })}
            {/* {posts && posts.data.map(data => {
                return (
                <div>
                    <p>{data.title}</p>
                    <p>{data.content}</p>
                </div>
                );
            })} */}
        <S.YB/>
        <S.FixedAlign>
        <S.PlusButton onClick={() => history.push({
            pathname: "/board/write",
            state: {clickedLecture: clickedLecture}
        })}>
            <i className="fas fa-plus"></i>
          </S.PlusButton>
        </S.FixedAlign>
    </>
    );
}
    export default Board;