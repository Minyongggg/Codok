import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as S from "../style.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";

function Profile(){
    const history = useHistory();
    const profile = useRecoilValue(profileState);
    console.log(profile)

    const updateProfile = async (profilePk, profileInfo) => {
        axios({
          method: "put",
          url: `http://localhost:8000/api/profiles/${profilePk}`,
          data: profileInfo,
          withCredentials: true,
        })
        .then((res) => history.push({pathname:'/home'}));
        // .catch((err) => console.log(err));
      };
    let result = '0';
    function getCheckboxValue(event)  {
 
        if(event.target.checked)  {
          result = event.target.value;
        }else {
          result = '0';
        }
        console.log(result);
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const profileInfo = {
            major: e.target.major.value,
            studentid: e.target.studentid.value, 
            nickname: e.target.nickname.value,
            gender: e.target.gender.value,
            introduce: e.target.introduce.value,
            mateWant: result,
        };
        console.log("나 여기~~~~~~~~~~~" + profile)
        return updateProfile(profile.pk, profileInfo);
      };

    const goBack = () => {
        history.goBack();
      };
    const introduce = {
        background: '#F8FAFD',
        border: '0.5px solid rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
        borderRadius: '5px',
        width: '88%',
        resize: 'None',
        height: '105px',
        fontFamily: "Spoqa Hans Sans Neo",
        // marginBottom: '100px',
    }
    return (
        <>
        <S.Container>
        <S.Title>프로필 만들기</S.Title>
        <form onSubmit={onSubmit}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
        }}>     
                <S.SubTitle>
                    기본 정보
                </S.SubTitle>
                <S.Input required id='nickname'name="nickname" placeholder="사용하실 이름을 적어주세요"></S.Input>
                <S.Input required id='major' name="major" placeholder="학과를 적어주세요"></S.Input>
                <S.Input required id='studentid' name="studentid" placeholder="학번을 적어주세요. ex)19"></S.Input>
                <S.SubTitle>
                    성별을 선택해주세요
                </S.SubTitle>
                <S.Select required id='gender'name="gender">
                    <option value="Male">남자</option>
                    <option value="Female">여자</option>
                </S.Select>
                <S.SubTitle>
                    간단한 자기소개
                </S.SubTitle>
                <textarea placeholder="ex. 스터디 메이트 구해요~~~ 혼자 수업들으려고 하니까 너무 힘든거 같아요" required style={introduce} type="text" id="introduce"name="introduce"></textarea>
                <div style={{ display: 'flex',alignItems: 'center', margin: '30px 0px 85px 0px'}}>      
                    <input style={{width:'24px',height:'24px',}} id='mateWant' name="mateWant"  value ="1" onChange={getCheckboxValue} type="checkbox"></input>
                    <span style={{fontFamily:"Spoqa Hans Sans Neo",
                    fontSize: '1.125rem',
                    color:'#5A6474',
                }}>🤚독강메이트 찾고 싶어요</span>
                </div>
                
                    <S.Button type="submit">확인</S.Button>
                
            </div>
            <S.YB></S.YB>
        </form>
        </S.Container>

        </>
    );
}
export default Profile;