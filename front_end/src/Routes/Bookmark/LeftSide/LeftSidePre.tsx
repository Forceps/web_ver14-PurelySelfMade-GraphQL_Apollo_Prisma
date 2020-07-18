import React from "react";
import styled from "styled-components";
import LeftSideMenuCon from "../../../Components/ElementEtc/LeftSideMenu/LeftSideMenuCon";

const Wrapper = styled.div`
  display: flex;
  user-select: none;
  position: fixed;
  left: calc(50vw - 555px);
  width: 190px;
  z-index: 0;
`;

export default () => {
  return (
    <Wrapper>
      <LeftSideMenuCon Bookmark={false} />
    </Wrapper>
  );
};
