import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  videoTarget,
  audioResizeHandle,
}: St2AudioActionLogicProps) => {
  const resizeHandleActive = useRef(false);
  const audioResizeHandleMouseMove = (e: any) => {
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
      videoTarget.setAttribute(
        "style",
        `width: ${width}px; height: ${height}px;`
      );
      resizeHandleActive.current = true;
    }
  };
  const audioResizeHandleMouseDown = (e: any) => {
    if (e.button === 0) {
      audioResizeHandleMouseMove(e);
      document.addEventListener("mousemove", audioResizeHandleMouseMove);
    }
  };
  const audioResizeHandleMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener("mousemove", audioResizeHandleMouseMove);
      if (resizeHandleActive.current) {
        document.execCommand("insertHTML", false, "<div></div>");
        resizeHandleActive.current = false;
      }
    }
  };

  useEffect(() => {
    audioResizeHandle?.addEventListener(
      "mousedown",
      audioResizeHandleMouseDown
    );
    document?.addEventListener("mouseup", audioResizeHandleMouseUp);

    return () => {
      audioResizeHandle?.removeEventListener(
        "mousedown",
        audioResizeHandleMouseDown
      );
      document?.removeEventListener("mouseup", audioResizeHandleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};

interface St2AudioActionLogicProps {
  videoTarget: Element;
  audioResizeHandle: HTMLElement;
}
