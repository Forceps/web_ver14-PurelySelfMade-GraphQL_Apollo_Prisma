import React, { useRef, useState } from "react";
import AudioPlayerPre from "./AudioPlayerPre";

export default ({ address }: AudioPlayerPreProps) => {
  const audioTag = useRef<HTMLAudioElement>(null);
  const audioTarget = useRef<HTMLDivElement>(null);
  const [TotalTime, setTotalTime] = useState(0);
  const [Playing, setPlaying] = useState(false);
  const [WithImg, setWithImg] = useState(false);

  return (
    <AudioPlayerPre
      address={address}
      audioTag={audioTag}
      TotalTime={TotalTime}
      setTotalTime={setTotalTime}
      Playing={Playing}
      setPlaying={setPlaying}
      WithImg={WithImg}
      setWithImg={setWithImg}
      audioTarget={audioTarget}
    />
  );
};
interface AudioPlayerPreProps {
  address: string;
}
