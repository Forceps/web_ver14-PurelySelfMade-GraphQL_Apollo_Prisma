import React from "react";
import ReusingLogic from "./ReusingLogic";

export default ({ audioTarget }: AudioTargetSpecificProps) => {
  const audioPlayer = audioTarget.querySelector("audio") as HTMLAudioElement;
  const audioPlayBtn = audioTarget.querySelector(
    ".audioPlayIcon"
  ) as HTMLElement;
  const audioVolumeBtn = audioTarget.querySelector(
    ".audioVolumeIcon"
  ) as HTMLElement;
  const audioVolumeBar = audioTarget.querySelector(
    ".audio_volume_bar"
  ) as HTMLElement;
  const audioCurrentTime = audioTarget.querySelector(
    ".audio_timebase_number"
  ) as HTMLElement;
  const audioEndTime = audioTarget.querySelector(
    ".audio_end_time"
  ) as HTMLElement;
  const audioTimeBar = audioTarget.querySelector(
    ".audio_timebase_bar"
  ) as HTMLElement;
  const audioTimeBarContainer = audioTarget.querySelector(
    ".audio_timebase_bar_container"
  ) as HTMLElement;
  const audioBackToStartIcon = audioTarget.querySelector(
    ".audioBackToStart"
  ) as HTMLElement;
  const audioFrontMoveIcon = audioTarget.querySelector(
    ".audioFrontMove"
  ) as HTMLElement;
  const audioBackMoveIcon = audioTarget.querySelector(
    ".audioBackMove"
  ) as HTMLElement;
  const audioBarHandle = audioTarget.querySelector(
    ".audio_timebase_bar_handle"
  ) as HTMLElement;
  const audioTimeNavigation = audioTarget.querySelector(
    ".audio_time_navigation"
  ) as HTMLElement;
  const audioTimeNavigateNumber = audioTarget.querySelector(
    ".audio_time_navigate_number"
  ) as HTMLElement;
  const audioInfoMemory = audioTarget.querySelector(
    ".audio_info_memory"
  ) as HTMLElement;

  return (
    <ReusingLogic
      audioTarget={audioTarget}
      audioPlayer={audioPlayer}
      audioPlayBtn={audioPlayBtn}
      audioVolumeBtn={audioVolumeBtn}
      audioVolumeBar={audioVolumeBar}
      audioCurrentTime={audioCurrentTime}
      audioEndTime={audioEndTime}
      audioTimeBar={audioTimeBar}
      audioTimeBarContainer={audioTimeBarContainer}
      audioBackToStartIcon={audioBackToStartIcon}
      audioFrontMoveIcon={audioFrontMoveIcon}
      audioBackMoveIcon={audioBackMoveIcon}
      audioBarHandle={audioBarHandle}
      audioTimeNavigation={audioTimeNavigation}
      audioTimeNavigateNumber={audioTimeNavigateNumber}
      audioInfoMemory={audioInfoMemory}
    />
  );
};
interface AudioTargetSpecificProps {
  audioTarget: Element;
}
