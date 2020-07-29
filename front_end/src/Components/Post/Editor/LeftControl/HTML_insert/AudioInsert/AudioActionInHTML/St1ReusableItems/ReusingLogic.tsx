import React from "react";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import Buttons from "../St2Logics/Buttons";
import Initiate from "../St2Logics/Initiate";
import TimeNavigate from "../St2Logics/TimeNavigate";
import Volume from "../St2Logics/Volume";
import TimeAppointing from "../St2Logics/TimeAppointing";
import Resizing from "../St2Logics/Resizing";
import MoreMenu from "../St2Logics/MoreMenu";

export default ({
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
  audioThumbnailTargetNode,
  setImgSubMenuOp2,
  th,
  audioControlsIntro,
}: ReusingLogicProps) => {
  const getAudioCurrentTime = () => {
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
      audioInfoMemory.textContent &&
      parseInt(audioInfoMemory.textContent)
    ) {
      const progressRatio =
        audioPlayer.currentTime / parseInt(audioInfoMemory.textContent);
      audioTimeBar?.setAttribute("value", `${progressRatio}`);
      let HandleLocation = audioTimeBar?.clientWidth * progressRatio;
      if (HandleLocation < 4) {
        HandleLocation = 0;
      } else if (HandleLocation > audioTimeBar?.clientWidth - 5) {
        HandleLocation = audioTimeBar?.clientWidth - 9;
      } else {
        HandleLocation = HandleLocation - 4;
      }
      audioBarHandle.style.left = `${HandleLocation}px`;
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

  return (
    <>
      <Initiate
        audioTarget={audioTarget}
        audioPlayer={audioPlayer}
        audioPlayBtn={audioPlayBtn}
        audioEndTime={audioEndTime}
        getAudioCurrentTime={getAudioCurrentTime}
        statusBarMoving={statusBarMoving}
        audioInfoMemory={audioInfoMemory}
        th={th}
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
        th={th}
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
      />
      <Volume
        audioPlayer={audioPlayer}
        audioVolumeBtn={audioVolumeBtn}
        audioVolumeBar={audioVolumeBar}
        audioGauge_x_axis={audioGauge_x_axis}
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
        audioTarget={audioTarget}
        audioThumbnailTargetNode={audioThumbnailTargetNode}
        setImgSubMenuOp2={setImgSubMenuOp2}
        th={th}
      />
    </>
  );
};
interface ReusingLogicProps {
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
  audioThumbnailTargetNode: any;
  setImgSubMenuOp2?: any;
  th: number;
  audioControlsIntro: HTMLElement;
}
