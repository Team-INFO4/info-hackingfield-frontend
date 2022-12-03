import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Bottom from "../Common/Bottom";
import Header from "../Common/Header";
import Circle from "../Common/Circle";
import ProfileArrow from "../../public/assets/profileArrow";
import Myprofil from "../../public/assets/Mypage";
import Notice from "./List";

const Mypage: FC = (): JSX.Element => {
  const List = [1, 2, 3, 4, 5];
  return (
    <S.HomeWrapper>
      <Circle />
      <Header />
      <S.HeaderDiv>
        <S.TitleDiv>
          <ProfileArrow />
          <S.Title>프로필</S.Title>
        </S.TitleDiv>
        <S.Back>이전</S.Back>
      </S.HeaderDiv>
      <S.ContentBox>
        <S.IntroduceDiv>
          <Myprofil />
          <S.Name>
            재히히<S.NameType>(user)</S.NameType>
          </S.Name>
          <S.Intro>
            안녕하세요.미림여자정보과학고등학교 뉴미디어 디자인과 3학년
            정재희입니다.
            <br />
            업무 관련 문의는 d2017@emirim.hs.kr로 메일 부탁드립니다.
          </S.Intro>
        </S.IntroduceDiv>
        <S.Divide />
        <S.WriteBox>
          <S.SpaceCheckDiv>
            <S.CheckDiv>
              <S.CheckReport>작성한 리포트</S.CheckReport>
              <S.Number>00개</S.Number>
            </S.CheckDiv>
            <S.CheckDiv>
              <S.CheckReport>통과한 리포트</S.CheckReport>
              <S.Number>00개</S.Number>
            </S.CheckDiv>
            <S.CheckDiv>
              <S.CheckReport>취약점 제보한 서비스</S.CheckReport>
              <S.Number>00개</S.Number>
            </S.CheckDiv>
          </S.SpaceCheckDiv>
          <S.SpaceDivide />
          <S.ReportTitle>재히히 님이 작성한 리포트</S.ReportTitle>
          <S.SpaceDivide />
          <S.ListTitleBox>
            <S.ListTitle>No.</S.ListTitle>
            <S.ListTitle>제목</S.ListTitle>
            <S.ListTitle>상태</S.ListTitle>
            <S.ListTitle>작성일</S.ListTitle>
          </S.ListTitleBox>
          <S.WhiteDiv />
          {List.map((el, index) => (
            <Notice key={index}>{el}</Notice>
          ))}
        </S.WriteBox>
      </S.ContentBox>
      <Bottom />
    </S.HomeWrapper>
  );
};

export default Mypage;
