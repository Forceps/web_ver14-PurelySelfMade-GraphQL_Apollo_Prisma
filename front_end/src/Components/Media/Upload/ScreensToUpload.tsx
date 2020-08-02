import React from "react";
import UploadImageCon from "./UploadImage/UploadImageCon";
import UploadVideoCon from "./UploadVideo/UploadVideoCon";
import UploadMusicCon from "./UploadMusic/UploadMusicCon";

export default ({
  AddImgScn,
  setAddImgScn,
  AddVideoScn,
  setAddVideoScn,
  AddAudioScn,
  setAddAudioScn,
}: ShowAllPreProps) => {
  return (
    <>
      {AddImgScn && <UploadImageCon setAddImgScn={setAddImgScn} />}
      {AddVideoScn && <UploadVideoCon setAddVideoScn={setAddVideoScn} />}
      {AddAudioScn && <UploadMusicCon setAddAudioScn={setAddAudioScn} />}
    </>
  );
};
interface ShowAllPreProps {
  AddImgScn: boolean;
  setAddImgScn: any;
  AddVideoScn: boolean;
  setAddVideoScn: any;
  AddAudioScn: boolean;
  setAddAudioScn: any;
}
