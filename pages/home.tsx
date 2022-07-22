import { FC } from "react";
import Home from "../components/Home";
import styled from "@emotion/styled";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage: FC = (): JSX.Element => {
  return (
    <HomePageContainer>
      <Home />
    </HomePageContainer>
  );
};
export default HomePage;
