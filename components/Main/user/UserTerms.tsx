import React, { useState } from "react";
import * as S from "../styles";
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
  const [user, setUser] = useState(false);
  const [team, setTeam] = useState(false);

  const onClick = () => {
    console.log(user, " & ", team);
    if (user) {
      Router.push("/signup/user");
    } else {
      Router.push("/signup/team");
    }
  };

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
          <li>이용약관</li>
          <div>스크롤</div>
          <li>개인정보</li>
        </ul>
      </S.scrollBox>

      {selectCategory ? (
        <NextButtonEnable onClick={onClick}>다음</NextButtonEnable>
      ) : (
        <NextButton>다음</NextButton>
      )}
    </S.BackDiv>
  );
};

export default Resister_select;
