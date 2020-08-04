import React, { useEffect } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioPlayer,
  audioTimebaseBarBuffer,
  audioInfoMemory,
}: St2VideoActionLogicProps) => {
  const setBufferWidth = async () => {
    if (audioInfoMemory.textContent) {
      for (let i = 0; i < audioPlayer.buffered.length; i++) {
        const start = audioPlayer.buffered.start(i);
        const end = audioPlayer.buffered.end(i);
        const curr = audioPlayer.currentTime;
        if (curr > start && curr < end) {
          const progressRatio = end / parseInt(audioInfoMemory.textContent);
          audioTimebaseBarBuffer.style.width = `${progressRatio * 100}%`;
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
  audioPlayer: HTMLAudioElement;
  audioTimebaseBarBuffer: HTMLElement;
  audioInfoMemory: HTMLElement;
}
