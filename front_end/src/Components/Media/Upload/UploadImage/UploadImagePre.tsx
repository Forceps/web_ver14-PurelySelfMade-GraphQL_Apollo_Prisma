import React, { ChangeEvent, MouseEvent } from "react";
import styled, { css } from "styled-components";
import TemporaryBackground from "../../../ElementEtc/Effect/TemporaryBackground";
import IncludeScrollBar from "../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import WH100per, {
  WH100perInput,
  WH100perI,
  W100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import DirAppoint from "../../../Post/Editor/RightControl/DirSetting/DirAppoint";
import { useDirMode } from "../../../../GlobalLib/Context/ProfileContext/DirMode";
import { totalVolum, typeNameCutting } from "../MediaUploadLib";
import { byteUnitConversion } from "../../../../GlobalLib/RecycleFunction/etc/Arithmetic";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

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
  height: 80vh;
  max-height: 640px;
  background-color: white;
  z-index: ${(prop) => prop.zIndex};
`;
const Left = styled.div`
  display: grid;
  grid-template-rows: 127px 1fr;
  width: 200px;
  height: 100%;
  padding: 10px;
`;
const Middle = styled.div`
  min-width: 280px;
  width: 56vh;
  max-width: 448px;
  height: 100%;
  overflow: hidden;
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
  background-color: #dfe6e9;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  &:hover {
    background-color: #b2bec3;
  }
`;
const ImgBack = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #b2bec3;
`;
const ImgPrev = styled.img`
  display: grid;
  vertical-align: bottom;
  min-width: 40px;
  min-height: 40px;
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
`;
const ImgYet = styled(WH100per)`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  color: #b2bec3;
`;
const ImgYetIcon = styled.i`
  font-size: 1.4rem;
  margin: 0 0 10px 0;
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
    background-color: rgba(223, 230, 233, 0.5);
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
const Right = styled(WH100per)`
  width: 200px;
  padding: 0 10px 0 0;
`;
const SubSbj = styled(W100per)`
  display: grid;
  height: 40px;
  justify-content: right;
  align-items: center;
  font-size: 1.15rem;
`;
const ImgNameSbj = styled(W100per)`
  font-size: 1rem;
  margin: 25px 0 0 0;
  padding: 0 0 0 5px;
`;
const ImgName = styled(W100per)`
  font-size: 0.9rem;
  margin: 5px 0 0 0;
  padding: 0 0 0 7px;
  word-break: break-all;
`;
const ImgSizeSbj = styled(ImgNameSbj)``;
const ImgSize = styled(ImgName)``;
const ImgTypeSbj = styled(ImgNameSbj)``;
const ImgType = styled(ImgName)`
  padding: 0 0 0 10px;
`;
const ManifestDir = styled.div`
  display: flex;
  width: calc(100% - 10px);
  margin: 30px 0 0 7px;
  height: 40px;
  background-color: #dfe6e9;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const TTSize = styled.div`
  position: absolute;
  top: 57px;
  left: 10px;
  width: 180px;
`;
const TTbytes = styled(W100per)``;

export default ({
  zIndex,
  setAddImgScn,
  FileName,
  SelectedFileNamesProcessing,
  handleSubmit,
  ImSelected,
  fileDetailShow,
  readFiles,
  Selected,
  DirApOpen,
  setDirApOpen,
  EachDirSet,
  files,
}: UploadImagePreProps) => {
  const DC = useDirMode();
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        zIndex={zIndex}
        onClick={(e: any) => {
          spaped(e);
          setAddImgScn(false);
        }}
      />
      <Consol zIndex={zIndex + 1}>
        <Left>
          <div>
            <Sbj>Image upload</Sbj>
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
                accept="image/*"
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
        <Middle>
          {ImSelected && Selected ? (
            <ImgBack>
              <ImgPrev src={readFiles?.current?.src} alt="sample image" />
            </ImgBack>
          ) : (
            <ImgYet>
              <ImgYetIcon className="icon-picture" />
              Sample
            </ImgYet>
          )}
        </Middle>
        {ImSelected && Selected && (
          <Right>
            <SubSbj>Details</SubSbj>
            <ImgNameSbj>Name</ImgNameSbj>
            <ImgName>{ImSelected?.FInfo?.name}</ImgName>
            <ImgSizeSbj>Size</ImgSizeSbj>
            <ImgSize>
              {byteUnitConversion(ImSelected?.FInfo?.size)} (
              {ImSelected?.FInfo?.size} bytes)
            </ImgSize>
            <ImgTypeSbj>Type</ImgTypeSbj>
            <ImgType>{typeNameCutting(ImSelected?.FInfo?.type)}</ImgType>
            <ManifestDir
              onClick={(e: any) => {
                spaped(e);
                setDirApOpen(true);
              }}
            >
              <i className="icon-folder" />
              {DC?.DirData?.name}
            </ManifestDir>
          </Right>
        )}
      </Consol>
      {DirApOpen && (
        <DirAppoint
          setDirApOpen={setDirApOpen}
          zIndex={zIndex + 3}
          customFunc={EachDirSet}
        />
      )}
    </Wrapper>
  );
};
type UploadImagePreProps = {
  zIndex: number;
  setAddImgScn: any;
  FileName: any;
  SelectedFileNamesProcessing: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  ImSelected: any;
  fileDetailShow: (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    fewthOrder: number
  ) => void;
  readFiles: any;
  Selected: boolean;
  DirApOpen: boolean;
  setDirApOpen: any;
  EachDirSet: () => void;
  files: any;
};
