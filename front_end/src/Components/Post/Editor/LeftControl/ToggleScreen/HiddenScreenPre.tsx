import React from "react";
import AnchorURL from "./A_Tag_Insert";
import VideoInS from "../../../../Media/Insert/VideoInsertScreen/VideoInSCon";
import ImgInS from "../../../../Media/Insert/ImgInsertScreen/ImgInSCon";
import AudioInS from "../../../../Media/Insert/AudioInsertScreen/AudioInSCon";

type HiddenScreenProps = {
  CaretLocation: any;
  AnchorInputOpen: boolean;
  setAnchorInputOpen: any;
  URLText: any;
  VideoURLText: any;
  ImgSubMenuOp: boolean;
  setImgSubMenuOp: any;
  VideoSubMenuOp: boolean;
  setVideoSubMenuOp: any;
  ImgInsert: any;
  VideoInsert: any;
  AudioSubMenuOp: boolean;
  setAudioSubMenuOp: any;
  AudioInsert: any;
  zIndex: number;
};
export default ({
  CaretLocation,
  AnchorInputOpen,
  setAnchorInputOpen,
  URLText,
  ImgSubMenuOp,
  setImgSubMenuOp,
  VideoSubMenuOp,
  setVideoSubMenuOp,
  ImgInsert,
  VideoInsert,
  AudioSubMenuOp,
  setAudioSubMenuOp,
  AudioInsert,
  zIndex,
}: HiddenScreenProps) => {
  return (
    <>
      {AnchorInputOpen && (
        <AnchorURL
          setAnchorInputOpen={setAnchorInputOpen}
          URLText={URLText}
          CaretLocation={CaretLocation}
          zIndex={zIndex}
        />
      )}
      {ImgSubMenuOp && (
        <ImgInS
          setImgSubMenuOp={setImgSubMenuOp}
          ImgInsert={ImgInsert}
          zIndex={zIndex}
        />
      )}
      {VideoSubMenuOp && (
        <VideoInS
          setVideoSubMenuOp={setVideoSubMenuOp}
          VideoInsert={VideoInsert}
          zIndex={zIndex}
        />
      )}
      {AudioSubMenuOp && (
        <AudioInS
          setAudioSubMenuOp={setAudioSubMenuOp}
          AudioInsert={AudioInsert}
          zIndex={zIndex}
        />
      )}
    </>
  );
};
