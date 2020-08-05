import React, { useEffect } from "react";
import { saveSelection } from "../../../../../../../EditorLib";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";
import PlaySpeedSet from "./PlaySpeedSet";

export default ({
  setImgSubMenuOp2,
  CaretLocation,
  videoElem,
}: St2VideoActionLogicProps) => {
  const {
    top: { moreMenuIcon },
    menu: {
      moreMenuScreen,
      moreMenuClose,
      screenKinds: { basic, playBackSpeed },
      basic: { playSpeedMenu },
    },
  } = videoElem;

  const moreMenuIconClick = (e: any) => {
    e.stopPropagation();
    if (document.fullscreenElement !== null) {
      moreMenuScreen.style.width = "300px";
    } else {
      moreMenuScreen.style.width = "150px";
    }
    CaretLocation.current = saveSelection();
  };
  const moreMenuCloseClick = () => {
    moreMenuScreen.style.width = "0px";
  };
  const enterPlaySpeedChoiceScreen = () => {
    basic.style.display = "none";
    playBackSpeed.style.display = "flex";
  };

  useEffect(() => {
    moreMenuIcon.addEventListener("click", moreMenuIconClick);
    moreMenuClose.addEventListener("click", moreMenuCloseClick);
    playSpeedMenu.addEventListener("click", enterPlaySpeedChoiceScreen);

    return () => {
      moreMenuIcon.removeEventListener("click", moreMenuIconClick);
      moreMenuClose.removeEventListener("click", moreMenuCloseClick);
      playSpeedMenu.removeEventListener("click", enterPlaySpeedChoiceScreen);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PlaySpeedSet videoElem={videoElem} />;
};

interface St2VideoActionLogicProps {
  setImgSubMenuOp2: any;
  CaretLocation: any;
  videoElem: videoHtmlPlayerStructureInEditor;
}
