import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../../../atoms/atoms";
import * as S from "../style";
import MenuModal from "./modal/index";
import { ReactComponent as SendSVG } from "../../../assets/icon/send-button.svg";
import config from "../../../config/config";

function Write() {
  const history = useHistory();
  const { courseId, postPk } = useParams();
  const [post, setPost] = useState();
  const [comment, setComment] = useState([]);
  const [isMenuModalOn, setIsMenuModalOn] = useState(false);

  const profile = useRecoilValue(profileState);

  const handleModalData = () => {
    setIsMenuModalOn(true);
  };

  const goBack = () => {
    history.goBack();
  };

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
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
  const getComment = async () => {
    await axios
      .get(config.BASE_URL + "/api/comments/posts/" + postPk)
      .then((res) => {
        setComment(() => res.data.data);
      });
  };
  const writeComment = async (commentInfo) => {
    axios({
      method: "post",
      url: config.BASE_URL + "/api/comments",
      data: commentInfo,
      withCredentials: true,
    })
      .then((res) => getComment())
  };

  const delComment = async (e) => {
    await axios({
      method: "delete",
      url: config.BASE_URL + "/api/comments/" + e.target.id,
      withCredentials: true
    })
    .then((res) => getComment())
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const commentInfo = {
      postPk: postPk,
      authorPk: profile.pk,
      content: e.target.commentContent.value,
    };
    return writeComment(commentInfo);
  };
  useEffect(async () => {
    await axios({
      method: "get",
      url: config.BASE_URL + "/api/posts/" + postPk,
      withCredentials: true,
    }).then((res) => {
      setPost(() => res.data.data);
    });
  }, []);

  useEffect(() => {
    getComment();
  }, []);

  if (!post) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <MenuModal
        isOpen={isMenuModalOn}
        setIsOpen={setIsMenuModalOn}
        postPk={post.pk}
        courseId={courseId}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <S.Circle onClick={goBack} style={{ marginTop: "0" }}>
          <i className="fas fa-arrow-left"></i>
        </S.Circle>
        {post.authorPk == profile.pk && (
          <div
            onClick={() => handleModalData()}
            style={{
              marginRight: "21px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="fas fa-ellipsis-v"></i>
          </div>
        )}
      </div>
      <div
        style={{
          width: "88%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          borderBottom: "1px solid #d9d9d9",
        }}
      >
        <S.PostTitle>{post.title}</S.PostTitle>
        <S.PostContent>{post.content}</S.PostContent>
        <div style={{ width: "100%", height: "36px" }}></div>
        <S.PostTime>{timeForToday(post.createdAt)}</S.PostTime>
      </div>
      {comment &&
        comment.map((data) => {
          return (
            <div
              style={{
                width: "88%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div style={{
                  padding: '5px 20px',
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <div>{data.content}</div>
                {(data.authorPk == profile.pk)?
                  <div onClick={delComment} id={data.pk } style={{ color:'red'}}>삭제</div>
                : <></>}
              </div>
              
              <div
                style={{
                  width: "88%",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <S.PostTime>{timeForToday(data.createdAt)}</S.PostTime>
              </div>
            </div>
          );
        })}
      <S.CommentInputWrapper>
        <S.CommentInput>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="commentContent"
              required
              placeholder="댓글쓰기"
            />
            <button type="submit">
              <SendSVG style={{ cursor: "pointer" }} />
            </button>
          </form>
        </S.CommentInput>
      </S.CommentInputWrapper>
    </div>
  );
}
export default Write;
