import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Slack from "../../public/assets/slack";

const Gallery: FC = (): JSX.Element => {
  return (
    <>
      <S.Gallery>
        <Slack />
        <S.Name>서비스 이름</S.Name>
        <S.Date>0000-00-00~0000-00-00 리포트 0개 작성됨</S.Date>
      </S.Gallery>
      <S.Gallery>
        <Slack />
        <S.Name>서비스 이름</S.Name>
        <S.Date>0000-00-00~0000-00-00 리포트 0개 작성됨</S.Date>
      </S.Gallery>
      <S.Gallery>
        <Slack />
        <S.Name>서비스 이름</S.Name>
        <S.Date>0000-00-00~0000-00-00 리포트 0개 작성됨</S.Date>
      </S.Gallery>
    </>
  );
};

export default Gallery;
