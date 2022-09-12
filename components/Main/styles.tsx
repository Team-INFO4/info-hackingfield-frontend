import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const styledDiv = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  background-color: #333333;
  font-weight: 300;

  h1 {
    font-size: 32px;
    margin: 0px;
  }
  h2 {
    font-size: 20px;
    margin: 0px;
  }
  h3 {
    font-size: 18px;
    margin: 0px;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 3000px;
`;

export const textDiv = styled.div`
  position: relative;
  top: 31vh;
  left: 22%;
  width: 500px;
  height: 600px;

  @media screen and (max-width: 1780px) {
    left: 15%;
  }
  @media screen and (max-width: 1660px) {
    left: 8%;
  }
  @media screen and (max-height: 800px) {
    top: 220px;
  }
`;

export const titleDiv = styled.div`
  width: 260px;
  height: 80px;
  position: relative;
  top: 0px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-weight: 700;
    margin: 10px;
  }

  h2 {
    font-weight: 200;
  }
`;

export const Bar = styled.div`
  position: absolute;
  top: 160px;
  left: 43%;
  width: 72px;
  height: 1px;
  border: 1px solid white;
  background-color: white;
`;

export const xBar1 = styled.div`
  position: absolute;
  top: 160px;
  left: 45%;
  width: 43px;
  height: 1px;
  border: 1px solid white;
  transform: rotate(-45deg);
  background-color: white;
`;

export const xBar2 = styled.div`
  position: absolute;
  top: 160px;
  left: 45%;
  width: 43px;
  height: 1px;
  border: 1px solid white;
  transform: rotate(45deg);
  background-color: white;
`;

export const bodyDiv = styled.div`
  width: 420px;
  height: 100px;
  top: 112px;
  text-align: center;
  margin: 0 auto;
  margin-top: 25px;
  position: relative;
`;

export const iconBox = styled.div`
  width: 420px;
  height: 130px;
  top: 160px;
  display: flex;
  text-align: center;
  margin: 0 auto;
  position: relative;
  //background-color: rosybrown;
  h3 {
    font-size: 16px;
    font-weight: 200;
  }
`;

export const iconBox2 = styled.div`
  width: 420px;
  height: 130px;
  top: 160px;
  text-align: left;
  margin: 0 auto;
  position: relative;

  p {
    width: 300px;
    display: inline-block;
    position: absolute;
    top: -3px;
    left: 100px;
    font-size: 16px;
    font-weight: 200;
  }
`;

export const jpBox = styled.div`
  width: 100px;
  height: 80px;
  left: 50px;
  margin: 0px;
  position: relative;
`;

export const jhBox = styled.div`
  width: 100px;
  height: 80px;
  left: 180px;
  margin: 0px;
  position: relative;
`;

export const jpBox2 = styled.div`
  width: 100px;
  height: 80px;
  left: 50px;
  margin: 0px;
  position: relative;
`;

export const jhBox2 = styled.div`
  width: 100px;
  height: 80px;
  left: 50px;
  margin-top: 20px;
  position: relative;
