import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
  H100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { Link } from "react-router-dom";
import FatText from "../../../GlobalLib/Styles/IteratePattern/FatText";
import useScroll from "../../../GlobalLib/RecycleFunction/Hooks/useScroll";
import ToggleMenuCon from "./ToggleMenu/ToggleMenuCon";

interface EnclosingProps {
  Position: any;
  Direction: number;
}
const Enclosing = styled(W100per)<EnclosingProps>`
  ${(prop) => {
    if (prop.Direction === -1 || prop.Position.y < 150) {
      return css`
        display: grid;
        transition: top 0.2s ease-in-out;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
  grid-template-columns: 270px 1fr 270px;
  position: fixed;
  height: 50px;
  background-color: #fafafa;
  z-index: 10;
`;
const Left = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
`;
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
const LI = styled.div`
  display: grid;
  justify-content: right;
  width: 22px;
  height: 22px;
  background-color: #2d3436;
  padding: 5px 2px 0 0;
`;
const LIT = styled.div`
  color: white;
  font-size: 1rem;
`;
const LogoText = styled(({ ...rest }) => <FatText {...rest} />)`
  display: inline-block;
  font-size: 20px;
  color: black;
`;
const Center = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 11px;
`;
const Right = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  padding: 0 11px 0 0;
  font-size: 1.2rem;
`;
const HMenu = styled(H100per)`
  display: flex;
  align-items: center;
  padding: 0 5px 0 5px;
  cursor: pointer;
  &:hover {
    & > div:nth-child(2) {
      display: flex;
    }
  }
`;
const MenuIcon = styled.i``;

export default () => {
  const { Position, Direction } = useScroll();
  return (
    <Enclosing Direction={Direction} Position={Position}>
      <Left>
        <LogoLink to="/home">
          <LI>
            <LIT>S</LIT>
          </LI>
          <LogoText text="quare Post" />
        </LogoLink>
      </Left>
      <Center></Center>
      <Right>
        <HMenu>
          <MenuIcon className="icon-menu" />
          <ToggleMenuCon />
        </HMenu>
      </Right>
    </Enclosing>
  );
};
