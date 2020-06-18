import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled.div`
  width: 100%;
  height: 100%;
`;
export const WH100perI = styled.i`
  width: 100%;
  height: 100%;
`;
export const WH100perInput = styled.input`
  width: 100%;
  height: 100%;
`;
export const W100per = styled.div`
  width: 100%;
`;
export const H100per = styled.div`
  height: 100%;
`;

export const GoodLink = ({
  children,
  to,
  color = "#74b9ff",
}: GoodLinkProps) => {
  return (
    <Link
      to={to}
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{ color }}
    >
      {children}
    </Link>
  );
};
interface GoodLinkProps {
  children: any;
  to: string;
  color?: string;
}

export const WH100perLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: black;
`;
