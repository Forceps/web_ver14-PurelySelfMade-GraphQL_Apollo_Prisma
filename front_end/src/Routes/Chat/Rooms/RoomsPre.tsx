import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../Components/User/Avatar";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import Loading from "../../../Components/Effect/Loading";
import Conversation from "./Conversation/Conversation";

const Tent = styled(W100per)``;
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
  grid-template-rows: 40px 50px 120px 1fr;
  width: 300px;
  height: 400px;
  margin: 10px 10px 0 0;
  background-color: rgba(223, 230, 233, 0.7);
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
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
`;
const Interval = styled.div`
  width: calc(100% / 5);
  height: calc(100% / 2);
  padding: 2px;
`;
const Info = styled(WH100per)`
  padding: 5px;
`;
const OblongEmpty = styled(Oblong)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
`;
const ChatIcon = styled.i`
  font-size: 2.7rem;
  margin: 0 0 10px 0;
`;

export default ({
  srLoading,
  srData,
  setMakeRoomOp,
  setRoomEnter,
}: RoomsPreProps) => {
  return (
    <Tent>
      <Sbj>Channels</Sbj>
      <Exhibit>
        {srLoading ? (
          <Loading />
        ) : srData.length === 0 ? (
          <OblongEmpty
            onClick={() => {
              setMakeRoomOp(true);
            }}
          >
            <ChatIcon className="icon-chat-empty" />
            Add chat room?
          </OblongEmpty>
        ) : (
          srData.map((i: any) => (
            <Oblong
              key={i.chat_room_id}
              onClick={() => {
                setRoomEnter(true);
              }}
            >
              <Oheader>{i.name}</Oheader>
              <Info>
                <i className="icon-group" /> {i.chat_member.length}
              </Info>
              <Plaque>
                {i.chat_member?.map((k: any) => (
                  <Interval key={k.user}>
                    <Avatar size={54} url={k.user_chat_memberTouser?.avatar} />
                  </Interval>
                ))}
              </Plaque>
              <Conversation room_id={S_N_to_N(i.chat_room_id)} />
            </Oblong>
          ))
        )}
      </Exhibit>
    </Tent>
  );
};
interface RoomsPreProps {
  srLoading: boolean;
  srData: any;
  setMakeRoomOp: any;
  setRoomEnter: any;
}
