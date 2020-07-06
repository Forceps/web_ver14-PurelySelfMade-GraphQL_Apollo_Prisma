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
import { byteUnitConversion } from "../../../../GlobalLib/RecycleFunction/etc/Arithmetic";
import { totalVolum, typeNameCutting } from "../MediaUploadLib";
import useGetImgExist from "../../../../GlobalLib/RecycleFunction/Hooks/useGetImgExist";
import DirAppoint from "../../../Post/Editor/RightControl/DirSetting/DirAppoint";
import ImgInSCon from "../../Insert/ImgInsertScreen/ImgInSCon";

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
const Left = styled(H100per)`
  display: grid;
  width: 200px;
  grid-template-rows: 127px 1fr;
  padding: 10px;
  background-color: #dfe6e9;
`;
const Right = styled(H100per)`
  min-width: 481px;
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
        grid-template-rows: 110px 1fr;
      `;
    }
  }}
`;
const Sbj = styled.div`
  display: flex;
  width: calc(100% - 10px);
  margin-top: 0px;
  height: 40px;
  font-size: 1.3rem;
  align-items: center;
`;
const SearchUsersLocal = styled(W100per)`
  display: flex;
  position: relative;
  height: 40px;
  margin-top: 40px;
  background-color: #b2bec3;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  &:hover {
    background-color: #636e72;
    color: white;
  }
`;
const VideoBack = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #b2bec3;
`;
const AddToList = styled(SearchUsersLocal)`
  margin-top: 10px;
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
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const ListCon = styled(IncludeScrollBar)`
  width: 100%;
  max-height: calc(100% - 50px);
  overflow: auto;
`;
const FluidUnder = styled(WH100per)`
  overflow: hidden;
`;
const VideoYet = styled(WH100per)`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  color: #b2bec3;
`;
const VideoYetIcon = styled.i`
  font-size: 1.4rem;
  margin: 0 0 10px 0;
`;
const UpSide = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 110px;
`;
const VideoInfo = styled(WH100per)`
  display: grid;
  grid-template-columns: 50px 120px 1fr 170px;
  grid-template-rows: 40px 25px 35px;
  padding: 0 10px 9px 10px;
  border-bottom: 1px solid #dfe6e9;
`;
const VideoNameSbj = styled(WH100per)`
  display: grid;
  font-size: 1rem;
  align-items: center;
`;
const VideoName = styled(WH100per)`
  display: grid;
  font-size: 0.9rem;
  word-break: break-all;
  grid-column: 2 / span 3;
  align-items: center;
`;
const VideoSizeSbj = styled(VideoNameSbj)`
  grid-row: 2;
`;
const VideoSize = styled(VideoName)`
  grid-column: 2 / span 3;
  grid-row: 2;
`;
const VideoTypeSbj = styled(VideoNameSbj)`
  grid-row: 3;
  align-items: start;
  padding: 5px 0 0 0;
`;
const VideoType = styled(VideoName)`
  width: 200px;
  grid-row: 3;
  align-items: start;
  padding: 5px 0 0 0;
`;
const ManifestDir = styled.div`
  display: flex;
  width: 170px;
  height: 35px;
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
type ThumbnailProps = {
  existBool: boolean;
};
const Thumbnail = styled(WH100per)<ThumbnailProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  ${(prop) => {
    if (prop.existBool) {
      return css`
        background-color: #dfe6e9;
      `;
    } else {
      return css`
        background-color: white;
        border-bottom: 1px solid #dfe6e9;
        padding: 3px 3px 2px 3px;
      `;
    }
  }}
  overflow: hidden;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const ThPlus = styled.i`
  font-size: 1.2rem;
  margin-top: 10px;
`;
const Fsize1 = styled(W100per)`
  font-size: 0.8rem;
  text-align: center;
  color: #636e72;
  padding: 10px 0 0 0;
`;
const DownSide = styled(WH100per)`
  overflow: hidden;
  padding: 5px;
