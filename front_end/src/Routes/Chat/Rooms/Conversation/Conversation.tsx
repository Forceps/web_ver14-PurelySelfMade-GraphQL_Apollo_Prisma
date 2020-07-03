import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../../Components/User/Avatar";
import { SwatchForRoomRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/etc/type_convert";

const Rails = styled(WH100per)`
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  padding: 0 5px 0 5px;
  font-size: 0.85rem;
`;
interface sizing {
  size: number;
}
const Comments = styled(W100per)<sizing>`
  display: grid;
  grid-template-columns: ${(p) => `${(p.size * 17) / 15}px`} 1fr;
  margin: 0 0 10px 0;
`;
const CommentBox = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const Username = styled(W100per)`
  display: flex;
  height: 20px;
`;
const Content = styled(W100per)`
  padding: 0 0 0 2px;
`;
const Coloring = styled.div`
  display: inline-block;
  padding: 5px;
  background-color: rgba(178, 190, 195, 0.4);
  border-radius: 8px;
`;
const CommentsM = styled(W100per)<sizing>`
  display: grid;
  grid-template-columns: 1fr ${(p) => `${(p.size * 17) / 15}px`};
  margin: 0 0 10px 0;
`;
const CommentBoxM = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const Justify = styled(W100per)`
  display: grid;
  justify-content: right;
`;
const UsernameM = styled(W100per)`
  display: flex;
  justify-content: flex-end;
  height: 20px;
`;
const ContentM = styled(W100per)`
  display: flex;
  justify-content: flex-end;
  padding: 0 2px 0 0;
`;
const ColoringM = styled.div`
  display: inline-block;
  padding: 5px;
  background-color: rgba(178, 190, 195, 0.4);
  border-radius: 8px;
`;

export default ({ room_id, size = 30 }: ConversationProps) => {
  const { loading, data } = SwatchForRoomRequest(room_id);
  const { MEdata, MEloading } = useMyInfo();
  return (
    <Rails>
      {loading || MEloading
        ? "Loading..."
        : data.swatchForRoom?.map((l: any) =>
            S_N_to_N(l.user) === S_N_to_N(MEdata.user_id) ? (
              <CommentsM key={l.chat_id} size={size}>
                <CommentBoxM>
                  <UsernameM>{l.user_chatTouser.username}</UsernameM>
                  <ContentM>
                    <ColoringM>{l.comment}</ColoringM>
                  </ContentM>
                </CommentBoxM>
                <Justify>
                  <Avatar url={l.user_chatTouser.avatar} size={size} />
                </Justify>
              </CommentsM>
            ) : (
              <Comments key={l.chat_id} size={size}>
                <Avatar url={l.user_chatTouser.avatar} size={size} />
                <CommentBox>
                  <Username>{l.user_chatTouser.username}</Username>
                  <Content>
                    <Coloring>{l.comment}</Coloring>
                  </Content>
                </CommentBox>
              </Comments>
            )
          )}
    </Rails>
  );
};
interface ConversationProps {
  room_id: number;
  size?: number;
}
