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
  width: 100%;
  height: 100%;
  background: url("/images/Banner img_01.png");
`;

export default main;
