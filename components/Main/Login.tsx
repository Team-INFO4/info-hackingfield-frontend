import React from "react";
import * as S from "./styles";

const Login = () => {
  return (
    <S.BackDiv>
      <S.LogoBox />

      <S.styledInput type="text" placeholder="이메일" name="email" />
      <S.styledInput type="password" placeholder="비밀번호" name="password" />
      <S.styledButton>로그인</S.styledButton>
      <S.textBox>
        <h3>비밀번호 찾기</h3>
        <h3>회원가입</h3>
      </S.textBox>
    </S.BackDiv>
  );
};

export default Login;
