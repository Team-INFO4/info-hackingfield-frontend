import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 3000px;
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
  z-index: 10;
  top: -376px;
  left: 128px;
  width: 624px;
  height: 624px;
  border: 1px solid #1cb56d;
  border-radius: 50%;
`;

export const Rcircle1 = styled.div`
  position: fixed;
  z-index: 10;
  width: 1200px;
  height: 600px;
  right: -11%;
  border: 2px dashed #1cb56d;
  bottom: 280px;
  background-size: 40px 10px;
  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

export const Rcircle2 = styled.div`
  position: fixed;
  z-index: 10;
  width: 1200px;
  height: 600px;
  right: -12%;
  border: 1px solid #1cb56d;
  bottom: 100px;
  background-size: 40px 10px;
  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

export const Rcircle3 = styled.div`
  position: fixed;
  z-index: 10;
  width: 1200px;
  height: 600px;
  right: -11%;
  border: 2px dashed #1cb56d;
  bottom: -100px;
  background-size: 40px 10px;
  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;
