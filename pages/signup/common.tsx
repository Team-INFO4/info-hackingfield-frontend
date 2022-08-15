import React from "react";
import styled from "styled-components";
import MainComponent from "../../components/Main/MainComponent";
import Login from "../../components/Main/Login";

const common = () => {
  return (
    <Wrapper>
      <MainComponent />
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
