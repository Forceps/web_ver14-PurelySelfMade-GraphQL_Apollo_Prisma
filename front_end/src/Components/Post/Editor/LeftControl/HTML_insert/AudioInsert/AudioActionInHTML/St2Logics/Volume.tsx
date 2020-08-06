import React, { useEffect } from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { audioHtmlPlayerStructureInEditor } from "../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioGauge_x_axis,
  keyboardShortCutAble,
  audioElem,
}: St2AudioActionLogicProps) => {
  const {
    audioPlayer,
    bottom: {
      volume: { audioVolumeBar, audioVolumeBtn, audioVolumeBarValue },
    },
  } = audioElem;

  const handleAudioVolumeClick = () => {
    if (audioPlayer.muted) {
      audioPlayer.muted = false;
      audioVolumeBtn.setAttribute("class", "icon-volume audioVolumeIcon");
      audioVolumeBarValue.style.width = `${
        audioPlayer.volume * audioVolumeBar.clientWidth
      }px`;
    } else {
      audioPlayer.muted = true;
      audioVolumeBtn.setAttribute("class", "icon-volume-off audioVolumeIcon");
      audioVolumeBarValue.style.width = "0px";
    }
  };
  const audioVolumeIconChange = () => {
    if (audioPlayer.volume > 0.5) {
      audioVolumeBtn.setAttribute("class", "icon-volume audioVolumeIcon");
    } else if (audioPlayer.volume > 0) {
      audioVolumeBtn.setAttribute("class", "icon-volume-down audioVolumeIcon");
    } else {
      audioVolumeBtn.setAttribute("class", "icon-volume-off audioVolumeIcon");
    }
  };
  const audioVolumeControlMouseMove = (e: any) => {
    if (audioPlayer) {
      const movedValue = audioGauge_x_axis(e, audioVolumeBar);
      audioVolumeBarValue.style.width = `${
        movedValue * audioVolumeBar.clientWidth
      }px`;
      audioPlayer.volume = movedValue;
      audioVolumeIconChange();
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
  const audioVolumeMediumMove = (direction: string, degree: number) => {
    if (direction === "up") {
      if (audioPlayer.volume > 1 - degree) {
        audioPlayer.volume = 1;
      } else {
        audioPlayer.volume = audioPlayer.volume + degree;
      }
    } else {
      if (audioPlayer.volume < degree) {
        audioPlayer.volume = 0;
      } else {
        audioPlayer.volume = audioPlayer.volume - degree;
      }
    }
    audioVolumeBarValue.style.width = `${
      audioPlayer.volume * audioVolumeBar.clientWidth
    }px`;
    audioVolumeIconChange();
  };
  const keyboardShortCut = (e: any) => {
    if (keyboardShortCutAble()) {
      spaped(e);
      switch (e.keyCode) {
        case 38:
          audioVolumeMediumMove("up", 0.04);
          break;
        case 40:
          audioVolumeMediumMove("down", 0.04);
      }
    }
  };
  const mouseWheelVolume = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      audioVolumeMediumMove("up", 0.04);
    } else {
      audioVolumeMediumMove("down", 0.04);
    }
  };

  useEffect(() => {
    audioVolumeBtn.addEventListener("click", handleAudioVolumeClick);
    audioVolumeBar.addEventListener("mousedown", audioVolumeControlMouseDown);
    document.addEventListener("mouseup", audioVolumeControlMouseUp);
    document.addEventListener("keydown", keyboardShortCut);
    audioVolumeBar.addEventListener("wheel", mouseWheelVolume);
    return () => {
      audioVolumeBtn.removeEventListener("click", handleAudioVolumeClick);
      audioVolumeBar.removeEventListener(
        "mousedown",
        audioVolumeControlMouseDown
      );
      document.removeEventListener("mouseup", audioVolumeControlMouseUp);
      document.removeEventListener("keydown", keyboardShortCut);
      audioVolumeBar.removeEventListener("wheel", mouseWheelVolume);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2AudioActionLogicProps {
  audioGauge_x_axis: any;
  keyboardShortCutAble: () => boolean;
  audioElem: audioHtmlPlayerStructureInEditor;
}
