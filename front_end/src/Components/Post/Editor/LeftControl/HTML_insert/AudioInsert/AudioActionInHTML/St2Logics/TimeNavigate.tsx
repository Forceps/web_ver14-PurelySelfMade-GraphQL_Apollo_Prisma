import React, { useEffect } from "react";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";
import styled from "styled-components";
import { audioHtmlPlayerStructureInEditor } from "../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ audioGauge_x_axis, audioElem }: St2AudioActionLogicProps) => {
  const {
    middle: {
      timeNavigate: { audioTimeNavigation, audioTimeNavigateNumber },
      timeAppoint: { audioTimeBarContainer, audioCurrentTime },
    },
    memory: { audioInfoMemory },
  } = audioElem;

  const audioTimeNavigate = (e: any) => {
    if (audioInfoMemory.textContent) {
      const movedValue = audioGauge_x_axis(e, audioTimeBarContainer);
      const virtualTime = MediaClock(
        movedValue * parseInt(audioInfoMemory.textContent)
      );
      audioTimeNavigateNumber.textContent = virtualTime;

      const fullGapSize = audioCurrentTime.offsetWidth;
      const gapSize = fullGapSize - 9;
      const MousePosition =
        e.pageX - audioTimeNavigation.getBoundingClientRect().left;
      let x = 0;
      if (MousePosition < fullGapSize + gapSize / 2) {
        x = fullGapSize;
      } else if (
        MousePosition >
        audioTimeNavigation.clientWidth - gapSize / 2
      ) {
        x = audioTimeNavigation.clientWidth - gapSize;
      } else {
        x = MousePosition - gapSize / 2;
      }
      audioTimeNavigateNumber.style.left = `${x}px`;
    }
  };
  const audioTimeNavigateShow = (e: any) => {
    audioTimeNavigate(e);
    audioTimeNavigateNumber.style.display = "flex";
    audioTimeBarContainer?.addEventListener("mousemove", audioTimeNavigate);
  };
  const audioTimeNavigateHide = () => {
    if (audioTimeNavigateNumber) {
      audioTimeNavigateNumber.style.display = "none";
      audioTimeBarContainer?.removeEventListener(
        "mousemove",
        audioTimeNavigate
      );
    }
  };

  useEffect(() => {
    audioTimeBarContainer?.addEventListener("mouseover", audioTimeNavigateShow);
    audioTimeBarContainer?.addEventListener("mouseout", audioTimeNavigateHide);

    return () => {
      audioTimeBarContainer?.removeEventListener(
        "mouseover",
        audioTimeNavigateShow
      );
      audioTimeBarContainer?.removeEventListener(
        "mouseout",
        audioTimeNavigateHide
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};

interface St2AudioActionLogicProps {
  audioGauge_x_axis: any;
  audioElem: audioHtmlPlayerStructureInEditor;
}
