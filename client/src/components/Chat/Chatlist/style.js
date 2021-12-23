import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  padding-bottom: 60px;
`;

export const Title = styled.h1`
  margin: 20px 0 30px;
`;

export const Profile = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 28px rgba(75, 88, 208, 0.15);
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  cursor:pointer;
  display: flex;
`;

export const ProfileContent = styled.div`
  > div {
    > span {
      margin-right: 6px;
    }
  }
`;

export const ProfileImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h3 {
    font-size: 18px;
    margin: 0;
    margin-right: 6px;
  }
`;

export const Introduce = styled.div`
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 50vw;
  max-width: 250px;
`;
