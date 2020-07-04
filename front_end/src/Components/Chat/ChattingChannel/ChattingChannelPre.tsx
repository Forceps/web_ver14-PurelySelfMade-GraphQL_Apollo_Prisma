import React from "react";
import styled from "styled-components";
import TemporaryBackground from "../../Effect/TemporaryBackground";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import Conversation from "../Conversation/Conversation";

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
  width: 400px;
  height: 85vh;
  min-height: 600px;
  background-color: #fafafa;
  overflow: auto;
  z-index: ${(prop) => prop.zIndex};
  display: grid;
  grid-template-rows: 40px 50px 1fr 150px;
`;
const Header = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  font-size: 1.3rem;
`;
const StatusZone = styled(WH100per)`
  background-color: #dfe6e9;
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
const Raising = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: #dfe6e9;
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
  loading,
  data,
  chatText,
  commenting,
  chatListenData,
  chatListenLoad,
}: ChattingChannelPrePorops) => {
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setRoomEnter(false);
        }}
        zIndex={zIndex + 1}
      />
      <Template zIndex={zIndex + 2}>
        <Header>{loading ? "Loading..." : data.name}</Header>
        <StatusZone></StatusZone>
        <ChatMain>
          <Conversation
            size={40}
            room_id={ParticularRoom}
            fontSize={1}
            justiConten={"flex-end"}
            take={100}
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
  loading: boolean;
  data: any;
  chatText: any;
  commenting: () => void;
  chatListenLoad: boolean;
  chatListenData: any;
}
