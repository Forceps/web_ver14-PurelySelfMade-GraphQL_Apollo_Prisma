import React, { ChangeEvent, MouseEvent } from "react";
import styled, { css } from "styled-components";
import TemporaryBackground from "../../../ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import DirAppoint from "../../../Post/Editor/RightControl/DirSetting/DirAppoint";
import ImgInSCon from "../../Insert/ImgInsertScreen/ImgInSCon";
import UpSide from "./Parts/UpSide";
import DownSide from "./Parts/DownSide";
import LeftSide from "./Parts/LeftSide";
import WH100per, {
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";

type zIndex = {
  zIndex: number;
};
const Wrapper = styled(WH100per)<zIndex>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: ${(prop) => prop.zIndex};
`;
const Consol = styled.div<zIndex>`
  display: flex;
  position: relative;
  min-height: 400px;
  height: 70vh;
  max-height: 640px;
  background-color: white;
  z-index: ${(prop) => prop.zIndex};
`;
const Right = styled(H100per)`
  min-width: 557.667px;
  width: calc(16 * 70vh / 9 - 180 * 16px / 9);
  max-width: 711.1px;
`;
type RcontainerProps = {
  SedB: boolean;
};
const Rcontainer = styled(WH100per)<RcontainerProps>`
  display: inline-block;
  ${(prop) => {
    if (prop.SedB) {
      return css`
        display: grid;
        grid-template-rows: 105px 1fr;
      `;
    }
  }}
`;

export default ({
  setAddVideoScn,
  FileName,
  SelectedFileNamesProcessing,
  handleSubmit,
  ImSelected,
  fileDetailShow,
  ReadFiles,
  Selected,
  DirApOpen,
  setDirApOpen,
  EachDirSet,
  files,
  AddThumbnail,
  setAddThumbnail,
  thumbnailPathInsert,
  ThumbnailPath,
  zIndex,
}: UploadImagePreProps) => {
  const dynamicBool = ImSelected && Selected;
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        zIndex={zIndex}
        onClick={(e: any) => {
          spaped(e);
          setAddVideoScn(false);
        }}
      />
      <Consol zIndex={zIndex + 1}>
        <LeftSide
          FileName={FileName}
          SelectedFileNamesProcessing={SelectedFileNamesProcessing}
          handleSubmit={handleSubmit}
          ImSelected={ImSelected}
          fileDetailShow={fileDetailShow}
          Selected={Selected}
          files={files}
        />
        <Right>
          <Rcontainer SedB={dynamicBool}>
            {dynamicBool && (
              <UpSide
                ImSelected={ImSelected}
                setDirApOpen={setDirApOpen}
                setAddThumbnail={setAddThumbnail}
                ThumbnailPath={ThumbnailPath}
              />
            )}
            <DownSide
              ImSelected={ImSelected}
              ReadFiles={ReadFiles}
              dynamicBool={dynamicBool}
            />
          </Rcontainer>
        </Right>
      </Consol>
      {DirApOpen && (
        <DirAppoint
          setDirApOpen={setDirApOpen}
          zIndex={30}
          customFunc={EachDirSet}
        />
      )}
      {AddThumbnail && (
        <ImgInSCon
          setImgSubMenuOp={setAddThumbnail}
          ImgInsert={thumbnailPathInsert}
          zIndex={zIndex + 10}
        />
      )}
    </Wrapper>
  );
};
interface UploadImagePreProps {
  setAddVideoScn: any;
  FileName: any;
  SelectedFileNamesProcessing: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  ImSelected: any;
  fileDetailShow: (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    fewthOrder: number
  ) => void;
  ReadFiles: any;
  Selected: boolean;
  DirApOpen: boolean;
  setDirApOpen: any;
  EachDirSet: () => void;
  files: any;
  AddThumbnail: boolean;
  setAddThumbnail: any;
  thumbnailPathInsert: any;
  ThumbnailPath: string;
  zIndex: number;
}
