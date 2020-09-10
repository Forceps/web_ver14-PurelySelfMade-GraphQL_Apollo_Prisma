import React from "react";
import styled from "styled-components";
import TemporaryBackground from "../../ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import Conversation from "../Conversation/ConversationCon";
import { FlexCenter100per } from "../../../GlobalLib/Styles/IteratePattern/ToCenter";

interface WrapperProps {
  zIndex: number;
}
const Wrapper = styled(WH100per)<WrapperProps>`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: ${(prop) => prop.zIndex};
`;
const Template = styled(IncludeScrollBar)<WrapperProps>`
  position: relative;
  min-width: 300px;
  width: 25vw;
  max-width: 410px;
  height: 78vh;
  min-height: 500px;
  background-color: rgba(235, 239, 242, 1);
  overflow: auto;
  z-index: ${(prop) => prop.zIndex};
  display: grid;
  grid-template-rows: 40px 30px 1fr 100px;
`;
const Header = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 40px;
`;
const RoomName = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
`;
const RoomSettingBtn = styled(FlexCenter100per)`
  font-size: 1.1rem;
  &:hover {
    background-color: #2d3436;
    color: #fafafa;
  }
  cursor: pointer;
`;
const StatusZone = styled(WH100per)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px 0 8px;
`;
const ChatMain = styled(WH100per)`
  overflow: hidden;
`;
const SmallInput = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 40px;
  background-color: #dfe6e9;
`;
const ChatInput = styled(WH100per)``;
const Raising = styled(FlexCenter100per)`
  background-color: #636e72;
  color: white;
  &:hover {
    background-color: #2d3436;
  }
  cursor: pointer;
`;
const Input = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 0;
  font-size: 1rem;
  background-color: #fafafa;
  outline-style: none;
  resize: none;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: calc(100% - 10px);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #636e72;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #768185;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #2d3436;
  }
`;

export default ({
  zIndex,
  setRoomEnter,
  ParticularRoom,
  data,
  refetch,
  chatText,
  commenting,
  chatListenData,
  chatListenLoad,
  ChattingChannelRef,
  List,
}: ChattingChannelPrePorops) => {
  return (
    <Wrapper zIndex={zIndex} ref={ChattingChannelRef}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          refetch();
          setRoomEnter(false);
        }}
        zIndex={zIndex + 1}
      />
      <Template zIndex={zIndex + 2}>
        <Header>
          <RoomName>{data.name}</RoomName>
          <RoomSettingBtn>
            <i className="icon-cog" />
          </RoomSettingBtn>
        </Header>
        <StatusZone>
          <i className="icon-group" /> {data.chat_member.length}
        </StatusZone>
        <ChatMain>
          <Conversation
            size={40}
            room_id={ParticularRoom}
            fontSize={1}
            justiConten={"flex-end"}
            take={List.length * 3}
            chatListenData={chatListenData}
            chatListenLoad={chatListenLoad}
          />
        </ChatMain>
        <SmallInput>
          <ChatInput>
            <Input {...chatText} spellCheck="false" />
          </ChatInput>
          <Raising
            onClick={(e) => {
              spaped(e);
              commenting();
            }}
          >
            <i className="icon-plus" />
          </Raising>
        </SmallInput>
      </Template>
    </Wrapper>
  );
};
interface ChattingChannelPrePorops {
  zIndex: number;
  setRoomEnter: any;
  ParticularRoom: number;
  data: any;
  refetch: any;
  chatText: any;
  commenting: () => void;
  chatListenLoad: boolean;
  chatListenData: any;
  ChattingChannelRef: React.RefObject<HTMLDivElement>;
  List: number[];
}
