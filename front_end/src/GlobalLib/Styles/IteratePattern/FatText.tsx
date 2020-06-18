import React from "react";
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
  user-select: none;
`;

export default ({ text, className }: FatTextProps) => (
  <Text className={className}>{text}</Text>
);

type FatTextProps = {
  text: string;
  className?: any;
};
