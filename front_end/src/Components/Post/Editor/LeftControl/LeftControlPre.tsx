import React, { RefObject } from "react";
import styled from "styled-components";
import HiddenScreen from "./ToggleScreen/HiddenScreenCon";
import BtnCollection from "./ButtonPart/BtnCollection";

interface ControlsLProps {
  zIndex: number;
}
const ControlsL = styled.div<ControlsLProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  top: 70px;
  left: -220px;
  width: 200px;
  z-index: ${(p) => p.zIndex};
`;

export default ({
  CaretLocation,
  AnchorInputOpen,
  setAnchorInputOpen,
  URLText,
  VideoURLText,
  ImgSubMenuOp,
  setImgSubMenuOp,
  VideoSubMenuOp,
  setVideoSubMenuOp,
  AudioSubMenuOp,
  setAudioSubMenuOp,
  zIndex,
  InEditor,
}: LeftControlPreProps) => {
  return (
    <>
      <ControlsL zIndex={zIndex}>
        <BtnCollection
          CaretLocation={CaretLocation}
          setAnchorInputOpen={setAnchorInputOpen}
          setImgSubMenuOp={setImgSubMenuOp}
          setVideoSubMenuOp={setVideoSubMenuOp}
          setAudioSubMenuOp={setAudioSubMenuOp}
          InEditor={InEditor}
        />
      </ControlsL>
      <HiddenScreen
        InEditor={InEditor}
        CaretLocation={CaretLocation}
        AnchorInputOpen={AnchorInputOpen}
        setAnchorInputOpen={setAnchorInputOpen}
        URLText={URLText}
        VideoURLText={VideoURLText}
        ImgSubMenuOp={ImgSubMenuOp}
        setImgSubMenuOp={setImgSubMenuOp}
        VideoSubMenuOp={VideoSubMenuOp}
        setVideoSubMenuOp={setVideoSubMenuOp}
        AudioSubMenuOp={AudioSubMenuOp}
        setAudioSubMenuOp={setAudioSubMenuOp}
        zIndex={zIndex + 10}
      />
    </>
  );
};
type LeftControlPreProps = {
  CaretLocation: any;
  AnchorInputOpen: boolean;
  setAnchorInputOpen: any;
  URLText: any;
  VideoURLText: any;
  ImgSubMenuOp: boolean;
  setImgSubMenuOp: any;
  VideoSubMenuOp: boolean;
  setVideoSubMenuOp: any;
  AudioSubMenuOp: boolean;
  setAudioSubMenuOp: any;
  zIndex: number;
  InEditor: RefObject<HTMLElement>;
};
