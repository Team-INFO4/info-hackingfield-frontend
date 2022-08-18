import React from "react";
import styled from "styled-components";
import MainComponent from "../../components/Main/MainComponent";
import Login from "../../components/Main/Login";
import Resister_select from "../../components/Main/Resister_select";

const common = () => {
  return (
    <Wrapper>
      <MainComponent />
      <Resister_select />
    </Wrapper>
  );
};

common.getInitialProps = async (ctx: { pathname: any }) => {
  const pathname = ctx.pathname;

  return { pathname };
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 290vh;
  background-color: #333333;
`;

export default common;
