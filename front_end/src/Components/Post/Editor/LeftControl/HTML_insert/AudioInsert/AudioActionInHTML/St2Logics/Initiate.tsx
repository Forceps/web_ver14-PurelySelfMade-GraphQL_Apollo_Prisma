import React, { useEffect, RefObject } from "react";
import styled from "styled-components";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import getBlobDuration from "get-blob-duration";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  InEditor,
  audioPlayer,
  audioPlayBtn,
  audioEndTime,
  getAudioCurrentTime,
  statusBarMoving,
  audioInfoMemory,
  mediaTargetId,
  playerClicked,
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
  const clickPlayer = (e: any) => {
    const plau = e.target.closest(".audioPlayer");
    if (plau && plau.closest("#CUedit")) {
      e.stopPropagation();
      InEditor.current?.blur();
      mediaTargetId.current = plau.id;
      playerClicked.current = true;
    } else if (playerClicked.current) {
      playerClicked.current = false;
    }
  };

  useEffect(() => {
    setAudioTotalTime();
    audioPlayer?.addEventListener("loadedmetadata", setAudioTotalTime);
    audioPlayer?.addEventListener("ended", handleAudioEnded);
    const timeGo1 = setInterval(getAudioCurrentTime, 1000);
    const timeGo2 = setInterval(statusBarMoving, 100);
    document.addEventListener("click", clickPlayer);

    return () => {
      audioPlayer?.removeEventListener("loadedmetadata", setAudioTotalTime);
      audioPlayer?.removeEventListener("ended", handleAudioEnded);
      window.clearInterval(timeGo1);
      window.clearInterval(timeGo2);
      document.removeEventListener("click", clickPlayer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UnnecessaryDiv />;
};

interface St2AudioActionLogicProps {
  InEditor: RefObject<HTMLElement>;
  audioPlayer: HTMLAudioElement;
  audioPlayBtn: HTMLElement;
  audioEndTime: HTMLElement;
  getAudioCurrentTime: () => void;
  statusBarMoving: () => void;
  audioInfoMemory: HTMLElement;
  mediaTargetId: any;
  playerClicked: React.MutableRefObject<boolean>;
}
