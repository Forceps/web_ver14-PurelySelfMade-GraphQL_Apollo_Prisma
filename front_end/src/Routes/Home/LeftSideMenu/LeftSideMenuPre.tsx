import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";
import FatText from "../../../GlobalLib/Styles/IteratePattern/FatText";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";

const Wrapper = styled(W100per)`
  display: grid;
  grid-template-rows: 50px 1fr;
  justify-content: right;
  padding: 10px;
  user-select: none;
`;
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
const LI = styled.div`
  display: grid;
  justify-content: right;
  width: 27px;
  height: 27px;
  background-color: #2d3436;
  padding: 6px 2.5px 0 0;
`;
const LIT = styled.div`
  color: white;
  font-size: 1.2rem;
`;
const LogoText = styled(({ ...rest }) => <FatText {...rest} />)`
  display: inline-block;
  font-size: 27px;
  color: black;
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
  cursor: pointer;
`;
const LittleItem = styled(Item)`
  height: 40px;
  font-size: 1.1rem;
`;
const Icon = styled.i`
  margin: 0 10px 0 0;
`;

export default ({
  MoreMenu,
  setMoreMenu,
  localLogOutMutation,
}: LeftSideMenuPreProps) => {
  const ME = useMyInfo();

  return (
    <>
      <Wrapper>
        <LogoLink to="/home">
          <LI>
            <LIT>S</LIT>
          </LI>
          <LogoText text="quare Post" />
        </LogoLink>
        <OutlineBox>
          {ME?.MEloading ? (
            <>
              <Item>
                <Icon className="icon-bell" /> Notification
              </Item>
              <Item>
                <Icon className="icon-comment-empty" /> Chat
              </Item>
              <Item>
                <Icon className="icon-bookmark-empty" /> Bookmark
              </Item>
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
              <Link to={`/notification`}>
                <Item>
                  <Icon className="icon-bell" /> Notification
                </Item>
              </Link>
              <Link to={`/chat`}>
                <Item>
                  <Icon className="icon-comment-empty" /> Chat
                </Item>
              </Link>
              <Link to={`/bookmark/${ME?.MEdata?.user_id}`}>
                <Item>
                  <Icon className="icon-bookmark-empty" /> Bookmark
                </Item>
              </Link>
              <Link to={`/profile/${ME?.MEdata?.user_id}`}>
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
              <LittleItem
                onClick={() => {
                  localLogOutMutation();
                }}
              >
                Log out
              </LittleItem>
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
      </Wrapper>
    </>
  );
};

interface LeftSideMenuPreProps {
  MoreMenu: boolean;
  setMoreMenu: any;
  localLogOutMutation: any;
}
