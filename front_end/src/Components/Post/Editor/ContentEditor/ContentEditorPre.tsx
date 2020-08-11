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
  padding: 20px 10px 10px 10px;
  border: 0;
  width: 100%;
  height: calc(100% - 10px);
  min-height: 200px;
  max-height: 720px;
  outline-style: none;
  word-break: break-all;
`;

const CediPre = ({
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
