import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { ChatDetailRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import Loading from "../../Effect/Loading";
import IncludeScrollBar from "../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import MyWords from "./Speech/MyWords";
import YourWords from "./Speech/YourWords";

interface RailsProps {
  fontSize: number;
  justiConten: string;
}
const Rails = styled(WH100per)<RailsProps>`
  display: flex;
  justify-content: ${(p) => `${p.justiConten}`};
  font-size: ${(p) => `${p.fontSize}rem`};
`;
const Scr = styled(IncludeScrollBar)`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  padding: 5px;
`;

export default ({
  room_id,
  size = 30,
  skip = 0,
  take = 4,
  fontSize = 0.85,
  justiConten = "flex-start",
  chatListenData,
  chatListenLoad,
}: ConversationProps) => {
  const { loading, data } = ChatDetailRequest(room_id, skip, take);
  const { MEdata, MEloading } = useMyInfo();
  const [Accumulate, setAccumulate] = useState<any[]>([]);
  useEffect(() => {
    if (!chatListenLoad && chatListenData) {
      setAccumulate([chatListenData.chatListening, ...Accumulate]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatListenData]);
  return (
    <Rails fontSize={fontSize} justiConten={justiConten}>
      <Scr>
        {!MEloading &&
          Accumulate.map((m) =>
            S_N_to_N(m.user) === S_N_to_N(MEdata.user_id) ? (
              <MyWords data={m} size={size} fontSize={fontSize} />
            ) : (
              <YourWords data={m} size={size} fontSize={fontSize} />
            )
          )}
        {loading || MEloading ? (
          <Loading />
        ) : (
          data.chatDetail?.map((l: any) =>
            S_N_to_N(l.user) === S_N_to_N(MEdata.user_id) ? (
              <MyWords data={l} size={size} fontSize={fontSize} />
            ) : (
              <YourWords data={l} size={size} fontSize={fontSize} />
            )
          )
        )}
      </Scr>
    </Rails>
  );
};
interface ConversationProps {
  room_id: number;
  size?: number;
  skip?: number;
  take?: number;
  fontSize?: number;
  justiConten?: string;
  chatListenData?: any;
  chatListenLoad?: boolean;
}
