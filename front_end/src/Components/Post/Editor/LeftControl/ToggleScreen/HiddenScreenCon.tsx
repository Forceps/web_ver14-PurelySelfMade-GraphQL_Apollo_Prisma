import React, { useEffect } from "react";
import HiddenScreenPre from "./HiddenScreenPre";
import { restoreSelection } from "../../EditorLib";
import {
  ImgHtmlInsert,
  VideoInsertByYoutube,
  VideoInsertByGeneral,
  AudioHtmlInsert,
} from "../LeftControlLib";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";

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
  AudioSubMenuOp: boolean;
  setAudioSubMenuOp: any;
};
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
}: HiddenScreenProps) => {
  const PfM = useProfileMode();
  const ImgInsert = async (address: string) => {
    await restoreSelection(CaretLocation?.current);
    document.getElementById("CUedit")?.focus();
    await ImgHtmlInsert(address);
    setImgSubMenuOp(false);
  };
  const VideoInsert = async (address: string, state?: string) => {
    await restoreSelection(CaretLocation?.current);
    document.getElementById("CUedit")?.focus();
    if (state === "Youtube") {
      await VideoInsertByYoutube(address);
    } else {
      await VideoInsertByGeneral(address);
    }
    setVideoSubMenuOp(false);
  };
  const AudioInsert = async (address: string) => {
    console.log(address);
    await restoreSelection(CaretLocation?.current);
    document.getElementById("CUedit")?.focus();
    await AudioHtmlInsert(address);
    setAudioSubMenuOp(false);
  };
  useEffect(() => {
    if (!ImgSubMenuOp && !VideoSubMenuOp && !AudioSubMenuOp) {
      PfM.setMode(["Post"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ImgSubMenuOp, VideoSubMenuOp, AudioSubMenuOp]);
  return (
    <HiddenScreenPre
      CaretLocation={CaretLocation}
      AnchorInputOpen={AnchorInputOpen}
      setAnchorInputOpen={setAnchorInputOpen}
      URLText={URLText}
      VideoURLText={VideoURLText}
      ImgSubMenuOp={ImgSubMenuOp}
      setImgSubMenuOp={setImgSubMenuOp}
      VideoSubMenuOp={VideoSubMenuOp}
      setVideoSubMenuOp={setVideoSubMenuOp}
      ImgInsert={ImgInsert}
      VideoInsert={VideoInsert}
      AudioSubMenuOp={AudioSubMenuOp}
      setAudioSubMenuOp={setAudioSubMenuOp}
      AudioInsert={AudioInsert}
    />
  );
};
