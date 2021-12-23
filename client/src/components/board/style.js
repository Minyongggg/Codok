import styled, { css } from "styled-components";
export const Title = styled.div`
  font-family: "Spoqa Hans Sans Neo";
  font-size: 27px;
  font-weight: 700;
  color: #12121D;
`
export const PlusButton = styled.div`


  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 60px;
  background:#f9f9f9;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  font-size: 24px;
  margin-right: 40px;
  pointer-events: all;
  box-shadow: 2px 2px 3px #999;
  &:hover {
    color:white;
    background: #18A0FB;
  }
`;
export const FixedAlign = styled.div`
  width: 100%;
  max-width: 375px;
  // height: 60px;
  display: flex;
  position: fixed;
  margin: 0 auto;
  position: fixed;
  bottom: 100px;
  justify-content: flex-end;
  pointer-events: none;
}
`


export const InputIcon = styled.i`
  font-size:1.5rem;
  margin-right: 4px;

`
export const YB = styled.div`
  height: 100px
`

export const SubTitle = styled.div`
  width: 88%;
  font-family: 'Spoqa Hans Sans Neo',sans-serif;
  font-weight: 700;
  font-size 1.125rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color:#404D61
`
export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 0 30px 0 30px;
  margin: 0 auto;
  display:flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`
export const Circle = styled.div`
  width: 44px;
  height: 44px;
  margin-top: 10px;
  // background-color: #eee;
  display:flex;
  cursor:pointer;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`
export const InputWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #eee;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`
export const InputID = styled.input`
  width: 100%;
  font-size: 1rem;
  height: 100%;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border-style: none;
  padding-left: 20px;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
`

export const Input = styled.input`
  width: 100%;
  line-height: 40px;
  border: 1px solid #E1E3E6;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: "Spoqa Hans Sans Neo";
`
export const Button = styled.button`
  width: 160px;
  height: 56px;
  color: white;
  background-color:#18A0FB;
  border-style: none;
  border-radius: 56px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background:White;
    color:#18A0FB;
  }
`
export const Button1 = styled.div`
  width: 70%;
  height: 56px;
  display:flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size:1.125rem;
  font-weight: 700;
  border-radius: 80px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`
export const Button2= styled(Button1)`
  background: rgba(34, 34, 34, 0.5);
  color:white;
`

export const PostWrapper= styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom:10px;
  width: 100%;
  padding-left: 10px;
  cursor:pointer;
  padding-right: 10px;
  border-bottom: 1px solid #D9D9D9
`
export const PostTitle= styled.div`
 font-family: Spoqa Hans Sans Neo;
 font-size: 1rem;
 max-width: 90%;
 overflow:hidden;
 text-overflow:ellipsis;
 white-space:nowrap;
 font-weight: 700;
`
export const PostContent= styled.div`
 font-family: Spoqa Hans Sans Neo;
 font-size: 0.75rem;
 max-width: 90%;
 overflow:hidden;
 text-overflow:ellipsis;
 white-space:nowrap;
 font-weight: 400;
 margin-top:6px;

 `
export const PostTime= styled.div`
 font-family: Spoqa Hans Sans Neo;
 font-size: 0.75rem;
 font-weight: 400;
 margin-top:6px;
 color:#ACB3BF;
 margin-bottom:12px;
`
// export const CommentInputWrapper = styled.div`
//   width:100%;
//   display: flex;
//   text-align:center;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
//   position: fixed;
//   max-width: 375px;
//   bottom: 100px;
// `
// export const CommentInput = styled.input`
//   width: 88%;

//   height: 60px;
//   border: 1px solid #18A0FB;
//   box-sizing: border-box;
//   box-shadow: 0px 2px 28px rgba(75, 88, 208, 0.15);
//   border-radius: 36px;
// `

export const CommentInputWrapper = styled.div`
  position: fixed;
  bottom: 95px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentInput = styled.div`
  width: 80%;
  box-shadow: 0px 2px 28px rgba(75, 88, 208, 0.1);
  border-radius: 36px;
  padding: 10px;
  z-index: 1000;
  background-color: white;
  border: 1px solid #18A0FB;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 80%;
      font-size: 16px;
      border: none;
      padding: 10px;
      margin-right: 10px;
    }
    button {
      border: none;
      background-color: white;
      width: fit-content;
      height: fit-content;
    }
  }
`;