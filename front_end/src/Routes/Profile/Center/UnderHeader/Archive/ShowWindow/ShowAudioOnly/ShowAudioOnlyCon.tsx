import React from "react";
import ShowAudioOnlyPre from "./ShowAudioOnlyPre";
import { AudioGetUpToN } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Audio/AudioR";

export default ({
  setAddAudioScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowAudioOnlyConProps) => {
  const { data: Audios, loading: AudiosLod } = AudioGetUpToN(0, 30);
  return (
    <ShowAudioOnlyPre
      setAddAudioScn={setAddAudioScn}
      Audios={Audios}
      AudiosLod={AudiosLod}
      setShowOneOpen={setShowOneOpen}
      setDetailInfo={setDetailInfo}
    />
  );
};
interface ShowAudioOnlyConProps {
  setAddAudioScn: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}
