import { FC } from "react";
import styled from "@emotion/styled";
import ServiceGallery from "../components/ServiceGallery";
import ReportList from "../components/List/Lists";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Report: FC = (): JSX.Element => {
  return (
    <HomePageContainer>
      <ReportList />
    </HomePageContainer>
  );
};
export default Report;
