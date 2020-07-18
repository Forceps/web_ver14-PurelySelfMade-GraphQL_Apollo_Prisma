import React from "react";
import styled, { css } from "styled-components";
import { W100per } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";

interface MenuItemProps {
  curMode?: string;
  staMode?: string;
}
const MenuItem = styled(W100per)<MenuItemProps>`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 1.1rem;
  padding: 0 0 0 10px;
  justify-self: right;
  color: black;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
  ${(p) => {
    if (p.curMode && p.staMode) {
      if (p.curMode === p.staMode) {
        return css`
          border-left: 4px solid #2d3436;
        `;
      }
    }
  }}
  @media (max-width: 1300px) {
    display: grid;
    width: 100%;
    padding: 10px 0 10px 0;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #dfe6e9;
    }
  }
`;
const MenuIcon = styled.i`
  margin-right: 8px;
  @media (max-width: 1300px) {
    margin: 0;
    font-size: 1.1rem;
    text-align: center;
  }
`;
const MenuTxt = styled.div`
  @media (max-width: 1300px) {
    font-size: 1rem;
    padding: 3px 0 0 0;
    justify-content: center;
    align-items: center;
  }
`;

export default () => {
  const { Mode, setMode } = useProfileMode();
  return (
    <>
      <MenuItem
        onClick={(e: any) => {
          spaped(e);
          setMode(["Post"]);
        }}
        curMode={Mode[0]}
        staMode={"Post"}
      >
        <MenuIcon className="icon-pinboard hovMenuIcon" />
        <MenuTxt className="hovMenuTxt">Post</MenuTxt>
      </MenuItem>
      <MenuItem
        onClick={(e: any) => {
          spaped(e);
          setMode(["Archive"]);
        }}
        curMode={Mode[0]}
        staMode={"Archive"}
      >
        <MenuIcon className="icon-folder hovMenuIcon" />
        <MenuTxt className="hovMenuTxt">Archive</MenuTxt>
      </MenuItem>
      <MenuItem
        onClick={(e: any) => {
          spaped(e);
          setMode(["Settings"]);
        }}
        curMode={Mode[0]}
        staMode={"Settings"}
      >
        <MenuIcon className="icon-sliders hovMenuIcon" />
        <MenuTxt className="hovMenuTxt">Settings</MenuTxt>
      </MenuItem>
    </>
  );
};
