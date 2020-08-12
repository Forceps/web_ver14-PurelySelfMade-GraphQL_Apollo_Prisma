import React, { RefObject, MutableRefObject } from "react";
import styled from "styled-components";
import RightControl from "./RightControl/RightControl";
import LeftControlCon from "./LeftControl/LeftControlCon";
import ContentEditor from "./ContentEditor/ContentEditorCon";
import WH100per, {
  WH100perInput,
  H100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useDirMode } from "../../../GlobalLib/Context/ProfileContext/DirMode";
import { useProfileMode } from "../../../GlobalLib/Context/ProfileContext/ProfileMode";

interface TemplateProps {
  zIndex: number;
}
const Template = styled.div<TemplateProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: ${(p) => p.zIndex};
  min-width: 530px;
  max-width: 720px;
  width: 50vw;
  min-height: 400px;
  height: 93%;
  align-self: center;
`;
const EditorCenter = styled(IncludeScrollBar)`
  display: grid;
  grid-template-rows: 60px 1px 1fr;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
`;
const InputCaption = styled(WH100perInput)`
  display: inline-block;
  padding: 10px;
  border: 0;
  font-size: 17px;
  border-radius: 0;
`;
const DmCon = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const ContourCon = styled(WH100per)`
  padding: 0 0 0 10px;
`;
const Contour = styled(H100per)`
  width: 300px;
  background-color: #b2bec3;
`;
const EditorExit = styled.div`
  position: fixed;
  top: 12px;
  right: 9px;
  color: #fafafa;
  font-size: 1.3rem;
  cursor: pointer;
`;

export default ({
  InEditor,
  caption,
  Mutation,
  Exit,
  Html,
  Mode,
  CaretLocation,
  zIndex,
  TitleImg,
  setTitleImg,
}: EditorPreProps) => {
  const Pmode = useProfileMode();
  const DC = useDirMode();
  return (
    <Template zIndex={zIndex}>
      <LeftControlCon
        InEditor={InEditor}
        CaretLocation={CaretLocation}
        zIndex={zIndex + 10}
      />
      <DmCon>
        <EditorCenter>
          <InputCaption
            placeholder="Title"
            value={caption.value}
            onChange={caption.onChange}
            spellCheck="false"
            id="EditorPostCaption"
            onKeyUp={(e: any) => {
              if (e.keyCode === 13) {
                e.stopPropagation();
                Mutation();
              }
            }}
            autoComplete="false"
          />
          <ContourCon>
            <Contour />
          </ContourCon>
          <ContentEditor
            InEditor={InEditor}
            Html={Html}
            setTitleImg={setTitleImg}
            CaretLocation={CaretLocation}
            zIndex={zIndex + 10}
          />
        </EditorCenter>
        <RightControl
          zIndex={zIndex + 10}
          TitleImg={TitleImg}
          setTitleImg={setTitleImg}
          Mutation={Mutation}
          Mode={Mode}
        />
      </DmCon>
      <EditorExit
        onClick={(e) => {
          spaped(e);
          Pmode.setMode(Pmode.rememberLatestMode.current);
          DC.setLocation(DC.rememberLocation.current);
          Exit(false);
        }}
      >
        <i className="icon-noun_x_2939490" />
      </EditorExit>
    </Template>
  );
};

type EditorPreProps = {
  InEditor: RefObject<HTMLElement>;
  caption: any;
  Mutation: any;
  Exit: any;
  Html: MutableRefObject<string>;
  Mode?: any;
  CaretLocation: any;
  zIndex: number;
  TitleImg: string;
  setTitleImg: any;
};

//꼭 sanitize-html을 해줄 것
