import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../User/Avatar";

interface FontSizeProps {
  fontSize: number;
}
interface sizing {
  size: number;
}
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
const UsernameM = styled(W100per)<FontSizeProps>`
  display: flex;
  justify-content: flex-end;
  height: ${(p) => `${(p.fontSize * 25) / 17}rem`};
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

export default ({ data, size, fontSize }: MyWordsProps) => {
  return (
    <CommentsM key={data.chat_id} size={size}>
      <CommentBoxM>
        <UsernameM fontSize={fontSize}>
          {data.user_chatTouser.username}
        </UsernameM>
        <ContentM>
          <ColoringM>{data.comment}</ColoringM>
        </ContentM>
      </CommentBoxM>
      <Justify>
        <Avatar url={data.user_chatTouser.avatar} size={size} />
      </Justify>
    </CommentsM>
  );
};
interface MyWordsProps {
  data: any;
  size: number;
  fontSize: number;
}
