import React, { RefObject } from "react";
import FontShape from "./FontDeside/FontShape";
import ParagraphShape from "./ParagraphShape";
import InsertBtnCollection from "./InsertBtnCollection";
import FontColor from "./FontDeside/FontColor";

type BtnCollectionProps = {
  CaretLocation: any;
  setAnchorInputOpen: any;
  setImgSubMenuOp: any;
  setVideoSubMenuOp: any;
  setAudioSubMenuOp: any;
  InEditor: RefObject<HTMLElement>;
};
export default ({
  CaretLocation,
  setAnchorInputOpen,
  setImgSubMenuOp,
  setVideoSubMenuOp,
  setAudioSubMenuOp,
  InEditor,
}: BtnCollectionProps) => {
  return (
    <>
      <ParagraphShape />
      <InsertBtnCollection
        CaretLocation={CaretLocation}
        setAnchorInputOpen={setAnchorInputOpen}
        setImgSubMenuOp={setImgSubMenuOp}
        setVideoSubMenuOp={setVideoSubMenuOp}
        setAudioSubMenuOp={setAudioSubMenuOp}
      />
      <FontShape />
      <FontColor CaretLocation={CaretLocation} />
    </>
  );
};
