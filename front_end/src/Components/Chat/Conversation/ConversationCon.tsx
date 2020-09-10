import React, { useEffect, useState } from "react";
import { ChatDetailRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";
import ConversationPre from "./ConversationPre";

const ConversationCon = ({
  room_id,
  size = 30,
  skip = 0,
  take = 4,
  fontSize = 0.85,
  justiConten = "flex-start",
  chatListenData,
  chatListenLoad,
  fixNum = -1,
}: ConversationConProps) => {
  const { loading, data, refetch } = ChatDetailRequest(room_id, skip, take);
  const [Accumulate, setAccumulate] = useState<any[]>([]);

  useEffect(() => {
    if (!chatListenLoad && chatListenData) {
      if (fixNum < 1) {
        setAccumulate([chatListenData.chatListening, ...Accumulate]);
      } else {
        let arr: any[] = [];
        for (let i = 0; i < fixNum - 1; i++) {
          arr = arr.concat(Accumulate[i]);
        }
        setAccumulate([chatListenData.chatListening, ...arr]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatListenData]);
  useEffect(() => {
    if (!loading && data) {
      setAccumulate(data?.chatDetail);
      console.log(data?.chatDetail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ConversationPre
      size={size}
      fontSize={fontSize}
      justiConten={justiConten}
      loading={loading}
      Accumulate={Accumulate}
    />
  );
};

interface ConversationConProps {
  room_id: number;
  size?: number;
  skip?: number;
  take?: number;
  fontSize?: number;
  justiConten?: string;
  chatListenData?: any;
  chatListenLoad?: boolean;
  fixNum?: number;
}

export default React.memo(ConversationCon);
