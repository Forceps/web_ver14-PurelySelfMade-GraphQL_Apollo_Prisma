import React, { useEffect } from "react";
import styled from "styled-components";
import { audioHtmlPlayerStructureInEditor } from "../../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioGauge_x_axis,
  audioSetTimeDenote,
  audioElem,
}: St2AudioActionLogicProps) => {
  const {
    audioPlayer,
    middle: {
      timeAppoint: { timeBar, timeBarContainer },
    },
    memory: { audioInfoMemory },
  } = audioElem;

  const currentTimeControlMouseMove = (e: any) => {
    if (audioInfoMemory.textContent) {
      const movedValue = audioGauge_x_axis(e, timeBar, timeBarContainer);
      audioPlayer.currentTime =
        movedValue * parseInt(audioInfoMemory.textContent);
      audioSetTimeDenote();
    }
  };
  const currentTimeControlMouseDown = (e: any) => {
    if (e.button === 0) {
      currentTimeControlMouseMove(e);
      document.addEventListener("mousemove", currentTimeControlMouseMove);
    }
  };
  const currentTimeControlMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener("mousemove", currentTimeControlMouseMove);
    }
  };

  useEffect(() => {
    timeBarContainer?.addEventListener(
      "mousedown",
      currentTimeControlMouseDown
    );
    document?.addEventListener("mouseup", currentTimeControlMouseUp);

    return () => {
      timeBarContainer?.removeEventListener(
        "mousedown",
        currentTimeControlMouseDown
      );
      document?.removeEventListener("mouseup", currentTimeControlMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2AudioActionLogicProps {
  audioGauge_x_axis: any;
  audioSetTimeDenote: any;
  audioElem: audioHtmlPlayerStructureInEditor;
}
