import React, { useEffect } from "react";
import styled from "styled-components";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import getBlobDuration from "get-blob-duration";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioPlayer,
  audioPlayBtn,
  rerenderingPoint,
  audioEndTime,
  getAudioCurrentTime,
  statusBarMoving,
  audioInfoMemory,
}: St2AudioActionLogicProps) => {
  const getAudioDuration = async (audioPlayer: any) => {
    let duration: number;
    if (!isFinite(audioPlayer.duration)) {
      const blob = await fetch(audioPlayer.src).then((response) =>
        response.blob()
      );
      duration = await getBlobDuration(blob);
    } else {
      duration = audioPlayer.duration;
    }
    return duration;
  };
  const setAudioTotalTime = async () => {
    if (audioPlayer && audioEndTime) {
      audioPlayer.volume = 0.5;
      audioInfoMemory.textContent = `${await getAudioDuration(audioPlayer)}`;
      const totalTimeString = MediaClock(parseInt(audioInfoMemory.textContent));
      audioEndTime.textContent = totalTimeString;
    }
  };
  const handleAudioEnded = () => {
    audioPlayer?.pause();
    audioPlayBtn?.setAttribute("class", "icon-play audioPlayIcon");
  };

  useEffect(() => {
    audioPlayer?.addEventListener("ended", handleAudioEnded);
    setInterval(getAudioCurrentTime, 1000);
    setInterval(statusBarMoving, 100);
    return () => {
      audioPlayer?.removeEventListener("ended", handleAudioEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    audioPlayer?.addEventListener("loadedmetadata", setAudioTotalTime);
    return () => {
      audioPlayer?.removeEventListener("loadedmetadata", setAudioTotalTime);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};

interface St2AudioActionLogicProps {
  audioPlayer: HTMLAudioElement;
  audioPlayBtn: HTMLElement;
  audioEndTime: HTMLElement;
  getAudioCurrentTime: () => void;
  statusBarMoving: () => void;
  rerenderingPoint?: any;
  audioInfoMemory: HTMLElement;
}
