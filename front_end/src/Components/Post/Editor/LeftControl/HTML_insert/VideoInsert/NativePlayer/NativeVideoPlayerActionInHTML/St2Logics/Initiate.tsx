import React, { useEffect, RefObject } from "react";
import styled from "styled-components";
import getBlobDuration from "get-blob-duration";
import { MediaClock } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/Time";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  InEditor,
  videoPlayer,
  videoPlayBtn,
  videoEndTime,
  getvideoCurrentTime,
  statusBarMoving,
  videoInfoMemory,
  mediaTargetId,
  playerClicked,
}: St2VideoActionLogicProps) => {
  const getVideoDuration = async (videoPlayer: any) => {
    let duration: number;
    if (!isFinite(videoPlayer.duration)) {
      const blob = await fetch(videoPlayer.src).then((response) =>
        response.blob()
      );
      duration = await getBlobDuration(blob);
    } else {
      duration = videoPlayer.duration;
    }
    return duration;
  };
  const setVideoTotalTime = async () => {
    if (videoPlayer && videoEndTime) {
      videoPlayer.volume = 0.5;
      videoInfoMemory.textContent = `${await getVideoDuration(videoPlayer)}`;
      const totalTimeString = MediaClock(parseInt(videoInfoMemory.textContent));
      videoEndTime.textContent = totalTimeString;
    }
  };
  const handleVideoEnded = () => {
    videoPlayer?.pause();
    videoPlayBtn?.setAttribute("class", "icon-play videoPlayIcon");
  };
  const clickPlayer = (e: any) => {
    const plau = e.target.closest(".videoPlayer");
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
    setVideoTotalTime();
    videoPlayer?.addEventListener("loadedmetadata", setVideoTotalTime);
    videoPlayer?.addEventListener("ended", handleVideoEnded);
    const timeGo1 = setInterval(getvideoCurrentTime, 1000);
    const timeGo2 = setInterval(statusBarMoving, 30);
    document.addEventListener("click", clickPlayer);

    return () => {
      videoPlayer?.removeEventListener("loadedmetadata", setVideoTotalTime);
      videoPlayer?.removeEventListener("ended", handleVideoEnded);
      window.clearInterval(timeGo1);
      window.clearInterval(timeGo2);
      document.removeEventListener("click", clickPlayer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UnnecessaryDiv />;
};

interface St2VideoActionLogicProps {
  InEditor: RefObject<HTMLElement>;
  videoPlayer: HTMLVideoElement;
  videoPlayBtn: HTMLElement;
  videoEndTime: HTMLElement;
  getvideoCurrentTime: () => void;
  statusBarMoving: () => void;
  videoInfoMemory: HTMLElement;
  mediaTargetId: any;
  playerClicked: React.MutableRefObject<boolean>;
}
