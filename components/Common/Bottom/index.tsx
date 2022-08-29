import { FC } from "react";
import * as S from "./styles";
import SecondLogo from "../../../public/assets/SecondLogo";
import Discord from "../../../public/assets/Discord";

const Bottom: FC = (): JSX.Element => {
  return (
    <>
      <S.Bottom>
        <S.Divide>
          <SecondLogo />
          <S.Form>
            <S.Info>이용약관</S.Info>
            <S.Info>개인정보처리방침</S.Info>
            <S.Info>
              문의하기 team.info422@gmail.com <Discord />
            </S.Info>
            <S.Line />
            <S.Info>ⓒ Copyright 2022. Team.info</S.Info>
          </S.Form>
        </S.Divide>
      </S.Bottom>
    </>
  );
};

export default Bottom;
