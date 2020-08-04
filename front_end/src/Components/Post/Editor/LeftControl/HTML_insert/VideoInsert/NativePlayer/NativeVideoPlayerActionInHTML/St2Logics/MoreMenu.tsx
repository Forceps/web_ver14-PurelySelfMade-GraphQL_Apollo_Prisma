import React, { useEffect } from "react";
import styled from "styled-components";
import { saveSelection } from "../../../../../../EditorLib";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoMoreMenuIcon,
  videoMoreMenuScreen,
  videoMoreMenuClose,
  videoMoreMenuThumbnail,
  setImgSubMenuOp2,
  CaretLocation,
}: St2VideoActionLogicProps) => {
  const videoMoreMenuIconClick = (e: any) => {
    e.stopPropagation();
    if (document.fullscreenElement !== null) {
      videoMoreMenuScreen.style.width = "300px";
    } else {
      videoMoreMenuScreen.style.width = "100px";
    }
    CaretLocation.current = saveSelection();
  };
  const videoMoreMenuCloseClick = () => {
    videoMoreMenuScreen.style.width = "0px";
  };
  const videoMoreMenuThumbnailClick = (e: any) => {
    setImgSubMenuOp2(true);
  };

  useEffect(() => {
    videoMoreMenuIcon?.addEventListener("click", videoMoreMenuIconClick);
    videoMoreMenuClose?.addEventListener("click", videoMoreMenuCloseClick);
    videoMoreMenuThumbnail?.addEventListener(
      "click",
      videoMoreMenuThumbnailClick
    );

    return () => {
      videoMoreMenuIcon?.removeEventListener("click", videoMoreMenuIconClick);
      videoMoreMenuClose?.removeEventListener("click", videoMoreMenuCloseClick);
      videoMoreMenuClose?.removeEventListener(
        "click",
        videoMoreMenuThumbnailClick
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2VideoActionLogicProps {
  videoMoreMenuIcon: HTMLElement;
  videoMoreMenuScreen: HTMLElement;
  videoMoreMenuClose: HTMLElement;
  videoMoreMenuThumbnail: HTMLElement;
  setImgSubMenuOp2: any;
  CaretLocation: any;
}
