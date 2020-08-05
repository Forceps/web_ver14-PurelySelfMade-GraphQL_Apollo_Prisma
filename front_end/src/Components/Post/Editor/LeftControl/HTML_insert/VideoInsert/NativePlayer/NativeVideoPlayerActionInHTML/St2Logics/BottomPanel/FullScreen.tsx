import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  keyboardShortCutAble,
  videoElem,
}: St2VideoActionLogicProps) => {
  const {
    videoTarget,
    videoPlayer,
    videoPlayerControls,
    bottom: {
      toolBox: { nativeFullscreenIcon },
      volume: { volumeBarValue },
    },
    menu: { moreMenuScreen },
  } = videoElem;

  const exitFullScreen = () => {
    const exitFullScreenAble = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };
    if (exitFullScreenAble.exitFullscreen) {
      exitFullScreenAble.exitFullscreen();
    } else if (exitFullScreenAble.mozCancelFullScreen) {
      exitFullScreenAble.mozCancelFullScreen();
    } else if (exitFullScreenAble.webkitExitFullscreen) {
      exitFullScreenAble.webkitExitFullscreen();
    } else if (exitFullScreenAble.msExitFullscreen) {
      exitFullScreenAble.msExitFullscreen();
    }
  };
  const goFullScreen = () => {
    const videoTargetFA = videoTarget as any;
    if (videoTarget.requestFullscreen) {
      videoTarget.requestFullscreen();
    } else if (videoTargetFA.mozRequestFullScreen) {
      videoTargetFA.mozRequestFullScreen();
    } else if (videoTargetFA.webkitRequestFullscreen) {
      videoTargetFA.webkitRequestFullscreen();
    } else if (videoTargetFA.msRequestFullscreen) {
      videoTargetFA.msRequestFullscreen();
    }
  };
  const stopGoAtFullscreen = () => {
    if (!videoPlayer.paused) {
      videoPlayerControls.setAttribute(
        "class",
        "videoPlayer_controls videoPlayer_controls_fullscreen_flash"
      );
    } else {
      videoPlayerControls.setAttribute(
        "class",
        "videoPlayer_controls videoPlayer_controls_at_stop"
      );
    }
  };
  const mouseMoving = useRef(0);
  const fullscreenFlashClear = () => {
    if (mouseMoving.current) {
      clearTimeout(mouseMoving.current);
    }
  };
  const videoPlayerControlerFlash = () => {
    if (!videoPlayer.paused) {
      fullscreenFlashClear();
      videoPlayerControls.setAttribute(
        "class",
        "videoPlayer_controls videoPlayer_controls_at_stop"
      );
      mouseMoving.current = setTimeout(stopGoAtFullscreen, 1500);
    } else {
      fullscreenFlashClear();
    }
  };
  const nativeVideoFullscreenDesignProcess = () => {
    if (document.fullscreenElement !== null) {
      nativeFullscreenIcon.removeEventListener("click", exitFullScreen);
      nativeFullscreenIcon.removeEventListener("click", goFullScreen);
      nativeFullscreenIcon.addEventListener("click", exitFullScreen);
      nativeFullscreenIcon.setAttribute(
        "class",
        "icon-noun_fullscreen_1399010 video_native_fullscreen"
      );
      videoTarget.setAttribute(
        "class",
        "videoPlayer nativeVideoFullScreenAdjust"
      );
      videoTarget.addEventListener("mousemove", videoPlayerControlerFlash);
      stopGoAtFullscreen();
      fullscreenChangeEntailVolumeWidth(120);
    } else {
      fullscreenFlashClear();
      nativeFullscreenIcon.removeEventListener("click", goFullScreen);
      nativeFullscreenIcon.removeEventListener("click", exitFullScreen);
      nativeFullscreenIcon.addEventListener("click", goFullScreen);
      nativeFullscreenIcon.setAttribute(
        "class",
        "icon-noun_fullscreen_1399012 video_native_fullscreen"
      );
      videoTarget.setAttribute("class", "videoPlayer");
      videoTarget.removeEventListener("mousemove", videoPlayerControlerFlash);
      if (!videoPlayer.paused) {
        videoPlayerControls.setAttribute(
          "class",
          "videoPlayer_controls videoPlayer_controls_at_play"
        );
      } else {
        videoPlayerControls.setAttribute(
          "class",
          "videoPlayer_controls videoPlayer_controls_at_stop"
        );
      }
      fullscreenChangeEntailVolumeWidth(80);
    }
    moreMenuScreen.style.width = "0px";
  };
  const fullscreenChangeEntailVolumeWidth = (length: number) => {
    volumeBarValue.style.width = `${videoPlayer.volume * length}px`;
  };
  const keyboardShortCut = (e: any) => {
    if (keyboardShortCutAble()) {
      spaped(e);
      switch (e.keyCode) {
        case 13:
          if (document.fullscreenElement === null) {
            goFullScreen();
          } else {
            exitFullScreen();
          }
      }
    }
  };

  useEffect(() => {
    nativeFullscreenIcon?.addEventListener("click", goFullScreen);
    videoTarget.addEventListener(
      "fullscreenchange",
      nativeVideoFullscreenDesignProcess
    );
    document.addEventListener("keydown", keyboardShortCut);

    return () => {
      nativeFullscreenIcon?.removeEventListener("click", goFullScreen);
      nativeFullscreenIcon.removeEventListener("click", exitFullScreen);
      videoTarget.removeEventListener(
        "fullscreenchange",
        nativeVideoFullscreenDesignProcess
      );
      document.removeEventListener("keydown", keyboardShortCut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2VideoActionLogicProps {
  keyboardShortCutAble: () => boolean;
  videoElem: videoHtmlPlayerStructureInEditor;
}
