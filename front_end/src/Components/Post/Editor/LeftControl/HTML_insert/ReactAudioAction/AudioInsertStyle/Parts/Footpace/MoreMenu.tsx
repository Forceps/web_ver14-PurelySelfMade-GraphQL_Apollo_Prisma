import React from "react";
import styled, { css } from "styled-components";
import { H100per } from "../../../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

interface BaileyProps {
  WithImg: boolean;
}
const Bailey = styled(H100per)<BaileyProps>`
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
  ${(p) => {
    if (p.WithImg) {
      return css`
        color: black;
      `;
    }
  }}
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

export default ({ WithImg }: MoreMenuProps) => {
  return (
    <Bailey WithImg={WithImg}>
      <CloseMenu>
        <MenuBackIconContainer>
          <i className="icon-right-open" />
        </MenuBackIconContainer>
      </CloseMenu>
      <RestMenu>Thumbnail</RestMenu>
    </Bailey>
  );
};
interface MoreMenuProps {
  WithImg: boolean;
}
