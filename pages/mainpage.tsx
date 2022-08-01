import React from "react";
import styled from "styled-components";
import MainComponent from "../components/Main";

const main = () => {
  return (
    <Container>
      <MainComponent />
    </Container>
  );
};

const Container = styled.div`
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

export default main;
