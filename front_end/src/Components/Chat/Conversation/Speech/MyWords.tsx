import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";

interface sizing {
  size: number;
}
const CommentsM = styled(W100per)<sizing>`
  display: flex;
  justify-content: flex-end;
  margin: 0 0 10px 0;
`;
const CommentBoxM = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 160px;
`;
const ContentM = styled(W100per)`
  display: flex;
  justify-content: flex-end;
  padding: 0 2px 0 0;
`;
const ColoringM = styled.div`
  display: inline-block;
  padding: 5px;
  background-color: #fafafa;
  border-radius: 8px;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
`;

export default ({ data, size, fontSize }: MyWordsProps) => {
  return (
    <CommentsM size={size}>
      <div />
      <CommentBoxM>
        <ContentM>
          <ColoringM>{data.comment}</ColoringM>
        </ContentM>
      </CommentBoxM>
    </CommentsM>
  );
};

interface MyWordsProps {
  data: any;
  size: number;
  fontSize: number;
}
