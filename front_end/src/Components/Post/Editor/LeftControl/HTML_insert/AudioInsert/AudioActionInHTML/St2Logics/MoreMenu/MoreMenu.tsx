import React, { useEffect } from "react";
import { saveSelection } from "../../../../../../EditorLib";
import { audioHtmlPlayerStructureInEditor } from "../../St1ReusableItems/AudioTargetSpecific";
import PlaySpeedSet from "./PlaySpeedSet";

export default ({
  setImgSubMenuOp2,
  CaretLocation,
  audioElem,
}: St2AudioActionLogicProps) => {
  const {
    top: { moreMenuIcon },
    menu: {
      moreMenuScreen,
      moreMenuClose,
      screenKinds: { basic, playBackSpeed },
      basic: { moreMenuThumbnail, playSpeedMenu },
    },
  } = audioElem;

  const moreMenuIconClick = (e: any) => {
    e.stopPropagation();
    moreMenuScreen.style.width = "120px";
    CaretLocation.current = saveSelection();
  };
  const moreMenuCloseClick = () => {
    moreMenuScreen.style.width = "0px";
  };
  const moreMenuThumbnailClick = (e: any) => {
    setImgSubMenuOp2(true);
  };
  const enterPlaySpeedChoiceScreen = () => {
    basic.style.display = "none";
    playBackSpeed.style.display = "flex";
  };

  useEffect(() => {
    moreMenuIcon?.addEventListener("click", moreMenuIconClick);
    moreMenuClose?.addEventListener("click", moreMenuCloseClick);
    moreMenuThumbnail?.addEventListener("click", moreMenuThumbnailClick);
    playSpeedMenu.addEventListener("click", enterPlaySpeedChoiceScreen);

    return () => {
      moreMenuIcon?.removeEventListener("click", moreMenuIconClick);
      moreMenuClose?.removeEventListener("click", moreMenuCloseClick);
      moreMenuClose?.removeEventListener("click", moreMenuThumbnailClick);
      playSpeedMenu.removeEventListener("click", enterPlaySpeedChoiceScreen);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <PlaySpeedSet audioElem={audioElem} />;
};
interface St2AudioActionLogicProps {
  setImgSubMenuOp2: any;
  CaretLocation: any;
  audioElem: audioHtmlPlayerStructureInEditor;
}
