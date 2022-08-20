import React from "react";
import * as S from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import Router from "next/router";

const Resister_select = () => {
  return (
    <S.BackDiv>
      <S.arrowBox>
        <IoIosArrowBack
          className="arrow"
          size="40px"
          onClick={() => Router.back()}
        />
      </S.arrowBox>
      <h2>회원가입</h2>
      <S.SelectDiv>
        <S.userBox>
          <S.userImage className="Icon" />
          <h3>USER</h3>
        </S.userBox>
        <S.userBox>
          <S.teamImage className="Icon" />
          <p>TEAM</p>
        </S.userBox>
      </S.SelectDiv>
    </S.BackDiv>
  );
};

export default Resister_select;
