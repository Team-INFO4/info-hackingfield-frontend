import { FC } from "react";
import styled from "@emotion/styled";
import Mypage from "../components/Mypage";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Report: FC = (): JSX.Element => {
  return (
    <HomePageContainer>
      <Mypage />
    </HomePageContainer>
  );
};
export default Report;
