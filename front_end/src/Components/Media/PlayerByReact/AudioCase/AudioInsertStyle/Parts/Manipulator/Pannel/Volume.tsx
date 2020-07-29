import React, { useRef, useState } from "react";
import styled from "styled-components";

const VolumeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 5px 0;
`;
const VolumeIcon = styled.i`
  font-size: 0.9rem;
  padding: 3px;
  margin: 0 5px 0 3px;
  cursor: pointer;
`;
const VolumeBarAlign = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 2px 0;
`;
const VolumeBar = styled.progress`
  display: flex;
  height: 15px;
  width: 90px;
  cursor: pointer;
`;

export default ({ audioTag, audioGauge_x_axis }: VolumeProps) => {
  const volumeBarRef = useRef<HTMLProgressElement>(null);
  const [VolumeIconState, setVolumeIconState] = useState(1);
  const volumeShape = () => {
    if (audioTag) {
      audioTag.volume > 0.5
        ? setVolumeIconState(2)
        : audioTag.volume === 0
        ? setVolumeIconState(0)
        : setVolumeIconState(1);
    }
  };
  const handleAudioVolumeClick = (e: any) => {
    if (audioTag) {
      if (audioTag.muted) {
        audioTag.muted = false;
        volumeShape();
        volumeBarRef.current?.setAttribute("value", `${audioTag.volume}`);
      } else {
        audioTag.muted = true;
        setVolumeIconState(0);
        volumeBarRef.current?.setAttribute("value", "0");
      }
    }
  };
  const audioVolumeControlMouseMove = (e: any) => {
    if (audioTag) {
      const movedValue = audioGauge_x_axis(e, e.currentTarget);
      e.currentTarget.setAttribute("value", `${movedValue}`);
      audioTag.volume = movedValue;
      volumeShape();
    }
  };

  return (
    <VolumeContainer>
      <VolumeIcon
        className={
          VolumeIconState === 0
            ? "icon-volume-off"
            : VolumeIconState === 2
            ? "icon-volume"
            : "icon-volume-down"
        }
        onClick={(e) => {
          handleAudioVolumeClick(e);
        }}
      />
      <VolumeBarAlign>
        <VolumeBar
          value="0.5"
          max="1"
          ref={volumeBarRef}
          onMouseDown={(e) => {
            if (e.button === 0) {
              audioVolumeControlMouseMove(e);
              document.addEventListener(
                "mousemove",
                audioVolumeControlMouseMove
              );
            }
          }}
          onMouseUp={(e) => {
            if (e.button === 0) {
              document.removeEventListener(
                "mousemove",
                audioVolumeControlMouseMove
              );
            }
          }}
        />
      </VolumeBarAlign>
    </VolumeContainer>
  );
};
interface VolumeProps {
  audioTag: HTMLAudioElement | null;
  audioGauge_x_axis: (e: any, viewNode: any, clickNode?: any) => number;
}
