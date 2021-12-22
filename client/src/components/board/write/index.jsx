import React, { useEffect, useState } from "react";
import { useHistory ,useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilState , useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";
import * as S from "../style";
import config from "../../../config/config";

function Write() {
    const history = useHistory();
    const location = useLocation();
    const profile = useRecoilValue(profileState);
    const { courseId } = useParams();
    const [lecture, setLecture] = useState();
    const lecturePk = location.state.lecturePk;
    console.log(lecturePk);

    useEffect(async ()=> {
        axios({
            method: "get",
            url: `http://localhost:8000/api/lectures/${courseId}`,
            withCredentials: true
        })
        .then((res) => {
            setLecture(res.data.lecture)
        })
    }, [])

    const goBack = () => {
        history.goBack();
    };

    const write = async (writeInfo) => {
        axios({
          method: "post",
          url: config.BASE_URL + "/api/posts",
          data: writeInfo,
          withCredentials: true,
        })
        .then((res) => history.push({pathname:`/board/${courseId}`}));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const writeInfo = { 
            title: e.target.title.value, 
            content: e.target.content.value,
            courseId: courseId, 
            lecturePk: lecturePk,
            authorPk: profile.pk,
         };
        return write(writeInfo);
      };

    const introduce = {
        background: '#F8FAFD',
        border: '0.5px solid rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
        borderRadius: '5px',
        width: '100%',
        resize: 'None',
        height: '300px',
        fontFamily: "Spoqa Hans Sans Neo",
    }

    return(
        <>
            <S.Container>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <S.Circle onClick={goBack}>
                        <i className="fas fa-arrow-left"></i>
                    </S.Circle>
                    <S.SubTitle>글 작성</S.SubTitle>
                    <div style={{width: '44px', height: '44px'}}></div>
                </div>
                <form onSubmit={onSubmit}>
                    <S.InputWrapper><S.InputID type="text" required id="title" name="title" placeholder="제목을 적어주세요"/></S.InputWrapper>
                    <textarea required placeholder="수업을 듣는 친구들과 익명으로 소통하세요" required style={introduce} type="text" id="content" name="content"></textarea>
                    <S.YB/>
                    <S.ButtonWrapper><S.Button type="submit">업로드</S.Button></S.ButtonWrapper>
                </form>
            </S.Container>
        </>
    )
}
export default Write;