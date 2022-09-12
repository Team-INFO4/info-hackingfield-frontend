import React, { useState } from "react";
import * as S from "../styles";
import Link from "next/link";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const IstyledInput = styled(S.styledInput)`
  top: 0px;
  left: 0px;
  margin: 8px 0 20px 0;
  @media screen and (max-width: 1660px) {
    left: -15px;
  }
  @media screen and (max-width: 1440px) {
    left: -20px;
  }
`;

const NextButton = styled(S.styledButton)`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 88%;
  left: 70%;
  @media screen and (max-width: 1600px) {
    width: 110px;
  }
  @media screen and (max-width: 1440px) {
    left: 63%;
    width: 100px;
  }
  @media screen and (max-height: 960px) {
    top: 80%;
  }
`;

const PrevButton = styled(S.styledButton)`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 88%;
  left: 8%;
  transition: 0.6s;
  &:hover {
    background-color: #1cb56d;
    color: #ffffff;
  }
  @media screen and (max-width: 1600px) {
    width: 110px;
  }
  @media screen and (max-width: 1440px) {
    left: 6%;
    width: 100px;
  }
  @media screen and (max-height: 960px) {
    top: 80%;
  }
`;

const NextButtonEnable = styled(S.styledButtonEnable)`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 88%;
  left: 70%;
  @media screen and (max-width: 1600px) {
    width: 110px;
  }
  @media screen and (max-width: 1440px) {
    left: 63%;
    width: 100px;
  }
  @media screen and (max-height: 960px) {
    top: 80%;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  let btnEnable = false;
  const emailHandling = (e: any) => {
    setEmail(e.target.value);
  };
  const pwdHandling = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };
  const confirmHandling = (e: any) => {
    setConfirm(e.target.value);
  };

  if (!email || !pwd) {
    btnEnable = false;
  } else {
    btnEnable = true;
  }

  return (
    <S.BackDiv>
      <S.arrowBox>
        <IoIosArrowBack
          className="arrow"
          size="40px"
          onClick={() => Router.back()}
        />
      </S.arrowBox>
      <ul className="sul">
        <li>이메일</li>
        <IstyledInput
          type="text"
          placeholder="이메일 입력"
          name="email"
          onChange={emailHandling}
        />
        <li>비밀번호</li>
        <IstyledInput
          type="password"
          placeholder="8~16자리의 영문/특수문자 조합으로 입력"
          name="password"
          onChange={pwdHandling}
        />
        <li>비밀번호 확인</li>
        <IstyledInput
          type="password"
          placeholder="비밀번호 재입력"
          name="password"
          onChange={confirmHandling}
        />
      </ul>
      <PrevButton>이전</PrevButton>
      {btnEnable ? (
        <NextButtonEnable>다음</NextButtonEnable>
      ) : (
        <NextButton>다음</NextButton>
      )}
    </S.BackDiv>
  );
};

export default Login;
