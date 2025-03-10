import React, { useEffect, RefObject } from "react";
import HiddenScreenPre from "./HiddenScreenPre";
import { restoreSelection } from "../../EditorLib";
import { useProfileMode } from "../../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { ImgHtmlInsert } from "../HTML_insert/ImageInsert/ImageInsert";
import { VideoInsertByYoutube } from "../HTML_insert/VideoInsert/YouTubePlayer/YouTubePlayer";
import NativeVideoPlayerHtmlInsert from "../HTML_insert/VideoInsert/NativePlayer/NativeVideoPlayerHtmlInsert";
import { AudioHtmlInsert } from "../HTML_insert/AudioInsert/AudioInsert";

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
  zIndex: number;
  InEditor: RefObject<HTMLElement>;
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
  zIndex,
  InEditor,
}: HiddenScreenProps) => {
  const { setMode } = useProfileMode();
  const ImgInsert = async (address: string) => {
    await restoreSelection(CaretLocation?.current);
    InEditor.current?.focus();
    await ImgHtmlInsert(address);
    setImgSubMenuOp(false);
  };

  const VideoInsert = async (
    address: string,
    state?: string,
    native_info?: any
  ) => {
    await restoreSelection(CaretLocation?.current);
    InEditor.current?.focus();
    if (state === "Youtube") {
      await VideoInsertByYoutube(address);
    } else {
      await NativeVideoPlayerHtmlInsert(address, native_info);
    }
    setVideoSubMenuOp(false);
  };

  const AudioInsert = async (address: string, audioInfo?: any) => {
    await restoreSelection(CaretLocation?.current);
    InEditor.current?.focus();
    await AudioHtmlInsert(address, audioInfo);
    setAudioSubMenuOp(false);
  };

  useEffect(() => {
    if (!ImgSubMenuOp && !VideoSubMenuOp && !AudioSubMenuOp) {
      setMode(["Post"]);
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
      zIndex={zIndex}
    />
  );
};
