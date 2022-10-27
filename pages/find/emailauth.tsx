import React from "react";
import styled from "styled-components";
import MainComponent from "../../components/Main/MainComponent";
import EmailAuth from "../../components/Main/EmailAuth";

const emailauth = () => {
  return (
    <Wrapper>
      <MainComponent />
      <EmailAuth />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 290vh;
  background-color: #333333;
`;

export default emailauth;
