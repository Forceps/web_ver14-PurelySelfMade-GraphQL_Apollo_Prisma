import React from "react";
import styled from "styled-components";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import ImgIsScnCon from "../../../../Components/Media/Insert/ImgInsertScreen/ImgInSCon";
import {
  W100per,
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../../Components/User/Avatar";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";

const Identi = styled(W100per)`
  padding: 0 20px 0 10px;
  display: grid;
  justify-self: right;
  @media (max-width: 1300px) {
    padding: 0;
  }
`;
const Positioning = styled.div`
  margin: -96px 0 0 0;
  justify-self: right;
`;
const Con = styled.div`
  display: grid;
  width: 120px;
  height: 120px;
  margin: -96px 0 0 0;
  border: 2px solid white;
  justify-self: right;
  background-color: #dfe6e9;
  cursor: default;
`;
const DACon = styled(Con)`
  font-size: 88px;
`;
const DefaultAvatar = styled.i`
  display: grid;
  margin: 24px 0 0 -4.5px;
  padding: 0;
  @media (max-width: 1300px) {
    margin: 19px -5px 0 0;
  }
`;
const UserNameCon = styled.div`
  display: grid;
  justify-content: right;
  width: 100%;
`;
const UserName = styled.div`
  display: inline-block;
  min-width: 120px;
  font-size: 1.2rem;
  word-break: normal;
  overflow: hidden;
  line-height: 1.6rem;
  text-align: left;
`;
const LoadingCon = styled(Con)`
  font-size: 1.2rem;
`;
const LoadingTxt = styled.div`
  margin: 10px 0 0 10px;
`;
const Upside = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 150px;
  height: 30px;
`;
const Menu = styled(H100per)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
`;

export default ({
  UserDataLoading,
  UserData,
  DesignateAvatar,
  setDesignateAvatar,
  AvatarPathInsert,
  MenuMode,
  setMenuMode,
}: IdentityProps) => {
  const { Mode } = useProfileMode();
  return (
    <Identi>
      <Upside>
        {Mode[0] === "Post" || Mode[0] === "Archive" ? (
          <Menu
            onClick={() => {
              setMenuMode((p: boolean) => !p);
            }}
          >
            {MenuMode ? "Control" : "Menu"}
          </Menu>
        ) : (
          <div />
        )}
        {UserDataLoading ? (
          <LoadingCon>
            <LoadingTxt>Loading...</LoadingTxt>
          </LoadingCon>
        ) : UserData.avatar ? (
          <Positioning>
            <Avatar
              size={120}
              url={UserData.avatar}
              func={() => {
                setDesignateAvatar(true);
              }}
            />
          </Positioning>
        ) : (
          <DACon
            onClick={(e: any) => {
              spaped(e);
              setDesignateAvatar(true);
            }}
          >
            <DefaultAvatar className="icon-noun_user_856030" />
          </DACon>
        )}
      </Upside>
      {!UserDataLoading && (
        <UserNameCon>
          <UserName>{UserData.username}</UserName>
        </UserNameCon>
      )}
      {DesignateAvatar && (
        <ImgIsScnCon
          setImgSubMenuOp={setDesignateAvatar}
          ImgInsert={AvatarPathInsert}
          zIndex={30}
        />
      )}
    </Identi>
  );
};

type IdentityProps = {
  UserDataLoading: boolean;
  UserData: any;
  DesignateAvatar: boolean;
  setDesignateAvatar: any;
  AvatarPathInsert: any;
  MenuMode: boolean;
  setMenuMode: any;
};
