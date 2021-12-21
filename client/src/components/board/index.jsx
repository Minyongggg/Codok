import React from "react";
import { useHistory ,useLocation } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
// import '../../css/auth/signup.scss'
import { useRecoilState } from "recoil";
import { profileState } from "../../atoms/atoms.js";
import * as S from "./style";



function Board() {
    const location = useLocation();
    const clickedLecture = location.state.clickedLecture;
    const history = useHistory();
    console.log(clickedLecture)
    // const [profile, setProfile] = useRecoilState(profileState);


    const titleWrapper = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '28px',
    }
    return (<>
        <div style={titleWrapper}>
            <S.Title>{clickedLecture.name}</S.Title>
            <div style={{fontSize: "0.875rem",color: '#A7B0C0', }}>{clickedLecture.professor}</div>
        </div>
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