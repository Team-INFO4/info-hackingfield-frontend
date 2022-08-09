import React, { useState } from "react";
import * as S from "./styles";
import Link from "next/link";
import styled from "styled-components";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  let btnEnable = false;
  const emailHandling = (e: any) => {
    setId(e.target.value);
  };
  const pwdHandling = (e: any) => {
    setPwd(e.target.value);
  };

  if (!id || !pwd) {
    btnEnable = false;
  } else {
    btnEnable = true;
  }

  return (
    <S.BackDiv>
      <S.LogoBox />
      <S.styledInput
        type="text"
        placeholder="이메일"
        name="email"
        onChange={emailHandling}
      />
      <S.styledInput
        type="password"
        placeholder="비밀번호"
        name="password"
        onChange={pwdHandling}
      />
      {btnEnable ? (
        <S.styledButtonEnable>로그인</S.styledButtonEnable>
      ) : (
        <S.styledButton>로그인</S.styledButton>
      )}

      <S.textBox>
        <h3>비밀번호 찾기</h3>
        <S.styledLink href="/signup/common" passHref>
          <h3>회원가입</h3>
        </S.styledLink>
      </S.textBox>
    </S.BackDiv>
  );
};

export default Login;
