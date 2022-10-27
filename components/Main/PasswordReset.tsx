import React, { useState } from "react";
import * as S from "./styles";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const IstyledInput = styled(S.styledInput)`
  top: 28vh;
  margin-left: 15px;
  @media screen and (max-height: 950px) {
  }
  &:focus {
    outline: 2px solid ${(props) => props.color || "#2da16b"};
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

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent.replace(/(\s*)/g, ""));

    if (!passwordRegex.test(passwordCurrent)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const onChangeConfirm = (e: any) => {
    const passwordConfirmCurrent = e.target.value;
    setConfirm(passwordConfirmCurrent.replace(/(\s*)/g, ""));

    if (password === passwordConfirmCurrent) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
    }
  };

  const onClick = () => {
    Router.push("/");
  };

  let btnEnable = false;

  if (isPassword && isPasswordConfirm) {
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
        <h2>비밀번호 재설정</h2>
      </S.TitleBox>
      <IstyledInput
        color={`${isPassword ? "#2da16b" : "#ff0000"}`}
        type="password"
        placeholder="새 비밀번호"
        name="password"
        onChange={onChangePassword}
      />
      <IstyledInput
        color={`${isPasswordConfirm ? "#2da16b" : "#ff0000"}`}
        type="password"
        placeholder="비밀번호 확인"
        name="confirm"
        onChange={onChangeConfirm}
      />
      {btnEnable ? (
        <IstyledButtonEnable onClick={onClick}>전송하기</IstyledButtonEnable>
      ) : (
        <IstyledButton onClick={() => alert("비밀번호를 확인해주세요.")}>
          전송하기
        </IstyledButton>
      )}
    </S.BackDiv>
  );
};

export default PasswordReset;
