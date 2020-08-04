import React, { useEffect } from "react";
import styled from "styled-components";
import { MediaClock } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoInfoMemory,
  videoTimeBar,
  videoTimeBarContainer,
  videoTimeNavigation,
  videoTimeNavigateNumber,
  videoGauge_x_axis,
}: St2videoActionLogicProps) => {
  const videoTimeNavigate = (e: any) => {
    if (
      videoTimeNavigateNumber &&
      videoTimeBar &&
      videoTimeBarContainer &&
      videoInfoMemory.textContent &&
      videoTimeNavigation
    ) {
      const movedValue = videoGauge_x_axis(e, videoTimeBarContainer);
      const virtualTime = MediaClock(
        movedValue * parseInt(videoInfoMemory.textContent)
      );
      videoTimeNavigateNumber.textContent = virtualTime;

      const gapSize = videoTimeNavigateNumber.offsetWidth;
      const MousePosition =
        e.pageX - videoTimeNavigation.getBoundingClientRect().left;
      let x = 0;
      if (MousePosition < gapSize / 2) {
        x = 0;
      } else if (
        MousePosition >
        videoTimeNavigation.clientWidth - gapSize / 2
      ) {
        x = videoTimeNavigation.clientWidth - gapSize;
      } else {
        x = MousePosition - gapSize / 2;
      }
      videoTimeNavigateNumber.style.left = `${x}px`;
    }
  };
  const videoTimeNavigateShow = (e: any) => {
    videoTimeNavigate(e);
    videoTimeNavigateNumber.style.display = "flex";
    videoTimeBarContainer?.addEventListener("mousemove", videoTimeNavigate);
  };
  const videoTimeNavigateHide = () => {
    if (videoTimeNavigateNumber) {
      videoTimeNavigateNumber.style.display = "none";
      videoTimeBarContainer?.removeEventListener(
        "mousemove",
        videoTimeNavigate
      );
    }
  };

  useEffect(() => {
    videoTimeBarContainer?.addEventListener("mouseover", videoTimeNavigateShow);
    videoTimeBarContainer?.addEventListener("mouseout", videoTimeNavigateHide);

    return () => {
      videoTimeBarContainer?.removeEventListener(
        "mouseover",
        videoTimeNavigateShow
      );
      videoTimeBarContainer?.removeEventListener(
        "mouseout",
        videoTimeNavigateHide
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};

interface St2videoActionLogicProps {
  videoInfoMemory: HTMLElement;
  videoTimeBar: HTMLElement;
  videoTimeBarContainer: HTMLElement;
  videoTimeNavigation: HTMLElement;
  videoTimeNavigateNumber: HTMLElement;
  videoGauge_x_axis: any;
}
