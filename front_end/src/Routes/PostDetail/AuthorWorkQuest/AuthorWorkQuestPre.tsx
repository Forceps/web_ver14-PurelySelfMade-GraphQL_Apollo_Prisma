import React from "react";
import styled from "styled-components";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import PanelCon from "./Panel/PanelCon";

interface WindowWrapProps {
  zIndex: number;
}
const WindowWrap = styled(WH100per)<WindowWrapProps>`
  display: grid;
  grid-template-columns: 1fr 300px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(p) => p.zIndex};
`;
const TilesShowWindow = styled(WH100per)`
  background-color: #636e72;
  opacity: 0.6;
`;

const AuthorWorkQuestPre = ({
  zIndex,
  post,
  setAuthorWorkOpen,
}: AuthorWorkQuestPreProps) => {
  return (
    <WindowWrap zIndex={zIndex}>
      <TilesShowWindow></TilesShowWindow>
      <PanelCon post={post} setAuthorWorkOpen={setAuthorWorkOpen} />
    </WindowWrap>
  );
};

interface AuthorWorkQuestPreProps {
  zIndex: number;
  post: any;
  setAuthorWorkOpen: any;
}

export default React.memo(AuthorWorkQuestPre);
