import { FC } from "react";
import styled from "@emotion/styled";
import Rank from "../components/Raking";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Raking: FC = (): JSX.Element => {
  return (
    <HomePageContainer>
      <Rank />
    </HomePageContainer>
  );
};
export default Raking;
