import React from "react";
import styled from "styled-components";
import Login from "../components/Main/Login";
import MainComponent from "../components/Main/MainComponent";

const main = () => {
  return (
    <Wrapper>
      <MainComponent />
      <Login />
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
