import React from "react";
import styled from "styled-components";
import MainComponent from "../components/Main";

const main = () => {
  return (
    <Wrapper>
      <MainComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 3000px;
  background-color: #333333;
`;

export default main;
