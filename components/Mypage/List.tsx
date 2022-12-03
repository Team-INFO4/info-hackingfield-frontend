import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";

const Notice: FC = (): JSX.Element => {
  return (
    <>
      <S.ListContentBox>
        <S.GrayTitle>00</S.GrayTitle>
        <S.WhiteTitle>[대상 서비스]리포트 제목입니다.</S.WhiteTitle>
        <S.GrayTitle>상태</S.GrayTitle>
        <S.GrayTitle>0000-00-00</S.GrayTitle>
      </S.ListContentBox>
      <S.ContentDivide />
    </>
  );
};

export default Notice;
