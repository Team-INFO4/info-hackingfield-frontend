import { FC } from "react";
import * as S from "./styles";
import Logo from "../../../public/assets/Logo";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <S.Head>
        <Logo />
        <S.Lists>
          <S.options>서비스 갤러리</S.options>
          <S.options>리포트</S.options>
          <S.options>공지사항</S.options>
          <S.options>랭킹</S.options>
          <S.options>MY</S.options>
        </S.Lists>
      </S.Head>
    </>
  );
};

export default Header;
