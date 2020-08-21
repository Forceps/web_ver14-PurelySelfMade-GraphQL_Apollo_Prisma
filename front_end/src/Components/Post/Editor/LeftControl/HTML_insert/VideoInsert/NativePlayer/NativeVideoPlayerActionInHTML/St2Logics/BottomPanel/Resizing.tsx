import React, { useEffect, useRef, RefObject } from "react";
import styled from "styled-components";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ videoElem, InEditor }: St2VideoActionLogicProps) => {
  const {
    videoTarget,
    videoPlayer,
    bottom: {
      toolBox: { resizeHandle },
    },
  } = videoElem;

  const resizeHandleActive = useRef(false);
  const resizeHandleMouseMove = (e: any) => {
    if (InEditor && InEditor.current) {
      const editorInnerWidth =
        InEditor.current.getBoundingClientRect().width - 20;
      let width = 0;
      width =
        e.pageX -
        videoTarget.getBoundingClientRect().left +
        window.pageXOffset +
        5;
      let height = 0;
      height = e.pageY - videoTarget.getBoundingClientRect().top + 5;
      if (width > (height * 16) / 9) {
        height = (width * 9) / 16;
      } else {
        width = (height * 16) / 9;
      }
      if (height > videoPlayer.clientHeight) {
        height = videoPlayer.clientHeight;
      }
      if (width > editorInnerWidth) {
        width = editorInnerWidth;
      }
      videoTarget.setAttribute(
        "style",
        `width: ${width}px; height: ${height}px;`
      );
      resizeHandleActive.current = true;
    }
  };
  const resizeHandleMouseDown = (e: any) => {
    if (e.button === 0) {
      resizeHandleMouseMove(e);
      document.addEventListener("mousemove", resizeHandleMouseMove);
    }
  };
  const resizeHandleMouseUp = (e: any) => {
    if (e.button === 0) {
      document.removeEventListener("mousemove", resizeHandleMouseMove);
      if (resizeHandleActive.current) {
        document.execCommand("insertHTML", false, "<div></div>");
        resizeHandleActive.current = false;
      }
    }
  };

  useEffect(() => {
    resizeHandle?.addEventListener("mousedown", resizeHandleMouseDown);
    document?.addEventListener("mouseup", resizeHandleMouseUp);

    return () => {
      resizeHandle?.removeEventListener("mousedown", resizeHandleMouseDown);
      document?.removeEventListener("mouseup", resizeHandleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};

interface St2VideoActionLogicProps {
  videoElem: videoHtmlPlayerStructureInEditor;
  InEditor: RefObject<HTMLElement>;
}
