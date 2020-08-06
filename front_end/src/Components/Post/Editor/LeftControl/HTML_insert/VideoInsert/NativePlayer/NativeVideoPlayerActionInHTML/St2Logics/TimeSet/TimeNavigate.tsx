import React, { useEffect } from "react";
import styled from "styled-components";
import { MediaClock } from "../../../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ videoGauge_x_axis, videoElem }: St2videoActionLogicProps) => {
  const {
    middle: {
      timeNavigate: { timeNavigateNumber, timeNavigation },
      timeAppoint: { timeBarContainer, timebaseNavigate },
    },
    memory: { videoInfoMemory },
  } = videoElem;

  const videoTimeNavigate = (e: any) => {
    if (videoInfoMemory.textContent) {
      const movedValue = videoGauge_x_axis(e, timeBarContainer);
      const virtualTime = MediaClock(
        movedValue * parseInt(videoInfoMemory.textContent)
      );
      timeNavigateNumber.textContent = virtualTime;

      const gapSize = timeNavigateNumber.offsetWidth || 29.344;
      const MousePosition =
        e.pageX - timeNavigation.getBoundingClientRect().left;
      let x = 0;
      if (MousePosition < gapSize / 2) {
        x = 0;
      } else if (MousePosition > timeNavigation.clientWidth - gapSize / 2) {
        x = timeNavigation.clientWidth - gapSize;
      } else {
        x = MousePosition - gapSize / 2;
      }
      timeNavigateNumber.style.left = `${x}px`;
      timebaseNavigate.style.width = `${MousePosition}px`;
    }
  };
  const videoTimeNavigateShow = (e: any) => {
    videoTimeNavigate(e);
    timeNavigateNumber.style.display = "flex";
    timebaseNavigate.style.display = "flex";
    timeBarContainer.addEventListener("mousemove", videoTimeNavigate);
  };
  const videoTimeNavigateHide = () => {
    timeNavigateNumber.style.display = "none";
    timebaseNavigate.style.display = "none";
    timeBarContainer.removeEventListener("mousemove", videoTimeNavigate);
  };

  useEffect(() => {
    timeBarContainer.addEventListener("mouseover", videoTimeNavigateShow);
    timeBarContainer.addEventListener("mouseout", videoTimeNavigateHide);

    return () => {
      timeBarContainer.removeEventListener("mouseover", videoTimeNavigateShow);
      timeBarContainer.removeEventListener("mouseout", videoTimeNavigateHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};

interface St2videoActionLogicProps {
  videoGauge_x_axis: any;
  videoElem: videoHtmlPlayerStructureInEditor;
}
