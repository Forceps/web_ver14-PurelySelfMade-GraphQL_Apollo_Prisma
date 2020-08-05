import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoSetTimeDenote,
  keyboardShortCutAble,
  videoElem,
}: St2VideoActionLogicProps) => {
  const {
    videoPlayer,
    videoPlayerControls,
    top: { ControlsIntro },
    bottom: {
      basicButton: { playBtn, backToStartIcon },
    },
    memory: { videoInfoMemory },
  } = videoElem;

  const flashClear = useRef(0);
  const handleVideoPlayClick = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playBtn.setAttribute("class", "icon-pause-1 videoPlayIcon");
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
      playBtn.setAttribute("class", "icon-play videoPlayIcon");
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
    playBtn?.addEventListener("click", handleVideoPlayClick);
    backToStartIcon?.addEventListener("click", videoBackToStart);
    ControlsIntro?.addEventListener("click", handleVideoPlayClick);
    document.addEventListener("keydown", keyboardShortCut);

    return () => {
      playBtn?.removeEventListener("click", handleVideoPlayClick);
      backToStartIcon?.removeEventListener("click", videoBackToStart);
      ControlsIntro?.removeEventListener("click", handleVideoPlayClick);
      document.removeEventListener("keydown", keyboardShortCut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2VideoActionLogicProps {
  videoSetTimeDenote: any;
  keyboardShortCutAble: () => boolean;
  videoElem: videoHtmlPlayerStructureInEditor;
}
