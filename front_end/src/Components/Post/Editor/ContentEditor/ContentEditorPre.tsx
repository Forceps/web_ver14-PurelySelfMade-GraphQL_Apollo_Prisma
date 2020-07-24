import React from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";

const Editor = styled(ContentEditable)`
  display: block;
  padding: 10px;
  border: 0;
  width: 100%;
  margin-top: 10px;
  height: calc(100% - 10px);
  min-height: 200px;
  max-height: 720px;
  background-color: #fafafa;
  outline-style: none;
  word-break: break-all;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: calc(100% - 10px);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #636e72;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #768185;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #2d3436;
  }
`;

export default ({ Html, setHtml }: ContentEditorProps) => {
  return (
    <>
      <Editor
        id="CUedit"
        className="editable"
        tagName="article"
        html={Html}
        onChange={(e) => {
          setHtml(e.target.value);
        }}
        spellCheck="false"
      />
    </>
  );
};
interface ContentEditorProps {
  Html: any;
  setHtml: any;
}

//꼭 sanitize-html을 해줄 것
