import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Intro = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 30px;
  min-height: 40px;
  padding: 3px 0 0 0;
  font-size: 1.1rem;
`;
const Caption = styled(WH100per)`
  display: flex;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
`;
const MenuOpen = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
const MoreMenuIcon = styled.i`
  display: inline-block;
  height: 24px;
  cursor: pointer;
`;

export default ({ setMoreMenuOpen, audioTag, setPlaying }: IntroProps) => {
  const playOrPause = () => {
    if (audioTag?.played) {
      audioTag?.pause();
      setPlaying(false);
    } else {
      audioTag?.play();
      setPlaying(true);
    }
  };
  return (
    <Intro
      onClick={(e) => {
        e.stopPropagation();
        playOrPause();
      }}
    >
      <Caption>audioInfo.caption</Caption>
      <MenuOpen>
        <MoreMenuIcon
          className="icon-ellipsis-vert"
          onClick={(e) => {
            e.stopPropagation();
            setMoreMenuOpen(true);
          }}
        />
      </MenuOpen>
    </Intro>
  );
};

interface IntroProps {
  setMoreMenuOpen: Dispatch<SetStateAction<boolean>>;
  audioTag: HTMLAudioElement | null;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}
