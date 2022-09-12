import React from "react";
import styled from "styled-components";
import MainComponent from "../../components/Main/MainComponent";
import UserInput from "../../components/Main/user/UserInput";
const user = () => {
  return (
    <Wrapper>
      <MainComponent />
      <UserInput />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 290vh;
  background-color: #333333;
`;

export default user;
