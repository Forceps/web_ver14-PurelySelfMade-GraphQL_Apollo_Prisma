import React from "react";
import styled from "styled-components";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import Loading from "../../ElementEtc/Effect/Loading";
import IncludeScrollBar from "../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import MyWords from "./Speech/MyWords";
import YourWords from "./Speech/YourWords";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";

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

const ConversationPre = ({
  size,
  fontSize,
  justiConten,
  loading,
  Accumulate,
}: ConversationPreProps) => {
  const { MEloading, MEdata } = useMyInfo();

  return (
    <Rails fontSize={fontSize} justiConten={justiConten}>
      <Scr className="scroll_in_chat_conversation">
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
interface ConversationPreProps {
  size: number;
  fontSize: number;
  justiConten: string;
  loading: boolean;
  Accumulate: any[];
}

export default React.memo(ConversationPre);
