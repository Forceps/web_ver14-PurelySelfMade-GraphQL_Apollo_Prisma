import React, { useEffect } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoInfoMemory,
  videoPlayer,
  videoCurrentTime,
  videoTimeBar,
  videoTimeBarContainer,
  videoGauge_x_axis,
  videoSetTimeDenote,
}: St2VideoActionLogicProps) => {
  const videoCurrentTimeControlMouseMove = (e: any) => {
    if (videoPlayer && videoCurrentTime && videoInfoMemory.textContent) {
      const movedValue = videoGauge_x_axis(
        e,
        videoTimeBar,
        videoTimeBarContainer
      );
      videoPlayer.currentTime =
        movedValue * parseInt(videoInfoMemory.textContent);
      videoSetTimeDenote();
    }
  };
  const videoCurrentTimeControlMouseDown = (e: any) => {
    if (e.button === 0) {
      videoCurrentTimeControlMouseMove(e);
      document.addEventListener("mousemove", videoCurrentTimeControlMouseMove);
    }
  };
  const videoCurrentTimeControlMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener(
        "mousemove",
        videoCurrentTimeControlMouseMove
      );
    }
  };

  useEffect(() => {
    videoTimeBarContainer?.addEventListener(
      "mousedown",
      videoCurrentTimeControlMouseDown
    );
    document?.addEventListener("mouseup", videoCurrentTimeControlMouseUp);

    return () => {
      videoTimeBarContainer?.removeEventListener(
        "mousedown",
        videoCurrentTimeControlMouseDown
      );
      document?.removeEventListener("mouseup", videoCurrentTimeControlMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2VideoActionLogicProps {
  videoInfoMemory: HTMLElement;
  videoPlayer: HTMLVideoElement;
  videoCurrentTime: HTMLElement;
  videoTimeBar: HTMLElement;
  videoTimeBarContainer: HTMLElement;
  videoGauge_x_axis: any;
  videoSetTimeDenote: any;
}
