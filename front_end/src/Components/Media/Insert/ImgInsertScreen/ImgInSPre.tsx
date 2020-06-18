import React from "react";
import styled, { css } from "styled-components";
import TemporaryBackground from "../../../Effect/TemporaryBackground";
import WH100per, {
  W100per,
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import IncludeScrollBar from "../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import UploadImageCon from "../../Upload/UploadImage/UploadImageCon";
import useGetImgExist from "../../../../GlobalLib/RecycleFunction/Hooks/useGetImgExist";

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
  imgSelectMode: string;
};
const UrlMode = styled(ModeItem)<imgSelectModeProp>`
  ${(prop) => {
    if (prop.imgSelectMode === "URL") {
      return css`
        border-bottom: 1.5px solid black;
        padding: 1.5px 0 0 0;
      `;
    }
  }}
`;
const ArchiveMode = styled(ModeItem)<imgSelectModeProp>`
  ${(prop) => {
    if (prop.imgSelectMode === "Archive") {
      return css`
        border-bottom: 1.5px solid black;
        padding: 1.5px 0 0 0;
      `;
    }
  }}
`;
const ImgCollect = styled(IncludeScrollBar)`
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
const ImgPreviewURL = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0 0;
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
  margin: 50px 0 0 45px;
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
const ImgBox = styled.div`
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
const ImgSample = styled(ImgSampleURL)`
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
const AddImg = styled(ImgBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #636e72;
  font-size: 1.2rem;
`;
const AddImgPlus = styled.i`
  margin: 15px 0 0 0;
`;

interface ImgURLProps {
  setImgSubMenuOp: any;
  ImgURLText: any;
  imgSelectMode: string;
  setimgSelectMode: any;
  ImgInsert: any;
  ImgList: any;
  ImgListLod: boolean;
  AddImgOpen: boolean;
  setAddImgOpen: any;
  ImgListRefetch: any;
  zIndex: number;
}
export default ({
  setImgSubMenuOp,
  ImgURLText,
  imgSelectMode,
  setimgSelectMode,
  ImgInsert,
  ImgList,
  ImgListLod,
  AddImgOpen,
  setAddImgOpen,
  ImgListRefetch,
  zIndex,
}: ImgURLProps) => {
  return (
    <>
      <Container zIndex={zIndex}>
        <TemporaryBackground
          zIndex={zIndex}
          onClick={(e: any) => {
            spaped(e);
            setImgSubMenuOp(false);
          }}
        />
        <Consol zIndex={zIndex + 4}>
          <Header>
            <Subject>Image</Subject>
            <UrlMode
              onClick={(e: any) => {
                spaped(e);
                setimgSelectMode("URL");
              }}
              imgSelectMode={imgSelectMode}
            >
              URL
            </UrlMode>
            <ArchiveMode
              onClick={(e: any) => {
                spaped(e);
                setimgSelectMode("Archive");
              }}
              imgSelectMode={imgSelectMode}
            >
              Archive
            </ArchiveMode>
          </Header>
          <ImgCollect>
            {imgSelectMode === "URL" && (
              <ConForUrl>
                <Input
                  type="text"
                  placeholder="Paste Image Link"
                  id="ImgURLTextInput"
                  {...ImgURLText}
                  onKeyUp={(e: any) => {
                    if (e.keyCode === 13) {
                      spaped(e);
                      ImgInsert(ImgURLText.value.replace(/\\/gi, "/"));
                    }
                  }}
                />
                <ImgPreviewURL>
                  <ImgSampleURL>
                    {ImgURLText.value === "" ? (
                      <PreviewMessage>Preview</PreviewMessage>
                    ) : !useGetImgExist(ImgURLText.value) ? (
                      <PreviewMessage>No Result</PreviewMessage>
                    ) : (
                      <ImgPrev src={ImgURLText.value} />
                    )}
                  </ImgSampleURL>
                </ImgPreviewURL>
                <Submit
                  onClick={(e: any) => {
                    spaped(e);
                    ImgInsert(ImgURLText.value.replace(/\\/gi, "/"));
                  }}
                >
                  input
                </Submit>
              </ConForUrl>
            )}
            {imgSelectMode === "Archive" && !ImgListLod && (
              <MediaFiles>
                <AddImg
                  onClick={(e: any) => {
                    spaped(e);
                    setAddImgOpen(true);
                  }}
                >
                  Add Image?
                  <AddImgPlus className="icon-plus-1" />
                </AddImg>
                {ImgList?.imgGet?.map((item: any) => (
                  <ImgBox
                    key={item.address}
                    onClick={(e: any) => {
                      spaped(e);
                      ImgInsert(
                        `http://127.0.0.1:4002/api/${item.address}/image/read`.replace(
                          /\\/gi,
                          "/"
                        )
                      );
                      setImgSubMenuOp(false);
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
            )}
          </ImgCollect>
        </Consol>
      </Container>
      {AddImgOpen && (
        <UploadImageCon
          setAddImgScn={setAddImgOpen}
          zIndex={zIndex + 10}
          refetch={ImgListRefetch}
        />
      )}
    </>
  );
};
