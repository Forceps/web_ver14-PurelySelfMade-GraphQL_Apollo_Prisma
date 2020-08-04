import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { byteUnitConversion } from "../../../../../GlobalLib/RecycleFunction/etc/Math/Arithmetic";
import { typeNameCutting } from "../../MediaUploadLib";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import useGetImgExist from "../../../../../GlobalLib/RecycleFunction/Hooks/useGetImgExist";
import { useDirMode } from "../../../../../GlobalLib/Context/ProfileContext/DirMode";

const UpSide = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 186.666px;
`;
const VideoInfo = styled(WH100per)`
  display: grid;
  grid-template-columns: 50px 120px 1fr 170px;
  grid-template-rows: 40px 25px 35px;
  padding: 0 10px 4px 10px;
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
  url: string;
};
const Thumbnail = styled(WH100per)<ThumbnailProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  ${(p) => {
    if (p.existBool) {
      return css`
        background-color: #dfe6e9;
      `;
    } else {
      return css`
        background-image: url(${p.url});
        background-size: cover;
        background-position: center center;
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

export default ({
  ImSelected,
  setDirApOpen,
  setAddThumbnail,
  ThumbnailPath,
}: UploadImagePreUpsideProps) => {
  const { DirData } = useDirMode();
  return (
    <UpSide>
      <VideoInfo>
        <VideoNameSbj>Name</VideoNameSbj>
        <VideoName>{ImSelected.FInfo.name}</VideoName>
        <VideoSizeSbj>Size</VideoSizeSbj>
        <VideoSize>
          {byteUnitConversion(ImSelected.FInfo.size)} ({ImSelected.FInfo.size}{" "}
          bytes)
        </VideoSize>
        <VideoTypeSbj>Type</VideoTypeSbj>
        <VideoType>{typeNameCutting(ImSelected.FInfo.type)}</VideoType>
        <ManifestDir
          onClick={(e) => {
            spaped(e);
            setDirApOpen(true);
          }}
        >
          <i className="icon-folder" />
          {DirData.name}
        </ManifestDir>
      </VideoInfo>
      <Thumbnail
        onClick={(e: any) => {
          spaped(e);
          setAddThumbnail(true);
        }}
        existBool={ThumbnailPath === "" || !useGetImgExist(ThumbnailPath)}
        url={ThumbnailPath}
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
          <></>
        )}
      </Thumbnail>
    </UpSide>
  );
};
interface UploadImagePreUpsideProps {
  ImSelected: any;
  setDirApOpen: any;
  setAddThumbnail: any;
  ThumbnailPath: string;
}
