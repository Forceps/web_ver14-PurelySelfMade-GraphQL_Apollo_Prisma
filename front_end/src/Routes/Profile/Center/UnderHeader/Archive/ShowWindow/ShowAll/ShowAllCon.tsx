import React from "react";
import ShowAllPre from "./ShowAllPre";
import { ImgGetUpToN } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Image/ImageR";
import { VideoGetUpToN } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Video/VideoR";
import { AudioGetUpToN } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Audio/AudioR";

export default ({
  setAddImgScn,
  setAddVideoScn,
  setAddAudioScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowAllCase) => {
  const { data: ImgAll, loading: ImgAllLod } = ImgGetUpToN();
  const { data: VideoAll, loading: VideoAllLod } = VideoGetUpToN();
  const { data: AudioAll, loading: AudioAllLod } = AudioGetUpToN();
  return (
    <ShowAllPre
      setAddImgScn={setAddImgScn}
      ImgAll={ImgAll}
      ImgAllLod={ImgAllLod}
      setAddVideoScn={setAddVideoScn}
      VideoAll={VideoAll}
      VideoAllLod={VideoAllLod}
      setAddAudioScn={setAddAudioScn}
      AudioAll={AudioAll}
      AudioAllLod={AudioAllLod}
      setShowOneOpen={setShowOneOpen}
      setDetailInfo={setDetailInfo}
    />
  );
};
interface ShowAllCase {
  setAddImgScn: any;
  setAddVideoScn: any;
  setAddAudioScn: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}
