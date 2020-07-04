import React from "react";
import ChattingChannelPre from "./ChattingChannelPre";
import { SeeRoomRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMutation, useSubscription } from "@apollo/react-hooks";
import { COMMENTING } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatCUD";
import { CHAT_LISTENING } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatSub";

export default ({
  zIndex = 30,
  setRoomEnter,
  ParticularRoom,
}: ChattingChannelConPorops) => {
  const { loading, data } = SeeRoomRequest(ParticularRoom);
  const { data: chatListenData, loading: chatListenLoad } = useSubscription(
    CHAT_LISTENING
  );
  if (!chatListenLoad) {
    console.log(chatListenData);
  }
  const chatText = useInput("");
  const [commentingMutation] = useMutation(COMMENTING);
  const commenting = () => {
    try {
      commentingMutation({
        variables: {
          chat_room_id: ParticularRoom,
          comment: chatText.value,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ChattingChannelPre
      zIndex={zIndex}
      setRoomEnter={setRoomEnter}
      ParticularRoom={ParticularRoom}
      loading={loading}
      data={data?.seeRoom}
      chatText={chatText}
      commenting={commenting}
      chatListenData={chatListenData}
      chatListenLoad={chatListenLoad}
    />
  );
};
interface ChattingChannelConPorops {
  zIndex?: number;
  setRoomEnter: any;
  ParticularRoom: number;
}
