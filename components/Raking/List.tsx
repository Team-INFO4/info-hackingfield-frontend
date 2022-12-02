import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import RankImage from "../../public/assets/RankImage";

const Notice: FC = (): JSX.Element => {
  return (
    <>
      <S.ContentBox>
        <S.GrayTitle>4</S.GrayTitle>
        <RankImage />
        <S.WhiteTitle>[공지] 공지사항 제목입니다.</S.WhiteTitle>
        <S.GrayTitle>작성한 리포트 0개</S.GrayTitle>
        <S.GrayTitle>통과된 리포트 0개</S.GrayTitle>
        <S.GrayTitle>취약점 제보한 서비스 0개</S.GrayTitle>
      </S.ContentBox>
      <S.ContentDivide />
    </>
  );
};

export default Notice;
