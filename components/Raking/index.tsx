import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Bottom from "../Common/Bottom";
import Header from "../Common/Header";
import Circle from "../Common/Circle";
import RankImage from "../../public/assets/RankingImage";
import Lists from "./List";

const Rank: FC = (): JSX.Element => {
  const List = [1, 2, 3, 4, 5, 6, 7];

  return (
    <S.HomeWrapper>
      <Circle />
      <Header />
      <S.Title>랭킹</S.Title>
      <S.Selected />
      <S.TopRank>
        <S.second>
          <RankImage />
          <S.nickname>닉네임</S.nickname>
          <S.report>
            작성한 리포트 0개
            <br />
            통과된 리프토 0개
            <br />
            취약점 제보한 서비스 0개
          </S.report>
        </S.second>
        <S.Top>
          <S.crown />
          <RankImage />
          <S.nickname>닉네임</S.nickname>
          <S.report>
            작성한 리포트 0개
            <br />
            통과된 리프토 0개
            <br />
            취약점 제보한 서비스 0개
          </S.report>
        </S.Top>
        <S.second>
          <RankImage />
          <S.nickname>닉네임</S.nickname>
          <S.report>
            작성한 리포트 0개
            <br />
            통과된 리프토 0개
            <br />
            취약점 제보한 서비스 0개
          </S.report>
        </S.second>
      </S.TopRank>
      <S.GalleryBox>
        <S.Div>
          <S.DivideLine />
          {List.map((el, index) => (
            <Lists key={index}>{el}</Lists>
          ))}
          <S.BottomLine />
        </S.Div>
      </S.GalleryBox>
      <Bottom />
    </S.HomeWrapper>
  );
};

export default Rank;
