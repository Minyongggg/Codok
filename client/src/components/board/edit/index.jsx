import React, { useEffect, useState } from "react";
import { useHistory ,useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilState , useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";
import * as S from "../style";

function Edit() {
    const history = useHistory();
    const location = useLocation();
    const profile = useRecoilValue(profileState);
    const {courseId, postPk} = useParams();
    const [post, setPost] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const goBack = () => {
        history.goBack();
    };
    
    const edit = async (writeInfo) => {
        axios({
          method: "put",
          url: `http://localhost:8000/api/posts/${postPk}`,
          data: writeInfo,
          withCredentials: true,
        })
        .then((res) => history.push({
            pathname:`/board/${courseId}/${postPk}}`
        }));
    };

    const onChange = (e) => {
        switch (e.target.id) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'content':
                setContent(e.target.value);
                break;
            default:
                break;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const writeInfo = { 
            title, 
            content,
         };
        return edit(writeInfo);
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

    useEffect(async () => {
        axios({
            method: "get",
            url: `http://localhost:8000/api/posts/${postPk}`,
            withCredentials: true
        })
        .then((res) => {
            setPost(res.data.data);
            setTitle(res.data.data.title);
            setContent(res.data.data.content);
        })
    }, [])

    if(!post)
        return <div>로딩중...</div>

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
                <form onSubmit={onSubmit} onChange={onChange}>
                    <S.InputWrapper>
                        <S.InputID type="text" required id="title" name="title" placeholder="제목을 적어주세요" value={title}/>
                    </S.InputWrapper>
                    <textarea required placeholder="수업을 듣는 친구들과 익명으로 소통하세요" required style={introduce} type="text" id="content" name="content" value={content}></textarea>
                    <S.YB />
                    <S.ButtonWrapper>
                        <S.Button type="submit">업로드</S.Button>
                    </S.ButtonWrapper>
                </form>
            </S.Container>
        </>
    )

}
export default Edit;