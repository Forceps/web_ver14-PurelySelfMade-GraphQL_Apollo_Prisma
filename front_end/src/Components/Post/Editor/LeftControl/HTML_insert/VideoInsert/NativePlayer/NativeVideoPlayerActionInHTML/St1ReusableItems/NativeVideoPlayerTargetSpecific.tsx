import React, { RefObject } from "react";
import ReusingLogic from "./ReusingLogic";

interface VideoTargetSpecificProps {
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
}: VideoTargetSpecificProps) => {
  const videoPlayer = videoTarget.querySelector("video") as HTMLVideoElement;
  const videoPlayBtn = videoTarget.querySelector(
    ".videoPlayIcon"
  ) as HTMLElement;
  const videoVolumeBtn = videoTarget.querySelector(
    ".videoVolumeIcon"
  ) as HTMLElement;
  const videoVolumeBarWide = videoTarget.querySelector(
    ".video_volume_bar_wide"
  ) as HTMLElement;
  const videoVolumeBar = videoTarget.querySelector(
    ".video_volume_bar"
  ) as HTMLElement;
  const videoVolumeBarValue = videoTarget.querySelector(
    ".video_volume_bar_value"
  ) as HTMLElement;
  const videoCurrentTime = videoTarget.querySelector(
    ".video_timebase_number"
  ) as HTMLElement;
  const videoEndTime = videoTarget.querySelector(
    ".video_end_time"
  ) as HTMLElement;
  const videoTimeBar = videoTarget.querySelector(
    ".video_timebase_bar"
  ) as HTMLElement;
  const videoTimeBarValue = videoTarget.querySelector(
    ".video_timebase_bar_value"
  ) as HTMLElement;
  const videoTimeBarContainer = videoTarget.querySelector(
    ".video_timebase_bar_container"
  ) as HTMLElement;
  const videoBackToStartIcon = videoTarget.querySelector(
    ".videoBackToStart"
  ) as HTMLElement;
  const videoFrontMoveIcon = videoTarget.querySelector(
    ".videoFrontMove"
  ) as HTMLElement;
  const videoBackMoveIcon = videoTarget.querySelector(
    ".videoBackMove"
  ) as HTMLElement;
  const videoBarHandle = videoTarget.querySelector(
    ".video_timebase_bar_handle"
  ) as HTMLElement;
  const videoTimeNavigation = videoTarget.querySelector(
    ".video_time_navigation"
  ) as HTMLElement;
  const videoTimeNavigateNumber = videoTarget.querySelector(
    ".video_time_navigate_number"
  ) as HTMLElement;
  const videoInfoMemory = videoTarget.querySelector(
    ".video_info_memory"
  ) as HTMLElement;
  const videoResizeHandle = videoTarget.querySelector(
    ".video_resize_handle"
  ) as HTMLElement;
  const videoMoreMenuIcon = videoTarget.querySelector(
    ".video_more_menu_icon"
  ) as HTMLElement;
  const videoMoreMenuScreen = videoTarget.querySelector(
    ".video_player_three_dot_menu"
  ) as HTMLElement;
  const videoMoreMenuClose = videoTarget.querySelector(
    ".video_player_three_dot_menu_back"
  ) as HTMLElement;
  const videoMoreMenuThumbnail = videoTarget.querySelector(
    ".video_player_three_dot_menu_thumbnail"
  ) as HTMLElement;
  const videoControlsIntro = videoTarget.querySelector(
    ".videoPlayer_controls_intro"
  ) as HTMLElement;
  const videoControlsVolume = videoTarget.querySelector(
    ".videoPlayer_controls_volume"
  ) as HTMLElement;
  const videoPlayerBottom = videoTarget.querySelector(
    ".videoPlayer_bottom"
  ) as HTMLElement;
  const videoNativeFullscreenIcon = videoTarget.querySelector(
    ".video_native_fullscreen"
  ) as HTMLElement;
  const videoPlayerControls = videoTarget.querySelector(
    ".videoPlayer_controls"
  ) as HTMLElement;

  return (
    <ReusingLogic
      InEditor={InEditor}
      videoTarget={videoTarget}
      videoPlayer={videoPlayer}
      videoPlayBtn={videoPlayBtn}
      videoVolumeBtn={videoVolumeBtn}
      videoVolumeBar={videoVolumeBar}
      videoCurrentTime={videoCurrentTime}
      videoEndTime={videoEndTime}
      videoTimeBar={videoTimeBar}
      videoTimeBarContainer={videoTimeBarContainer}
      videoBackToStartIcon={videoBackToStartIcon}
      videoFrontMoveIcon={videoFrontMoveIcon}
      videoBackMoveIcon={videoBackMoveIcon}
      videoBarHandle={videoBarHandle}
      videoTimeNavigation={videoTimeNavigation}
      videoTimeNavigateNumber={videoTimeNavigateNumber}
      videoInfoMemory={videoInfoMemory}
      videoResizeHandle={videoResizeHandle}
      videoMoreMenuIcon={videoMoreMenuIcon}
      videoMoreMenuScreen={videoMoreMenuScreen}
      videoMoreMenuClose={videoMoreMenuClose}
      videoMoreMenuThumbnail={videoMoreMenuThumbnail}
      mediaTargetId={mediaTargetId}
      setImgSubMenuOp2={setImgSubMenuOp2}
      videoControlsIntro={videoControlsIntro}
      CaretLocation={CaretLocation}
      videoTimeBarValue={videoTimeBarValue}
      videoVolumeBarValue={videoVolumeBarValue}
      videoVolumeBarWide={videoVolumeBarWide}
      videoControlsVolume={videoControlsVolume}
      videoPlayerBottom={videoPlayerBottom}
      videoNativeFullscreenIcon={videoNativeFullscreenIcon}
      videoPlayerControls={videoPlayerControls}
    />
  );
};
