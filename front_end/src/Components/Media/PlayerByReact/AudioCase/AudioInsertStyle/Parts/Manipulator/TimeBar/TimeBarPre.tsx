import React, { RefObject } from "react";
import styled from "styled-components";
import WH100per, {
  H100per,
} from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const TimeNavigation = styled(H100per)`
  display: flex;
  position: relative;
  width: calc(100% - 6px);
`;
const TimeNavigationNum = styled(H100per)`
  display: none;
  position: absolute;
  align-items: center;
  white-space: nowrap;
`;
const TimebasePadding = styled(WH100per)`
  display: flex;
  padding-right: 6px;
`;
const TimebaseNum = styled(H100per)`
  display: flex;
  align-items: center;
  padding: 0 7px 0 2px;
  max-width: 100px;
  white-space: nowrap;
`;
const TimebaseBarContainer = styled(WH100per)`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &:hover {
    .audio_timebase_bar_handle {
      width: 8px;
      height: 8px;
    }
  }
`;
const Timebase = styled(WH100per)`
  display: flex;
`;
const TimebaseBar = styled.progress`
  display: flex;
  height: 4px;
  width: 100%;
`;
const TimebaseBarHandle = styled.div`
  display: inline-block;
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  background-color: #636e72;
  left: 0px;
  transition-property: width, height;
  transition-duration: 0.06s;
  transition-timing-function: linear;
`;

export default ({
  CurrentTime,
  audioTimeBar,
  audioBarHandle,
  Navigation,
  NavigateNumber,
  baseNum,
  baseBarConRef,
  audioCurrentTimeControlMouseMove,
  audioTimeNavigate,
}: TimeBarProps) => {
  return (
    <>
      <TimeNavigation ref={Navigation} className="audio_time_navigation">
        <TimeNavigationNum ref={NavigateNumber}>0:00</TimeNavigationNum>
      </TimeNavigation>
      <TimebasePadding className="audioPlayer_controls_timebase_padding">
        <Timebase>
          <TimebaseNum ref={baseNum}>{CurrentTime}</TimebaseNum>
          <TimebaseBarContainer
            ref={baseBarConRef}
            onMouseDown={(e) => {
              if (e.button === 0) {
                audioCurrentTimeControlMouseMove(e);
                document.addEventListener(
                  "mousemove",
                  audioCurrentTimeControlMouseMove
                );
              }
            }}
            onMouseUp={(e) => {
              if (e.button === 0) {
                document.removeEventListener(
                  "mousemove",
                  audioCurrentTimeControlMouseMove
                );
              }
            }}
            onMouseOver={(e) => {
              audioTimeNavigate(e);
              e.currentTarget.addEventListener("mousemove", audioTimeNavigate);
            }}
            onMouseOut={(e) => {
              if (NavigateNumber.current) {
                NavigateNumber.current.style.display = "none";
                e.currentTarget.removeEventListener(
                  "mousemove",
                  audioTimeNavigate
                );
              }
            }}
          >
            <TimebaseBar value="0" max="1" ref={audioTimeBar} />
            <TimebaseBarHandle ref={audioBarHandle} />
          </TimebaseBarContainer>
        </Timebase>
      </TimebasePadding>
    </>
  );
};
interface TimeBarProps {
  CurrentTime: string;
  audioTimeBar: RefObject<HTMLProgressElement>;
  audioBarHandle: RefObject<HTMLDivElement>;
  Navigation: RefObject<HTMLDivElement>;
  NavigateNumber: RefObject<HTMLDivElement>;
  baseNum: RefObject<HTMLDivElement>;
  baseBarConRef: RefObject<HTMLDivElement>;
  audioCurrentTimeControlMouseMove: (e: any) => void;
  audioTimeNavigate: (e: any) => void;
}
