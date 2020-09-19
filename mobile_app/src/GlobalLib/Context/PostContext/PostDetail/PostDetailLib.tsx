import React from "react";
import styled from "styled-components/native";
import ContentEditable from "react-contenteditable";

const OnePost = styled(({ ...rest }) => <ContentEditable {...rest} />)`
  font-size: 13px;
  color: black;
  padding: 8px;
  overflow: auto;
  word-break: break-all;
  height: calc(100% - 37px);
`;
type ContentProps = {
  html: string;
};
export const Content = ({ html }: ContentProps) => {
  return (
    <OnePost
      className="editable"
      tagName="article"
      html={html}
      spellCheck="false"
      disabled={true}
    />
  );
};
