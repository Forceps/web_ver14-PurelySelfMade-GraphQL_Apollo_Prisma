import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../Components/User/Avatar";
import { useMyInfo } from "../../GlobalLib/Context/UserContext/Me";
import Loading from "../../Components/Effect/Loading";
import { SwatchForRoomRequest } from "../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";
import { S_N_to_N } from "../../GlobalLib/RecycleFunction/etc/type_convert";

const Wapper = styled(W100per)`
  display: flex;
  justify-content: center;
`;
const Invest = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  min-width: 780px;
  max-width: 100%;
`;
const Center = styled(W100per)`
  display: grid;
  grid-template-rows: 60px 1fr;
  min-height: 100px;
`;
const Main = styled(W100per)`
  display: grid;
  grid-template-columns: 280px 1fr;
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
  grid-template-rows: 40px 80px 120px 1fr;
  width: 300px;
  height: 400px;
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
  padding: 2px;
  background-color: #dfe6e9;
`;
const Interval = styled.div`
  width: calc(100% / 5);
  height: calc(100% / 2);
  padding: 2px;
`;
const Info = styled(WH100per)``;

export default ({ srLoading, srData }: ChatPreProps) => {
  const me = useMyInfo();
  return (
    <Wapper>
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
                      <Info></Info>
                      <Plaque>
                        {i.chat_member.map((k: any) => (
                          <Interval key={k.user}>
                            <Avatar
                              size={54}
                              url={k.user_chat_memberTouser?.avatar}
                            />
                          </Interval>
                        ))}
                      </Plaque>
                      <Conversation room_id={S_N_to_N(i.chat_room_id)} />
                    </Oblong>
                  ))
                )}
              </Exhibit>
            </Rooms>
          </Main>
        </Center>
      </Invest>
    </Wapper>
  );
};
interface ChatPreProps {
  srLoading: boolean;
  srData: any;
}

const Rails = styled(WH100per)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 5px 0 5px;
`;
const Comments = styled(W100per)`
  display: grid;
  grid-template-columns: 50px 1fr;
`;
const CommentBox = styled(W100per)`
  display: grid;
  grid-template-rows: 20px 1fr;
  padding: 3px 0 3px 0;
`;
const Username = styled(WH100per)`
  display: flex;
  align-items: center;
`;
const Content = styled(W100per)`
  font-size: 0.9rem;
`;

const Conversation = ({ room_id }: ConversationProps) => {
  const { loading, data } = SwatchForRoomRequest(room_id);
  console.log(data);
  return (
    <Rails>
      {loading
        ? "Loading..."
        : data.swatchForRoom?.map((l: any) => (
            <Comments key={l.chat_id}>
              <Avatar url={l.user_chatTouser.avatar} size={40} />
              <CommentBox>
                <Username>{l.user_chatTouser.username}</Username>
                <Content>{l.comment}</Content>
              </CommentBox>
            </Comments>
          ))}
    </Rails>
  );
};
interface ConversationProps {
  room_id: number;
}
