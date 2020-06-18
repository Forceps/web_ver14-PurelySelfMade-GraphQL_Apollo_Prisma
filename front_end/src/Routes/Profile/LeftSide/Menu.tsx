import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProfileMode } from "../../../GlobalLib/Context/ProfileContext/ProfileMode";
import HiddenLMore from "./HiddenLMore";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me/Me";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: right;
  margin-top: 20px;
  user-select: none;
`;
const LeftMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 310px;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;
const LinkS = styled(Link)`
  display: flex;
  align-items: center;
  width: 150px;
  height: 50px;
  font-size: 1.3rem;
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
  width: 150px;
  height: 50px;
  font-size: 1.3rem;
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

export default () => {
  const PfM = useProfileMode();
  const ME = useMyInfo();
  const [More, setMore] = useState(false);
  return (
    <Wrapper>
      <LeftMenu>
        <LinkS to={`/`}>
          <MenuIcon className="icon-home-1 hovMenuIcon" />
          <MenuTxt className="hovMenuTxt">Home</MenuTxt>
        </LinkS>
        <LinkS to={`/bookmark/${ME?.MEdata?.user_id}`}>
          <MenuIcon className="icon-bookmark hovMenuIcon" />
          <MenuTxt className="hovMenuTxt">Bookmark</MenuTxt>
        </LinkS>
        {[
          [<MenuIcon className="icon-comment hovMenuIcon" />, "Chat"],
          [<MenuIcon className="icon-pinboard hovMenuIcon" />, "Post"],
          [<MenuIcon className="icon-folder hovMenuIcon" />, "Archive"],
        ]?.map((Item: any) => (
          <MenuItem
            key={Item[1]}
            onClick={(e) => {
              spaped(e);
              PfM.setMode([Item[1]]);
            }}
          >
            {Item[0]}
            <MenuTxt className="hovMenuTxt">{Item[1]}</MenuTxt>
          </MenuItem>
        ))}
        <MenuItem
          onClick={(e) => {
            spaped(e);
            PfM.setMode(["Settings"]);
          }}
        >
          <MenuIcon className="icon-sliders hovMenuIcon" />
          <MenuTxt className="hovMenuTxt">Settings</MenuTxt>
        </MenuItem>

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
