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
export const LogOutBtn = styled.button`
  background: #18A0FB;
  border: 1px solid #18A0FB;
  color:white;
  width: 80px;
  cursor: pointer;
  height: 40px;
  font-weight: 700;
  font-family: "Spoqa Hans Sans Neo";
  border-radius: 200px;
  &:hover{
    background: white;
    color: #18A0FB;
    border: 1px solid #18A0FB;
  }
`
export const Introduce = styled.div`
  font-family: 'Spoqa Hans Sans Neo';
  font-size: 0.75rem;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 50vw;
  max-width: 250px;
  margin-top: 11px;
`;
export const ProfileMainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
>div{
  background:#DBEDFF;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  padding: 4px;

  boder-radius: 60px;
  margin-left:6px;
}
`