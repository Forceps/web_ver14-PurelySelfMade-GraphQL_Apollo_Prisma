import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import getBlobDuration from "get-blob-duration";
import { MediaClock } from "../../../../../../GlobalLib/RecycleFunction/etc/Time";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ rerenderingPoint }: AudioActionLogicProps) => {
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
  const audioBackToStartIcon = audioTarget?.querySelector(".audioBackToStart");
  const audioFrontMoveIcon = audioTarget?.querySelector(".audioFrontMove");
  const audioBackMoveIcon = audioTarget?.querySelector(".audioBackMove");

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
    audioPlayer?.pause();
    audioPlayBtn?.setAttribute("class", "icon-play audioPlayIcon");
  };
  const audioGauge_x_axis = (e: any, viewNode: any, clickNode?: any) => {
    let x = 0;
    x = e.pageX - viewNode.getBoundingClientRect().left;
    x = x / (clickNode ? clickNode.clientWidth : viewNode.clientWidth);
    if (x > 1) {
      x = 1;
    }
    if (x < 0) {
      x = 0;
    }
    return x;
  };
  const audioVolumeControlMouseMove = (e: any) => {
    if (audioPlayer && audioVolumeBar) {
      const movedValue = audioGauge_x_axis(e, audioVolumeBar);
      audioVolumeBar?.setAttribute("value", `${movedValue}`);
      audioPlayer.volume = movedValue;
    }
  };
  const audioVolumeControlMouseDown = (e: any) => {
    if (e.button === 0) {
      audioVolumeControlMouseMove(e);
      document.addEventListener("mousemove", audioVolumeControlMouseMove);
    }
  };
  const audioVolumeControlMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener("mousemove", audioVolumeControlMouseMove);
    }
  };
  const audioSetTimeDenote = (movedValue: number) => {
    if (audioPlayer && audioCurrentTime) {
      audioTimeBar?.setAttribute("value", `${movedValue}`);
      audioCurrentTime.textContent = MediaClock(
        Math.floor(audioPlayer.currentTime)
      );
    }
  };
  const audioCurrentTimeControlMouseMove = (e: any) => {
    if (audioPlayer && audioCurrentTime) {
      const movedValue = audioGauge_x_axis(
        e,
        audioTimeBar,
        audioTimeBarContainer
      );
      audioPlayer.currentTime = movedValue * audioDuration.current;
      audioSetTimeDenote(movedValue);
    }
  };
  const audioCurrentTimeControlMouseDown = (e: any) => {
    if (e.button === 0) {
      audioCurrentTimeControlMouseMove(e);
      document.addEventListener("mousemove", audioCurrentTimeControlMouseMove);
    }
  };
  const audioCurrentTimeControlMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener(
        "mousemove",
        audioCurrentTimeControlMouseMove
      );
    }
  };
  const audioBackToStart = () => {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      audioSetTimeDenote(0);
    }
  };
  const audioFrontMediumMove = () => {};
  const audioBackMediumMove = () => {};

  useEffect(() => {
    if (audioPlayer) {
      audioPlayBtn?.addEventListener("click", handleAudioPlayClick);
      audioVolumeBtn?.addEventListener("click", handleAudioVolumeClick);
      audioPlayer.addEventListener("loadedmetadata", setAudioTotalTime);
      audioPlayer.addEventListener("ended", handleAudioEnded);
      audioVolumeBar?.addEventListener(
        "mousedown",
        audioVolumeControlMouseDown
      );
      audioTimeBarContainer?.addEventListener(
        "mousedown",
        audioCurrentTimeControlMouseDown
      );
      document?.addEventListener("mouseup", audioCurrentTimeControlMouseUp);
      document?.addEventListener("mouseup", audioVolumeControlMouseUp);
      audioBackToStartIcon?.addEventListener("click", audioBackToStart);
      audioFrontMoveIcon?.addEventListener("click", audioFrontMediumMove);
      audioBackMoveIcon?.addEventListener("click", audioBackMediumMove);
    }
    return () => {
      if (audioPlayer) {
        audioPlayBtn?.removeEventListener("click", handleAudioPlayClick);
        audioVolumeBtn?.removeEventListener("click", handleAudioVolumeClick);
        audioPlayer.removeEventListener("loadedmetadata", setAudioTotalTime);
        audioPlayer.removeEventListener("ended", handleAudioEnded);
        audioVolumeBar?.removeEventListener(
          "mousedown",
          audioVolumeControlMouseDown
        );
        audioTimeBarContainer?.removeEventListener(
          "mousedown",
          audioCurrentTimeControlMouseDown
        );
        document?.removeEventListener(
          "mouseup",
          audioCurrentTimeControlMouseUp
        );
        document?.removeEventListener("mouseup", audioVolumeControlMouseUp);
        audioBackToStartIcon?.removeEventListener("click", audioBackToStart);
        audioFrontMoveIcon?.removeEventListener("click", audioFrontMediumMove);
        audioBackMoveIcon?.removeEventListener("click", audioBackMediumMove);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerenderingPoint]);
  return <UnnecessaryDiv />;
};
interface AudioActionLogicProps {
  rerenderingPoint?: any;
}
