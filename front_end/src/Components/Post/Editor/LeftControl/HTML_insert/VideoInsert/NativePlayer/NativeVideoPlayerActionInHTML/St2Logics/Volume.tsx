import React, { useEffect } from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoPlayer,
  videoVolumeBtn,
  videoVolumeBar,
  videoGauge_x_axis,
  videoVolumeBarValue,
  keyboardShortCutAble,
  videoVolumeBarWide,
  videoControlsVolume,
  videoPlayerBottom,
}: St2videoActionLogicProps) => {
  const handlevideoVolumeClick = () => {
    if (videoPlayer) {
      if (videoPlayer.muted) {
        videoPlayer.muted = false;
        videoVolumeBtn.setAttribute("class", "icon-volume videoVolumeIcon");
        videoVolumeBarValue.style.width = `${
          videoPlayer.volume * videoVolumeBar.clientWidth
        }px`;
      } else {
        videoPlayer.muted = true;
        videoVolumeBtn.setAttribute("class", "icon-volume-off videoVolumeIcon");
        videoVolumeBarValue.style.width = "0px";
      }
    }
  };
  const videoVolumeIconChange = () => {
    if (videoPlayer.volume > 0.5) {
      videoVolumeBtn.setAttribute("class", "icon-volume videoVolumeIcon");
    } else if (videoPlayer.volume > 0) {
      videoVolumeBtn.setAttribute("class", "icon-volume-down videoVolumeIcon");
    } else {
      videoVolumeBtn.setAttribute("class", "icon-volume-off videoVolumeIcon");
    }
  };
  const videoVolumeControlMouseMove = (e: any) => {
    if (videoPlayer) {
      const movedValue = videoGauge_x_axis(e, videoVolumeBar);
      videoVolumeBarValue.style.width = `${
        movedValue * videoVolumeBar.clientWidth
      }px`;
      videoPlayer.volume = movedValue;
    }
    videoVolumeIconChange();
  };
  const videoVolumeControlMouseDown = (e: any) => {
    if (e.button === 0) {
      videoVolumeControlMouseMove(e);
      document.addEventListener("mousemove", videoVolumeControlMouseMove);
      videoPlayerBottom.removeEventListener("mouseleave", videoVolumeBarHide);
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
    videoVolumeBarValue.style.width = `${
      videoPlayer.volume * videoVolumeBar.clientWidth
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
  const videoVolumeBarShow = () => {
    videoControlsVolume.setAttribute(
      "class",
      "videoPlayer_controls_volume videoVolumeBarShow"
    );
  };
  const videoVolumeBarHide = () => {
    videoControlsVolume.setAttribute(
      "class",
      "videoPlayer_controls_volume videoVolumeBarHide"
    );
  };
  const videoVolumeBarHideResurrection = (e: any) => {
    if (
      e.target &&
      e.target.closest(".videoPlayer_controls_volume") !== videoControlsVolume
    ) {
      videoVolumeBarHide();
      videoPlayerBottom.addEventListener("mouseleave", videoVolumeBarHide);
    }
  };

  useEffect(() => {
    videoVolumeBtn.addEventListener("click", handlevideoVolumeClick);
    videoVolumeBarWide.addEventListener(
      "mousedown",
      videoVolumeControlMouseDown
    );
    document.addEventListener("mouseup", videoVolumeControlMouseUp);
    document.addEventListener("keydown", keyboardShortCut);
    videoVolumeBarWide.addEventListener("wheel", mouseWheelVolume);
    videoVolumeBtn.addEventListener("mouseenter", videoVolumeBarShow);
    videoPlayerBottom.addEventListener("mouseleave", videoVolumeBarHide);
    document.addEventListener("mousedown", videoVolumeBarHideResurrection);

    return () => {
      videoVolumeBtn.removeEventListener("click", handlevideoVolumeClick);
      videoVolumeBarWide.removeEventListener(
        "mousedown",
        videoVolumeControlMouseDown
      );
      document.removeEventListener("mouseup", videoVolumeControlMouseUp);
      document.removeEventListener("keydown", keyboardShortCut);
      videoVolumeBarWide.removeEventListener("wheel", mouseWheelVolume);
      videoVolumeBtn.removeEventListener("mouseenter", videoVolumeBarShow);
      videoPlayerBottom.removeEventListener("mouseleave", videoVolumeBarHide);
      document.removeEventListener("mousedown", videoVolumeBarHideResurrection);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2videoActionLogicProps {
  videoPlayer: HTMLVideoElement;
  videoVolumeBtn: HTMLElement;
  videoVolumeBar: HTMLElement;
  videoGauge_x_axis: any;
  videoVolumeBarValue: HTMLElement;
  keyboardShortCutAble: () => boolean;
  videoVolumeBarWide: HTMLElement;
  videoControlsVolume: HTMLElement;
  videoPlayerBottom: HTMLElement;
}
