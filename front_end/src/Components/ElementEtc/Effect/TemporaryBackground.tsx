import React from "react";
import styled, { css } from "styled-components";

interface zIndex {
  zIndex: number;
}
const LookLike = styled.div<zIndex>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #636e72;
  opacity: 0.6;
  ${(prop) => {
    return css`
      z-index: ${prop.zIndex};
    `;
  }}
`;

const TemporaryBackground = ({
  onClick,
  zIndex = 10,
}: TemporaryBackgroundProps) => {
  return <LookLike onClick={onClick} zIndex={zIndex} />;
};
type TemporaryBackgroundProps = {
  onClick?: any;
  zIndex?: number;
};

export default React.memo(TemporaryBackground);
