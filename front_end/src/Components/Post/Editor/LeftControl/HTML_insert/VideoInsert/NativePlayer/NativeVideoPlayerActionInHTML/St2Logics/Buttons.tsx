import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoInfoMemory,
  videoPlayer,
  videoPlayBtn,
  videoBackToStartIcon,
  videoFrontMoveIcon,
  videoBackMoveIcon,
  videoSetTimeDenote,
  videoControlsIntro,
  keyboardShortCutAble,
  videoPlayerControls,
}: St2VideoActionLogicProps) => {
  const flashClear = useRef(0);
  const handleVideoPlayClick = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
      videoPlayBtn.setAttribute("class", "icon-pause-1 videoPlayIcon");
      if (document.fullscreenElement !== null) {
        flashClear.current = setTimeout(() => {
          videoPlayerControls.setAttribute(
            "class",
            "videoPlayer_controls videoPlayer_controls_fullscreen_flash"
          );
        }, 1000);
      } else {
        flashClear.current = setTimeout(() => {
          videoPlayerControls.setAttribute(
            "class",
            "videoPlayer_controls videoPlayer_controls_at_play"
          );
        }, 1000);
      }
    } else {
      clearTimeout(flashClear.current);
      videoPlayer.pause();
      videoPlayBtn.setAttribute("class", "icon-play videoPlayIcon");
      videoPlayerControls.setAttribute(
        "class",
        "videoPlayer_controls videoPlayer_controls_at_stop"
      );
    }
  };
  const videoBackToStart = () => {
    if (videoPlayer) {
      videoPlayer.currentTime = 0;
      videoSetTimeDenote();
    }
  };
  const videoTimeMediumMove = (direction: string, degree: number) => {
    if (videoInfoMemory.textContent) {
      if (direction === "front") {
        const totaltime = parseInt(videoInfoMemory.textContent);
        if (totaltime > videoPlayer.currentTime + degree) {
          videoPlayer.currentTime = videoPlayer.currentTime + degree;
        } else {
          videoPlayer.currentTime = totaltime;
        }
      } else {
        if (degree < videoPlayer.currentTime) {
          videoPlayer.currentTime = videoPlayer.currentTime - degree;
        } else {
          videoPlayer.currentTime = 0;
        }
      }
      videoSetTimeDenote();
    }
  };
  const keyboardShortCut = (e: any) => {
    if (keyboardShortCutAble()) {
      spaped(e);
      switch (e.keyCode) {
        case 32:
          handleVideoPlayClick();
          break;
        case 39:
          videoTimeMediumMove("front", 4);
          break;
        case 37:
          videoTimeMediumMove("back", 4);
      }
    }
  };

  useEffect(() => {
    videoPlayBtn?.addEventListener("click", handleVideoPlayClick);
    videoBackToStartIcon?.addEventListener("click", videoBackToStart);
    videoFrontMoveIcon?.addEventListener("click", () => {
      videoTimeMediumMove("front", 15);
    });
    videoBackMoveIcon?.addEventListener("click", () => {
      videoTimeMediumMove("back", 15);
    });
    videoControlsIntro?.addEventListener("click", handleVideoPlayClick);
    document.addEventListener("keydown", keyboardShortCut);

    return () => {
      videoPlayBtn?.removeEventListener("click", handleVideoPlayClick);
      videoBackToStartIcon?.removeEventListener("click", videoBackToStart);
      videoFrontMoveIcon?.removeEventListener("click", () => {
        videoTimeMediumMove("front", 15);
      });
      videoBackMoveIcon?.removeEventListener("click", () => {
        videoTimeMediumMove("back", 15);
      });
      videoControlsIntro?.removeEventListener("click", handleVideoPlayClick);
      document.removeEventListener("keydown", keyboardShortCut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2VideoActionLogicProps {
  videoPlayer: HTMLVideoElement;
  videoPlayBtn: HTMLElement;
  videoBackToStartIcon: HTMLElement;
  videoFrontMoveIcon: HTMLElement;
  videoBackMoveIcon: HTMLElement;
  videoInfoMemory: HTMLElement;
  videoSetTimeDenote: any;
  videoControlsIntro: HTMLElement;
  keyboardShortCutAble: () => boolean;
  videoPlayerControls: HTMLElement;
}
