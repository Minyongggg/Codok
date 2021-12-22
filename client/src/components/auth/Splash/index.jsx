import React, { useEffect } from "react";
import bgimg from "../../../assets/img/SplashBG.png"
import { Link, useHistory, useLocation } from "react-router-dom";
import * as S from "../style.js";

function Splash() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if(location.pathname !== "/splash"){
      history.push({
        pathname: "/splash"
      })
    }
  }, [])

    
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
  }
  return(
    <>
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
          <S.Button1><Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/login">로그인</Link></S.Button1>
          <br/>
          <S.Button2><Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/signup">회원가입</Link></S.Button2>
      </div>
    </>   
  )
}
export default Splash;
