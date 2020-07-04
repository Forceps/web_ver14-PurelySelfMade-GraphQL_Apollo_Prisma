import React from "react";
import styled from "styled-components";
import Avatar from "../../../User/Avatar";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";

interface FontSizeProps {
  fontSize: number;
}
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
const Username = styled(W100per)<FontSizeProps>`
  display: flex;
  height: ${(p) => `${(p.fontSize * 25) / 17}rem`};
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

export default ({ data, size, fontSize }: ConversationProps) => {
  return (
    <Comments key={data?.chat_id} size={size}>
      <Avatar url={data?.user_chatTouser.avatar} size={size} />
      <CommentBox>
        <Username fontSize={fontSize}>
          {data?.user_chatTouser?.username}
        </Username>
        <Content>
          <Coloring>{data?.comment}</Coloring>
        </Content>
      </CommentBox>
    </Comments>
  );
};
interface ConversationProps {
  data: any;
  size: number;
  fontSize: number;
}
