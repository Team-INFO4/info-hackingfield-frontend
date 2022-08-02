import React from "react";
import * as S from "./styles";
import Image from "next/image";

// h1 32px;  h2 20px; h3 18px;

const MainComponent = () => {
  return (
    <S.styledDiv>
      <S.circle1 />
      <S.Rcircle1 />
      <S.Rcircle2 />
      <S.Rcircle3 />
      <S.BgContainer1>
        <S.textDiv>
          <S.titleDiv>
            <h2>교육형 버그바운티 플랫폼</h2>
            <h1>HackingField!</h1>
          </S.titleDiv>
          <S.Bar />
          <S.bodyDiv>
            <h3>
              버그바운티 플랫폼 "HackingField"는 주니어 개발자와 주니어 해커들이
              새로운 경험을 쌓고 서로의 성장을
              <br />
              이끌어내는 환경을 제공합니다.
            </h3>
          </S.bodyDiv>
          <S.iconBox>
            <S.jpBox>
              <Image
                src="/images/Icon_junior programmer.svg"
                alt="jp"
                width={77}
                height={80}
              />
              <h3>주니어 개발자</h3>
            </S.jpBox>
            <S.jhBox>
              <Image
                src="/images/Icon_junior hacker.svg"
                alt="jh"
                width={77}
                height={80}
              />
              <h3>주니어 해커</h3>
            </S.jhBox>
          </S.iconBox>
        </S.textDiv>
      </S.BgContainer1>
      <S.BgContainer2>
        <S.textDiv>
          <S.titleDiv>
            <h1>'자유로운'</h1>
            <h2>버그바운티 플랫폼</h2>
          </S.titleDiv>
          <S.xBar1 />
          <S.xBar2 />
          <S.bodyDiv>
            <h2>
              주니어 개발자와 해커라면 누구나
              <br />
              자유롭게 서비스를 등록하고
              <br />
              등록된 서비스의 컨설팅을 진행할 수 있습니다.
            </h2>
          </S.bodyDiv>
        </S.textDiv>
      </S.BgContainer2>
      <S.BgContainer3>
        <S.textDiv>
          <S.titleDiv>
            <h1>'주니어들을 위한'</h1>
            <h2>지식과 경험 교류의 장</h2>
          </S.titleDiv>
          <S.xBar1 />
          <S.xBar2 />

          <S.iconBox2>
            <S.jpBox2>
              <Image
                src="/images/Icon_junior programmer.svg"
                alt="jp"
                width={77}
                height={80}
              />
              <p>
                주니어 개발자에게는
                <br />
                보안에 대한 지식과 경험을
              </p>
            </S.jpBox2>
            <S.jhBox2>
              <Image
                src="/images/Icon_junior hacker.svg"
                alt="jh"
                width={77}
                height={80}
              />
              <p>
                주니어 해커에게는
                <br />실 서비스에 대한 모의 해킹 경험을
              </p>
            </S.jhBox2>
          </S.iconBox2>
        </S.textDiv>
      </S.BgContainer3>
    </S.styledDiv>
  );
};

export default MainComponent;
