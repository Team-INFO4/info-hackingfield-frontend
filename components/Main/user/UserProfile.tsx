import React, { useCallback, useRef, useState } from "react";
import * as S from "../styles";
import Image from "next/image";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const IstyledInput = styled(S.styledInput)`
  top: 23vh;
  left: 6vw;
  position: absolute;
  width: 17vw;
  color: #ffffff;
  ::placeholder {
    color: #555555;
  }
  @media screen and (max-height: 1000px) {
    top: 190px;
    font-size: 15px;
  }

  &:focus {
    outline: 2px solid ${(props) => props.color || "#2da16b"};
  }
`;

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

const PrevButton = styled(S.styledButton)`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 88%;
  left: 8%;
  transition: 0.6s;
  &:hover {
    background-color: #1cb56d;
    color: #ffffff;
  }
  @media screen and (max-width: 1600px) {
    width: 110px;
  }
  @media screen and (max-width: 1440px) {
    left: 6%;
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

const UserProfile = () => {
  const [nicName, setNicName] = useState("");
  const [intro, setIntro] = useState("");
  const [isNic, setIsNic] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const imgRef = useRef<HTMLInputElement>(null);

  // 유효성 검사

  let btnEnable = false;

  const onClick = () => {
    Router.push("/");
  };

  const onChangeImage = (e) => {
    const fileBlob = e.target.files[0];
    if (fileBlob) {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      return new Promise(() => {
        reader.onload = () => {
          setImageUrl(reader.result?.toString());
        };
      });
    }
  };

  const onClickFileBtn = () => {
    if (imgRef.current != null) {
      imgRef.current.click();
    }
  };

  const inputHandling = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Regex = /^[a-z0-9가-힣-_\s]{2,12}$/;
    const currentNic = e.target.value;
    setNicName(currentNic);
    if (Regex.test(currentNic)) {
      setIsNic(true);
    } else {
      setIsNic(false);
    }
  };

  const introChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntro(e.target.value);
    if (intro) {
      setIsNic(true);
    } else {
      setIsNic(false);
    }
  };

  if (isNic && intro) {
    btnEnable = true;
  } else {
    btnEnable = false;
  }

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
          <li>프로필 작성</li>
        </ul>
        <S.profileBox>
          <S.imageBox onClick={onClickFileBtn}>
            {imageUrl ? (
              <Image
                className="InputImage"
                src={`${imageUrl}`}
                alt="userp"
                width={180}
                height={180}
                objectFit="cover"
              />
            ) : (
              <S.imageIcon>
                <Image src="/images/ImageIcon.svg" alt="img" layout="fill" />
              </S.imageIcon>
            )}
            <S.plusIcon>
              <Image src="/Images/PlusIcone.svg" alt="img" layout="fill" />
            </S.plusIcon>
            <input
              type="file"
              ref={imgRef}
              style={{ display: "none" }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onChangeImage}
            />
          </S.imageBox>
        </S.profileBox>
        <IstyledInput
          type="text"
          placeholder="닉네임(2~12자)"
          name="nicname"
          value={nicName}
          onChange={inputHandling}
          color={`${isNic ? "#2da16b" : "#ff0000"}`}
        />
        <S.Pwrite
          placeholder="자기소개를 입력하세요"
          value={intro}
          onChange={introChange}
        />
      </S.scrollBox>

      <PrevButton onClick={() => Router.back()}>이전</PrevButton>
      {btnEnable ? (
        <NextButtonEnable onClick={onClick}>다음</NextButtonEnable>
      ) : (
        <NextButton onClick={() => alert("입력값을 다시 확인해 주세요!")}>
          다음
        </NextButton>
      )}
    </S.BackDiv>
  );
};

export default UserProfile;
