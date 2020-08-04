import React, { useEffect } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoPlayer,
  videoBasebarBuffer,
  videoInfoMemory,
}: St2VideoActionLogicProps) => {
  const setBufferWidth = async () => {
    if (videoInfoMemory.textContent) {
      for (let i = 0; i < videoPlayer.buffered.length; i++) {
        const start = videoPlayer.buffered.start(i);
        const end = videoPlayer.buffered.end(i);
        const curr = videoPlayer.currentTime;
        if (curr > start && curr < end) {
          const progressRatio = end / parseInt(videoInfoMemory.textContent);
          videoBasebarBuffer.style.width = `${progressRatio * 100}%`;
          break;
        }
      }
    }
  };

  useEffect(() => {
    const timeGo1 = setInterval(setBufferWidth, 200);

    return () => {
      window.clearInterval(timeGo1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UnnecessaryDiv />;
};

interface St2VideoActionLogicProps {
  videoPlayer: HTMLVideoElement;
  videoBasebarBuffer: HTMLElement;
  videoInfoMemory: HTMLElement;
}
