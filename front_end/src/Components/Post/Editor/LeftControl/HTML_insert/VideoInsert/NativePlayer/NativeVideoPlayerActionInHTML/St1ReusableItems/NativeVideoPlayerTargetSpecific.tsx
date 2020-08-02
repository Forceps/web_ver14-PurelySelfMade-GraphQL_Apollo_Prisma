import React, { RefObject } from "react";
import ReusingLogic from "./ReusingLogic";

interface AudioTargetSpecificProps {
  videoTarget: Element;
  mediaTargetId?: any;
  setImgSubMenuOp2?: any;
  CaretLocation: any;
  InEditor: RefObject<HTMLElement>;
}
export default ({
  videoTarget,
  mediaTargetId,
  setImgSubMenuOp2,
  CaretLocation,
  InEditor,
}: AudioTargetSpecificProps) => {
  const audioPlayer = videoTarget.querySelector("audio") as HTMLAudioElement;
  const audioPlayBtn = videoTarget.querySelector(
    ".audioPlayIcon"
  ) as HTMLElement;
  const audioVolumeBtn = videoTarget.querySelector(
    ".audioVolumeIcon"
  ) as HTMLElement;
  const audioVolumeBar = videoTarget.querySelector(
    ".audio_volume_bar"
  ) as HTMLElement;
  const audioVolumeBarValue = videoTarget.querySelector(
    ".audio_volume_bar_value"
  ) as HTMLElement;
  const audioCurrentTime = videoTarget.querySelector(
    ".audio_timebase_number"
  ) as HTMLElement;
  const audioEndTime = videoTarget.querySelector(
    ".audio_end_time"
  ) as HTMLElement;
  const audioTimeBar = videoTarget.querySelector(
    ".audio_timebase_bar"
  ) as HTMLElement;
  const audioTimeBarValue = videoTarget.querySelector(
    ".audio_timebase_bar_value"
  ) as HTMLElement;
  const audioTimeBarContainer = videoTarget.querySelector(
    ".audio_timebase_bar_container"
  ) as HTMLElement;
  const audioBackToStartIcon = videoTarget.querySelector(
    ".audioBackToStart"
  ) as HTMLElement;
  const audioFrontMoveIcon = videoTarget.querySelector(
    ".audioFrontMove"
  ) as HTMLElement;
  const audioBackMoveIcon = videoTarget.querySelector(
    ".audioBackMove"
  ) as HTMLElement;
  const audioBarHandle = videoTarget.querySelector(
    ".audio_timebase_bar_handle"
  ) as HTMLElement;
  const audioTimeNavigation = videoTarget.querySelector(
    ".audio_time_navigation"
  ) as HTMLElement;
  const audioTimeNavigateNumber = videoTarget.querySelector(
    ".audio_time_navigate_number"
  ) as HTMLElement;
  const audioInfoMemory = videoTarget.querySelector(
    ".audio_info_memory"
  ) as HTMLElement;
  const audioResizeHandle = videoTarget.querySelector(
    ".audio_resize_handle"
  ) as HTMLElement;
  const audioMoreMenuIcon = videoTarget.querySelector(
    ".audio_more_menu_icon"
  ) as HTMLElement;
  const audioMoreMenuScreen = videoTarget.querySelector(
    ".audio_player_three_dot_menu"
  ) as HTMLElement;
  const audioMoreMenuClose = videoTarget.querySelector(
    ".audio_player_three_dot_menu_back"
  ) as HTMLElement;
  const audioMoreMenuThumbnail = videoTarget.querySelector(
    ".audio_player_three_dot_menu_thumbnail"
  ) as HTMLElement;
  const audioControlsIntro = videoTarget.querySelector(
    ".audioPlayer_controls_intro"
  ) as HTMLElement;

  return (
    <ReusingLogic
      InEditor={InEditor}
      videoTarget={videoTarget}
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
      audioResizeHandle={audioResizeHandle}
      audioMoreMenuIcon={audioMoreMenuIcon}
      audioMoreMenuScreen={audioMoreMenuScreen}
      audioMoreMenuClose={audioMoreMenuClose}
      audioMoreMenuThumbnail={audioMoreMenuThumbnail}
      mediaTargetId={mediaTargetId}
      setImgSubMenuOp2={setImgSubMenuOp2}
      audioControlsIntro={audioControlsIntro}
      CaretLocation={CaretLocation}
      audioTimeBarValue={audioTimeBarValue}
      audioVolumeBarValue={audioVolumeBarValue}
    />
  );
};
