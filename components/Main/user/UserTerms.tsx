import React, { useState } from "react";
import * as S from "../styles";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import Router from "next/router";
import { AiOutlineCheck } from "react-icons/ai";

const NextButton = styled(S.styledButton)`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 88%;
  left: 70%;
  @media screen and (max-width: 1600px) {
    width: 110px;
  }
  @media screen and (max-width: 1440px) {
    left: 63%;
    width: 100px;
  }
  @media screen and (max-height: 960px) {
    top: 80%;
  }
`;

const NextButtonEnable = styled(S.styledButtonEnable)`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 88%;
  left: 70%;
  @media screen and (max-width: 1600px) {
    width: 110px;
  }
  @media screen and (max-width: 1440px) {
    left: 63%;
    width: 100px;
  }
  @media screen and (max-height: 960px) {
    top: 80%;
  }
`;

const UserTerms = () => {
  const [terms1, setTerms1] = useState("");
  const [terms2, setTerms2] = useState("");

  const onClick = () => {
    if (terms1 && terms2) {
      Router.push("/signup/user/userInput");
    } else {
      alert("약관에 동의해 주세요.");
    }
  };

  return (
    <S.BackDiv>
      <S.arrowBox>
        <IoIosArrowBack
          className="arrow"
          size="40px"
          onClick={() => Router.back()}
        />
      </S.arrowBox>
      <S.TitleBox>
        <h2>USER 회원가입</h2>
      </S.TitleBox>
      <S.scrollBox>
        <ul>
          <li>이용약관</li>
          <div className="term">
            개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는
            개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및
            이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내
            드리오니 자세히 읽은 후 동의하여 주시기 바랍니다. <br />
            <br />
            <strong>1. 수집하는 개인정보</strong>
            <br />
            <br />
            이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의
            네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일,
            캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기
            위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의
            개인정보를 수집합니다. 회원가입 시점에 네이버가 이용자로부터
            수집하는 개인정보는 아래와 같습니다.
            <br /> - 회원 가입 시에 ‘아이디, 비밀번호, 이름, 생년월일, 성별,
            휴대전화번호’를 필수항목으로 수집합니다. 만약 이용자가 입력하는
            생년월일이 만14세 미만 아동일 경우에는 법정대리인 정보(법정대리인의
            이름, 생년월일, 성별, 중복가입확인정보(DI), 휴대전화번호)를 추가로
            수집합니다. 그리고 선택항목으로 이메일 주소를 수집합니다. <br />-
            단체아이디로 회원가입 시 단체아이디, 비밀번호, 단체이름, 이메일주소,
            휴대전화번호를 필수항목으로 수집합니다. 그리고 단체 대표자명을
            선택항목으로 수집합니다. 서비스 이용 과정에서 이용자로부터 수집하는
            개인정보는 아래와 같습니다. <br />- 회원정보 또는 개별 서비스에서
            프로필 정보(별명, 프로필 사진)를 설정할 수 있습니다. 회원정보에
            별명을 입력하지 않은 경우에는 마스킹 처리된 아이디가 별명으로 자동
            입력됩니다. <br />- 네이버 내의 개별 서비스 이용, 이벤트 응모 및
            경품 신청 과정에서 해당 서비스의 이용자에 한해 추가 개인정보 수집이
            발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보
            수집 시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및
            이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.
            서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보,
            위치정보가 생성되어 수집될 수 있습니다. 또한 이미지 및 음성을 이용한
            검색 서비스 등에서 이미지나 음성이 수집될 수 있습니다. 구체적으로 1)
            서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여
            이를 저장(수집)하거나, 2) 이용자 기기의 고유한 정보를 원래의 값을
            확인하지 못 하도록 안전하게 변환하여 수집합니다. 서비스 이용
            과정에서 위치정보가 수집될 수 있으며, 네이버에서 제공하는 위치기반
            서비스에 대해서는 '네이버 위치기반서비스 이용약관'에서 자세하게
            규정하고 있습니다.
            <br />
            <br />
            출처: 네이버 회원가입
          </div>
          <div
            className={`btn ${terms1 === "active" ? "active" : ""}`}
            onClick={() => {
              if (terms1 === "active") {
                setTerms1("prev");
              } else {
                setTerms1("active");
              }
            }}
          >
            <AiOutlineCheck className="check" size="18px" />
            <h3>이용약관에 동의합니다.</h3>
          </div>
          <li>개인정보 수집 빛 이용</li>
          <div className="term">
            개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는
            개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및
            이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내
            드리오니 자세히 읽은 후 동의하여 주시기 바랍니다. <br />
            <br />
            <strong>1. 수집하는 개인정보</strong>
            <br />
            <br />
            이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의
            네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일,
            캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기
            위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의
            개인정보를 수집합니다. 회원가입 시점에 네이버가 이용자로부터
            수집하는 개인정보는 아래와 같습니다.
            <br /> - 회원 가입 시에 ‘아이디, 비밀번호, 이름, 생년월일, 성별,
            휴대전화번호’를 필수항목으로 수집합니다. 만약 이용자가 입력하는
            생년월일이 만14세 미만 아동일 경우에는 법정대리인 정보(법정대리인의
            이름, 생년월일, 성별, 중복가입확인정보(DI), 휴대전화번호)를 추가로
            수집합니다. 그리고 선택항목으로 이메일 주소를 수집합니다. <br />-
            단체아이디로 회원가입 시 단체아이디, 비밀번호, 단체이름, 이메일주소,
            휴대전화번호를 필수항목으로 수집합니다. 그리고 단체 대표자명을
            선택항목으로 수집합니다. 서비스 이용 과정에서 이용자로부터 수집하는
            개인정보는 아래와 같습니다. <br />- 회원정보 또는 개별 서비스에서
            프로필 정보(별명, 프로필 사진)를 설정할 수 있습니다. 회원정보에
            별명을 입력하지 않은 경우에는 마스킹 처리된 아이디가 별명으로 자동
            입력됩니다. <br />- 네이버 내의 개별 서비스 이용, 이벤트 응모 및
            경품 신청 과정에서 해당 서비스의 이용자에 한해 추가 개인정보 수집이
            발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보
            수집 시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및
            이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.
            서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보,
            위치정보가 생성되어 수집될 수 있습니다. 또한 이미지 및 음성을 이용한
            검색 서비스 등에서 이미지나 음성이 수집될 수 있습니다. 구체적으로 1)
            서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여
            이를 저장(수집)하거나, 2) 이용자 기기의 고유한 정보를 원래의 값을
            확인하지 못 하도록 안전하게 변환하여 수집합니다. 서비스 이용
            과정에서 위치정보가 수집될 수 있으며, 네이버에서 제공하는 위치기반
            서비스에 대해서는 '네이버 위치기반서비스 이용약관'에서 자세하게
            규정하고 있습니다.
            <br />
            <br />
            출처: 네이버 회원가입
          </div>
          <div
            className={`btn ${terms2 === "active" ? "active" : ""}`}
            onClick={() => {
              if (terms2 === "active") {
                setTerms2("prev");
              } else {
                setTerms2("active");
              }
            }}
          >
            <AiOutlineCheck className="check" size="18px" />
            <h3>개인정보 수집 및 이용에 동의합니다.</h3>
          </div>
        </ul>
      </S.scrollBox>

      {terms1 === "active" && terms2 === "active" ? (
        <NextButtonEnable onClick={onClick}>다음</NextButtonEnable>
      ) : (
        <NextButton onClick={() => alert("약관에 동의해 주세요.")}>
          다음
        </NextButton>
      )}
    </S.BackDiv>
  );
};

export default UserTerms;
