import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  position: relative;
  padding-top: 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #0d1117;

  @media only screen and (max-width: 1279px) {
    padding-top: 30px;
  }
`;

export const Subtitle = styled.div`
  font-size: 32px;
  font-weight: 400;
  z-index: 10;
  padding-left: 10%;
  color: white;

  @media only screen and (max-width: 1279px) {
    margin: 0 auto;
    font-size: 28px;
    padding: 0;
  }
`;
