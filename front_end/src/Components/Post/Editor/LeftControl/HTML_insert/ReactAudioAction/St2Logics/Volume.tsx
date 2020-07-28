import React, { useEffect } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioPlayer,
  audioVolumeBtn,
  audioVolumeBar,
  audioGauge_x_axis,
}: St2AudioActionLogicProps) => {
  const handleAudioVolumeClick = () => {
    if (audioPlayer) {
      if (audioPlayer.muted) {
        audioPlayer.muted = false;
        audioVolumeBtn?.setAttribute("class", "icon-volume audioVolumeIcon");
        audioVolumeBar?.setAttribute("value", `${audioPlayer.volume}`);
      } else {
        audioPlayer.muted = true;
        audioVolumeBtn?.setAttribute(
          "class",
          "icon-volume-off audioVolumeIcon"
        );
        audioVolumeBar?.setAttribute("value", "0");
      }
    }
  };
  const audioVolumeControlMouseMove = (e: any) => {
    if (audioPlayer) {
      const movedValue = audioGauge_x_axis(e, audioVolumeBar);
      audioVolumeBar?.setAttribute("value", `${movedValue}`);
      audioPlayer.volume = movedValue;
      if (audioPlayer.volume > 0.5) {
        audioVolumeBtn?.setAttribute("class", "icon-volume audioVolumeIcon");
      } else if (audioPlayer.volume > 0) {
        audioVolumeBtn?.setAttribute(
          "class",
          "icon-volume-down audioVolumeIcon"
        );
      } else {
        audioVolumeBtn?.setAttribute(
          "class",
          "icon-volume-off audioVolumeIcon"
        );
      }
    }
  };
  const audioVolumeControlMouseDown = (e: any) => {
    if (e.button === 0) {
      audioVolumeControlMouseMove(e);
      document.addEventListener("mousemove", audioVolumeControlMouseMove);
    }
  };
  const audioVolumeControlMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener("mousemove", audioVolumeControlMouseMove);
    }
  };

  useEffect(() => {
    audioVolumeBtn?.addEventListener("click", handleAudioVolumeClick);
    audioVolumeBar?.addEventListener("mousedown", audioVolumeControlMouseDown);
    document?.addEventListener("mouseup", audioVolumeControlMouseUp);

    return () => {
      audioVolumeBtn?.removeEventListener("click", handleAudioVolumeClick);
      audioVolumeBar?.removeEventListener(
        "mousedown",
        audioVolumeControlMouseDown
      );
      document?.removeEventListener("mouseup", audioVolumeControlMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2AudioActionLogicProps {
  audioPlayer: HTMLAudioElement;
  audioVolumeBtn: HTMLElement;
  audioVolumeBar: HTMLElement;
  audioGauge_x_axis: any;
}
