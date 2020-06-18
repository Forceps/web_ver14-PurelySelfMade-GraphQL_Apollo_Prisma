import React from "react";
import WH100per, {
  W100per,
  H100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import styled, { css } from "styled-components";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me/Me";
import { useLoginCheck } from "../../../GlobalLib/Context/UserContext/IsLoggedIn/IsLoggedIn";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const Circling = styled(W100per)`
  display: grid;
  grid-template-rows: 1fr 170px;
`;
const NoBack = styled(W100per)`
  height: 0;
`;
interface BackImgProp {
  url: string;
}
const BackImg = styled(W100per)<BackImgProp>`
  height: 20vw;
  background-color: #b2bec3;
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;
const Profile = styled(WH100per)`
  display: flex;
  justify-content: center;
  background-color: white;
`;
const Omphalos = styled(H100per)`
  display: grid;
  grid-template-columns: 90px 1fr;
  min-width: 500px;
  width: 60vw;
  padding: 20px 0 0 0;
`;
const Con = styled(W100per)`
  display: grid;
  height: 90px;
  justify-self: right;
`;
const DACon = styled(Con)`
  border: 3px solid white;
  font-size: 110px;
  background-color: #dfe6e9;
`;
const DefaultAvatar = styled.i`
  display: grid;
  margin: 24px 0 0 -4.5px;
  padding: 0;
`;
interface AvatarProp {
  url: string;
}
const Avatar = styled(Con)<AvatarProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
  justify-self: right;
`;
const LoadingCon = styled(Con)`
  font-size: 1.2rem;
`;
const LoadingTxt = styled.div`
  margin: 10px 0 0 10px;
`;
const Panel = styled(WH100per)`
  display: grid;
  grid-template-rows: 45px 1fr 40px;
  padding: 0 0 0 13px;
`;
const UserName = styled.div`
  display: inline-block;
  min-width: 150px;
  font-size: 1.5rem;
  word-break: normal;
  overflow: hidden;
  line-height: 2rem;
`;
const Additional = styled(WH100per)`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 5px;
`;
const SubscribeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 30px;
  max-width: 90px;
  background-color: #dfe6e9;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const ASD = styled.div`
  color: #636e72;
`;
const Numeral = styled.div`
  padding: 0 0 13px 0;
  font-size: 1.1rem;
`;
const SelectBar = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 60px 100px;
`;
const ModeCp = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0 3px 0;
  font-size: 1rem;
  cursor: pointer;
`;
interface ModeProps {
  Mode: string;
}
const Mode1 = styled(ModeCp)<ModeProps>`
  ${(p) => {
    if (p.Mode === "post") {
      return css`
        border-bottom: 3px solid black;
        padding-bottom: 0;
      `;
    }
  }}
`;
const Mode2 = styled(ModeCp)<ModeProps>`
  ${(p) => {
    if (p.Mode === "relation") {
      return css`
        border-bottom: 3px solid black;
        padding-bottom: 0;
      `;
    }
  }}
`;

export default ({
  user_id,
  UserData,
  UserDataLoading,
  addSubscriber,
  yesISubscribe,
  Mode,
  setMode,
}: ProfileSectionPreProps) => {
  const { MEdata, MEloading } = useMyInfo();
  const { isLoggedIn } = useLoginCheck();
  return (
    <Circling>
      {UserDataLoading || !UserData?.back_img ? (
        <NoBack />
      ) : (
        <BackImg url={UserData?.back_img} />
      )}
      <Profile>
        <Omphalos>
          {UserDataLoading ? (
            <LoadingCon>
              <LoadingTxt>Loading...</LoadingTxt>
            </LoadingCon>
          ) : UserData.avatar ? (
            <Avatar url={UserData.avatar} />
          ) : (
            <DACon>
              <DefaultAvatar className="icon-noun_user_856030" />
            </DACon>
          )}
          {UserDataLoading ? (
            <div />
          ) : (
            <Panel>
              <UserName>{UserData.username}</UserName>
              <Additional>
                <Numeral>5 subscribers 8 posts</Numeral>
                {isLoggedIn &&
                  !MEloading &&
                  S_N_to_N(MEdata.user_id) !== user_id &&
                  (yesISubscribe ? (
                    <ASD>(Already subscribed)</ASD>
                  ) : (
                    <SubscribeBtn
                      onClick={(e) => {
                        spaped(e);
                        addSubscriber();
                      }}
                    >
                      Subscribe
                    </SubscribeBtn>
                  ))}
              </Additional>
              <SelectBar>
                <div />
                <Mode1
                  onClick={() => {
                    setMode("post");
                  }}
                  Mode={Mode}
                >
                  Post
                </Mode1>
                <Mode2
                  onClick={() => {
                    setMode("relation");
                  }}
                  Mode={Mode}
                >
                  Relation
                </Mode2>
              </SelectBar>
            </Panel>
          )}
        </Omphalos>
      </Profile>
    </Circling>
  );
};

interface ProfileSectionPreProps {
  user_id: number;
  UserData: any;
  UserDataLoading: boolean;
  addSubscriber: () => void;
  yesISubscribe: boolean;
  Mode: string;
  setMode: any;
}
