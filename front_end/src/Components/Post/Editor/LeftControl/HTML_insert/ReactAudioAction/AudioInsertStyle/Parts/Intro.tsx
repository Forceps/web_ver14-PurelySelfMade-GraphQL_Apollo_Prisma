import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Intro = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 30px;
  min-height: 40px;
  padding: 3px 0 0 0;
  font-size: 1.1rem;
`;
const Caption = styled(WH100per)`
  display: flex;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
`;
const MoreMenu = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
const MoreMenuIcon = styled.i`
  display: inline-block;
  height: 24px;
  cursor: pointer;
`;

export default () => {
  return (
    <Intro>
      <Caption>audioInfo.caption</Caption>
      <MoreMenu>
        <MoreMenuIcon />
      </MoreMenu>
    </Intro>
  );
};
