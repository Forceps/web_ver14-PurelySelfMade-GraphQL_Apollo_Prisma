import React, { useEffect } from "react";
import styled from "styled-components";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoGauge_x_axis,
  videoSetTimeDenote,
  videoElem,
}: St2VideoActionLogicProps) => {
  const {
    videoPlayer,
    middle: {
      timeAppoint: { timeBar, timeBarContainer },
    },
    bottom: {
      timeNumber: { currentTime },
    },
    memory: { videoInfoMemory },
  } = videoElem;

  const currentTimeControlMouseMove = (e: any) => {
    if (videoPlayer && currentTime && videoInfoMemory.textContent) {
      const movedValue = videoGauge_x_axis(e, timeBar, timeBarContainer);
      videoPlayer.currentTime =
        movedValue * parseInt(videoInfoMemory.textContent);
      videoSetTimeDenote();
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
interface St2VideoActionLogicProps {
  videoGauge_x_axis: any;
  videoSetTimeDenote: any;
  videoElem: videoHtmlPlayerStructureInEditor;
}
