import React, { useCallback, useState } from "react";
import * as S from "../styles";
import Link from "next/link";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const IstyledInput = styled(S.styledInput)`
  top: 0px;
  left: 0px;
  margin: 8px 0 20px 0;
  color: #ffffff;
  ::placeholder {
    color: #555555;
  }
  @media screen and (max-width: 1660px) {
    left: -15px;
    font-size: 14px;
    padding-left: 15px;
  }
  @media screen and (max-width: 1440px) {
    left: -20px;
  }
  &:focus {
    outline: 2px solid ${(props) => props.color || "#2da16b"};
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

const UserInput = () => {
  const [email, setEmail] = useState("test@test.com");
  const [pwd, setPwd] = useState("test1234!");
  const [confirm, setConfirm] = useState("test1234!");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  let btnEnable = false;

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /[a-z0-9]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i;

    const emailCurrent = e.target.value;
    setEmail(emailCurrent.replace(/(\s*)/g, ""));

    if (!emailRegex.test(emailCurrent)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passwordCurrent = e.target.value;
    setPwd(passwordCurrent.replace(/(\s*)/g, ""));

    if (!passwordRegex.test(passwordCurrent)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const onChangeConfirm = (e: any) => {
    const passwordConfirmCurrent = e.target.value;
    setConfirm(passwordConfirmCurrent.replace(/(\s*)/g, ""));

    if (pwd === passwordConfirmCurrent) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
    }
  };

  const onClick = () => {
    Router.push("/signup/user/userprofile");
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
      <ul className="sul">
        <li>이메일</li>
        <IstyledInput
          color={`${isEmail ? "#2da16b" : "#ff0000"}`}
          type="text"
          placeholder="이메일 입력"
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
        <li>비밀번호</li>
        <IstyledInput
          color={`${isPassword ? "#2da16b" : "#ff0000"}`}
          type="password"
          placeholder="8~16자리의 영문/특수문자 조합으로 입력"
          name="password"
          value={pwd}
          onChange={onChangePassword}
        />
        <li>비밀번호 확인</li>
        <IstyledInput
          color={`${isPasswordConfirm ? "#2da16b" : "#ff0000"}`}
          type="password"
          placeholder="비밀번호 재입력"
          name="passwordconf"
          value={confirm}
          onChange={onChangeConfirm}
        />
      </ul>
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

export default UserInput;
