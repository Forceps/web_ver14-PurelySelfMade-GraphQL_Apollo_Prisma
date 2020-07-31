import React, { useState, RefObject } from "react";
import useInput from "../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import LeftControlPre from "./LeftControlPre";

type LeftControlConProps = {
  CaretLocation: any;
  FcOpen: boolean;
  setFcOpen: any;
  ColorPiked: any;
  setColorPiked: any;
  IroColor: any;
  zIndex: number;
  InEditor: RefObject<HTMLElement>;
};
export default ({
  InEditor,
  CaretLocation,
  FcOpen,
  setFcOpen,
  ColorPiked,
  setColorPiked,
  IroColor,
  zIndex,
}: LeftControlConProps) => {
  const [AnchorInputOpen, setAnchorInputOpen] = useState(false);
  const URLText = useInput("");
  const VideoURLText = useInput("");
  const [ImgSubMenuOp, setImgSubMenuOp] = useState(false);
  const [VideoSubMenuOp, setVideoSubMenuOp] = useState(false);
  const [AudioSubMenuOp, setAudioSubMenuOp] = useState(false);

  return (
    <LeftControlPre
      InEditor={InEditor}
      FcOpen={FcOpen}
      setFcOpen={setFcOpen}
      ColorPiked={ColorPiked}
      setColorPiked={setColorPiked}
      IroColor={IroColor}
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
      zIndex={zIndex}
    />
  );
};
