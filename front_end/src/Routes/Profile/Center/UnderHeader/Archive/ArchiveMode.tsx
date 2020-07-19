import React, { useState } from "react";
import styled from "styled-components";
import ScreensToUpload from "../../../../../Components/Media/Upload/ScreensToUpload";
import { H100per } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import ShowWindow from "./ShowWindow/ShowWindow";
import ShowOne from "./ShowOne/ShowOne";
import SituationBoardCon from "./SituationBoard/SituationBoardCon";

const Wrapper = styled(H100per)`
  display: grid;
  grid-template-rows: 150px 1fr;
  overflow: hidden;
`;

export default () => {
  const [AddImgScn, setAddImgScn] = useState(false);
  const [AddVideoScn, setAddVideoScn] = useState(false);
  const [AddAudioScn, setAddAudioScn] = useState(false);
  const [ShowOneOpen, setShowOneOpen] = useState(false);
  const [DetailInfo, setDetailInfo] = useState({
    MediaType: "img",
    URL: "",
    Title: "null",
  });
  return (
    <>
      <Wrapper>
        <SituationBoardCon />
        <ShowWindow
          setAddImgScn={setAddImgScn}
          setAddVideoScn={setAddVideoScn}
          setAddAudioScn={setAddAudioScn}
          setShowOneOpen={setShowOneOpen}
          setDetailInfo={setDetailInfo}
        />
      </Wrapper>
      <ScreensToUpload
        AddImgScn={AddImgScn}
        setAddImgScn={setAddImgScn}
        AddVideoScn={AddVideoScn}
        setAddVideoScn={setAddVideoScn}
        AddAudioScn={AddAudioScn}
        setAddAudioScn={setAddAudioScn}
      />
      {ShowOneOpen && (
        <ShowOne
          setOpen={setShowOneOpen}
          type={DetailInfo.MediaType}
          url={DetailInfo.URL}
          title={DetailInfo.Title}
        />
      )}
    </>
  );
};
