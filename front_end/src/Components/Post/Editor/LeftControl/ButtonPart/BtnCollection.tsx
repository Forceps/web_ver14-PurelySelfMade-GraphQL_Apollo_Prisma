import React from "react";
import FontSizeColor from "./FontSizeColor";
import GenControls from "./GenControls";
import InsertBtnCollection from "./InsertBtnCollection";

type BtnCollectionProps = {
  FcOpen: boolean;
  setFcOpen: any;
  ColorPiked: any;
  CaretLocation: any;
  setAnchorInputOpen: any;
  setImgSubMenuOp: any;
  setVideoSubMenuOp: any;
  setAudioSubMenuOp: any;
};
export default ({
  FcOpen,
  setFcOpen,
  ColorPiked,
  CaretLocation,
  setAnchorInputOpen,
  setImgSubMenuOp,
  setVideoSubMenuOp,
  setAudioSubMenuOp,
}: BtnCollectionProps) => {
  return (
    <>
      <GenControls />
      <InsertBtnCollection
        CaretLocation={CaretLocation}
        setAnchorInputOpen={setAnchorInputOpen}
        setImgSubMenuOp={setImgSubMenuOp}
        setVideoSubMenuOp={setVideoSubMenuOp}
        setAudioSubMenuOp={setAudioSubMenuOp}
      />
      <FontSizeColor />
    </>
  );
};
