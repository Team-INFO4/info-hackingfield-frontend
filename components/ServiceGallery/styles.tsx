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
  margin-top: 100px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;
`;

export const Selected = styled.div`
  width: 104px;
  height: 0;
  margin: 13px auto;
  border: 1px solid #ffffff;
  text-align: center;
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

export const Box = styled.div`
  width: 1180px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Gallery = styled.div`
  width: 372px;
  height: 372px;
  margin-top: 12px;
  margin-bottom: 32px;
  background: #161b22;
  border-radius: 16px;
  cursor: pointer;
`;

export const Name = styled.div`
  height: 30px;
  margin-left: 16px;
  margin-top: 12px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

export const Date = styled.div`
  width: 210px;
  height: 46px;
  margin-top: 15px;
  margin-left: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #bbbbbb;
  flew-wrap: wrap;
`;

export const Search = styled.input`
  width: 380px;
  height: 40px;
  margin-bottom: 98px;
  background: #161b22;
  border: none;
  border-radius: 4px;
  font-weight: 400;
  font-size: 15px;
  color: #555555;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  margin-left: 10px;
  background: #1cb56d;
  border-radiuse: 4px;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
`;

export const PageNumberDiv = styled.div`
  width: 160px;
  height: 26px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto 124px auto;
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
