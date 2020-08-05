import React, { useEffect } from "react";
import styled from "styled-components";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ videoElem }: St2VideoActionLogicProps) => {
  const {
    videoPlayer,
    middle: {
      timeAppoint: { basebarBuffer },
    },
    memory: { videoInfoMemory },
  } = videoElem;

  const setBufferWidth = async () => {
    if (videoInfoMemory.textContent) {
      for (let i = 0; i < videoPlayer.buffered.length; i++) {
        const start = videoPlayer.buffered.start(i);
        const end = videoPlayer.buffered.end(i);
        const curr = videoPlayer.currentTime;
        if (curr > start && curr < end) {
          const progressRatio = end / parseInt(videoInfoMemory.textContent);
          basebarBuffer.style.width = `${progressRatio * 100}%`;
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
  videoElem: videoHtmlPlayerStructureInEditor;
}
