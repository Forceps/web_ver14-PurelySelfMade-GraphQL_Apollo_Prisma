import React from "react";
import VideoInsertBtn from "./InsertConnection/VideoInsertBtn";
import AnchorInsertBtn from "./InsertConnection/AnchorInsertBtn";
import AudioInsertBtn from "./InsertConnection/AudioInsertBtn";
import ImgInsertBtn from "./InsertConnection/ImgInsertBtn";
import { SetOfBtn } from "./ParagraphShape";

export default ({
  CaretLocation,
  setAnchorInputOpen,
  setImgSubMenuOp,
  setVideoSubMenuOp,
  setAudioSubMenuOp,
}: InsertBtnCollectionProps) => {
  return (
    <SetOfBtn>
      <AnchorInsertBtn
        setAnchorInputOpen={setAnchorInputOpen}
        CaretLocation={CaretLocation}
      />
      <ImgInsertBtn
        CaretLocation={CaretLocation}
        setImgSubMenuOp={setImgSubMenuOp}
      />
      <AudioInsertBtn
        CaretLocation={CaretLocation}
        setAudioSubMenuOp={setAudioSubMenuOp}
      />
      <VideoInsertBtn
        CaretLocation={CaretLocation}
        setVideoSubMenuOp={setVideoSubMenuOp}
      />
    </SetOfBtn>
  );
};
interface InsertBtnCollectionProps {
  CaretLocation: any;
  setAnchorInputOpen: any;
  setImgSubMenuOp: any;
  setVideoSubMenuOp: any;
  setAudioSubMenuOp: any;
}
