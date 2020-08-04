import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoTarget,
  videoNativeFullscreenIcon,
  keyboardShortCutAble,
  videoPlayerControls,
  videoPlayer,
  videoVolumeBarValue,
  videoMoreMenuScreen,
}: St2VideoActionLogicProps) => {
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
    if (videoTarget.requestFullscreen) {
      videoTarget.requestFullscreen();
    } else if (videoTarget.mozRequestFullScreen) {
      videoTarget.mozRequestFullScreen();
    } else if (videoTarget.webkitRequestFullscreen) {
      videoTarget.webkitRequestFullscreen();
    } else if (videoTarget.msRequestFullscreen) {
      videoTarget.msRequestFullscreen();
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
  const videoPlayerControlerFlash = () => {
    if (!videoPlayer.paused) {
      videoPlayerControls.setAttribute(
        "class",
        "videoPlayer_controls videoPlayer_controls_at_stop"
      );
      if (mouseMoving.current) {
        clearTimeout(mouseMoving.current);
      }
      mouseMoving.current = setTimeout(stopGoAtFullscreen, 1500);
    }
  };
  const nativeVideoFullscreenDesignProcess = () => {
    if (document.fullscreenElement !== null) {
      videoNativeFullscreenIcon.removeEventListener("click", exitFullScreen);
      videoNativeFullscreenIcon.removeEventListener("click", goFullScreen);
      videoNativeFullscreenIcon.addEventListener("click", exitFullScreen);
      videoNativeFullscreenIcon.setAttribute(
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
      videoNativeFullscreenIcon.removeEventListener("click", goFullScreen);
      videoNativeFullscreenIcon.removeEventListener("click", exitFullScreen);
      videoNativeFullscreenIcon.addEventListener("click", goFullScreen);
      videoNativeFullscreenIcon.setAttribute(
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
      if (mouseMoving.current) {
        clearTimeout(mouseMoving.current);
      }
    }
    videoMoreMenuScreen.style.width = "0px";
  };
  const fullscreenChangeEntailVolumeWidth = (length: number) => {
    videoVolumeBarValue.style.width = `${videoPlayer.volume * length}px`;
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
    videoNativeFullscreenIcon?.addEventListener("click", goFullScreen);
    videoTarget.addEventListener(
      "fullscreenchange",
      nativeVideoFullscreenDesignProcess
    );
    document.addEventListener("keydown", keyboardShortCut);

    return () => {
      videoNativeFullscreenIcon?.removeEventListener("click", goFullScreen);
      videoNativeFullscreenIcon.removeEventListener("click", exitFullScreen);
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
  videoTarget: any;
  videoNativeFullscreenIcon: HTMLElement;
  keyboardShortCutAble: () => boolean;
  videoPlayerControls: HTMLElement;
  videoPlayer: HTMLVideoElement;
  videoVolumeBarValue: HTMLElement;
  videoMoreMenuScreen: HTMLElement;
}
