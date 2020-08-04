import React, { RefObject, useRef } from "react";
import Buttons from "../St2Logics/Buttons";
import Initiate from "../St2Logics/Initiate";
import TimeNavigate from "../St2Logics/TimeNavigate";
import Volume from "../St2Logics/Volume";
import TimeAppointing from "../St2Logics/TimeAppointing";
import Resizing from "../St2Logics/Resizing";
import MoreMenu from "../St2Logics/MoreMenu";
import { MediaClock } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import FullScreen from "../St2Logics/FullScreen";

interface ReusingLogicProps {
  InEditor: RefObject<HTMLElement>;
  videoTarget: Element;
  videoPlayer: HTMLVideoElement;
  videoPlayBtn: HTMLElement;
  videoVolumeBtn: HTMLElement;
  videoVolumeBar: HTMLElement;
  videoCurrentTime: HTMLElement;
  videoEndTime: HTMLElement;
  videoTimeBar: HTMLElement;
  videoTimeBarContainer: HTMLElement;
  videoBackToStartIcon: HTMLElement;
  videoFrontMoveIcon: HTMLElement;
  videoBackMoveIcon: HTMLElement;
  videoBarHandle: HTMLElement;
  videoTimeNavigation: HTMLElement;
  videoTimeNavigateNumber: HTMLElement;
  videoInfoMemory: HTMLElement;
  videoResizeHandle: HTMLElement;
  videoMoreMenuIcon: HTMLElement;
  videoMoreMenuScreen: HTMLElement;
  videoMoreMenuClose: HTMLElement;
  videoMoreMenuThumbnail: HTMLElement;
  mediaTargetId: any;
  setImgSubMenuOp2?: any;
  videoControlsIntro: HTMLElement;
  CaretLocation: any;
  videoTimeBarValue: HTMLElement;
  videoVolumeBarValue: HTMLElement;
  videoVolumeBarWide: HTMLElement;
  videoControlsVolume: HTMLElement;
  videoPlayerBottom: HTMLElement;
  videoNativeFullscreenIcon: HTMLElement;
  videoPlayerControls: HTMLElement;
}
export default ({
  InEditor,
  videoTarget,
  videoPlayer,
  videoPlayBtn,
  videoVolumeBtn,
  videoVolumeBar,
  videoCurrentTime,
  videoEndTime,
  videoTimeBar,
  videoTimeBarContainer,
  videoBackToStartIcon,
  videoFrontMoveIcon,
  videoBackMoveIcon,
  videoBarHandle,
  videoTimeNavigation,
  videoTimeNavigateNumber,
  videoInfoMemory,
  videoResizeHandle,
  videoMoreMenuIcon,
  videoMoreMenuScreen,
  videoMoreMenuClose,
  videoMoreMenuThumbnail,
  mediaTargetId,
  setImgSubMenuOp2,
  videoControlsIntro,
  CaretLocation,
  videoTimeBarValue,
  videoVolumeBarValue,
  videoVolumeBarWide,
  videoControlsVolume,
  videoPlayerBottom,
  videoNativeFullscreenIcon,
  videoPlayerControls,
}: ReusingLogicProps) => {
  const getvideoCurrentTime = () => {
    videoTimeBarValue.style.width = `100%`;
    if (videoPlayer && videoCurrentTime) {
      videoCurrentTime.textContent = MediaClock(
        Math.floor(videoPlayer.currentTime)
      );
    }
  };
  const statusBarMoving = () => {
    if (videoInfoMemory.textContent) {
      const progressRatio =
        videoPlayer.currentTime / parseInt(videoInfoMemory.textContent);
      let HandleLocation = videoTimeBar?.clientWidth * progressRatio;
      videoTimeBarValue.style.transform = `scaleX(${progressRatio})`;
      if (HandleLocation < 5) {
        HandleLocation = 0;
      } else if (HandleLocation > videoTimeBar?.clientWidth - 5) {
        HandleLocation = videoTimeBar?.clientWidth - 10;
      } else {
        HandleLocation = HandleLocation - 5;
      }
      videoBarHandle.style.transform = `translateX(${HandleLocation}px)`;
    }
  };
  const videoGauge_x_axis = (e: any, viewNode: any, clickNode?: any) => {
    let x = 0;
    x = e.pageX - viewNode.getBoundingClientRect().left;
    x = x / (clickNode ? clickNode.clientWidth : viewNode.clientWidth);
    if (x > 1) {
      x = 1;
    }
    if (x < 0) {
      x = 0;
    }
    return x;
  };
  const videoSetTimeDenote = () => {
    getvideoCurrentTime();
    statusBarMoving();
  };
  const playerClicked = useRef(false);
  const keyboardShortCutAble = () => {
    const bool =
      InEditor.current !== document.activeElement &&
      playerClicked.current &&
      mediaTargetId.current === videoTarget.id;
    return bool;
  };

  return (
    <>
      <Initiate
        InEditor={InEditor}
        videoPlayer={videoPlayer}
        videoPlayBtn={videoPlayBtn}
        videoEndTime={videoEndTime}
        getvideoCurrentTime={getvideoCurrentTime}
        statusBarMoving={statusBarMoving}
        videoInfoMemory={videoInfoMemory}
        mediaTargetId={mediaTargetId}
        playerClicked={playerClicked}
      />
      <Buttons
        videoInfoMemory={videoInfoMemory}
        videoPlayer={videoPlayer}
        videoPlayBtn={videoPlayBtn}
        videoBackToStartIcon={videoBackToStartIcon}
        videoFrontMoveIcon={videoFrontMoveIcon}
        videoBackMoveIcon={videoBackMoveIcon}
        videoSetTimeDenote={videoSetTimeDenote}
        videoControlsIntro={videoControlsIntro}
        keyboardShortCutAble={keyboardShortCutAble}
        videoPlayerControls={videoPlayerControls}
      />
      <TimeNavigate
        videoInfoMemory={videoInfoMemory}
        videoTimeBar={videoTimeBar}
        videoTimeBarContainer={videoTimeBarContainer}
        videoTimeNavigation={videoTimeNavigation}
        videoTimeNavigateNumber={videoTimeNavigateNumber}
        videoGauge_x_axis={videoGauge_x_axis}
      />
      <TimeAppointing
        videoInfoMemory={videoInfoMemory}
        videoPlayer={videoPlayer}
        videoCurrentTime={videoCurrentTime}
        videoTimeBar={videoTimeBar}
        videoTimeBarContainer={videoTimeBarContainer}
        videoGauge_x_axis={videoGauge_x_axis}
        videoSetTimeDenote={videoSetTimeDenote}
      />
      <Volume
        videoPlayer={videoPlayer}
        videoVolumeBtn={videoVolumeBtn}
        videoVolumeBar={videoVolumeBar}
        videoGauge_x_axis={videoGauge_x_axis}
        videoVolumeBarValue={videoVolumeBarValue}
        keyboardShortCutAble={keyboardShortCutAble}
        videoVolumeBarWide={videoVolumeBarWide}
        videoControlsVolume={videoControlsVolume}
        videoPlayerBottom={videoPlayerBottom}
      />
      <Resizing
        videoTarget={videoTarget}
        videoResizeHandle={videoResizeHandle}
        videoPlayer={videoPlayer}
      />
      <FullScreen
        videoTarget={videoTarget}
        videoNativeFullscreenIcon={videoNativeFullscreenIcon}
        keyboardShortCutAble={keyboardShortCutAble}
        videoPlayerControls={videoPlayerControls}
        videoPlayer={videoPlayer}
        videoVolumeBarValue={videoVolumeBarValue}
        videoMoreMenuScreen={videoMoreMenuScreen}
      />
      <MoreMenu
        videoMoreMenuIcon={videoMoreMenuIcon}
        videoMoreMenuScreen={videoMoreMenuScreen}
        videoMoreMenuClose={videoMoreMenuClose}
        videoMoreMenuThumbnail={videoMoreMenuThumbnail}
        setImgSubMenuOp2={setImgSubMenuOp2}
        CaretLocation={CaretLocation}
      />
    </>
  );
};
