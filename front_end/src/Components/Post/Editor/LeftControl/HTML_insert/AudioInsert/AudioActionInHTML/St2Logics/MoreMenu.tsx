import React, { useEffect } from "react";
import styled from "styled-components";
import { saveSelection } from "../../../../../EditorLib";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioMoreMenuIcon,
  audioMoreMenuScreen,
  audioMoreMenuClose,
  audioMoreMenuThumbnail,
  setImgSubMenuOp2,
  CaretLocation,
}: St2AudioActionLogicProps) => {
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
  audioMoreMenuIcon: HTMLElement;
  audioMoreMenuScreen: HTMLElement;
  audioMoreMenuClose: HTMLElement;
  audioMoreMenuThumbnail: HTMLElement;
  setImgSubMenuOp2: any;
  CaretLocation: any;
}
