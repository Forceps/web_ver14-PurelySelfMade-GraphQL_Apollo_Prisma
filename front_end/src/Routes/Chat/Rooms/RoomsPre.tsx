import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../Components/User/Avatar";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import Loading from "../../../Components/ElementEtc/Effect/Loading";
import Conversation from "../../../Components/Chat/Conversation/Conversation";

const Tent = styled(W100per)``;
const Sbj = styled(W100per)`
  display: flex;
  font-size: 1.4rem;
`;
const Exhibit = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0 0;
`;
const Oblong = styled.div`
  display: grid;
  grid-template-rows: 40px 50px 1fr;
  width: 290px;
  height: 390px;
  margin: 10px 10px 0 0;
  background-color: rgba(223, 230, 233, 0.7);
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;
const Verticalize = styled(WH100per)`
  display: grid;
  grid-template-columns: 60px 1fr;
`;
const Oheader = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 5px 0 5px;
  font-size: 1rem;
`;
const Plaque = styled(WH100per)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2px;
`;
const Interval = styled.div`
  width: calc(100%);
  height: calc(100% / 5);
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
const RoomPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  margin: 0 0 0 10px;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const OverNot = styled(WH100per)`
  overflow: hidden;
`;

export default ({
  srLoading,
  srData,
  setMakeRoomOp,
  setRoomEnter,
  setParticularRoom,
}: RoomsPreProps) => {
  return (
    <Tent>
      <Sbj>
        Channels{" "}
        {!srLoading && srData.length !== 0 && (
          <RoomPlus>
            <i
              onClick={() => {
                setMakeRoomOp(true);
              }}
              className="icon-plus"
            />
          </RoomPlus>
        )}
      </Sbj>
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
                setParticularRoom(S_N_to_N(i.chat_room_id));
                setRoomEnter(true);
              }}
            >
              <Oheader>{i.name}</Oheader>
              <Info>
                <i className="icon-group" /> {i.chat_member.length}
              </Info>
              <Verticalize>
                <Plaque>
                  {i.chat_member?.map((k: any) => (
                    <Interval key={k.user}>
                      <Avatar
                        size={54}
                        url={k.user_chat_memberTouser?.avatar}
                      />
                    </Interval>
                  ))}
                </Plaque>
                <OverNot>
                  <Conversation room_id={S_N_to_N(i.chat_room_id)} />
                </OverNot>
              </Verticalize>
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
  setParticularRoom: any;
}
