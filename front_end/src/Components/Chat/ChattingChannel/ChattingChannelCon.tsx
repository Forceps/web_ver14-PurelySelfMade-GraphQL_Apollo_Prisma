import React, { useEffect, useRef } from "react";
import ChattingChannelPre from "./ChattingChannelPre";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMutation, useSubscription } from "@apollo/client";
import { COMMENTING } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatCUD";
import { CHAT_LISTENING } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatSub";
import { SeeRoomRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/RoomR";
import useInfiniteScroll from "../../../GlobalLib/RecycleFunction/Hooks/useInfiniteScroll";

const ChattingChannelCon = ({
  zIndex = 30,
  setRoomEnter,
  ParticularRoom,
}: ChattingChannelConPorops) => {
  const ChattingChannelRef = useRef<HTMLDivElement>(null);
  const scrollElement = ChattingChannelRef.current?.getElementsByClassName(
    "scroll_in_chat_conversation"
  )[0] as HTMLElement;
  const { List, Finish } = useInfiniteScroll(scrollElement, true);
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
      scrollElement?.scrollIntoView(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(List);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [List]);

  return loading ? (
    <div />
  ) : (
    <ChattingChannelPre
      zIndex={zIndex}
      setRoomEnter={setRoomEnter}
      ParticularRoom={ParticularRoom}
      data={data?.seeRoom}
      refetch={refetch}
      chatText={chatText}
      commenting={commenting}
      chatListenData={chatListenData}
      chatListenLoad={chatListenLoad}
      ChattingChannelRef={ChattingChannelRef}
      List={List}
    />
  );
};
interface ChattingChannelConPorops {
  zIndex?: number;
  setRoomEnter: any;
  ParticularRoom: number;
}

export default React.memo(ChattingChannelCon);
