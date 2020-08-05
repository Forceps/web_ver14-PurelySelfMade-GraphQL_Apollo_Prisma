import React, { useEffect, RefObject, useRef } from "react";
import styled from "styled-components";
import getBlobDuration from "get-blob-duration";
import { MediaClock } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";
import { mediaStateRenewalCycle } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Formula";
import { videoHtmlPlayerStructureInEditor } from "../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  InEditor,
  getcurrentTime,
  statusBarMoving,
  mediaTargetId,
  playerClicked,
  videoElem,
}: St2VideoActionLogicProps) => {
  const {
    videoPlayer,
    bottom: {
      timeNumber: { endTime },
      basicButton: { playBtn },
    },
    memory: { videoInfoMemory },
  } = videoElem;

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
  const timeGo2 = useRef(0);
  const setVideoTotalTime = async () => {
    if (videoPlayer && endTime) {
      videoPlayer.volume = 0.5;
      const Duration = await getVideoDuration(videoPlayer);
      videoInfoMemory.textContent = `${Duration}`;
      const totalTimeString = MediaClock(Duration);
      endTime.textContent = totalTimeString;
      timeGo2.current = setInterval(
        statusBarMoving,
        mediaStateRenewalCycle(Duration)
      );
    }
  };
  const handleVideoEnded = () => {
    videoPlayer?.pause();
    playBtn?.setAttribute("class", "icon-play videoPlayIcon");
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
    const timeGo1 = setInterval(getcurrentTime, 1000);
    document.addEventListener("click", clickPlayer);

    return () => {
      videoPlayer?.removeEventListener("loadedmetadata", setVideoTotalTime);
      videoPlayer?.removeEventListener("ended", handleVideoEnded);
      window.clearInterval(timeGo1);
      window.clearInterval(timeGo2.current);
      document.removeEventListener("click", clickPlayer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UnnecessaryDiv />;
};

interface St2VideoActionLogicProps {
  InEditor: RefObject<HTMLElement>;
  getcurrentTime: () => void;
  statusBarMoving: () => void;
  mediaTargetId: any;
  playerClicked: React.MutableRefObject<boolean>;
  videoElem: videoHtmlPlayerStructureInEditor;
}
