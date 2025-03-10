import React, { useState, useEffect } from "react";
import AudioInSPre from "./AudioInSPre";
import useInput from "../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { AudioGetByDirIdRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Media/Audio/AudioR";

type AudioURLProps = {
  setAudioSubMenuOp: any;
  AudioInsert: any;
  zIndex?: number;
};
export default ({
  setAudioSubMenuOp,
  AudioInsert,
  zIndex = 20,
}: AudioURLProps) => {
  const [AudioSelectMode, setAudioSelectMode] = useState("URL");
  const AudioURLText = useInput("");
  const {
    data: AudioList,
    loading: AudioListLod,
    refetch: AudioListRefetch,
  } = AudioGetByDirIdRequest(0, 0, 0, 10);
  const [AddAudioOpen, setAddAudioOpen] = useState(false);
  useEffect(() => {
    document.getElementById("AudioURLTextInput")?.focus();
    AudioListRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AudioInSPre
      setAudioSubMenuOp={setAudioSubMenuOp}
      AudioInsert={AudioInsert}
      AudioURLText={AudioURLText}
      AudioSelectMode={AudioSelectMode}
      setAudioSelectMode={setAudioSelectMode}
      zIndex={zIndex}
      AudioList={AudioList?.musicGetByDirId}
      AudioListLod={AudioListLod}
      AudioListRefetch={AudioListRefetch}
      AddAudioOpen={AddAudioOpen}
      setAddAudioOpen={setAddAudioOpen}
    />
  );
};
