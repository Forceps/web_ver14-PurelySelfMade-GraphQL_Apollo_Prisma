import React, { Dispatch, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";
import { H100per } from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import ImgInSCon from "../../../../../Insert/ImgInsertScreen/ImgInSCon";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

interface BaileyProps {
  MoreMenuOpen: boolean;
  WithImg: boolean;
}
const Bailey = styled(H100per)<BaileyProps>`
  display: flex;
  flex-direction: column;
  width: ${(p) => (p.MoreMenuOpen ? "100px" : "0px")};
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

export default ({
  audioTag,
  WithImg,
  MoreMenuOpen,
  setMoreMenuOpen,
  setWithImg,
  backImgArea,
}: MoreMenuProps) => {
  const [ImgSubMenuOp, setImgSubMenuOp] = useState(false);
  const audioThumbnailInsert = (address: string) => {
    const editor = document.getElementById("CUedit");
    editor?.focus();
    backImgArea?.setAttribute("style", `background-image: url(${address});`);
    document.execCommand("insertHTML", false, "<div></div>");
    setWithImg(true);
    setImgSubMenuOp(false);
  };

  return (
    <Bailey MoreMenuOpen={MoreMenuOpen} WithImg={WithImg}>
      <CloseMenu>
        <MenuBackIconContainer
          onClick={() => {
            setMoreMenuOpen(false);
          }}
        >
          <i className="icon-right-open" />
        </MenuBackIconContainer>
      </CloseMenu>
      <RestMenu
        onClick={(e) => {
          spaped(e);
          setImgSubMenuOp(true);
        }}
      >
        Thumbnail
      </RestMenu>
      {ImgSubMenuOp && (
        <ImgInSCon
          ImgInsert={audioThumbnailInsert}
          setImgSubMenuOp={setImgSubMenuOp}
        />
      )}
    </Bailey>
  );
};
interface MoreMenuProps {
  audioTag: HTMLAudioElement | null;
  WithImg: boolean;
  MoreMenuOpen: boolean;
  setMoreMenuOpen: Dispatch<SetStateAction<boolean>>;
  setWithImg: Dispatch<SetStateAction<boolean>>;
  backImgArea: HTMLDivElement | null;
}
