import React from "react";
import styled from "styled-components";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import ImgIsScnCon from "../../../../Components/Media/Insert/ImgInsertScreen/ImgInSCon";

const Identi = styled.div`
  padding-right: 20px;
  width: 100%;
  display: grid;
  justify-self: right;
  @media (max-width: 1300px) {
    padding: 0;
  }
`;
interface AvatarProp {
  url: string;
}
const Avatar = styled.div<AvatarProp>`
  width: 150px;
  height: 150px;
  margin: -120px 0 0 0;
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
  justify-self: right;
  cursor: pointer;
  border: 3px solid white;
  @media (max-width: 1300px) {
    width: 100%;
    height: 100px;
    margin: 0 0 0 0;
    border: 0;
  }
`;
const Con = styled.div`
  display: grid;
  width: 150px;
  height: 150px;
  margin: -120px 0 0 0;
  border: 5px solid white;
  justify-self: right;
  background-color: #dfe6e9;
  cursor: default;
`;
const DACon = styled(Con)`
  font-size: 110px;
  @media (max-width: 1300px) {
    font-size: 70px;
    width: 100%;
    height: 100px;
    margin: 0 0 0 0;
    border: none;
  }
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
  margin: 5px 0 0 5px;
  @media (max-width: 1300px) {
    margin: 30px 0 0 0;
  }
`;
const UserName = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  min-width: 150px;
  font-size: 1.5rem;
  word-break: normal;
  overflow: hidden;
  line-height: 2rem;
  text-align: left;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const LoadingCon = styled(Con)`
  font-size: 1.2rem;
`;
const LoadingTxt = styled.div`
  margin: 10px 0 0 10px;
`;

export default ({
  UserDataLoading,
  UserData,
  DesignateAvatar,
  setDesignateAvatar,
  AvatarPathInsert,
}: IdentityProps) => {
  return (
    <Identi>
      {UserDataLoading ? (
        <LoadingCon>
          <LoadingTxt>Loading...</LoadingTxt>
        </LoadingCon>
      ) : UserData?.seeUser?.avatar ? (
        <Avatar
          url={UserData?.seeUser?.avatar}
          onClick={(e: any) => {
            spaped(e);
            setDesignateAvatar(true);
          }}
        />
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
      {!UserDataLoading && (
        <UserNameCon>
          <UserName>{UserData?.seeUser?.username}</UserName>
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
};
