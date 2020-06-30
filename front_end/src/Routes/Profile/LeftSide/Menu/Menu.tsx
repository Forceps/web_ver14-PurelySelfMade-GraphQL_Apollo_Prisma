import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import HiddenLMore from "./HiddenLMore";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import WH100per from "../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 35px 1fr;
  width: 100%;
  margin-top: 10px;
  user-select: none;
`;
const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 310px;
  margin-top: 10px;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;
const LinkS = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 1.1rem;
  padding: 0 0 0 10px;
  justify-self: right;
  color: black;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
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
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 1.1rem;
  padding: 0 0 0 10px;
  justify-self: right;
  color: black;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
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
const MenuItemO1 = styled(MenuItem)`
  display: none;
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
const MetaSelect = styled(WH100per)`
  display: grid;
  grid-template-columns: 80px 70px 1fr;
  padding: 0 7px 0 7px;
  font-size: 1.1rem;
`;
const MetaItem = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #b2bec3;
  cursor: pointer;
`;
interface InsideProp {
  Inside: boolean;
}
const MetaItem1 = styled(MetaItem)<InsideProp>`
  ${(p) => {
    if (!p.Inside) {
      return css`
        border-bottom: 1px solid black;
      `;
    }
  }}
`;
const MetaItem2 = styled(MetaItem)<InsideProp>`
  ${(p) => {
    if (p.Inside) {
      return css`
        border-bottom: 1px solid black;
      `;
    }
  }}
`;

export default () => {
  const PfM = useProfileMode();
  const ME = useMyInfo();
  const [More, setMore] = useState(false);
  const [Inside, setInside] = useState(true);
  return (
    <Wrapper>
      <MetaSelect>
        <MetaItem1
          onClick={() => {
            setInside(false);
          }}
          Inside={Inside}
        >
          Outside
        </MetaItem1>
        <MetaItem2
          onClick={() => {
            setInside(true);
          }}
          Inside={Inside}
        >
          Inside
        </MetaItem2>
      </MetaSelect>
      <LeftMenu>
        {Inside ? (
          <>
            <MenuItem
              onClick={(e) => {
                spaped(e);
                PfM.setMode(["Post"]);
              }}
            >
              <MenuIcon className="icon-pinboard hovMenuIcon" />
              <MenuTxt className="hovMenuTxt">Post</MenuTxt>
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                spaped(e);
                PfM.setMode(["Archive"]);
              }}
            >
              <MenuIcon className="icon-folder hovMenuIcon" />
              <MenuTxt className="hovMenuTxt">Archive</MenuTxt>
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                spaped(e);
                PfM.setMode(["Settings"]);
              }}
            >
              <MenuIcon className="icon-sliders hovMenuIcon" />
              <MenuTxt className="hovMenuTxt">Settings</MenuTxt>
            </MenuItem>
          </>
        ) : (
          <>
            <LinkS to={`/`}>
              <MenuIcon className="icon-home-1 hovMenuIcon" />
              <MenuTxt className="hovMenuTxt">Home</MenuTxt>
            </LinkS>
            <LinkS to={`/bookmark/${ME?.MEdata?.user_id}`}>
              <MenuIcon className="icon-bookmark hovMenuIcon" />
              <MenuTxt className="hovMenuTxt">Bookmark</MenuTxt>
            </LinkS>
            <MenuItem
              onClick={(e) => {
                spaped(e);
                PfM.setMode("Chat");
              }}
            >
              <MenuIcon className="icon-comment hovMenuIcon" />
              <MenuTxt className="hovMenuTxt">Chat</MenuTxt>
            </MenuItem>
          </>
        )}

        {More ? (
          <HiddenLMore setMore={setMore} />
        ) : (
          <MenuItemO1
            onClick={(e) => {
              spaped(e);
              setMore(true);
            }}
          >
            <MenuIcon className="icon-dot-3" />
            <MenuTxt className="hovMenuTxt">More</MenuTxt>
          </MenuItemO1>
        )}
      </LeftMenu>
    </Wrapper>
  );
};
