import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 80px;
  background-color: white;
  z-index: 9000;
`;
export default ({ onClick }: InstantMessageProps) => {
  return <Box onClick={onClick}></Box>;
};
type InstantMessageProps = {
  onClick?: any;
};
