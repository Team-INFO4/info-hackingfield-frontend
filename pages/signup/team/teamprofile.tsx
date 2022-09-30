import React from "react";
import styled from "styled-components";
import MainComponent from "../../../components/Main/MainComponent";
import TeamProfile from "../../../components/Main/team/TeamProfile";
const userProfile = () => {
  return (
    <Wrapper>
      <MainComponent />
      <TeamProfile />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 290vh;
  background-color: #333333;
`;

export default userProfile;
