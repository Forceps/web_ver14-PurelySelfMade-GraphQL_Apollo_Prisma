import React from "react";
import styled, { css } from "styled-components";
import TemporaryBackground from "../../../ElementEtc/Effect/TemporaryBackground";
import UploadVideoCon from "../../Upload/UploadVideo/UploadVideoCon";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import useGetImgExist from "../../../../GlobalLib/RecycleFunction/Hooks/useGetImgExist";
import WH100per, {
  W100per,
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";

const Container = styled(WH100per)<ConsoleProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: ${(prop) => prop.zIndex};
`;
type ConsoleProps = {
  zIndex: number;
};
const Consol = styled.div<ConsoleProps>`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  width: 606px;
  height: 550px;
  background-color: white;
  z-index: ${(prop) => prop.zIndex};
`;
const Header = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 60px 90px;
  height: 50px;
`;
const Subject = styled(H100per)`
  display: grid;
  font-size: 1.5rem;
  align-items: center;
  padding: 0 0 0 10px;
`;
const ModeItem = styled(WH100per)`
  display: grid;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  padding: 1.5px 0 1.5px 0;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
type imgSelectModeProp = {
  VideoSelectMode: string;
};
const UrlMode = styled(ModeItem)<imgSelectModeProp>`
  ${(prop) => {
    if (prop.VideoSelectMode === "URL") {
      return css`
        border-bottom: 1.5px solid black;
        padding: 1.5px 0 0 0;
      `;
    }
  }}
`;
const ArchiveMode = styled(ModeItem)<imgSelectModeProp>`
  ${(prop) => {
    if (prop.VideoSelectMode === "Archive") {
      return css`
        border-bottom: 1.5px solid black;
        padding: 1.5px 0 0 0;
      `;
    }
  }}
`;
const VdoCollect = styled(IncludeScrollBar)`
  height: 100%;
  overflow: auto;
`;
const ConForUrl = styled(WH100per)`
  display: flex;
  flex-wrap: wrap;
  padding: 90px 60px 90px 60px;
`;
const Input = styled.input`
  display: grid;
  width: 100%;
  height: 35px;
  padding: 4px;
  border: 0;
  border-bottom: 1px solid #2d3436;
  font-size: 1rem;
`;
const ThumbnailPrev = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;
const ImgSampleURL = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const PreviewMessage = styled.div`
  font-size: 1.1rem;
  color: #636e72;
`;
const Submit = styled.div`
  display: grid;
  position: relative;
  width: 180px;
  height: 35px;
  justify-self: right;
  right: 0;
  margin: 20px 0 0 45px;
  text-align: center;
  align-items: center;
  background-color: #2d3436;
  color: white;
  user-select: none;
  font-size: 0.9rem;
  &:hover {
    background-color: #636e72;
  }
  cursor: pointer;
`;
const MediaFiles = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
`;
const VdoBox = styled.div`
  width: 190px;
  display: grid;
  grid-template-rows: 170px 35px;
  margin: 5px;
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;
const ImgPrev = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;
const AddVdo = styled(VdoBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #636e72;
  font-size: 1.2rem;
`;
const AddVdoPlus = styled.i`
  margin: 15px 0 0 0;
`;
const DownForURL = styled(W100per)`
  display: flex;
  margin: 30px 0 0 0;
`;
const RightForURL = styled.div`
  display: flex;
  flex-direction: column;
`;
const Notification = styled.div`
  width: 250px;
  color: #636e72;
  padding: 30px 0 0 30px;
`;
const VideoBox = styled.div`
  width: 190px;
  display: grid;
  grid-template-rows: 106.875px 40px;
  margin: 5px 5px 10px 5px;
  @media (max-width: 1300px) {
    &:nth-child(4) {
      display: none;
    }
  }
  cursor: pointer;
`;
const VideoCaption = styled(W100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  word-break: break-all;
  font-size: 1rem;
  padding: 0 5px 0 5px;
`;
interface ThumbnailProp {
  url: string;
}
const Thumbnail = styled(WH100per)<ThumbnailProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;

interface VideoURLProps {
  setVideoSubMenuOp: any;
  VideoInsert: any;
  VideoURLText: any;
  VideoSelectMode: string;
  setVideoSelectMode: any;
  zIndex: number;
  VideoList: any;
  VideoListLod: boolean;
  VideoListRefetch: any;
  AddVideoOpen: boolean;
  setAddVideoOpen: any;
}
export default ({
  setVideoSubMenuOp,
  VideoInsert,
  VideoURLText,
  VideoSelectMode,
  setVideoSelectMode,
  zIndex,
  VideoList,
  VideoListLod,
  VideoListRefetch,
  AddVideoOpen,
  setAddVideoOpen,
}: VideoURLProps) => {
  return (
    <>
      <Container zIndex={zIndex}>
        <TemporaryBackground
          zIndex={zIndex}
          onClick={(e: any) => {
            spaped(e);
            setVideoSubMenuOp(false);
          }}
        />
        <Consol zIndex={zIndex + 4}>
          <Header>
            <Subject>Video</Subject>
            <UrlMode
              onClick={(e: any) => {
                spaped(e);
                setVideoSelectMode("URL");
              }}
              VideoSelectMode={VideoSelectMode}
            >
              URL
            </UrlMode>
            <ArchiveMode
              onClick={(e: any) => {
                spaped(e);
                setVideoSelectMode("Archive");
              }}
              VideoSelectMode={VideoSelectMode}
            >
              Archive
            </ArchiveMode>
          </Header>
          <VdoCollect>
            {VideoSelectMode === "Youtube" && (
              <ConForUrl>
                <Input
                  type="text"
                  placeholder="Paste Video Link"
                  id="videoURLTextInput"
                  {...VideoURLText}
                  onKeyUp={(e: any) => {
                    if (e.keyCode === 13) {
                      VideoInsert(VideoURLText.value, "Youtube");
                    }
                  }}
                />
                <DownForURL>
                  <ThumbnailPrev>
                    <ImgSampleURL>
                      {VideoURLText.value === "" ? (
                        <PreviewMessage>Preview</PreviewMessage>
                      ) : !useGetImgExist(VideoURLText.value) ? (
                        <PreviewMessage>No Result</PreviewMessage>
                      ) : (
                        <ImgPrev src={VideoURLText.value} />
                      )}
                    </ImgSampleURL>
                  </ThumbnailPrev>
                  <RightForURL>
                    <Submit
                      onClick={(e: any) => {
                        spaped(e);
                        VideoInsert(VideoURLText.value, "Youtube");
                      }}
                    >
                      input
                    </Submit>
                    <Notification>
                      URL supported: youtube
                      <br />
                      <br />
                      The video can be resized by slowly dragging the bottom
                      right corner.
                    </Notification>
                  </RightForURL>
                </DownForURL>
              </ConForUrl>
            )}
            {VideoSelectMode === "Archive" && !VideoListLod && (
              <MediaFiles>
                <AddVdo
                  onClick={(e: any) => {
                    spaped(e);
                    setAddVideoOpen(true);
                  }}
                >
                  Add Video?
                  <AddVdoPlus className="icon-plus-1" />
                </AddVdo>
                {VideoList?.videoGet?.map((item: any) => (
                  <VideoBox
                    key={item.address}
                    onClick={(e) => {
                      spaped(e);
                      VideoInsert(
                        `http://127.0.0.1:4002/api/${item.address}/image/read`,
                        "Archive"
                      );
                    }}
                  >
                    <Thumbnail url={item.thumbnail.replace(/\\/gi, "/")} />
                    <VideoCaption>{item.caption}</VideoCaption>
                  </VideoBox>
                ))}
              </MediaFiles>
            )}
          </VdoCollect>
        </Consol>
      </Container>
      {AddVideoOpen && (
        <UploadVideoCon
          setAddVideoScn={setAddVideoOpen}
          zIndex={zIndex + 10}
          refetch={VideoListRefetch}
        />
      )}
    </>
  );
};
