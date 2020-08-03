import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoTarget,
  videoResizeHandle,
  videoPlayer,
}: St2VideoActionLogicProps) => {
  const resizeHandleActive = useRef(false);
  const videoResizeHandleMouseMove = (e: any) => {
    if (videoTarget) {
      let width = 0;
      width =
        e.pageX -
        videoTarget.getBoundingClientRect().left +
        window.pageXOffset +
        5;
      let height = 0;
      height =
        e.pageY -
        videoTarget.getBoundingClientRect().top +
        window.pageYOffset +
        5;
      if (width > (height * 16) / 9) {
        height = (width * 9) / 16;
      } else {
        width = (height * 16) / 9;
      }
      if (height > videoPlayer.clientHeight) {
        height = videoPlayer.clientHeight;
      }
      videoTarget.setAttribute(
        "style",
        `width: ${width}px; height: ${height}px;`
      );
      resizeHandleActive.current = true;
    }
  };
  const videoResizeHandleMouseDown = (e: any) => {
    if (e.button === 0) {
      videoResizeHandleMouseMove(e);
      document.addEventListener("mousemove", videoResizeHandleMouseMove);
    }
  };
  const videoResizeHandleMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener("mousemove", videoResizeHandleMouseMove);
      if (resizeHandleActive.current) {
        document.execCommand("insertHTML", false, "<div></div>");
        resizeHandleActive.current = false;
      }
    }
  };

  useEffect(() => {
    videoResizeHandle?.addEventListener(
      "mousedown",
      videoResizeHandleMouseDown
    );
    document?.addEventListener("mouseup", videoResizeHandleMouseUp);

    return () => {
      videoResizeHandle?.removeEventListener(
        "mousedown",
        videoResizeHandleMouseDown
      );
      document?.removeEventListener("mouseup", videoResizeHandleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};

interface St2VideoActionLogicProps {
  videoTarget: Element;
  videoResizeHandle: HTMLElement;
  videoPlayer: HTMLVideoElement;
}
