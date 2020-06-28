import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  WH100perInput,
  W100per,
  H100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { Link } from "react-router-dom";
import FatText from "../../../GlobalLib/Styles/IteratePattern/FatText";
import useSearch from "../../../GlobalLib/RecycleFunction/Hooks/useSearch";
import useScroll from "../../../GlobalLib/RecycleFunction/Hooks/useScroll";
import ToggleMenuCon from "./ToggleMenu/ToggleMenuCon";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useLoginCheck } from "../../../GlobalLib/Context/UserContext/IsLoggedIn";

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
  box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  z-index: 20;
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
const MyName = styled.div`
  margin: 0 0 0 30px;
  font-size: 1rem;
  cursor: pointer;
`;
const Center = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 11px;
`;
const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 35px;
  min-width: 370px;
  width: 50%;
  height: 35px;
`;
const SearchTxt = styled(WH100perInput)`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  background-color: #fafafa;
  border-bottom: 1px solid #636e72;
`;
const SearchBtn = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
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

export default ({ setLoginOpen }: PDHeaderPreProps) => {
  const { MEloading, MEdata } = useMyInfo();
  const { SearchKeyWord, Search } = useSearch();
  const { Position, Direction } = useScroll();
  const { isLoggedIn } = useLoginCheck();
  return (
    <Enclosing Direction={Direction} Position={Position}>
      <Left>
        <LogoLink to="/home">
          <LI>
            <LIT>S</LIT>
          </LI>
          <LogoText text="quare Post" />
        </LogoLink>
        {!isLoggedIn ? (
          <MyName
            onClick={(e) => {
              spaped(e);
              setLoginOpen(true);
            }}
          >
            Login
          </MyName>
        ) : MEloading ? (
          <MyName>Loading...</MyName>
        ) : (
          <MyName>{MEdata.username}</MyName>
        )}
      </Left>
      <Center>
        <SearchBox>
          <SearchTxt
            type="text"
            placeholder="Search"
            {...SearchKeyWord}
            onKeyUp={(e: any) => {
              if (e.keyCode === 13) {
                Search(e);
              }
            }}
            spellCheck="false"
          />
          <SearchBtn
            onClick={(e: any) => {
              Search(e);
            }}
          >
            <i className="icon-search" />
          </SearchBtn>
        </SearchBox>
      </Center>
      <Right>
        <HMenu>
          <MenuIcon className="icon-menu" />
          <ToggleMenuCon />
        </HMenu>
      </Right>
    </Enclosing>
  );
};

interface PDHeaderPreProps {
  setLoginOpen: any;
}
