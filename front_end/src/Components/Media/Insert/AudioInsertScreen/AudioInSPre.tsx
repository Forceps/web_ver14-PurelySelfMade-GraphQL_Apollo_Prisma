import React from "react";
import styled, { css } from "styled-components";
import TemporaryBackground from "../../../ElementEtc/Effect/TemporaryBackground";
import UploadMusicCon from "../../Upload/UploadMusic/UploadMusicCon";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import useGetImgExist from "../../../../GlobalLib/RecycleFunction/Hooks/useGetImgExist";
import WH100per, {
  W100per,
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { mediaSummon } from "../../../../Routes/Profile/Center/UnderHeader/Archive/ShowWindow/ShowAll/ShowAllLib";

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
  width: 506px;
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
  AudioSelectMode: string;
};
const UrlMode = styled(ModeItem)<imgSelectModeProp>`
  ${(prop) => {
    if (prop.AudioSelectMode === "URL") {
      return css`
        border-bottom: 1.5px solid black;
        padding: 1.5px 0 0 0;
      `;
    }
  }}
`;
const ArchiveMode = styled(ModeItem)<imgSelectModeProp>`
  ${(prop) => {
    if (prop.AudioSelectMode === "Archive") {
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
  width: 130px;
  height: 35px;
  justify-self: right;
  right: 0;
  margin: 20px 0 0 15px;
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
const AdoBox = styled.div`
  display: grid;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  min-height: 35px;
  word-break: break-all;
  overflow: hidden;
  padding: 2px 15px 2px 15px;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const ImgPrev = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;
const AddAdo = styled(AdoBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #636e72;
  font-size: 1.2rem;
`;
const AddAdoPlus = styled.i``;
const DownForURL = styled(W100per)`
  display: flex;
  margin: 30px 0 0 0;
`;
const RightForURL = styled.div`
  display: flex;
  flex-direction: column;
`;

interface AudioURLProps {
  setAudioSubMenuOp: any;
  AudioInsert: any;
  AudioURLText: any;
  AudioSelectMode: string;
  setAudioSelectMode: any;
  zIndex: number;
  AudioList: any;
  AudioListLod: boolean;
  AudioListRefetch: any;
  AddAudioOpen: boolean;
  setAddAudioOpen: any;
}
export default ({
  setAudioSubMenuOp,
  AudioInsert,
  AudioURLText,
  AudioSelectMode,
  setAudioSelectMode,
  zIndex,
  AudioList,
  AudioListLod,
  AudioListRefetch,
  AddAudioOpen,
  setAddAudioOpen,
}: AudioURLProps) => {
  return (
    <>
      <Container zIndex={zIndex}>
        <TemporaryBackground
          zIndex={zIndex}
          onClick={(e: any) => {
            spaped(e);
            setAudioSubMenuOp(false);
          }}
        />
        <Consol zIndex={zIndex + 4}>
          <Header>
            <Subject>Audio</Subject>
            <UrlMode
              onClick={(e: any) => {
                spaped(e);
                setAudioSelectMode("URL");
              }}
              AudioSelectMode={AudioSelectMode}
            >
              URL
            </UrlMode>
            <ArchiveMode
              onClick={(e: any) => {
                spaped(e);
                setAudioSelectMode("Archive");
              }}
              AudioSelectMode={AudioSelectMode}
            >
              Archive
            </ArchiveMode>
          </Header>
          <VdoCollect>
            {AudioSelectMode === "URL" && (
              <ConForUrl>
                <Input
                  type="text"
                  placeholder="Paste Audio Link"
                  id="AudioURLTextInput"
                  {...AudioURLText}
                  onKeyUp={(e: any) => {
                    if (e.keyCode === 13) {
                      spaped(e);
                      AudioInsert(AudioURLText.value);
                    }
                  }}
                />
                <DownForURL>
                  <ThumbnailPrev>
                    <ImgSampleURL>
                      {AudioURLText.value === "" ? (
                        <PreviewMessage>Preview</PreviewMessage>
                      ) : !useGetImgExist(AudioURLText.value) ? (
                        <PreviewMessage>No Result</PreviewMessage>
                      ) : (
                        <ImgPrev src={AudioURLText.value} />
                      )}
                    </ImgSampleURL>
                  </ThumbnailPrev>
                  <RightForURL>
                    <Submit
                      onClick={(e: any) => {
                        spaped(e);
                        AudioInsert(AudioURLText.value);
                      }}
                    >
                      input
                    </Submit>
                  </RightForURL>
                </DownForURL>
              </ConForUrl>
            )}
            {AudioSelectMode === "Archive" && !AudioListLod && (
              <MediaFiles>
                <AddAdo
                  onClick={(e: any) => {
                    spaped(e);
                    setAddAudioOpen(true);
                  }}
                >
                  <AddAdoPlus className="icon-plus-1" />
                  Add Music?
                </AddAdo>
                {AudioList?.map((item: any) => (
                  <AdoBox
                    key={item.address}
                    onClick={(e) => {
                      spaped(e);
                      AudioInsert(mediaSummon(item.address, "audio"), item);
                    }}
                  >
                    {item.caption}
                  </AdoBox>
                ))}
              </MediaFiles>
            )}
          </VdoCollect>
        </Consol>
      </Container>
      {AddAudioOpen && (
        <UploadMusicCon
          setAddAudioScn={setAddAudioOpen}
          zIndex={zIndex + 10}
          refetch={AudioListRefetch}
        />
      )}
    </>
  );
};
