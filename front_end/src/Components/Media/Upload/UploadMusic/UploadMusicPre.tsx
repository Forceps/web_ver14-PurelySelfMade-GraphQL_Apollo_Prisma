import React, { ChangeEvent, MouseEvent } from "react";
import styled, { css } from "styled-components";
import WH100per, {
  H100per,
  W100per,
  WH100perInput,
  WH100perI,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { useDirMode } from "../../../../GlobalLib/Context/ProfileContext/DirMode";
import TemporaryBackground from "../../../ElementEtc/Effect/TemporaryBackground";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { byteIntoUnit } from "../../../../GlobalLib/RecycleFunction/etc/Math/Arithmetic";
import { totalVolum, typeNameCutting } from "../MediaUploadLib";
import DirAppoint from "../../../Post/Editor/RightControl/DirSetting/DirAppoint";
import { FlexCenter100per } from "../../../../GlobalLib/Styles/IteratePattern/ToCenter";

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
  position: relative;
  min-height: 400px;
  height: 80vh;
  max-height: 640px;
  background-color: white;
  z-index: ${(prop) => prop.zIndex};
  display: grid;
  grid-template-rows: 1fr 100px;
`;
const Left = styled(H100per)`
  display: grid;
  width: 445px;
  grid-template-rows: 40px 1fr;
  padding: 10px 0 10px 0;
`;
const Right = styled(WH100per)`
  padding: 0 10px 0 0;
`;
const SubSbj = styled(W100per)`
  display: grid;
  height: 40px;
  align-items: center;
  font-size: 1.15rem;
`;
const SelectPanel = styled(WH100per)`
  display: grid;
  grid-template-columns: 140px 40px 1fr 40px;
  padding: 0 10px 0 10px;
`;
const AudioInfo = styled(W100per)``;
const Sbj = styled(WH100per)`
  display: flex;
  font-size: 1.3rem;
  align-items: center;
`;
const SearchUsersLocal = styled(WH100per)`
  display: inline-block;
  position: relative;
  background-color: #dfe6e9;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  &:hover {
    background-color: #b2bec3;
    color: white;
  }
`;
const AudioBack = styled(FlexCenter100per)`
  flex-direction: column;
`;
const AddToList = styled(SearchUsersLocal)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #636e72;
  cursor: pointer;
`;
const Input = styled(WH100perInput)`
  display: inline-block;
  position: absolute;
  border: 0;
  top: 0;
  left: 0;
  font-size: 1rem;
  opacity: 0;
  outline-style: none;
`;
const FileSearchI = styled(WH100perI)`
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
`;
interface EachFNameProps {
  num: number;
  SelectedNum?: number;
}
const EachFName = styled.div<EachFNameProps>`
  display: grid;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  min-height: 35px;
  word-break: break-all;
  overflow: hidden;
  ${(prop) => {
    if (
      (prop.SelectedNum || prop.SelectedNum === 0) &&
      prop.num === prop.SelectedNum
    ) {
      return css`
        border-left: 5px solid #636e72;
        padding: 2px 10px 2px 5px;
      `;
    } else {
      return css`
        padding: 2px 10px 2px 10px;
      `;
    }
  }}
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const ListCon = styled(IncludeScrollBar)`
  width: 100%;
  max-height: 100%;
  overflow: auto;
`;
const FluidUnder = styled(WH100per)`
  padding: 10px 10px 0 0;
  overflow: hidden;
`;
const AudioYet = styled(WH100per)`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  color: #b2bec3;
`;
const AudioYetIcon = styled.i`
  font-size: 1.4rem;
  margin: 0 0 10px 0;
`;
type UpProps = {
  dynamicBool: boolean;
};
const UP = styled(WH100per)<UpProps>`
  display: grid;
  ${(prop) => {
    if (prop.dynamicBool) {
      return css`
        grid-template-columns: 1fr 170px;
      `;
    }
  }}
`;
const AudioNameSbj = styled(WH100per)`
  display: grid;
  font-size: 1rem;
  align-items: center;
  padding: 10px 0 0 0;
`;
const AudioName = styled(WH100per)`
  display: grid;
  font-size: 0.9rem;
  word-break: break-all;
  align-items: center;
  padding: 5px 0 0 5px;
`;
const AudioSizeSbj = styled(AudioNameSbj)``;
const AudioSize = styled(AudioName)``;
const AudioTypeSbj = styled(AudioNameSbj)``;
const AudioType = styled(AudioName)``;
const ManifestDir = styled(W100per)`
  display: flex;
  height: 35px;
  margin: 12px 0 0 0;
  background-color: #dfe6e9;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  grid-column: 4;
  grid-row: 3;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
