import React from "react";
import styled, { css } from "styled-components";
import WH100per from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const VideoBack = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #b2bec3;
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

export default ({
  ImSelected,
  ReadFiles,
  dynamicBool,
}: UploadImagePreDownSideProps) => {
  return (
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
  );
};
interface UploadImagePreDownSideProps {
  ImSelected: any;
  ReadFiles: any;
  dynamicBool: boolean;
}
