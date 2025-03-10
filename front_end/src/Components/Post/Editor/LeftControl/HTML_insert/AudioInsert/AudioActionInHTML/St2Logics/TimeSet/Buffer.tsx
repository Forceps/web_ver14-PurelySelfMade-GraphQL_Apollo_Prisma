import React, { useEffect } from "react";
import styled from "styled-components";
import { audioHtmlPlayerStructureInEditor } from "../../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ audioElem }: St2VideoActionLogicProps) => {
  const {
    audioPlayer,
    middle: {
      timeAppoint: { timebaseBarBuffer },
    },
    memory: { audioInfoMemory },
  } = audioElem;

  const setBufferWidth = async () => {
    if (audioInfoMemory.textContent) {
      for (let i = 0; i < audioPlayer.buffered.length; i++) {
        const start = audioPlayer.buffered.start(i);
        const end = audioPlayer.buffered.end(i);
        const curr = audioPlayer.currentTime;
        if (curr > start && curr < end) {
          const progressRatio = end / parseInt(audioInfoMemory.textContent);
          timebaseBarBuffer.style.width = `${progressRatio * 100}%`;
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
  audioElem: audioHtmlPlayerStructureInEditor;
}
