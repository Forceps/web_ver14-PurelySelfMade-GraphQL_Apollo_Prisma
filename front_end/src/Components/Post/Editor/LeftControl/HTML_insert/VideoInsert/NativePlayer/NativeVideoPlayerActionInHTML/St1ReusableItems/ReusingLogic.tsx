import React, { RefObject, useRef } from "react";
import Buttons from "../St2Logics/Buttons";
import Initiate from "../St2Logics/Initiate";
import TimeNavigate from "../St2Logics/TimeNavigate";
import Volume from "../St2Logics/Volume";
import TimeAppointing from "../St2Logics/TimeAppointing";
import Resizing from "../St2Logics/Resizing";
import MoreMenu from "../St2Logics/MoreMenu";
import { MediaClock } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/Time";

interface ReusingLogicProps {
  InEditor: RefObject<HTMLElement>;
  audioTarget: Element;
  audioPlayer: HTMLAudioElement;
  audioPlayBtn: HTMLElement;
  audioVolumeBtn: HTMLElement;
  audioVolumeBar: HTMLElement;
  audioCurrentTime: HTMLElement;
  audioEndTime: HTMLElement;
  audioTimeBar: HTMLElement;
  audioTimeBarContainer: HTMLElement;
  audioBackToStartIcon: HTMLElement;
  audioFrontMoveIcon: HTMLElement;
  audioBackMoveIcon: HTMLElement;
  audioBarHandle: HTMLElement;
  audioTimeNavigation: HTMLElement;
  audioTimeNavigateNumber: HTMLElement;
  audioInfoMemory: HTMLElement;
  audioResizeHandle: HTMLElement;
  audioMoreMenuIcon: HTMLElement;
  audioMoreMenuScreen: HTMLElement;
  audioMoreMenuClose: HTMLElement;
  audioMoreMenuThumbnail: HTMLElement;
  mediaTargetId: any;
  setImgSubMenuOp2?: any;
  audioControlsIntro: HTMLElement;
  CaretLocation: any;
  audioTimeBarValue: HTMLElement;
  audioVolumeBarValue: HTMLElement;
}
export default ({
  InEditor,
  audioTarget,
  audioPlayer,
  audioPlayBtn,
  audioVolumeBtn,
  audioVolumeBar,
  audioCurrentTime,
  audioEndTime,
  audioTimeBar,
  audioTimeBarContainer,
  audioBackToStartIcon,
  audioFrontMoveIcon,
  audioBackMoveIcon,
  audioBarHandle,
  audioTimeNavigation,
  audioTimeNavigateNumber,
  audioInfoMemory,
  audioResizeHandle,
  audioMoreMenuIcon,
  audioMoreMenuScreen,
  audioMoreMenuClose,
  audioMoreMenuThumbnail,
  mediaTargetId,
  setImgSubMenuOp2,
  audioControlsIntro,
  CaretLocation,
  audioTimeBarValue,
  audioVolumeBarValue,
}: ReusingLogicProps) => {
  const getAudioCurrentTime = () => {
    audioTimeBarValue.style.width = `100%`;
    if (audioPlayer && audioCurrentTime) {
      audioCurrentTime.textContent = MediaClock(
        Math.floor(audioPlayer.currentTime)
      );
    }
  };
  const statusBarMoving = () => {
    if (
      audioPlayer &&
      audioTimeBar &&
      audioTimeBarValue &&
      audioInfoMemory.textContent &&
      parseInt(audioInfoMemory.textContent)
    ) {
      const progressRatio =
        audioPlayer.currentTime / parseInt(audioInfoMemory.textContent);
      let HandleLocation = audioTimeBar?.clientWidth * progressRatio;
      audioTimeBarValue.style.transform = `scaleX(${progressRatio})`;
      if (HandleLocation < 5) {
        HandleLocation = 0;
      } else if (HandleLocation > audioTimeBar?.clientWidth - 5) {
        HandleLocation = audioTimeBar?.clientWidth - 10;
      } else {
        HandleLocation = HandleLocation - 5;
      }
      audioBarHandle.style.transform = `translateX(${HandleLocation}px)`;
    }
  };
  const audioGauge_x_axis = (e: any, viewNode: any, clickNode?: any) => {
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
  const audioSetTimeDenote = () => {
    getAudioCurrentTime();
    statusBarMoving();
  };
  const playerClicked = useRef(false);
  const keyboardShortCutAble = () => {
    const bool =
      InEditor.current !== document.activeElement &&
      playerClicked.current &&
      mediaTargetId.current === audioTarget.id;
    return bool;
  };

  return (
    <>
      <Initiate
        InEditor={InEditor}
        audioPlayer={audioPlayer}
        audioPlayBtn={audioPlayBtn}
        audioEndTime={audioEndTime}
        getAudioCurrentTime={getAudioCurrentTime}
        statusBarMoving={statusBarMoving}
        audioInfoMemory={audioInfoMemory}
        mediaTargetId={mediaTargetId}
        playerClicked={playerClicked}
      />
      <Buttons
        audioTarget={audioTarget}
        audioInfoMemory={audioInfoMemory}
        audioPlayer={audioPlayer}
        audioPlayBtn={audioPlayBtn}
        audioBackToStartIcon={audioBackToStartIcon}
        audioFrontMoveIcon={audioFrontMoveIcon}
        audioBackMoveIcon={audioBackMoveIcon}
        audioSetTimeDenote={audioSetTimeDenote}
        audioControlsIntro={audioControlsIntro}
        keyboardShortCutAble={keyboardShortCutAble}
      />
      <TimeNavigate
        audioInfoMemory={audioInfoMemory}
        audioCurrentTime={audioCurrentTime}
        audioTimeBar={audioTimeBar}
        audioTimeBarContainer={audioTimeBarContainer}
        audioTimeNavigation={audioTimeNavigation}
        audioTimeNavigateNumber={audioTimeNavigateNumber}
        audioGauge_x_axis={audioGauge_x_axis}
      />
      <TimeAppointing
        audioInfoMemory={audioInfoMemory}
        audioPlayer={audioPlayer}
        audioCurrentTime={audioCurrentTime}
        audioTimeBar={audioTimeBar}
        audioTimeBarContainer={audioTimeBarContainer}
        audioGauge_x_axis={audioGauge_x_axis}
        audioSetTimeDenote={audioSetTimeDenote}
        audioTimeBarValue={audioTimeBarValue}
      />
      <Volume
        audioPlayer={audioPlayer}
        audioVolumeBtn={audioVolumeBtn}
        audioVolumeBar={audioVolumeBar}
        audioGauge_x_axis={audioGauge_x_axis}
        audioVolumeBarValue={audioVolumeBarValue}
        keyboardShortCutAble={keyboardShortCutAble}
      />
      <Resizing
        audioTarget={audioTarget}
        audioResizeHandle={audioResizeHandle}
      />
      <MoreMenu
        audioMoreMenuIcon={audioMoreMenuIcon}
        audioMoreMenuScreen={audioMoreMenuScreen}
        audioMoreMenuClose={audioMoreMenuClose}
        audioMoreMenuThumbnail={audioMoreMenuThumbnail}
        setImgSubMenuOp2={setImgSubMenuOp2}
        CaretLocation={CaretLocation}
      />
    </>
  );
};
