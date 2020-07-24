import React from "react";
import styled from "styled-components";
import RightControl from "./RightControl/RightControl";
import LeftControlCon from "./LeftControl/LeftControlCon";
import ContentEditor from "./ContentEditor/ContentEditorCon";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

interface TemplateProps {
  zIndex: number;
}
const Template = styled.div<TemplateProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: ${(p) => p.zIndex};
  top: 7%;
  min-width: 530px;
  max-width: 720px;
  width: 50vw;
  min-height: 400px;
  height: 780px;
  max-height: 90%;
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px;
  width: 100%;
`;
const InputCaption = styled.input`
  display: inline-block;
  padding: 10px;
  border: 0;
  height: 50px;
  width: 100%;
  font-size: 17px;
  background-color: #fafafa;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const SubmitButton = styled.button`
  display: inline-block;
  height: 50px;
  border: 0;
  padding: 0;
  background-color: #2d3436;
  color: white;
  &:hover {
    background-color: #636e72;
  }
  cursor: pointer;
  outline-style: none;
`;
const DmCon = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export default ({
  caption,
  Mutation,
  Exit,
  Html,
  setHtml,
  FcOpen,
  setFcOpen,
  ColorPiked,
  setColorPiked,
  IroColor,
  Mode,
  CaretLocation,
  zIndex,
  TitleImg,
  setTitleImg,
}: EditorPreProps) => {
  return (
    <Template zIndex={zIndex}>
      <Header>
        <InputCaption
          placeholder="Caption"
          {...caption}
          spellCheck="false"
          id="EditorPostCaption"
          onKeyUp={(e: any) => {
            e.stopPropagation();
            if (e.keyCode === 13) {
              Mutation();
            }
          }}
        />
        <SubmitButton
          onClick={(e: any) => {
            spaped(e);
            Mutation();
          }}
        >
          {Mode && Mode.current === "update" ? "Update" : "Write"}
        </SubmitButton>
      </Header>
      <LeftControlCon
        FcOpen={FcOpen}
        setFcOpen={setFcOpen}
        ColorPiked={ColorPiked}
        setColorPiked={setColorPiked}
        IroColor={IroColor}
        CaretLocation={CaretLocation}
        zIndex={zIndex + 10}
      />
      <DmCon>
        <ContentEditor
          Html={Html}
          setHtml={setHtml}
          setTitleImg={setTitleImg}
        />
        <RightControl
          Exit={Exit}
          zIndex={zIndex + 10}
          TitleImg={TitleImg}
          setTitleImg={setTitleImg}
        />
      </DmCon>
    </Template>
  );
};

type EditorPreProps = {
  caption: any;
  Mutation: any;
  Exit: any;
  Html: any;
  setHtml: any;
  FcOpen: boolean;
  setFcOpen: any;
  ColorPiked: any;
  setColorPiked: any;
  IroColor: any;
  Mode?: any;
  CaretLocation: any;
  zIndex: number;
  TitleImg: string;
  setTitleImg: any;
};

//꼭 sanitize-html을 해줄 것
