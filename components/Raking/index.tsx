import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Bottom from "../Common/Bottom";
import Header from "../Common/Header";
import Circle from "../Common/Circle";
import RankImage from "../../public/assets/RankingImage";

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
        </S.second>
        <S.Top>
          <RankImage />
        </S.Top>
        <S.second>
          <RankImage />
        </S.second>
      </S.TopRank>
      <Bottom />
    </S.HomeWrapper>
  );
};

export default Rank;
