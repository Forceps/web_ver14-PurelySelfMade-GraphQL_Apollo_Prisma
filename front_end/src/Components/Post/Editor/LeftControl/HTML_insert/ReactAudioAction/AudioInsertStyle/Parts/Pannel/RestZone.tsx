import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

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
const InfoMemory = styled.div`
  display: none;
  width: 0px;
  height: 0px;
  opacity: 0;
`;
const ResizeHandle = styled.div`
  position: absolute;
  align-self: flex-end;
  width: 12px;
  height: 12px;
  border-right: 4px solid #2d3436;
  border-bottom: 4px solid #2d3436;
  cursor: nw-resize;
`;

export default () => {
  return (
    <RestZone>
      <EndTime>0:00</EndTime>
      <InfoMemory>0</InfoMemory>
      <ResizeHandle />
    </RestZone>
  );
};
