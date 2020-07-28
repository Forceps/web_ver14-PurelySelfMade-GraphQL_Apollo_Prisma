import React, { RefObject, Dispatch, SetStateAction } from "react";
import getBlobDuration from "get-blob-duration";

export default ({
  address,
  audioTag,
  setTotalTime,
  setPlaying,
}: AudioSubstanceProps) => {
  return (
    <audio
      ref={audioTag}
      onLoadedMetadata={async (e) => {
        e.currentTarget.volume = 0.5;
        let duration: number = 0;
        if (!isFinite(e.currentTarget.duration)) {
          const blob = await fetch(e.currentTarget.src).then((res) =>
            res.blob()
          );
          duration = await getBlobDuration(blob);
        } else {
          duration = e.currentTarget.duration;
        }
        setTotalTime(duration);
      }}
      onEnded={(e) => {
        e.currentTarget.pause();
        setPlaying(false);
      }}
    >
      <source src={address} />
    </audio>
  );
};

interface AudioSubstanceProps {
  address: string;
  audioTag: RefObject<HTMLAudioElement>;
  setTotalTime: Dispatch<SetStateAction<number>>;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}
