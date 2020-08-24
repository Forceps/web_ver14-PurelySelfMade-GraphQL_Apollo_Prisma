import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useLoginCheck } from "../../../GlobalLib/Context/UserContext/IsLoggedIn";
import Logo from "../Effect/Logo";

const JustifyPosition = styled(W100per)`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const MenuTopContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  justify-content: right;
  user-select: none;
`;
const OutlineBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 0;
  width: 170px;
`;
const Item = styled(W100per)`
  display: flex;
  font-size: 20px;
  justify-content: left;
  align-items: center;
  height: 60px;
  padding: 10px;
  color: black;
  &:hover {
    background-color: #dfe6e9;
  }
  transition-property: background-color;
  transition-duration: 0.12s;
  transition-timing-function: ease;
  cursor: pointer;
`;
const LittleItem = styled(Item)`
  height: 40px;
  font-size: 1rem;
`;
const Icon = styled.i`
  margin: 0 10px 0 0;
`;

export default ({
  MoreMenu,
  setMoreMenu,
  localLogOutMutation,
  Notification,
  Chat,
  Bookmark,
  Log,
}: LeftSideMenuPreProps) => {
  const { isLoggedIn } = useLoginCheck();
  const { MEloading, MEdata } = useMyInfo();

  return (
    <JustifyPosition>
      <MenuTopContainer>
        <Logo />
        <OutlineBox>
          {MEloading ? (
            <>
              {Notification && (
                <Item>
                  <Icon className="icon-bell" /> Notification
                </Item>
              )}
              {Chat && (
                <Item>
                  <Icon className="icon-comment-empty" /> Chat
                </Item>
              )}
              {Bookmark && (
                <Item>
                  <Icon className="icon-bookmark-empty" /> Bookmark
                </Item>
              )}
              <Item>
                <Icon
                  className="icon-noun_user_856030"
                  style={{
                    fontSize: 25,
                    marginLeft: -4,
                    marginRight: 6,
                  }}
                />
                Profile
              </Item>
            </>
          ) : (
            <>
              {Notification && (
                <Link to={`/notification`}>
                  <Item>
                    <Icon className="icon-bell" /> Notification
                  </Item>
                </Link>
              )}
              {Chat && (
                <Link to={`/chat`}>
                  <Item>
                    <Icon className="icon-comment-empty" /> Chat
                  </Item>
                </Link>
              )}
              {Bookmark && (
                <Link to={`/bookmark/${MEdata?.user_id}`}>
                  <Item>
                    <Icon className="icon-bookmark-empty" /> Bookmark
                  </Item>
                </Link>
              )}
              <Link to={`/profile`}>
                <Item>
                  <Icon
                    className="icon-noun_user_856030"
                    style={{
                      fontSize: 25,
                      marginLeft: -4,
                      marginRight: 6,
                    }}
                  />
                  Profile
                </Item>
              </Link>
            </>
          )}
          {MoreMenu ? (
            <>
              <LittleItem
                onClick={() => {
                  setMoreMenu(false);
                }}
              >
                <Icon className="icon-up-open" />
                Close
              </LittleItem>
              {Log && (
                <Link to={`/Log`}>
                  <LittleItem>
                    <Icon className="icon-history" /> Log
                  </LittleItem>
                </Link>
              )}
              <LittleItem>
                <Icon className="icon-info" />
                Information
              </LittleItem>
              {isLoggedIn && (
                <LittleItem
                  onClick={() => {
                    localLogOutMutation();
                  }}
                >
                  <Icon
                    className="icon-noun_sign-out_1713306"
                    style={{
                      fontSize: 25,
                      marginBottom: -7,
                      marginLeft: -9,
                    }}
                  />
                  Log out
                </LittleItem>
              )}
            </>
          ) : (
            <Item
              onClick={() => {
                setMoreMenu(true);
              }}
            >
              <Icon className="icon-dot-3" /> More
            </Item>
          )}
        </OutlineBox>
      </MenuTopContainer>
    </JustifyPosition>
  );
};

interface LeftSideMenuPreProps {
  MoreMenu: boolean;
  setMoreMenu: any;
  localLogOutMutation: any;
  Notification: boolean;
  Chat: boolean;
  Bookmark: boolean;
  Log: boolean;
}
