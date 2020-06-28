import React, { useState } from "react";
import styled from "styled-components";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useSeeFriends } from "../../../GlobalLib/Context/UserContext/SeeFriends";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin: 20px 0 0 0;
  justify-content: right;
  user-select: none;
  @media (max-width: 1300px) {
    margin: 0 0 0 0;
  }
`;
const Friends = styled.div`
  display: grid;
  grid-template-rows: 42px 270px;
  width: 270px;
  /* justify-content: right; */
  @media (max-width: 1300px) {
    display: none;
  }
`;
const ToggleSelect = styled.div`
  display: flex;
  min-width: 180px;
  align-items: center;
  justify-content: center;
`;
const Explan = styled.div`
  padding: 10px;
  font-size: 1.2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Toggle = styled.div`
  display: flex;
  padding: 10px;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Tiles = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
const Tile = styled(WH100per)`
  position: relative;
`;
const DarkBack = styled(WH100per)`
  display: flex;
  position: absolute;
  justify-content: center;
  padding: 3px 0 0 3px;
  background-color: rgba(45, 52, 54, 0.1);
  &:hover {
    background-color: rgba(45, 52, 54, 0.25);
  }
  cursor: pointer;
`;
interface AvatarProp {
  url: string;
}
const Avatar = styled(WH100per)<AvatarProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;
const DACon = styled(WH100per)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  background-color: #dfe6e9;
  font-size: 3.5rem;
`;
const DefaultAvatar = styled.i`
  display: grid;
  padding: 0;
  margin: 0 0 -10px 0;
`;
const Username = styled.div`
  font-size: 1rem;
  color: white;
`;

export default () => {
  const SF = useSeeFriends();
  const [C_kinds, setC_kinds] = useState("Friends");
  return (
    <Wrapper>
      <Friends>
        <ToggleSelect>
          {C_kinds === "Groups" ? (
            <Toggle
              onClick={(e) => {
                spaped(e);
                setC_kinds("Friends");
              }}
            >
              Groups
            </Toggle>
          ) : (
            <Toggle
              onClick={(e) => {
                spaped(e);
                setC_kinds("Groups");
              }}
            >
              Friends
            </Toggle>
          )}
          <Explan>Connection</Explan>
        </ToggleSelect>
        <Tiles>
          {!SF.myF_load &&
            SF.myF.seeFriends.map((item: any) => (
              <Tile key={item.user_id}>
                <DarkBack>
                  <Username>{item.username}</Username>
                </DarkBack>
                {item.avatar ? (
                  <Avatar url={item.avatar}></Avatar>
                ) : (
                  <DACon>
                    <DefaultAvatar className="icon-noun_user_856030" />
                  </DACon>
                )}
              </Tile>
            ))}
        </Tiles>
      </Friends>
    </Wrapper>
  );
};
