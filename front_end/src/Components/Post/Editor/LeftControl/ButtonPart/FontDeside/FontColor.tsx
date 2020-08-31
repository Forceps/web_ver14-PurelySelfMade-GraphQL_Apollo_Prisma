import React, { useState } from "react";
import styled, { css } from "styled-components";
import { saveSelection } from "../../../EditorLib";
import { SetOfBtn } from "../ParagraphShape";
import WH100per from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import ColorPicker from "./ColorPicker";
import { FlexCenter100per } from "../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const SetOfBtnDevide = styled(SetOfBtn)`
  display: grid;
  grid-template-rows: 30px 27px 27px 1fr;
  position: relative;
`;
const Header = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 30px;
`;
const Caption = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
`;
const PickerShowBtn = styled(FlexCenter100per)`
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Align = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 17px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: #dfe6e9;
  }
`;
interface AlignCommonProps {
  ColorObj: string;
}
const FontItself = styled(Align)<AlignCommonProps>`
  ${(p) => {
    if (p.ColorObj === "font") {
      return css`
        padding: 0 0 0 13px;
        border-left: 4px solid #636e72;
      `;
    }
  }}
`;
const FontBack = styled(Align)<AlignCommonProps>`
  ${(p) => {
    if (p.ColorObj === "back") {
      return css`
        padding: 0 0 0 13px;
        border-left: 4px solid #636e72;
      `;
    }
  }}
`;

const FontColor = ({ CaretLocation }: FontColorProps) => {
  const [ColorObj, setColorObj] = useState("font");
  const [PickerShow, setPickerShow] = useState(false);
  return (
    <SetOfBtnDevide
      onMouseDown={async (e) => {
        spaped(e);
        CaretLocation.current = saveSelection();
      }}
    >
      <Header>
        <Caption>
          <i className="icon-palette" />
        </Caption>
        <PickerShowBtn
          onClick={() => {
            setPickerShow((p) => !p);
          }}
        >
          <i className={PickerShow ? "icon-down-dir" : "icon-up-dir"} />
        </PickerShowBtn>
      </Header>
      <FontItself
        ColorObj={ColorObj}
        onClick={() => {
          setColorObj("font");
        }}
      >
        Font
      </FontItself>
      <FontBack
        ColorObj={ColorObj}
        onClick={() => {
          setColorObj("back");
        }}
      >
        Back
      </FontBack>
      {PickerShow && <ColorPicker ColorObj={ColorObj} />}
    </SetOfBtnDevide>
  );
};
interface FontColorProps {
  CaretLocation: any;
}
export default React.memo(FontColor);
