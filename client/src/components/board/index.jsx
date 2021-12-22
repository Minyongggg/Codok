import React, {useEffect, useState} from "react";
import { useHistory ,useLocation, useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./style";
import config from "../../config/config";


function Board() {
    const [posts, setPosts] = useState([]);
    const [lecture, setLecture] = useState();
    const history = useHistory();
    const { courseId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = async () =>  { await axios.get(config.BASE_URL + "/api/posts/lectures/" + {courseId})
      .then((res)=> {
           console.log(res);
           console.log(res.data);
           setPosts(res.data.data);
        })
    }

    const getLecture = async () => {
        await axios({
            method: "get",
            url: config.BASE_URL + "/api/lectures/" + courseId,
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data);
            setLecture(res.data.data);
        })
    }

    useEffect(async() => {
        await getLecture();
        await getPosts();
        setIsLoading(false);
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
    
    if(isLoading){
        return <div>로딩중...</div>
    }

    return (
    <>
        <div style={titleWrapper}>
            <S.Title>{lecture.name}</S.Title>
            <div style={{fontSize: "0.875rem",color: '#A7B0C0', }}>{lecture.professor}</div>
        </div>
            {posts && posts.map(data => {
                return (
                <div style={{width:"88%" ,margin: "0 auto",display:"flex",justifyContent:"center",flexDirection: "column"}}>
                <S.PostWrapper onClick={() => history.push({
                    pathname: `/board/${courseId}/${data.pk}`,
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
        <S.YB/>
        <S.FixedAlign>
        <S.PlusButton onClick={() => history.push({
            pathname: `/board/${courseId}/write`,
            state: {
                lecturePk:lecture.pk
            }
        })}>
            <i className="fas fa-plus"></i>
          </S.PlusButton>
        </S.FixedAlign>
    </>
    );
}
    export default Board;