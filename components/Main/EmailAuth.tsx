import React, { useState } from "react";
import * as S from "./styles";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const IstyledInput = styled(S.styledInput)`
  top: 37vh;
  margin-left: 15px;
  @media screen and (max-height: 950px) {
    height: 60px;
  }
`;

const IstyledButton = styled(S.styledButton)`
  top: 48vh;
  margin-left: 15px;
  @media screen and (max-height: 1000px) {
    top: 49vh;
  }
`;

const IstyledButtonEnable = styled(S.styledButtonEnable)`
  top: 48vh;
  margin-left: 15px;
  @media screen and (max-height: 1000px) {
    top: 49vh;
  }
`;

const EmailAuth = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState<boolean>(false);

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

  const onClick = () => {
    Router.push("/");
  };

  let btnEnable = false;

  if (!isEmail) {
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
      <S.TitleBox>
        <h2>비밀번호 찾기</h2>
      </S.TitleBox>
      <IstyledInput
        type="text"
        placeholder="이메일 입력"
        name="email"
        onChange={onChangeEmail}
      />
      {btnEnable ? (
        <IstyledButtonEnable onClick={onClick}>전송하기</IstyledButtonEnable>
      ) : (
        <IstyledButton onClick={() => alert("이메일을 입력해 주세요.")}>
          전송하기
        </IstyledButton>
      )}
    </S.BackDiv>
  );
};

export default EmailAuth;
