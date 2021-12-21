import styled, { css } from "styled-components";

export const InputIcon = styled.i`
  font-size:1.5rem;
  margin-right: 4px;

`
export const YB = styled.div`
  height: 200px
`
export const Title = styled.h1`
  margin-bottom: 50px;
`
export const SubTitle = styled.div`
  width: 88%;
  font-family: 'Spoqa Hans Sans Neo',sans-serif;
  font-weight: 700;
  font-size 1.125rem;
  text-align: left;
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
  background-color: #eee;
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
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
`
export const InputID = styled.input`
  width: 100%;
  font-size: 1rem;
  height: 100%;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border-style: none;
  padding-left: 20px;
`
export const InputPW = styled(InputID)`
`

export const BGIMG= styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

`
export const Input = styled.input`
  width: 88%;
  line-height: 40px;
  border: 1px solid #E1E3E6;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: "Spoqa Hans Sans Neo";
  margin-bottom: 12px;
`
export const Select = styled.select`
  width: 88%;
  height: 40px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border: 1px solid #E1E3E6;
  border-radius: 8px;
  color: grey;
`
