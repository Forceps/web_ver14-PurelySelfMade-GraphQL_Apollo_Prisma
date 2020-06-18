import React from "react";
import FontSizeColor from "./FontSizeColor";
import GenControls from "./GenControls";
import ImgInsertBtn from "./InsertConnection/ImgInsertBtn";
import AnchorInsertBtn from "./InsertConnection/AnchorInsertBtn";
import VideoInsertBtn from "./InsertConnection/VideoInsertBtn";
import AudioInsertBtn from "./InsertConnection/AudioInsertBtn";

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
      <VideoInsertBtn
        CaretLocation={CaretLocation}
        setVideoSubMenuOp={setVideoSubMenuOp}
      />
      <AnchorInsertBtn
        setAnchorInputOpen={setAnchorInputOpen}
        CaretLocation={CaretLocation}
      />
      <AudioInsertBtn
        CaretLocation={CaretLocation}
        setAudioSubMenuOp={setAudioSubMenuOp}
      />
      <ImgInsertBtn
        CaretLocation={CaretLocation}
        setImgSubMenuOp={setImgSubMenuOp}
      />
      <FontSizeColor
        FcOpen={FcOpen}
        setFcOpen={setFcOpen}
        ColorPiked={ColorPiked}
      />
    </>
  );
};
