import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const ButtonsColection = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 5px 0;
`;
const PlayIcon = styled.i`
  font-size: 1.4rem;
  cursor: pointer;
`;
const RestIcon = styled.i`
  font-size: 0.8rem;
  padding: 3px;
  margin: 0 2px 0 2px;
  cursor: pointer;
`;

export default ({
  audioTag,
  setPlaying,
  Playing,
  audioSetTimeDenote,
  TotalTime,
}: ButtonsProps) => {
  const playOrPause = () => {
    if (audioTag?.played) {
      audioTag?.pause();
      setPlaying(false);
    } else {
      audioTag?.play();
      setPlaying(true);
    }
  };
  const movePoint = (type?: string) => {
    if (audioTag) {
      if (type === "front") {
        if (TotalTime > audioTag.currentTime + 10) {
          audioTag.currentTime = audioTag.currentTime + 10;
        } else {
          audioTag.currentTime = TotalTime;
        }
      } else if (type === "back" && 10 < audioTag.currentTime) {
        audioTag.currentTime = audioTag.currentTime - 10;
      } else {
        audioTag.currentTime = 0;
      }
    }
    audioSetTimeDenote();
  };
  return (
    <ButtonsColection>
      <PlayIcon
        className={Playing ? "icon-pause" : "icon-play"}
        onClick={playOrPause}
      />
      <RestIcon
        className="icon-to-start"
        onClick={() => {
          movePoint();
        }}
      />
      <RestIcon
        className="icon-fast-bw"
        onClick={() => {
          movePoint("back");
        }}
      />
      <RestIcon
        className="icon-fast-fw"
        onClick={() => {
          movePoint("front");
        }}
      />
    </ButtonsColection>
  );
};
interface ButtonsProps {
  audioTag: HTMLAudioElement | null;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  Playing: boolean;
  audioSetTimeDenote: () => void;
  TotalTime: number;
}
