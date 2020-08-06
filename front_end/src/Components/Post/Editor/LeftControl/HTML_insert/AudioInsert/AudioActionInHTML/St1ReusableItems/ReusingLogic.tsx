import React, { RefObject, useRef } from "react";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";
import Buttons from "../St2Logics/Buttons";
import Initiate from "../St2Logics/Initiate";
import TimeNavigate from "../St2Logics/TimeNavigate";
import Volume from "../St2Logics/Volume";
import TimeAppointing from "../St2Logics/TimeAppointing";
import Resizing from "../St2Logics/Resizing";
import MoreMenu from "../St2Logics/MoreMenu";
import Buffer from "../St2Logics/Buffer";
import { audioHtmlPlayerStructureInEditor } from "./AudioTargetSpecific";

interface ReusingLogicProps {
  InEditor: RefObject<HTMLElement>;
  mediaTargetId: any;
  setImgSubMenuOp2?: any;
  CaretLocation: any;
  audioElem: audioHtmlPlayerStructureInEditor;
}
export default ({
  InEditor,
  mediaTargetId,
  setImgSubMenuOp2,
  CaretLocation,
  audioElem,
}: ReusingLogicProps) => {
  const {
    audioPlayer,
    audioTarget,
    middle: {
      timeAppoint: {
        audioTimeBarValue,
        audioCurrentTime,
        audioTimeBar,
        audioBarHandle,
      },
    },
    memory: { audioInfoMemory },
  } = audioElem;

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
        getAudioCurrentTime={getAudioCurrentTime}
        statusBarMoving={statusBarMoving}
        mediaTargetId={mediaTargetId}
        playerClicked={playerClicked}
        audioElem={audioElem}
      />
      <Buttons
        audioSetTimeDenote={audioSetTimeDenote}
        keyboardShortCutAble={keyboardShortCutAble}
        audioElem={audioElem}
      />
      <TimeNavigate
        audioGauge_x_axis={audioGauge_x_axis}
        audioElem={audioElem}
      />
      <TimeAppointing
        audioGauge_x_axis={audioGauge_x_axis}
        audioSetTimeDenote={audioSetTimeDenote}
        audioElem={audioElem}
      />
      <Volume
        audioGauge_x_axis={audioGauge_x_axis}
        keyboardShortCutAble={keyboardShortCutAble}
        audioElem={audioElem}
      />
      <Resizing audioElem={audioElem} />
      <MoreMenu
        setImgSubMenuOp2={setImgSubMenuOp2}
        CaretLocation={CaretLocation}
        audioElem={audioElem}
      />
      <Buffer audioElem={audioElem} />
    </>
  );
};
