import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioTarget,
  audioResizeHandle,
}: St2AudioActionLogicProps) => {
  const resizeHandleActive = useRef(false);
  const audioResizeHandleMouseMove = (e: any) => {
    if (audioTarget) {
      let width = 0;
      width = e.pageX - audioTarget.getBoundingClientRect().left + 5;
      let height = 0;
      height = e.pageY - audioTarget.getBoundingClientRect().top + 5;
      audioTarget.setAttribute(
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
  audioTarget: Element;
  audioResizeHandle: HTMLElement;
}
