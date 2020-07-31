import React, { useEffect } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioMoreMenuIcon,
  audioMoreMenuScreen,
  audioMoreMenuClose,
  audioMoreMenuThumbnail,
  audioThumbnailTargetNode,
  audioTarget,
  setImgSubMenuOp2,
}: St2AudioActionLogicProps) => {
  const audioMoreMenuIconClick = (e: any) => {
    e.stopPropagation();
    audioMoreMenuScreen.style.width = "100px";
  };
  const audioMoreMenuCloseClick = () => {
    audioMoreMenuScreen.style.width = "0px";
  };
  const audioMoreMenuThumbnailClick = (e: any) => {
    audioThumbnailTargetNode.current = e.currentTarget.closest(
      ".audioPlayer"
    ).id;
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
  audioThumbnailTargetNode: any;
  audioTarget: Element;
  setImgSubMenuOp2: any;
}
