import React, { useEffect } from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoGauge_x_axis,
  keyboardShortCutAble,
  videoElem,
}: St2videoActionLogicProps) => {
  const {
    videoPlayer,
    bottom: {
      playerBottom,
      volume: {
        volumeBar,
        volumeBarValue,
        volumeBtn,
        controlsVolume,
        volumeBarWide,
      },
    },
  } = videoElem;

  const handlevideoVolumeClick = () => {
    if (videoPlayer.muted) {
      videoPlayer.muted = false;
      volumeBtn.setAttribute("class", "icon-volume videoVolumeIcon");
      volumeBarValue.style.width = `${
        videoPlayer.volume * volumeBar.clientWidth
      }px`;
    } else {
      videoPlayer.muted = true;
      volumeBtn.setAttribute("class", "icon-volume-off videoVolumeIcon");
      volumeBarValue.style.width = "0px";
    }
  };
  const videoVolumeIconChange = () => {
    if (videoPlayer.volume > 0.5) {
      volumeBtn.setAttribute("class", "icon-volume videoVolumeIcon");
    } else if (videoPlayer.volume > 0) {
      volumeBtn.setAttribute("class", "icon-volume-down videoVolumeIcon");
    } else {
      volumeBtn.setAttribute("class", "icon-volume-off videoVolumeIcon");
    }
  };
  const videoVolumeControlMouseMove = (e: any) => {
    const movedValue = videoGauge_x_axis(e, volumeBar);
    volumeBarValue.style.width = `${movedValue * volumeBar.clientWidth}px`;
    videoPlayer.volume = movedValue;
    videoVolumeIconChange();
  };
  const videoVolumeControlMouseDown = (e: any) => {
    if (e.button === 0) {
      videoVolumeControlMouseMove(e);
      document.addEventListener("mousemove", videoVolumeControlMouseMove);
      playerBottom.removeEventListener("mouseleave", volumeBarHide);
    }
  };
  const videoVolumeControlMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener("mousemove", videoVolumeControlMouseMove);
    }
  };
  const videoVolumeMediumMove = (direction: string, degree: number) => {
    if (direction === "up") {
      if (videoPlayer.volume > 1 - degree) {
        videoPlayer.volume = 1;
      } else {
        videoPlayer.volume = videoPlayer.volume + degree;
      }
    } else {
      if (videoPlayer.volume < degree) {
        videoPlayer.volume = 0;
      } else {
        videoPlayer.volume = videoPlayer.volume - degree;
      }
    }
    volumeBarValue.style.width = `${
      videoPlayer.volume * volumeBar.clientWidth
    }px`;
    videoVolumeIconChange();
  };
  const keyboardShortCut = (e: any) => {
    if (keyboardShortCutAble()) {
      spaped(e);
      switch (e.keyCode) {
        case 38:
          videoVolumeMediumMove("up", 0.04);
          break;
        case 40:
          videoVolumeMediumMove("down", 0.04);
      }
    }
  };
  const mouseWheelVolume = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      videoVolumeMediumMove("up", 0.1);
    } else {
      videoVolumeMediumMove("down", 0.1);
    }
  };
  const volumeBarShow = () => {
    controlsVolume.setAttribute(
      "class",
      "videoPlayer_controls_volume volumeBarShow"
    );
  };
  const volumeBarHide = () => {
    controlsVolume.setAttribute(
      "class",
      "videoPlayer_controls_volume volumeBarHide"
    );
  };
  const volumeBarHideResurrection = (e: any) => {
    if (
      e.target &&
      e.target.closest(".videoPlayer_controls_volume") !== controlsVolume
    ) {
      volumeBarHide();
      playerBottom.addEventListener("mouseleave", volumeBarHide);
    }
  };

  useEffect(() => {
    volumeBtn.addEventListener("click", handlevideoVolumeClick);
    volumeBarWide.addEventListener("mousedown", videoVolumeControlMouseDown);
    document.addEventListener("mouseup", videoVolumeControlMouseUp);
    document.addEventListener("keydown", keyboardShortCut);
    volumeBarWide.addEventListener("wheel", mouseWheelVolume);
    volumeBtn.addEventListener("mouseenter", volumeBarShow);
    playerBottom.addEventListener("mouseleave", volumeBarHide);
    document.addEventListener("mousedown", volumeBarHideResurrection);

    return () => {
      volumeBtn.removeEventListener("click", handlevideoVolumeClick);
      volumeBarWide.removeEventListener(
        "mousedown",
        videoVolumeControlMouseDown
      );
      document.removeEventListener("mouseup", videoVolumeControlMouseUp);
      document.removeEventListener("keydown", keyboardShortCut);
      volumeBarWide.removeEventListener("wheel", mouseWheelVolume);
      volumeBtn.removeEventListener("mouseenter", volumeBarShow);
      playerBottom.removeEventListener("mouseleave", volumeBarHide);
      document.removeEventListener("mousedown", volumeBarHideResurrection);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2videoActionLogicProps {
  videoGauge_x_axis: any;
  keyboardShortCutAble: () => boolean;
  videoElem: videoHtmlPlayerStructureInEditor;
}
