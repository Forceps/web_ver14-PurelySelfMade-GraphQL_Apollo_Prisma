import React from "react";
import styled from "styled-components/native";

const LogoLink = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
interface sizeProps {
  size: number;
}
const LI = styled.View<sizeProps>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: ${(p) => `${p.size * 1.34}px`};
  height: ${(p) => `${p.size * 1.34}px`};
  background-color: #2d3436;
  padding: ${(p) => `0 ${(p.size * 5) / 42}px 0 0`};
`;
const LIT = styled.Text<sizeProps>`
  display: flex;
  color: white;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: ${(p) => `${(p.size * 32) / 42}px`};
`;
const LogoText = styled.Text<sizeProps>`
  display: flex;
  font-size: ${(p) => `${p.size}px`};
  color: black;
  font-weight: 600;
`;

const Logo = ({ size = 27 }: LogoProps) => {
  return (
    <LogoLink>
      <LI size={size}>
        <LIT size={size}>S</LIT>
      </LI>
      <LogoText size={size}>quare Post</LogoText>
    </LogoLink>
  );
};

interface LogoProps {
  size?: number;
}

export default React.memo(Logo);
