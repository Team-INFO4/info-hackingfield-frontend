import styled from "@emotion/styled";

export const DesignCircle = styled.div`
  position: absolute;
  width: 624px;
  height: 624px;
  left: 85px;
  top: -200px;
  border-radius: 50%;
  border: 1px solid #1cb56d;
`;

export const DesignCircleDot = styled.div`
  position: absolute;
  width: 1200px;
  height: 600px;
  left: 1077px;
  top: 251px;
  border: 2px dashed #1cb56d;
  transform: rotate(-30deg);
  border-radius: 50%;
`;

export const DesignCircle2 = styled(DesignCircleDot)`
  top: 471px;
  border: 1px solid #1cb56d;
`;

export const DesignCircleDot2 = styled(DesignCircleDot)`
  top: 691px;
`;
