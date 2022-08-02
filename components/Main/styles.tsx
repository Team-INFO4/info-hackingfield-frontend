import styled from "styled-components";

export const styledDiv = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  color: #ffffff;
  font-weight: normal;

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
  top: 300px;
  left: 480px;
  width: 500px;
  height: 600px;
  // background-color: black;
`;

export const titleDiv = styled.div`
  width: 230px;
  height: 80px;
  position: relative;
  top: 0px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 400;
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

export const bodyDiv = styled.div`
  width: 420px;
  height: 100px;
  top: 112px;
  text-align: center;
  margin: 0 auto;
  position: relative;
`;

export const iconBox = styled.div`
  width: 420px;
  height: 130px;
  top: 200px;
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

export const jpBox = styled.div`
  width: 100px;
  height: 80px;
  left: 50px;
  position: relative;
`;

export const jhBox = styled.div`
  width: 100px;
  height: 80px;
  left: 180px;
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
  top: 1080px;
  background: url("/images/Banner img_02.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BgContainer3 = styled.div`
  position: relative;
  top: 1080px;
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
  bottom: -100px;
  background-size: 40px 10px;
  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;
