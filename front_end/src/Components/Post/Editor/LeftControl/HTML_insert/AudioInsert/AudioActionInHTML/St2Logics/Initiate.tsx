import React, { useEffect } from "react";
import styled from "styled-components";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import getBlobDuration from "get-blob-duration";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioTarget,
  audioPlayer,
  audioPlayBtn,
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
  const clickPlayer = () => {
    document.getElementById("CUedit")?.focus();
  };

  useEffect(() => {
    setAudioTotalTime();
    audioPlayer?.addEventListener("loadedmetadata", setAudioTotalTime);
    audioPlayer?.addEventListener("ended", handleAudioEnded);
    const timeGo1 = setInterval(getAudioCurrentTime, 1000);
    const timeGo2 = setInterval(statusBarMoving, 100);
    // audioTarget?.addEventListener("mousedown", clickPlayer);
    return () => {
      audioPlayer?.removeEventListener("loadedmetadata", setAudioTotalTime);
      audioPlayer?.removeEventListener("ended", handleAudioEnded);
      window.clearInterval(timeGo1);
      window.clearInterval(timeGo2);
      audioTarget?.removeEventListener("mousedown", clickPlayer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UnnecessaryDiv />;
};

interface St2AudioActionLogicProps {
  audioTarget: Element;
  audioPlayer: HTMLAudioElement;
  audioPlayBtn: HTMLElement;
  audioEndTime: HTMLElement;
  getAudioCurrentTime: () => void;
  statusBarMoving: () => void;
  audioInfoMemory: HTMLElement;
}
