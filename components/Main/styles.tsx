import styled from "styled-components";

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
  top: 340px;
  left: 430px;
  width: 500px;
  height: 600px;
  // background-color: black;
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
  top: 1200px;
  background: url("/images/Banner img_02.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BgContainer3 = styled.div`
  position: relative;
  top: 1320px;
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
  top: -376px;
  left: 128px;
  width: 624px;
  height: 624px;
  border: 1px solid #1cb56d;
  border-radius: 50%;
`;

export const Rcircle1 = styled.div`
  position: fixed;
  z-index: 1;
  width: 1200px;
  height: 600px;
  right: -20%;
  border: 2px dashed #1cb56d;
  opacity: 0.5;
  bottom: 280px;
  background-size: 40px 10px;
  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

export const Rcircle2 = styled.div`
  position: fixed;
  z-index: 1;
  width: 1200px;
  height: 600px;
  right: -20%;
  border: 1px solid #1cb56d;
  bottom: 100px;
  background-size: 40px 10px;
  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

export const Rcircle3 = styled.div`
  position: fixed;
  z-index: 1;
  width: 1200px;
  height: 600px;
  right: -20%;
  border: 2px dashed #1cb56d;
  opacity: 0.5;
  bottom: -100px;
  background-size: 40px 10px;
  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

/*
  Login style
*/

export const BackDiv = styled.div`
  z-index: 2;
  top: 0px;
  width: 544px;
  height: 1080px;
  position: fixed;
  right: 370px;
  background: rgba(13, 17, 23, 0.8);
`;

export const LogoBox = styled.div`
  position: absolute;
  top: 300px;
  width: 450px;
  height: 130px;
  left: 45px;
  background-image: url("/images/Logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;
