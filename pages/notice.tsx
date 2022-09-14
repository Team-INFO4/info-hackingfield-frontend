import { FC } from "react";
import styled from "@emotion/styled";
import NoticeList from "../components/Notice/Notice";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Report: FC = (): JSX.Element => {
  return (
    <HomePageContainer>
      <NoticeList />
    </HomePageContainer>
  );
};
export default Report;
