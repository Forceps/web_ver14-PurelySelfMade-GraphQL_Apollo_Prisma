import React from "react";
import styled from "styled-components";
import WH100per, {
  WH100perI,
  W100per,
} from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useProfileDetailMode } from "../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const Collection = styled(WH100per)``;
const Block = styled.div`
  min-height: 60px;
  width: 100%;
  margin: 0 0 10px 0;
  overflow: hidden;
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: 100px 40px 1fr;
  font-size: 1.1rem;
  height: 40px;
  padding: 0 0 0 8px;
  /* margin: 12px 0 0 0; */
  background: linear-gradient(to right, #dfe6e9, #fafafa);
`;
const MediaFiles = styled(WH100per)`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 0 10px;
  overflow: hidden;
`;
const Sbj = styled(WH100per)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const MediaIcon = styled.i`
  margin: 0 5px 0 0;
`;
const AddMedia = styled(WH100perI)`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const ImgBox = styled.div`
  width: 190px;
  display: grid;
  grid-template-rows: 170px 35px;
  margin: 5px;
  @media (max-width: 1300px) {
    &:nth-child(4) {
      display: none;
    }
  }
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;
const ImgSample = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const ImgCaption = styled(W100per)`
  display: grid;
  justify-content: center;
  overflow: hidden;
  word-break: break-all;
  font-size: 1rem;
  padding: 0 5px 0 5px;
`;
const ImgPrev = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;
const VideoBox = styled.div`
  width: 190px;
  display: grid;
  grid-template-rows: 106.875px 35px;
  margin: 5px;
  @media (max-width: 1300px) {
    &:nth-child(4) {
      display: none;
    }
  }
  cursor: pointer;
`;
interface ThumbnailProp {
  url: string;
}
const Thumbnail = styled(WH100per)<ThumbnailProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;
const AudioFiles = styled(MediaFiles)``;
const AudioBox = styled.div`
  width: 50%;
  height: 35px;
  padding: 0 10px 0 10px;
  &:hover {
    background-color: rgba(99, 110, 114, 0.2);
  }
  cursor: pointer;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const MusicCaption = styled(WH100per)`
  display: flex;
  font-size: 1rem;
  align-items: center;
`;

export default ({
  setAddImgScn,
  ImgAll,
  ImgAllLod,
  setAddVideoScn,
  VideoAll,
  VideoAllLod,
  setAddAudioScn,
  AudioAll,
  AudioAllLod,
  setShowOneOpen,
  setDetailInfo,
}: ShowAllPreProps) => {
  const PfDM = useProfileDetailMode();
  return (
    <Collection>
      <Block>
        <Header>
          <Sbj
            onClick={() => {
              PfDM.setAcMode("Image");
            }}
          >
            <MediaIcon className="icon-palette" />
            Image
          </Sbj>
          <AddMedia
            onClick={() => {
              setAddImgScn(true);
            }}
            className="icon-plus"
          />
        </Header>
        <MediaFiles>
          {!ImgAllLod &&
            ImgAll?.imgGet?.map((item: any) => (
              <ImgBox
                key={item.address}
                onClick={(e) => {
                  spaped(e);
                  setDetailInfo({
                    MediaType: "img",
                    URL: `http://127.0.0.1:4002/api/${item.address}/image/read`,
                    Title: item.caption,
                  });
                  setShowOneOpen(true);
                }}
              >
                <ImgSample>
                  <ImgPrev
                    src={`http://127.0.0.1:4002/api/${item.address}/image/read`}
                    alt="image"
                  />
                </ImgSample>
                <ImgCaption>{item.caption}</ImgCaption>
              </ImgBox>
            ))}
        </MediaFiles>
      </Block>
      <Block>
        <Header>
          <Sbj
            onClick={() => {
              PfDM.setAcMode("Video");
            }}
          >
            <MediaIcon className="icon-video" />
            Video
          </Sbj>
          <AddMedia
            onClick={() => {
              setAddVideoScn(true);
            }}
            className="icon-plus"
          />
        </Header>
        <MediaFiles>
          {!VideoAllLod &&
            VideoAll.videoGet?.map((item: any) => (
              <VideoBox
                key={item.address}
                onClick={(e) => {
                  spaped(e);
                  setDetailInfo({
                    MediaType: "video",
                    URL: `http://127.0.0.1:4002/api/${item.address}/video/read`,
                    Title: item.caption,
                  });
                  setShowOneOpen(true);
                }}
              >
                <Thumbnail url={item.thumbnail.replace(/\\/gi, "/")} />
                <ImgCaption>{item.caption}</ImgCaption>
              </VideoBox>
            ))}
        </MediaFiles>
      </Block>
      <Block>
        <Header>
          <Sbj
            onClick={() => {
              PfDM.setAcMode("Music");
            }}
          >
            <MediaIcon className="icon-music" />
            Music
          </Sbj>
          <AddMedia
            onClick={() => {
              setAddAudioScn(true);
            }}
            className="icon-plus"
          />
        </Header>
        <AudioFiles>
          {!AudioAllLod &&
            AudioAll.musicGet?.map((item: any) => (
              <AudioBox
                key={item.address}
                onClick={(e) => {
                  spaped(e);
                  setDetailInfo({
                    MediaType: "audio",
                    URL: `http://127.0.0.1:4002/api/${item.address}/audio/read`,
                    Title: item.caption,
                  });
                  setShowOneOpen(true);
                }}
              >
                <MusicCaption>{item.caption}</MusicCaption>
              </AudioBox>
            ))}
        </AudioFiles>
      </Block>
    </Collection>
  );
};
type ShowAllPreProps = {
  setAddImgScn: any;
  ImgAll: any;
  ImgAllLod: boolean;
  setAddVideoScn: any;
  VideoAll: any;
  VideoAllLod: boolean;
  setAddAudioScn: any;
  AudioAll: any;
  AudioAllLod: boolean;
  setShowOneOpen: any;
  setDetailInfo: any;
};