`;
type VideoPrevProps = {
  OrgNum: number;
  SelectedNum: number;
};
const VideoPrev = styled.video<VideoPrevProps>`
  min-width: 40px;
  min-height: 40px;
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
  ${(prop) => {
    if (prop.OrgNum !== prop.SelectedNum) {
      return css`
        display: none;
      `;
    }
  }}
`;
const TTSize = styled.div`
  position: absolute;
  top: 57px;
  left: 10px;
  width: 180px;
`;
const TTbytes = styled(W100per)``;
const ImgPrev = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
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
  const DC = useDirMode();
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
        <Left>
          <div>
            <Sbj>Video upload</Sbj>
            {Selected && (
              <TTSize>
                Total size: {byteUnitConversion(totalVolum(files))}
                <TTbytes>({totalVolum(files)} bytes)</TTbytes>
              </TTSize>
            )}
            <SearchUsersLocal>
              <FileSearchI className="icon-search" />
              <Input
                type="file"
                onChange={(e) => {
                  SelectedFileNamesProcessing(e);
                }}
                multiple
                accept="video/*, .ogg"
              />
            </SearchUsersLocal>
          </div>
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
              <AddToList
                onClick={(e: any) => {
                  handleSubmit(e);
                }}
              >
                <i className="icon-upload" />
              </AddToList>
            </FluidUnder>
          )}
        </Left>
        <Right>
          <Rcontainer SedB={dynamicBool}>
            {dynamicBool && (
              <UpSide>
                <VideoInfo>
                  <VideoNameSbj>Name</VideoNameSbj>
                  <VideoName>{ImSelected.FInfo.name}</VideoName>
                  <VideoSizeSbj>Size</VideoSizeSbj>
                  <VideoSize>
                    {byteUnitConversion(ImSelected.FInfo.size)} (
                    {ImSelected.FInfo.size} bytes)
                  </VideoSize>
                  <VideoTypeSbj>Type</VideoTypeSbj>
                  <VideoType>
                    {typeNameCutting(ImSelected.FInfo.type)}
                  </VideoType>
                  <ManifestDir
                    onClick={(e) => {
                      spaped(e);
                      setDirApOpen(true);
                    }}
                  >
                    <i className="icon-folder" />
                    {DC.DirData.name}
                  </ManifestDir>
                </VideoInfo>
                <Thumbnail
                  onClick={(e: any) => {
                    spaped(e);
                    setAddThumbnail(true);
                  }}
                  existBool={
                    ThumbnailPath === "" || !useGetImgExist(ThumbnailPath)
                  }
                >
                  {ThumbnailPath === "" ? (
                    <>
                      Thumbnail
                      <ThPlus className="icon-plus" />
                      <Fsize1>9:16 is recommended</Fsize1>
                    </>
                  ) : !useGetImgExist(ThumbnailPath) ? (
                    <>No Result</>
                  ) : (
                    <ImgPrev src={ThumbnailPath} alt="Thumbnail Image" />
                  )}
                </Thumbnail>
              </UpSide>
            )}
            <DownSide>
              {dynamicBool ? (
                <VideoBack>
                  {ReadFiles?.map((url: [number, string]) => (
                    <VideoPrev
                      key={url[1]}
                      OrgNum={url[0]}
                      SelectedNum={ImSelected.num}
                      controls
                    >
                      <source src={url[1]} type="video/mp4" />
                      <source src={url[1]} type="video/ogg" />
                      <source src={url[1]} type="video/avi" />
                      <source src={url[1]} type="video/x-ms-wmv" />
                      <source src={url[1]} type="video/mov" />
                      <source src={url[1]} type="video/rm" />
                      <source src={url[1]} type="video/ram" />
                      <source src={url[1]} type="video/swf" />
                      <source src={url[1]} type="video/flv" />
                      <source src={url[1]} type="video/webm" />
                    </VideoPrev>
                  ))}
                </VideoBack>
              ) : (
                <VideoYet>
                  <VideoYetIcon className="icon-video" />
                  Sample
                </VideoYet>
              )}
            </DownSide>
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
          zIndex={30}
        />
      )}
    </Wrapper>
  );
};
type UploadImagePreProps = {
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
};
