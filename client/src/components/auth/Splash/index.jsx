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
          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/login"><S.Button1 style={{width: 270px}}>로그인</S.Button1></Link>
          <br/>
          <Link  style={{color: 'inherit', textDecoration: 'none' }} to="auth/signup"><S.Button2 style={{width: 270px}}>회원가입</S.Button2></Link>
      </div>
    </>   
  )
}
export default Splash;
