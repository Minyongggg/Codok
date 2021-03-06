import React, { useEffect, useState } from "react";
import { useHistory ,useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilState , useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";
import * as S from "../style";
import config from "../../../config/config";

function Edit() {
    const history = useHistory();
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
          url: config.BASE_URL + "/api/posts" + postPk,
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
            url: config.BASE_URL + "/api/posts/" + postPk,
            withCredentials: true
        })
        .then((res) => {
            setPost(res.data.data);
            setTitle(res.data.data.title);
            setContent(res.data.data.content);
        })
    }, [])

    if(!post)
        return <div>?????????...</div>

    return(
        <>
            <S.Container>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <S.Circle onClick={goBack}>
                        <i className="fas fa-arrow-left"></i>
                    </S.Circle>
                    <S.SubTitle>??? ??????</S.SubTitle>
                    <div style={{width: '44px', height: '44px'}}></div>
                </div>
                <form onSubmit={onSubmit} onChange={onChange}>
                    <S.InputWrapper>
                        <S.InputID type="text" required id="title" name="title" placeholder="????????? ???????????????" value={title}/>
                    </S.InputWrapper>
                    <textarea required placeholder="????????? ?????? ???????????? ???????????? ???????????????" required style={introduce} type="text" id="content" name="content" value={content}></textarea>
                    <S.YB />
                    <S.ButtonWrapper>
                        <S.Button type="submit">?????????</S.Button>
                    </S.ButtonWrapper>
                </form>
            </S.Container>
        </>
    )

}
export default Edit;