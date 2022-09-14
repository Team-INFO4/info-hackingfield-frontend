import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #0d1117;
  overflow: hidden;
`;

export const Title = styled.div`
  width: 70px;
  height: 26px;
  margin: 100px auto 0px auto;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;

export const GalleryBox = styled.div`
  position: relative;
  width: 1180px;
  margin: 0 auto;
`;

export const SelectBox = styled.select`
  width: 100px;
  height: 22px;
  float: right;
  margin-top: 47px;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  background-color: black;
  border: none;
  color: #ffffff;
`;

export const Selected = styled.div`
  width: 70px;
  height: 0;
  margin: 13px auto;
  border: 1px solid #ffffff;
  text-align: center;
`;

export const Line = styled.div`
  width: 1180px;
  background: #ffffff;
  border: 1px solid #ffffff;
  margin-top: 90px;
`;

export const DivideLine = styled(Line)`
  margin-top: 5px;
`;

export const BottomLine = styled(Line)`
  margin-top: 0;
`;

export const Div = styled.div`
  width: 100%;
  background-color: #0d1117;
`;

export const ListTitleBox = styled.div`
  width: 100%;
  height: 26px;
  display: inline-grid;
  grid-template-columns: 5% 65% 15% 15%;
`;

export const ListTitle = styled.div`
  height: 26px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 26px;
  display: inline-grid;
  grid-template-columns: 5% 65% 15% 15%;
  margin-top: 16px;
  margin-bottom: 16px;
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
  width: 1180px;
  border: 1px solid #555555;
`;

export const Box = styled.div`
  width: 1180px;
  height: 60px;
  margin-top: 16px;
`;

export const Search = styled.button`
  width: 80px;
  height: 40px;
  background: #1cb56d;
  border-radius: 4px;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  margin-left: 400px;
`;

export const PageNumberDiv = styled.div`
  width: 160px;
  height: 26px;
  display: flex;
  justify-content: space-evenly;
  margin: 82px auto 124px auto;
`;

export const Number = styled.div`
  width: 12px;
  height: 26px;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;
