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
    </S.BackDiv>
  );
};

export default Resister_select;
