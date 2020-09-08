import React from "react";
import ChattingChannelPre from "./ChattingChannelPre";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMutation, useSubscription } from "@apollo/client";
import { COMMENTING } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatCUD";
import { CHAT_LISTENING } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatSub";
import { SeeRoomRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/RoomR";

const ChattingChannelCon = ({
  zIndex = 30,
  setRoomEnter,
  ParticularRoom,
}: ChattingChannelConPorops) => {
  const { loading, data, refetch } = SeeRoomRequest(ParticularRoom);
  const { data: chatListenData, loading: chatListenLoad } = useSubscription(
    CHAT_LISTENING,
    {
      variables: { chat_room_id: ParticularRoom },
    }
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
      chatText.setValue("");
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
      refetch={refetch}
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

export default React.memo(ChattingChannelCon);
