import React, { RefObject, useRef } from "react";
import Buttons from "../St2Logics/BottomPanel/Buttons";
import Initiate from "../St2Logics/Initiate";
import TimeNavigate from "../St2Logics/TimeSet/TimeNavigate";
import Volume from "../St2Logics/BottomPanel/Volume";
import TimeAppointing from "../St2Logics/TimeSet/TimeAppointing";
import Resizing from "../St2Logics/BottomPanel/Resizing";
import MoreMenu from "../St2Logics/MoreMenu/MoreMenu";
import { MediaClock } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";
import FullScreen from "../St2Logics/BottomPanel/FullScreen";
import Buffer from "../St2Logics/TimeSet/Buffer";
import { videoHtmlPlayerStructureInEditor } from "./NativeVideoPlayerTargetSpecific";

interface ReusingLogicProps {
  InEditor: RefObject<HTMLElement>;
  videoElem: videoHtmlPlayerStructureInEditor;
  mediaTargetId: any;
  setImgSubMenuOp2?: any;
  CaretLocation: any;
}
export default ({
  InEditor,
  videoElem,
  setImgSubMenuOp2,
  mediaTargetId,
  CaretLocation,
}: ReusingLogicProps) => {
  const {
    videoPlayer,
    videoTarget,
    middle: {
      timeAppoint: { timeBarValue, timeBar, barHandle },
    },
    bottom: {
      timeNumber: { currentTime },
    },
    memory: { videoInfoMemory },
  } = videoElem;

  const getcurrentTime = () => {
    timeBarValue.style.width = `100%`;
    if (videoPlayer && currentTime) {
      currentTime.textContent = MediaClock(Math.floor(videoPlayer.currentTime));
    }
  };
  const statusBarMoving = () => {
    if (videoInfoMemory.textContent) {
      const progressRatio =
        videoPlayer.currentTime / parseInt(videoInfoMemory.textContent);
      let HandleLocation = timeBar?.clientWidth * progressRatio;
      timeBarValue.style.transform = `scaleX(${progressRatio})`;
      if (HandleLocation < 5) {
        HandleLocation = 0;
      } else if (HandleLocation > timeBar?.clientWidth - 5) {
        HandleLocation = timeBar?.clientWidth - 10;
      } else {
        HandleLocation = HandleLocation - 5;
      }
      barHandle.style.transform = `translateX(${HandleLocation}px)`;
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
    getcurrentTime();
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
        getcurrentTime={getcurrentTime}
        statusBarMoving={statusBarMoving}
        mediaTargetId={mediaTargetId}
        playerClicked={playerClicked}
        videoElem={videoElem}
      />
      <Buttons
        videoSetTimeDenote={videoSetTimeDenote}
        keyboardShortCutAble={keyboardShortCutAble}
        videoElem={videoElem}
      />
      <TimeNavigate
        videoGauge_x_axis={videoGauge_x_axis}
        videoElem={videoElem}
      />
      <TimeAppointing
        videoGauge_x_axis={videoGauge_x_axis}
        videoSetTimeDenote={videoSetTimeDenote}
        videoElem={videoElem}
      />
      <Volume
        videoGauge_x_axis={videoGauge_x_axis}
        keyboardShortCutAble={keyboardShortCutAble}
        videoElem={videoElem}
      />
      <Resizing videoElem={videoElem} />
      <FullScreen
        keyboardShortCutAble={keyboardShortCutAble}
        videoElem={videoElem}
      />
      <MoreMenu
        setImgSubMenuOp2={setImgSubMenuOp2}
        CaretLocation={CaretLocation}
        videoElem={videoElem}
      />
      <Buffer videoElem={videoElem} />
    </>
  );
};
