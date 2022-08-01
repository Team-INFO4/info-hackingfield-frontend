import styled from "styled-components";

export const circle1 = styled.div`
  position: absolute;
  top: -376px;
  left: 128px;
  width: 624px;
  height: 624px;
  border: 1px solid #1cb56d;
  border-radius: 50%;
`;

export const Rcircle1 = styled.div`
  position: absolute;
  width: 1200px;
  height: 600px;
  left: 807px;
  border: 1px dashed #1cb56d;

  background-size: 40px 10px;
  transform: rotate(-30deg);
  border-radius: 50%;
  overflow: hidden;
`;

export const Customcircle = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23EC3463' stroke-width='1' stroke-dasharray='12' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 100px;
`;
