import React from "react";
import styled from "styled-components";
import WH100per, {
  WH100perI,
  W100per,
} from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useProfileDetailMode } from "../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { mediaSummon } from "../ShowAll/ShowAllLib";

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
  margin: 10px 0 0 0;
  padding: 0 0 0 8px;
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
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  cursor: pointer;
`;
const ImgCaption = styled(W100per)`
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

export default ({
  setAddVideoScn,
  Videos,
  VideosLod,
  setShowOneOpen,
  setDetailInfo,
}: ShowImgOnlyPreProps) => {
  const PfDM = useProfileDetailMode();
  return (
    <Block>
      <Header>
        <Sbj
          onClick={() => {
            PfDM.setAcMode("Video");
          }}
        >
          <MediaIcon className="icon-video" />
          Videos
        </Sbj>
        <AddMedia
          onClick={() => {
            setAddVideoScn(true);
          }}
          className="icon-plus"
        />
      </Header>
      <MediaFiles>
        {!VideosLod &&
          Videos?.videoGetByDirId?.map((item: any) => (
            <VideoBox
              key={item.address}
              onClick={(e) => {
                spaped(e);
                setDetailInfo({
                  MediaType: "video",
                  URL: mediaSummon(item.address, "video"),
                  Title: item.caption,
                });
                setShowOneOpen(true);
              }}
            >
              <Thumbnail url={mediaSummon(item.address, "video")} />
              <ImgCaption>{item.caption}</ImgCaption>
            </VideoBox>
          ))}
      </MediaFiles>
    </Block>
  );
};
interface ShowImgOnlyPreProps {
  setAddVideoScn: any;
  Videos: any;
  VideosLod: boolean;
  setShowOneOpen: any;
  setDetailInfo: any;
}