// type ThumbnailProps = {
//   existBool: boolean;
// };
const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 150px;
  height: 150px;
  font-size: 1rem;
  justify-self: center;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const Down = styled(WH100per)`
  overflow: hidden;
  padding: 5px;
`;
type AudioPrevProps = {
  OrgNum: number;
  SelectedNum: number;
};
const AudioPrev = styled.audio<AudioPrevProps>`
  display: flex;
  min-width: 40px;
  min-height: 40px;
  width: 80%;
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
  outline: none;
  background-color: white;

  ${(prop) => {
    if (prop.OrgNum !== prop.SelectedNum) {
      return css`
        display: none;
      `;
    }
  }}
`;
const TTSize = styled(WH100per)`
  display: flex;
  padding: 0 0 0 10px;
  align-items: center;
`;
const TTbytes = styled(W100per)``;
// const ImgPrev = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: scale-down;
// `;
const AlbumImg = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: #636e72;
  &:hover {
    color: #dfe6e9;
  }
`;

export default ({
  zIndex,
  setAddAudioScn,
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
}: // thumbnailPathInsert,
// ThumbnailPath,
UploadImagePreProps) => {
  const { DirData } = useDirMode();
  const dynamicBool = ImSelected && Selected;
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        zIndex={zIndex}
        onClick={(e: any) => {
          spaped(e);
          setAddAudioScn(false);
        }}
      />
      <Consol zIndex={zIndex + 1}>
        <UP dynamicBool={dynamicBool}>
          <Left>
            <SelectPanel>
              <Sbj>Audio upload</Sbj>
              <SearchUsersLocal>
                <FileSearchI className="icon-search" />
                <Input
                  type="file"
                  onChange={(e) => {
                    SelectedFileNamesProcessing(e);
                  }}
                  multiple
                  accept="audio/*"
                />
              </SearchUsersLocal>
              {Selected && (
                <>
                  <TTSize>
                    <div>
                      Total size: {byteIntoUnit(totalVolum(files)).number}{" "}
                      {byteIntoUnit(totalVolum(files)).unit}
                      <TTbytes>({totalVolum(files)} bytes)</TTbytes>
                    </div>
                  </TTSize>
                  <AddToList
                    onClick={(e: any) => {
                      handleSubmit(e);
                    }}
                  >
                    <i className="icon-upload" />
                  </AddToList>
                </>
              )}
            </SelectPanel>
            {Selected && (
              <FluidUnder>
                <ListCon>
                  {FileName?.map((item: any) => (
                    <EachFName
                      key={item[0]}
                      onMouseDown={(e: any) => {
                        fileDetailShow(e, item[0]);
                      }}
                      SelectedNum={ImSelected?.num}
                      num={item[0]}
                    >
                      {item[1]}
                    </EachFName>
                  ))}
                </ListCon>
              </FluidUnder>
            )}
          </Left>
          {dynamicBool && (
            <Right>
              <SubSbj>Details</SubSbj>
              <Thumbnail
                onClick={(e: any) => {
                  spaped(e);
                  setAddThumbnail(true);
                }}
              >
                <AlbumImg>
                  <i className="icon-music" />
                </AlbumImg>
              </Thumbnail>
              <AudioInfo>
                <AudioNameSbj>Name</AudioNameSbj>
                <AudioName>{ImSelected.FInfo.name}</AudioName>
                <AudioSizeSbj>Size</AudioSizeSbj>
                <AudioSize>
                  {byteIntoUnit(ImSelected.FInfo.size).number}
                  <br />({ImSelected.FInfo.size} bytes)
                </AudioSize>
                <AudioTypeSbj>Type</AudioTypeSbj>
                <AudioType>{typeNameCutting(ImSelected.FInfo.type)}</AudioType>
                <ManifestDir
                  onClick={(e) => {
                    spaped(e);
                    setDirApOpen(true);
                  }}
                >
                  <i className="icon-folder" />
                  {DirData.name}
                </ManifestDir>
              </AudioInfo>
            </Right>
          )}
        </UP>
        <Down>
          {dynamicBool ? (
            <AudioBack>
              {ReadFiles?.map((url: [number, string]) => (
                <AudioPrev
                  key={url[1]}
                  OrgNum={url[0]}
                  SelectedNum={ImSelected.num}
                  controls
                >
                  <source src={url[1]} />
                </AudioPrev>
              ))}
            </AudioBack>
          ) : (
            <AudioYet>
              <AudioYetIcon className="icon-Audio" />
              Sample
            </AudioYet>
          )}
        </Down>
      </Consol>
      {DirApOpen && (
        <DirAppoint
          setDirApOpen={setDirApOpen}
          zIndex={30}
          customFunc={EachDirSet}
        />
      )}
      {/* {AddThumbnail && (
        <ImgIsScnCon
          setImgSubMenuOp={setAddThumbnail}
          ImgInsert={thumbnailPathInsert}
          zIndex={30}
        />
      )} */}
    </Wrapper>
  );
};
type UploadImagePreProps = {
  zIndex: number;
  setAddAudioScn: any;
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
  // thumbnailPathInsert: any;
  // ThumbnailPath: string;
};
