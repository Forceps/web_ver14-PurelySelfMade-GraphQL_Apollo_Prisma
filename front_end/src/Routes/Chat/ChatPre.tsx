import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../Components/User/Avatar";
import { useMyInfo } from "../../GlobalLib/Context/UserContext/Me";
import Loading from "../../Components/Effect/Loading";

const Invest = styled(W100per)`
  display: grid;
  grid-template-columns: 100px 1fr;
`;
const Center = styled(W100per)`
  display: grid;
  grid-template-rows: 60px 1fr;
  min-height: 100px;
`;
const Main = styled(W100per)`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100px;
`;
const Private = styled(W100per)``;
const Rooms = styled(W100per)``;
const MyName = styled(W100per)`
  margin: 10px 0 0 0;
  font-size: 1.3rem;
`;
const Sbj = styled(W100per)`
  font-size: 1.4rem;
`;
const Exhibit = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0 0;
`;
const Oblong = styled.div`
  display: grid;
  grid-template-rows: 40px 200px 1fr;
  width: 300px;
  height: 420px;
  background-color: white;
  margin: 10px 10px 0 0;
`;
const Oheader = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 5px 0 5px;
  font-size: 1rem;
`;
const Plaque = styled(WH100per)`
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  background-color: #dfe6e9;
`;
const Interval = styled.div`
  width: calc(100% / 3);
  height: calc(100% / 2);
  padding: 4px;
`;

export default ({ srLoading, srData }: ChatPreProps) => {
  const me = useMyInfo();
  return (
    <Invest>
      <div />
      <Center>
        <div />
        <Main>
          <Private>
            <Avatar url={me.MEdata?.avatar} size={90} />
            <MyName>{me.MEdata?.username}</MyName>
          </Private>
          <Rooms>
            <Sbj>Chat rooms</Sbj>
            <Exhibit>
              {srLoading ? (
                <Loading />
              ) : (
                srData.map((i: any) => (
                  <Oblong key={i.chat_room_id}>
                    <Oheader>{i.name}</Oheader>
                    <Plaque>
                      {i.chat_member.map((k: any) => (
                        <Interval key={k.user}>
                          <Avatar
                            size={268 / 3}
                            url={k.user_chat_memberTouser?.avatar}
                          />
                        </Interval>
                      ))}
                    </Plaque>
                    <Conversation />
                  </Oblong>
                ))
              )}
            </Exhibit>
          </Rooms>
        </Main>
      </Center>
    </Invest>
  );
};
interface ChatPreProps {
  srLoading: boolean;
  srData: any;
}

const Conversation = () => {
  return <div />;
};
