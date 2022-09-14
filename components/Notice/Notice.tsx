import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Bottom from "../Common/Bottom";
import Header from "../Common/Header";
import LeftArrow from "../../public/assets/LeftArrow";
import RightArrow from "../../public/assets/RightArrow";
import Circle from "../Common/Circle";
import Notice from "./List";

const NoticeList: FC = (): JSX.Element => {
  const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <S.HomeWrapper>
      <Circle />
      <Header />
      <S.Title>공지사항</S.Title>
      <S.Selected />
      <S.GalleryBox>
        <S.SelectBox>
          <option key="new" value="new">
            최신순
          </option>
          <option key="old" value="old">
            오래된순
          </option>
        </S.SelectBox>
        <S.Line />
        <S.Div>
          <S.ListTitleBox>
            <S.ListTitle>No.</S.ListTitle>
            <S.ListTitle>제목</S.ListTitle>
            <S.ListTitle>작성자</S.ListTitle>
            <S.ListTitle>작성일지</S.ListTitle>
          </S.ListTitleBox>
          <S.DivideLine />
          {List.map((el, index) => (
            <Notice key={index}>{el}</Notice>
          ))}
          <S.BottomLine />
        </S.Div>

        <S.Box>
          <S.Search>검색</S.Search>
        </S.Box>
        <S.PageNumberDiv>
          <LeftArrow />
          <S.Number>1</S.Number>
          <S.Number>2</S.Number>
          <S.Number>3</S.Number>
          <RightArrow />
        </S.PageNumberDiv>
      </S.GalleryBox>
      <Bottom />
    </S.HomeWrapper>
  );
};

export default NoticeList;
