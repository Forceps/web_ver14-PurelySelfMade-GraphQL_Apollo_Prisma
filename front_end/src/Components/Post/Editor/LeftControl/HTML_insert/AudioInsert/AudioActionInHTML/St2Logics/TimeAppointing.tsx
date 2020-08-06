import React, { useEffect } from "react";
import styled from "styled-components";
import { audioHtmlPlayerStructureInEditor } from "../St1ReusableItems/AudioTargetSpecific";

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
      timeAppoint: { audioTimeBar, audioTimeBarContainer },
    },
    memory: { audioInfoMemory },
  } = audioElem;

  const audioCurrentTimeControlMouseMove = (e: any) => {
    if (audioInfoMemory.textContent) {
      const movedValue = audioGauge_x_axis(
        e,
        audioTimeBar,
        audioTimeBarContainer
      );
      audioPlayer.currentTime =
        movedValue * parseInt(audioInfoMemory.textContent);
      audioSetTimeDenote();
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

  useEffect(() => {
    audioTimeBarContainer?.addEventListener(
      "mousedown",
      audioCurrentTimeControlMouseDown
    );
    document?.addEventListener("mouseup", audioCurrentTimeControlMouseUp);

    return () => {
      audioTimeBarContainer?.removeEventListener(
        "mousedown",
        audioCurrentTimeControlMouseDown
      );
      document?.removeEventListener("mouseup", audioCurrentTimeControlMouseUp);
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
