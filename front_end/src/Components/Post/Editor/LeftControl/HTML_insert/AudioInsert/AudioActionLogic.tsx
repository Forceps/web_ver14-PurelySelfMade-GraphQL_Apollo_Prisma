import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import getBlobDuration from "get-blob-duration";
import { MediaClock } from "../../../../../../GlobalLib/RecycleFunction/etc/Time";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ Html }: AudioActionLogicProps) => {
  const audioContainers = document.getElementsByClassName("audioPlayer");
  const audioTarget = audioContainers[0];
  const audioPlayer = audioTarget?.querySelector("audio");
  const audioPlayBtn = audioTarget?.querySelector(".audioPlayIcon");
  const audioVolumeBtn = audioTarget?.querySelector(".audioVolumeIcon");
  const audioVolumeRange = audioTarget?.querySelector(".audio_volume_take");
  const audioVolumeBar = audioTarget?.querySelector(".audio_volume_bar");
  const audioCurrentTime = audioTarget?.querySelector(".audio_timebase_number");
  const audioEndTime = audioTarget?.querySelector(".audio_end_time");
  const audioTimeBar = audioTarget?.querySelector(".audio_timebase_bar");
  const audioTimeBarContainer = audioTarget?.querySelector(
    ".audio_timebase_bar_container"
  );
  const audioDuration = useRef(0);

  const handleAudioPlayClick = () => {
    if (audioPlayer?.paused) {
      audioPlayer?.play();
      audioPlayBtn?.setAttribute("class", "icon-pause-1 audioPlayIcon");
    } else {
      audioPlayer?.pause();
      audioPlayBtn?.setAttribute("class", "icon-play audioPlayIcon");
    }
  };
  const handleAudioVolumeClick = () => {
    if (audioPlayer) {
      if (audioPlayer.muted) {
        audioPlayer.muted = false;
        audioVolumeBtn?.setAttribute("class", "icon-volume audioVolumeIcon");
        audioVolumeRange?.setAttribute("style", "width: 70%");
      } else {
        audioPlayer.muted = true;
        audioVolumeBtn?.setAttribute(
          "class",
          "icon-volume-off audioVolumeIcon"
        );
        audioVolumeRange?.setAttribute("style", "width: 0%");
      }
    }
  };
  const getAudioCurrentTime = () => {
    if (audioPlayer && audioCurrentTime) {
      audioCurrentTime.textContent = MediaClock(
        Math.floor(audioPlayer.currentTime)
      );
    }
  };
  const statusBarMoving = (duration: number) => {
    if (audioPlayer) {
      const progressRatio = audioPlayer.currentTime / duration;
      audioTimeBar?.setAttribute("value", `${progressRatio}`);
    }
  };
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
      audioDuration.current = await getAudioDuration(audioPlayer);
      const totalTimeString = MediaClock(audioDuration.current);
      audioEndTime.textContent = totalTimeString;
      setInterval(getAudioCurrentTime, 1000);
      setInterval(() => {
        statusBarMoving(audioDuration.current);
      }, 2);
    }
  };
  const handleAudioEnded = () => {
    if (audioPlayer) {
      audioPlayer.currentTime = 0;
      audioPlayBtn?.setAttribute("class", "icon-play audioPlayIcon");
    }
  };
  const audioVolumeControl = (e: any) => {
    if (audioPlayer && audioVolumeBar) {
      const clickedValue = e.offsetX / audioVolumeBar.clientWidth;
      audioVolumeBar?.setAttribute("value", `${clickedValue}`);
      audioPlayer.volume = clickedValue;
    }
  };
  const audioCurrentTimeControl = async (e: any) => {
    if (audioPlayer && audioTimeBarContainer && audioCurrentTime) {
      const clickedValue = e.offsetX / audioTimeBarContainer.clientWidth;
      audioTimeBar?.setAttribute("value", `${clickedValue}`);
      audioPlayer.currentTime = clickedValue * audioDuration.current;
      audioCurrentTime.textContent = MediaClock(
        Math.floor(audioPlayer.currentTime)
      );
    }
  };

  useEffect(() => {
    console.log(audioContainers);
    console.log(audioPlayer);
    console.log(audioPlayBtn);
    if (audioPlayer) {
      audioPlayBtn?.addEventListener("click", handleAudioPlayClick);
      audioVolumeBtn?.addEventListener("click", handleAudioVolumeClick);
      audioPlayer.addEventListener("loadedmetadata", setAudioTotalTime);
      audioPlayer.addEventListener("ended", handleAudioEnded);
      audioVolumeBar?.addEventListener("click", audioVolumeControl);
      audioTimeBarContainer?.addEventListener("click", audioCurrentTimeControl);
    }
    return () => {
      if (audioPlayer) {
        audioPlayBtn?.removeEventListener("click", handleAudioPlayClick);
        audioVolumeBtn?.removeEventListener("click", handleAudioVolumeClick);
        audioPlayer.removeEventListener("loadedmetadata", setAudioTotalTime);
        audioPlayer.removeEventListener("ended", handleAudioEnded);
        audioVolumeBar?.removeEventListener("click", audioVolumeControl);
        audioTimeBarContainer?.removeEventListener(
          "click",
          audioCurrentTimeControl
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Html]);
  return <UnnecessaryDiv />;
};
interface AudioActionLogicProps {
  Html: string;
}
