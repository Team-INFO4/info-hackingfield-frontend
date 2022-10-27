import React from "react";
import styled from "styled-components";
import MainComponent from "../../components/Main/MainComponent";
import PasswordReset from "../../components/Main/PasswordReset";

const passwordReset = () => {
  return (
    <Wrapper>
      <MainComponent />
      <PasswordReset />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 290vh;
  background-color: #333333;
`;

export default passwordReset;
