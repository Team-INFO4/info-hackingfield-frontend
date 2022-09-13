import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";

const Circle: FC = (): JSX.Element => {
  return (
    <>
      <S.DesignCircle />
      <S.DesignCircleDot />
      <S.DesignCircle2 />
      <S.DesignCircleDot2 />
    </>
  );
};

export default Circle;
