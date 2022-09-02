import { FC } from "react";
import styled from "@emotion/styled";
import ServiceGallery from "../components/ServiceGallery";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage: FC = (): JSX.Element => {
  return (
    <HomePageContainer>
      <ServiceGallery />
    </HomePageContainer>
  );
};
export default HomePage;
