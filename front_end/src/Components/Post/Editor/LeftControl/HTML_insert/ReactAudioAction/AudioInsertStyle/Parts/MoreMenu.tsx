import React from "react";
import styled from "styled-components";
import { H100per } from "../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const MenuOpen = styled(H100per)`
  display: flex;
  flex-direction: column;
  width: 0px;
  backdrop-filter: saturate(200%) blur(10px);
  background-color: rgba(223, 230, 233, 0.5);
  position: absolute;
  justify-self: end;
  overflow: hidden;
  transition-property: width;
  transition-duration: 0.13s;
  transition-timing-function: ease;
  & > div {
    width: 100%;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
  }
  & > div:hover {
    background-color: #dfe6e9;
    cursor: pointer;
  }
`;
const CloseMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const MenuBackIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
const RestMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <MenuOpen>
      <CloseMenu>
        <MenuBackIconContainer>
          <i className="icon-right-open" />
        </MenuBackIconContainer>
      </CloseMenu>
      <RestMenu>Thumbnail</RestMenu>
    </MenuOpen>
  );
};
