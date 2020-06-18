import React from "react";
import ShowVideoOnlyPre from "./ShowVideoOnlyPre";
import { VideoGetUpToN } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Video/VideoR";

export default ({
  setAddVideoScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowVideoOnlyConProps) => {
  const { data: Videos, loading: VideosLod } = VideoGetUpToN(0, 9);
  return (
    <ShowVideoOnlyPre
      setAddVideoScn={setAddVideoScn}
      Videos={Videos}
      VideosLod={VideosLod}
      setShowOneOpen={setShowOneOpen}
      setDetailInfo={setDetailInfo}
    />
  );
};
interface ShowVideoOnlyConProps {
  setAddVideoScn: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}
