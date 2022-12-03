import styled from "@emotion/styled";
import { symlink } from "fs/promises";

export const HomeWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #0d1117;
  overflow: hidden;
`;

export const HeaderDiv = styled.div`
  width: 1180px;
  display: flex;
  justify-content: space-between;
  margin: 90px auto 0 auto;
`;

export const TitleDiv = styled.div`
  width: 200px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.div`
  width: 68px;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;

export const Back = styled.button`
  width: 80px;
  height: 40px;
  background: #1e2329;
  border-radius: 4px;
  font-weight: 500;
  font-size: 15px;
  color: #bbbbbb;
  border: none;
`;

export const ContentBox = styled.div`
  width: 1180px;
  display: flex;
  justify-content: space-between;
  margin: 44px auto 0 auto;
  background: rgba(13, 17, 23, 0.8);
  border-radius: 8px;
  margin-bottom: 120px;
`;

export const IntroduceDiv = styled.div`
  width: 330px;
  height: 510px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  width: 100px;
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin-top: 32px;
  display: flex;
`;

export const NameType = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #4a6ff0;
`;

export const Intro = styled.div`
  width: 330px;
  font-weight: 400;
  font-size: 16px;
  color: #bbbbbb;
  margin-top: 20px;
`;

export const Divide = styled.div`
  height: 510px;
  border: 1px solid #bbbbbb;
`;

export const WriteBox = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
`;

export const SpaceCheckDiv = styled.div`
  width: 720px;
  display: flex;
`;

export const CheckDiv = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const CheckReport = styled.div`
  width: 160px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;

export const Number = styled.div`
  width: 70px;
  font-weight: 500;
  font-size: 26px;
  text-align: center;
  color: #ffffff;
  margin-top: 30px;
`;

export const SpaceDivide = styled.div`
  width: 724px;
  border: 1px solid white;
  margin-top: 64px;
`;

export const ReportTitle = styled.div`
  width: 210px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: -40px;
`;

export const ListTitleBox = styled.div`
  width: 720px;
  height: 26px;
  display: inline-grid;
  grid-template-columns: 5% 65% 15% 15%;
`;

export const ListTitle = styled.div`
  height: 26px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
`;

export const WhiteDiv = styled.div`
  width: 724px;
  border: 1px solid #ffffff;
  margin-top: 30px;
`;

export const GrayTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #bbbbbb;
`;

export const WhiteTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-overflow: ellipsis;
`;

export const ContentDivide = styled.div`
  width: 724px;
  border: 1px solid #555555;
`;

export const ListContentBox = styled.div`
  width: 720px;
  display: inline-grid;
  grid-template-columns: 5% 65% 15% 15%;
  margin: 12px 0;
`;
