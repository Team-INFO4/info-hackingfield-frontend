import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";

const Notice: FC = (): JSX.Element => {
  return (
    <>
      <S.ContentBox>
        <S.GrayTitle>000</S.GrayTitle>
        <S.WhiteTitle>[공지] 공지사항 제목입니다.</S.WhiteTitle>
        <S.GrayTitle>홍길동</S.GrayTitle>
        <S.GrayTitle>0000-00-00</S.GrayTitle>
      </S.ContentBox>
      <S.ContentDivide />
    </>
  );
};

export default Notice;
