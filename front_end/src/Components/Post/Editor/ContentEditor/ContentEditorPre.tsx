import React, {
  RefObject,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";
import AudioActionInHTML from "../LeftControl/HTML_insert/AudioInsert/AudioActionInHTML/AudioActionInHTML";
import NativeVideoActionInHTML from "../LeftControl/HTML_insert/VideoInsert/NativePlayer/NativeVideoPlayerActionInHTML/NativeVideoActionInHTML";

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

export const CediPre = ({
  InEditor,
  Html,
  setImgSubMenuOp2,
  mediaTargetId,
  setHtmlChange,
  HtmlChange,
  CaretLocation,
}: ContentEditorProps) => {
  return (
    <>
      <Editor
        id="CUedit"
        className="editable"
        innerRef={InEditor}
        tagName="article"
        html={Html.current}
        onChange={(e) => {
          Html.current = e.target.value;
          setHtmlChange((p) => p + 1);
        }}
        spellCheck="false"
      />
      <AudioActionInHTML
        InEditor={InEditor}
        rerenderingPoint={HtmlChange}
        mediaTargetId={mediaTargetId}
        setImgSubMenuOp2={setImgSubMenuOp2}
        CaretLocation={CaretLocation}
      />
      <NativeVideoActionInHTML
        InEditor={InEditor}
        rerenderingPoint={HtmlChange}
        mediaTargetId={mediaTargetId}
        setImgSubMenuOp2={setImgSubMenuOp2}
        CaretLocation={CaretLocation}
      />
    </>
  );
};
interface ContentEditorProps {
  InEditor: RefObject<HTMLElement>;
  Html: MutableRefObject<string>;
  setImgSubMenuOp2: any;
  mediaTargetId: any;
  setHtmlChange: Dispatch<SetStateAction<number>>;
  HtmlChange: number;
  CaretLocation: any;
}

export default React.memo(CediPre);

//꼭 sanitize-html을 해줄 것
