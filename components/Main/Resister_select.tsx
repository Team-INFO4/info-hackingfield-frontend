import React, { useState } from "react";
import * as S from "./styles";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import Router from "next/router";

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

const Resister_select = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [user, setUser] = useState("#555555");
  const [team, setTeam] = useState("#555555");
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
        <div
          className={`btn ${selectCategory === "curr" ? "active" : ""}`}
          onClick={() => setSelectCategory("curr")}
        >
          <S.userImage className="Icon" />
          <h3>USER</h3>
        </div>
        <div
          className={`btn ${selectCategory === "prev" ? "active" : ""}`}
          onClick={() => setSelectCategory("prev")}
        >
          <S.teamImage className="Icon" />
          <p>TEAM</p>
        </div>
      </S.SelectDiv>
      {selectCategory ? (
        <NextButtonEnable>다음</NextButtonEnable>
      ) : (
        <NextButton>다음</NextButton>
      )}
    </S.BackDiv>
  );
};

export default Resister_select;
