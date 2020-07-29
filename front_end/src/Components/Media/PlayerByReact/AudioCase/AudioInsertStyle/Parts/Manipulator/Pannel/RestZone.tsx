import React, { useRef } from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";

const RestZone = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  min-width: 60px;
`;
const EndTime = styled.div`
  margin: -5px 0 0 0;
  padding-right: 6px;
`;
interface ResizeHandleProps {
  WithImg: boolean;
}
const ResizeHandle = styled.div<ResizeHandleProps>`
  position: absolute;
  align-self: flex-end;
  width: 12px;
  height: 12px;
  border-right: 4px solid ${(p) => (p.WithImg ? "#dfe6e9" : "#2d3436")};
  border-bottom: 4px solid ${(p) => (p.WithImg ? "#dfe6e9" : "#2d3436")};
  cursor: nw-resize;
`;

export default ({ TotalTime, WithImg, audioTarget }: RestZoneProps) => {
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

  return (
    <RestZone>
      <EndTime>{MediaClock(TotalTime)}</EndTime>
      <ResizeHandle
        WithImg={WithImg}
        onMouseDown={(e) => {
          if (e.button === 0) {
            audioResizeHandleMouseMove(e);
            document.addEventListener("mousemove", audioResizeHandleMouseMove);
          }
        }}
        onMouseUp={(e) => {
          if (e.button === 0) {
            document.removeEventListener(
              "mousemove",
              audioResizeHandleMouseMove
            );
            if (resizeHandleActive.current) {
              document.execCommand("insertHTML", false, "<div></div>");
              resizeHandleActive.current = false;
            }
          }
        }}
      />
    </RestZone>
  );
};
interface RestZoneProps {
  TotalTime: number;
  WithImg: boolean;
  audioTarget: HTMLDivElement | null;
}
