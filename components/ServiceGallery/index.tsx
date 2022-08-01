import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Gallery from "./Gallery";
import LeftArrow from "../../public/assets/LeftArrow";
import RightArrow from "../../public/assets/RightArrow";
import Circle from "./Circle";

const ServiceGallery: FC = (): JSX.Element => {
  const List = [1, 2, 3, 4];

  return (
    <S.HomeWrapper>
      <Circle />
      <S.Title>서비스 갤러리</S.Title>
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
        <S.Box>
          {List.map((el, index) => (
            <Gallery key={index}>{el}</Gallery>
          ))}
        </S.Box>
        <S.Search placeholder="검색어를 입력해주세요" />
        <S.Button>검색</S.Button>
        <S.PageNumberDiv>
          <LeftArrow />
          <S.Number>1</S.Number>
          <S.Number>2</S.Number>
          <S.Number>3</S.Number>
          <RightArrow />
        </S.PageNumberDiv>
      </S.GalleryBox>
    </S.HomeWrapper>
  );
};

export default ServiceGallery;
