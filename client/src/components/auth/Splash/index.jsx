import React from "react";
import bgimg from "../../../assets/img/SplashBG.png"
import { useLocation, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { UserId } from "../Login";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import * as S from "../style.js";

function Splash() {
    const imgset = { 
        width :"100%",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
        display:"flex",
        backgroundImage: `url(${bgimg})`,
        height:"100vh",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        // position:"relative",
        // zIndex:"0"
        // backgroundImage : "url('../../../assets/img/SplashBG.png') "
    }
    return(
     <>
        {/* <div style={{opacity:"0.9",positon:"absolute", backgroundColor:"black"}}> */}
        {/* <img style={imgset} src = {bgimg} ></img> */}
        
            <div style={imgset}>
                <div style={{fontSize:"1.5rem",
                fontWeight:"400",
                width:"100%",
                textAlign:"center",
                color:"white"}}>고독한 독강은 멈춰!</div>
                <div style={{fontSize:"4rem",
                fontWeight:"700",
                width:"100%",
                textAlign:"center",
                color:"white"}}>Codok</div>
                <br/>
                <S.Button1><Link  style={{color: 'inherit', textDecoration: 'none' }}to="auth/login">로그인</Link></S.Button1>
                <br/>
                <S.Button2><Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/signup">회원가입</Link></S.Button2>
            </div>
        {/* </div> */}
     </>   
    )
}
export default Splash;
