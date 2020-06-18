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
}: HiddenScreenProps) => {
  return (
    <>
      {AnchorInputOpen && (
        <AnchorURL
          setAnchorInputOpen={setAnchorInputOpen}
          URLText={URLText}
          CaretLocation={CaretLocation}
        />
      )}
      {ImgSubMenuOp && (
        <ImgInS setImgSubMenuOp={setImgSubMenuOp} ImgInsert={ImgInsert} />
      )}
      {VideoSubMenuOp && (
        <VideoInS
          setVideoSubMenuOp={setVideoSubMenuOp}
          VideoInsert={VideoInsert}
        />
      )}
      {AudioSubMenuOp && (
        <AudioInS
          setAudioSubMenuOp={setAudioSubMenuOp}
          AudioInsert={AudioInsert}
        />
      )}
    </>
  );
};
