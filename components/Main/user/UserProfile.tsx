import React, { useCallback, useState } from "react";
import * as S from "../styles";
import Link from "next/link";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

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

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  let btnEnable = false;

  const onClick = () => {
    Router.push("/");
  };

  if (isEmail && isPassword && isPasswordConfirm) {
    btnEnable = true;
  } else {
    btnEnable = false;
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
      <S.TitleBox>
        <h2>USER 회원가입</h2>
      </S.TitleBox>
      <S.scrollBox>
        <ul>
          <li>프로필 작성</li>
        </ul>
        <S.profileBox></S.profileBox>
      </S.scrollBox>

      <PrevButton onClick={() => Router.back()}>이전</PrevButton>
      {btnEnable ? (
        <NextButtonEnable onClick={onClick}>다음</NextButtonEnable>
      ) : (
        <NextButton onClick={() => alert("입력값을 다시 확인해 주세요!")}>
          다음
        </NextButton>
      )}
    </S.BackDiv>
  );
};

export default Login;
