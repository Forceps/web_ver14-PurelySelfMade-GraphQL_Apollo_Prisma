import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FatText from "../../../GlobalLib/Styles/IteratePattern/FatText";

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
interface sizeProps {
  size: number;
}
const LI = styled.div<sizeProps>`
  display: grid;
  justify-content: right;
  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
  background-color: #2d3436;
  padding: ${(p) => `${(p.size * 2) / 9}px ${(p.size * 5) / 54}px 0 0`};
`;
const LIT = styled.div<sizeProps>`
  color: white;
  font-size: ${(p) => `${(p.size * 2) / 45}rem`};
`;
const LogoText = styled(({ size, ...rest }) => <FatText {...rest} />)<
  sizeProps
>`
  display: inline-block;
  font-size: ${(p) => `${p.size / 16}rem`};
  color: black;
`;

export default ({ size = 27 }: LogoProps) => {
  return (
    <LogoLink to="/">
      <LI size={size}>
        <LIT size={size}>S</LIT>
      </LI>
      <LogoText text="quare Post" size={size} />
    </LogoLink>
  );
};

interface LogoProps {
  size?: number;
}
