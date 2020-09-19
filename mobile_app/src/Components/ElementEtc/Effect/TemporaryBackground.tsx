import React from "react";
import styled, { css } from "styled-components/native";

interface zIndex {
  zIndex: number;
}
const LookLike = styled.TouchableOpacity<zIndex>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #636e72;
  opacity: 0.6;
  ${(p) => {
    return css`
      z-index: ${p.zIndex};
    `;
  }}
`;

const TemporaryBackground = ({
  onPress,
  zIndex = 10,
}: TemporaryBackgroundProps) => {
  return <LookLike onPress={onPress} zIndex={zIndex} />;
};
type TemporaryBackgroundProps = {
  onPress?: any;
  zIndex?: number;
};

export default React.memo(TemporaryBackground);
