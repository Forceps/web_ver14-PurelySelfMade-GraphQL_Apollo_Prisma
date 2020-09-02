import React from "react";
import ShowAllPre from "./ShowAllPre";
import { ImgGetByDirIdRequest } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Image/ImageR";
import { VideoGetByDirIdUpToN } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Video/VideoR";
import { AudioGetUpToN } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Audio/AudioR";

export default ({
  setAddImgScn,
  setAddVideoScn,
  setAddAudioScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowAllCase) => {
  const { data: ImgAll, loading: ImgAllLod } = ImgGetByDirIdRequest(0, 0, 0, 4);
  const { data: VideoAll, loading: VideoAllLod } = VideoGetByDirIdUpToN();
  const { data: AudioAll, loading: AudioAllLod } = AudioGetUpToN();
  return (
    <ShowAllPre
      setAddImgScn={setAddImgScn}
      ImgAll={ImgAll?.imgGetByDirId}
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
