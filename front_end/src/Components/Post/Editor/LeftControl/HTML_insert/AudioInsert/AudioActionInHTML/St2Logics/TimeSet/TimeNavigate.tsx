import React, { useEffect } from "react";
import { MediaClock } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";
import styled from "styled-components";
import { audioHtmlPlayerStructureInEditor } from "../../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ audioGauge_x_axis, audioElem }: St2AudioActionLogicProps) => {
  const {
    middle: {
      timeNavigate: { timeNavigation, timeNavigateNumber },
      timeAppoint: { timeBarContainer, currentTime, timebaseNavigate, timeBar },
    },
    memory: { audioInfoMemory },
  } = audioElem;

  const audioTimeNavigate = (e: any) => {
    if (audioInfoMemory.textContent) {
      const movedValue = audioGauge_x_axis(e, timeBarContainer);
      const virtualTime = MediaClock(
        movedValue * parseInt(audioInfoMemory.textContent)
      );
      timeNavigateNumber.textContent = virtualTime;

      const fullGapSize = currentTime.offsetWidth;
      const gapSize = fullGapSize - 9;
      const MousePosition =
        e.pageX - timeNavigation.getBoundingClientRect().left;
      let x = 0;
      if (MousePosition < fullGapSize + gapSize / 2) {
        x = fullGapSize;
      } else if (MousePosition > timeNavigation.clientWidth - gapSize / 2) {
        x = timeNavigation.clientWidth - gapSize;
      } else {
        x = MousePosition - gapSize / 2;
      }
      timeNavigateNumber.style.left = `${x}px`;
      const MousePositionForBar =
        e.pageX - timeBar.getBoundingClientRect().left;
      timebaseNavigate.style.width = `${MousePositionForBar}px`;
    }
  };
  const audioTimeNavigateShow = (e: any) => {
    audioTimeNavigate(e);
    timeNavigateNumber.style.display = "flex";
    timebaseNavigate.style.display = "flex";
    timeBarContainer?.addEventListener("mousemove", audioTimeNavigate);
  };
  const audioTimeNavigateHide = () => {
    if (timeNavigateNumber) {
      timeNavigateNumber.style.display = "none";
      timebaseNavigate.style.display = "none";
      timeBarContainer?.removeEventListener("mousemove", audioTimeNavigate);
    }
  };

  useEffect(() => {
    timeBarContainer?.addEventListener("mouseover", audioTimeNavigateShow);
    timeBarContainer?.addEventListener("mouseout", audioTimeNavigateHide);

    return () => {
      timeBarContainer?.removeEventListener("mouseover", audioTimeNavigateShow);
      timeBarContainer?.removeEventListener("mouseout", audioTimeNavigateHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};

interface St2AudioActionLogicProps {
  audioGauge_x_axis: any;
  audioElem: audioHtmlPlayerStructureInEditor;
}