`;

export const BgContainer1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url("/images/Banner img_01.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BgContainer2 = styled.div`
  position: relative;
  top: 115vh;
  background: url("/images/Banner img_02.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BgContainer3 = styled.div`
  position: relative;
  top: 130vh;
  background: url("/images/Banner img_03.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const circle1 = styled.div`
  position: fixed;
  z-index: 1;
  // 1080 => -376px
  top: -35vh;
  left: 12vh;
  width: 58vh;
  height: 58vh;
  border: 1px solid #1cb56d;
  border-radius: 50%;
`;

export const Rcircle1 = styled.div`
  position: fixed;
  z-index: 1;
  width: 63vw;
  height: 55vh;
  right: -8%;
  border: 2px dashed #1cb56d;
  opacity: 0.3;
  bottom: 26vh;

  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

export const Rcircle2 = styled.div`
  position: fixed;
  z-index: 1;
  width: 63vw;
  height: 55vh;
  right: -8%;
  border: 1px solid #1cb56d;
  bottom: 9vh;

  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

export const Rcircle3 = styled.div`
  position: fixed;
  z-index: 1;
  width: 63vw;
  height: 55vh;
  right: -8%;
  border: 2px dashed #1cb56d;
  opacity: 0.3;
  bottom: -9vh;

  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

/*
  Login style
*/

const divFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity : 1;
  }
  
`;

export const BackDiv = styled.div`
  z-index: 2;
  top: 0px;
  width: 29vw;
  height: 100vh;
  position: fixed;
  right: 19vw;
  background: rgba(13, 17, 23, 0.8);
  animation: ${divFade} 2s;
  color: white;
  .sul {
    position: absolute;
    top: 28vh;
  }
  li {
    margin-left: 25px;
    @media screen and (max-width: 1660px) {
      margin-left: 13px;
    }
    @media screen and (max-width: 1440px) {
      margin-left: 7px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    top: 48px;
    left: 42%;
    @media screen and (max-width: 1600px) {
      top: 42px;
    }
  }
  h3 {
    font-size: 16px;
    font-weight: 500;
  }
  @media screen and (max-width: 1200px) {
    width: 348px;
  }
`;

export const LogoBox = styled.div`
  position: absolute;
  //1080 => 300px
  top: 28vh;
  width: 23.5vw;
  height: 130px;
  left: 2.5vw;
  background-image: url("/images/Logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 1200px) {
    width: 282px;
  }
`;

export const styledInput = styled.input`
  position: relative;
  padding-left: 28px;
  width: 25vw;
  height: 60px;
  top: 42.5vh;
  left: 1.5vw;
  margin-top: 20px;
  background: #161b22;
  border: 1px solid #161b22;
  border-radius: 4px;
  font-size: 16px;
  color: #555555;
  &:focus {
    outline: 2px solid #2da16b;
  }
  @media screen and (max-width: 1200px) {
    width: 300px;
  }
  @media screen and (max-height: 950px) {
    height: 50px;
  }
`;

export const styledButton = styled.button`
  position: absolute;
  width: 25vw;
  height: 68px;
  left: 1.5vw;
  top: 57.8vh;
  background: #555555;
  border: 1px solid #555555;
  margin-top: 25px;
  border-radius: 8px;
  font-size: 15px;
  color: #bbbbbb;
  @media screen and (max-width: 1200px) {
    width: 300px;
  }
  @media screen and (max-height: 950px) {
    height: 60px;
    margin-top: 42px;
  }
`;

export const styledButtonEnable = styled.button`
  position: absolute;
  width: 25vw;
  height: 68px;
  left: 1.5vw;
  top: 57.8vh;
  background: #1cb56d;
  border: 1px solid #1cb56d;
  border-radius: 8px;
  margin-top: 25px;
  font-size: 15px;
  transition: 0.5s;
  color: #ffffff;
  &:hover {
    background-color: #2da16b;
    transition: 0.5s;
    color: #ffffff;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    width: 300px;
  }
  @media screen and (max-height: 950px) {
    height: 60px;
    margin-top: 42px;
  }
`;

export const textBox = styled.div`
  width: 23.5vw;
  left: 2.5vw;
  display: flex;
  position: absolute;
  color: #ffffff;
  top: 67vh;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 282px;
  }
  @media screen and (max-height: 950px) {
    top: 70vh;
  }
  h3 {
    &:hover {
      cursor: pointer;
    }
  }
`;

/*
  Resister(회원가입) 스타일
*/
export const arrowBox = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 58px;
  left: 36.5px;
  .arrow {
    color: white;
    &:hover {
      color: #1cb56d;
    }

    @media screen and (max-width: 1600px) {
      width: 35px;
      height: 35px;
    }
    @media screen and (max-width: 1440px) {
      width: 30px;
      height: 30px;
    }
  }
  cursor: pointer;
`;

export const SelectDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 27vw;
  height: 260px;
  margin: 0 auto;
  top: 36vh;
  @media screen and (max-width: 1200px) {
    width: 330px;
  }

  .btn {
    position: relative;
    width: 232px;
    height: 232px;
    background-color: #161b22;
    border-radius: 26px;
    &:hover {
      background-color: #1e2329;
      cursor: pointer;
      .Icon {
        filter: grayscale(0%) !important;
      }
      h3 {
        opacity: 1;
      }
      p {
        opacity: 1;
      }
    }

    h3 {
      position: relative;
      font-weight: 500;
      font-size: 18px;
      top: 40px;
      left: 38%;
      opacity: 0.5;
    }

    p {
      position: relative;
      font-weight: 500;
      font-size: 18px;
      top: 35px;
      left: 38%;
      opacity: 0.5;
    }
    @media screen and (max-width: 1800px) {
      width: 200px;
      height: 200px;
      h3 {
        top: 30px;
        left: 76px;
      }
      p {
        top: 11px;
      }
    }
    @media screen and (max-width: 1600px) {
      width: 180px;
      height: 180px;
      h3 {
        top: 20px;
        left: 66px;
      }
      p {
        top: -10px;
        left: 36%;
      }
    }
    @media screen and (max-width: 1440px) {
      width: 150px;
      height: 150px;
      h3 {
        top: 15px;
        left: 53px;
        font-size: 16px;
      }
      p {
        top: -25px;
        font-size: 16px;
      }
    }
  }

  .btn.active {
    background-color: #1cb56d;
    h3 {
      opacity: 1;
    }
    p {
      opacity: 1;
    }
    .Icon {
      filter: grayscale(0%) !important;
      opacity: 1 !important;
    }
  }
`;

export const userImage = styled.div`
  width: 150px;
  height: 112px;
  position: relative;
  top: 40px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("/images/Icon_user.svg");
  filter: grayscale(60%);

  @media screen and (max-width: 1800px) {
    top: 30px;
    width: 140px;
    height: 102px;
  }
  @media screen and (max-width: 1600px) {
    top: 20px;
    width: 130px;
    height: 92px;
  }
  @media screen and (max-width: 1440px) {
    top: 20px;
    width: 120px;
    height: 82px;
  }
`;

export const teamImage = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
  top: 40px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("/images/Icon_Team.svg");
  filter: grayscale(60%);

  @media screen and (max-width: 1800px) {
    top: 30px;
    width: 170px;
  }
  @media screen and (max-width: 1600px) {
    top: 20px;
    width: 150px;
  }
  @media screen and (max-width: 1440px) {
    top: 20px;
    width: 130px;
  }
`;

/* 
  이용약관
  */
export const TitleBox = styled.div`
  width: 250px;
  height: 40px;
  position: relative;
  left: 20%;
  @media screen and (max-width: 1800px) {
    left: 17%;
  }
  @media screen and (max-width: 1600px) {
    left: 14%;
  }
  @media screen and (max-width: 1440px) {
    left: 9%;
    top: -3px;
  }
`;

export const scrollBox = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  top: 18%;
  color: #bbbbbb;
  font-size: 18px;
  font-weight: 400;
  div {
    margin-top: 10px;
    width: 95%;
    height: 19vh;
    background-color: #161b22;
    border-radius: 4px;
    padding: 10px;
    overflow: scroll;
    overflow-x: hidden;
    font-size: 15px;
  }
  h3 {
    position: relative;
    margin: 0 25px 0 10px;
    display: inline-block;
  }
  @media screen and (max-width: 1440px) {
    font-size: 16px;
    div {
      font-size: 13px;
    }
    h3 {
      font-size: 14px;
    }
  }
  @media screen and (max-height: 1000px) {
    top: 15%;
  }

  .btn {
    width: 100%;
    overflow: hidden;
    background-color: rgba(13, 17, 23, 0);
    height: 40px;
    display: flex;
    color: #555555;
    justify-content: flex-end;
    align-items: center;
    &: hover {
      cursor: pointer;
    }
  }

  .btn.active {
    color: #1cb56d;
    h3 {
      color: #ffffff;
    }
  }
`;
