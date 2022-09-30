import React from "react";
import styled from "styled-components";
import MainComponent from "../../../components/Main/MainComponent";
import TeamTerms from "../../../components/Main/team/TeamTerms";

const team = () => {
  return (
    <Wrapper>
      <MainComponent />
      <TeamTerms />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 290vh;
  background-color: #333333;
`;

export default team;
