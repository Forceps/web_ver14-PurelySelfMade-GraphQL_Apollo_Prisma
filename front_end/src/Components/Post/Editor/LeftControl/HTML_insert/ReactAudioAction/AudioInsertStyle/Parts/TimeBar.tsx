import React from "react";
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

export default () => {
  return (
    <>
      <TimeNavigation>
        <TimeNavigationNum>0:00</TimeNavigationNum>
      </TimeNavigation>
      <TimebasePadding>
        <Timebase>
          <TimebaseNum>0:00</TimebaseNum>
          <TimebaseBarContainer>
            <TimebaseBar value="0" max="1" />
            <TimebaseBarHandle />
          </TimebaseBarContainer>
        </Timebase>
      </TimebasePadding>
    </>
  );
};
