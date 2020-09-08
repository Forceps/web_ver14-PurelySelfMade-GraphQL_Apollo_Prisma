import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { ChatDetailRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import Loading from "../../ElementEtc/Effect/Loading";
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

const Conversation = ({
  room_id,
  size = 30,
  skip = 0,
  take = 4,
  fontSize = 0.85,
  justiConten = "flex-start",
  chatListenData,
  chatListenLoad,
  fixNum = -1,
}: ConversationProps) => {
  const { loading, data } = ChatDetailRequest(room_id, skip, take);
  const { MEdata, MEloading } = useMyInfo();
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  return (
    <Rails fontSize={fontSize} justiConten={justiConten}>
      <Scr>
        {loading || MEloading ? (
          <Loading />
        ) : Accumulate.length === 0 || !MEdata ? (
          <div />
        ) : (
          Accumulate.map((l: any) =>
            S_N_to_N(l.user) === S_N_to_N(MEdata?.user_id) ? (
              <MyWords
                key={l.chat_id}
                data={l}
                size={size}
                fontSize={fontSize}
              />
            ) : (
              <YourWords
                key={l.chat_id}
                data={l}
                size={size}
                fontSize={fontSize}
              />
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
  fixNum?: number;
}

export default React.memo(Conversation);
