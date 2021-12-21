import React from "react";
import { useHistory ,useLocation } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
// import '../../css/auth/signup.scss'
import { useRecoilState } from "recoil";
import { profileState } from "../../atoms/atoms.js";
import * as S from "./style";



function Board(props) {
    const location = useLocation();
    const clickedLecture = location.state.clickedLecture;
    const history = useHistory();
    console.log(clickedLecture)
    const [profile, setProfile] = useRecoilState(profileState);


    const titleWrapper = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '29px',
    }
    return (<>
        <div style={titleWrapper}>
            <S.Title>{clickedLecture.name}</S.Title>
            <div>{clickedLecture.professor}</div>
        </div>
        </>
    );
}
    export default Board;