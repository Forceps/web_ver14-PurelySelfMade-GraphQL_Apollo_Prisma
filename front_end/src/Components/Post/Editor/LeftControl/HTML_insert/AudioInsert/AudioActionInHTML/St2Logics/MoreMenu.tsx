import React, { useEffect } from "react";
import styled from "styled-components";
import { saveSelection } from "../../../../../EditorLib";
import { audioHtmlPlayerStructureInEditor } from "../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  setImgSubMenuOp2,
  CaretLocation,
  audioElem,
}: St2AudioActionLogicProps) => {
  const {
    top: { audioMoreMenuIcon },
    menu: { audioMoreMenuScreen, audioMoreMenuClose, audioMoreMenuThumbnail },
  } = audioElem;

  const audioMoreMenuIconClick = (e: any) => {
    e.stopPropagation();
    audioMoreMenuScreen.style.width = "100px";
    CaretLocation.current = saveSelection();
  };
  const audioMoreMenuCloseClick = () => {
    audioMoreMenuScreen.style.width = "0px";
  };
  const audioMoreMenuThumbnailClick = (e: any) => {
    setImgSubMenuOp2(true);
  };

  useEffect(() => {
    audioMoreMenuIcon?.addEventListener("click", audioMoreMenuIconClick);
    audioMoreMenuClose?.addEventListener("click", audioMoreMenuCloseClick);
    audioMoreMenuThumbnail?.addEventListener(
      "click",
      audioMoreMenuThumbnailClick
    );

    return () => {
      audioMoreMenuIcon?.removeEventListener("click", audioMoreMenuIconClick);
      audioMoreMenuClose?.removeEventListener("click", audioMoreMenuCloseClick);
      audioMoreMenuClose?.removeEventListener(
        "click",
        audioMoreMenuThumbnailClick
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2AudioActionLogicProps {
  setImgSubMenuOp2: any;
  CaretLocation: any;
  audioElem: audioHtmlPlayerStructureInEditor;
}
