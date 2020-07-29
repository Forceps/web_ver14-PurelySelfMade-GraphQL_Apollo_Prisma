import React, { RefObject, Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import WH100per from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Intro from "./Parts/Footpace/Intro";
import MoreMenu from "./Parts/Footpace/MoreMenu";
import Manipulator from "./Parts/Manipulator/Manipulator";
import AudioSubstance from "./Parts/AudioSubstance";

const AudioPlayer = styled.div`
  display: inline-block;
  user-select: none;
  max-width: 100%;
  width: 350px;
  position: relative;
`;
const Thumbnail = styled(WH100per)`
  background-size: cover;
  background-position: center center;
  min-height: 123px;
  min-width: 323px;
  position: absolute;
  top: 0;
  left: 0;
`;
interface ControlsProps {
  WithImg: boolean;
  Playing: boolean;
}
const Controls = styled(WH100per)<ControlsProps>`
  display: grid;
  grid-template-rows: 1fr 18px 20px 45px;
  min-height: 123px;
  min-width: 323px;
  padding: 0 0 0 5px;
  overflow: hidden;
  position: relative;
  ${(p) => {
    if (p.WithImg) {
      if (p.Playing) {
        return css`
          &:hover {
            box-shadow: 0px 100px 30px -70px rgba(0, 0, 0, 0.3) inset,
              0px -150px 50px -60px rgba(0, 0, 0, 0.3) inset;
            & .audio_time_navigation {
              opacity: 1;
            }
            & .audioPlayer_controls_timebase_padding {
              opacity: 1;
            }
            & .audioPlayer_controls_manipulator {
              opacity: 1;
            }
          }
          transition-property: box-shadow, opacity;
          transition-duration: 0.18s;
          transition-timing-function: ease;
          color: #fafafa;
          & .audio_time_navigation {
            opacity: 0;
            transition-property: opacity;
            transition-duration: 0.18s;
            transition-timing-function: ease;
          }
          & .audioPlayer_controls_timebase_padding {
            opacity: 0;
            transition-property: opacity;
            transition-duration: 0.18s;
            transition-timing-function: ease;
          }
          & .audioPlayer_controls_manipulator {
            opacity: 0;
            transition-property: opacity;
            transition-duration: 0.18s;
            transition-timing-function: ease;
          }
        `;
      } else {
        return css`
          box-shadow: 0px 100px 30px -70px rgba(0, 0, 0, 0.3) inset,
            0px -150px 50px -60px rgba(0, 0, 0, 0.3) inset;
          color: #fafafa;
        `;
      }
    } else {
      return css`
        border-left: 3px solid #636e72;
      `;
    }
  }}
`;

export default ({
  address,
  audioTag,
  TotalTime,
  setTotalTime,
  Playing,
  setPlaying,
  WithImg,
  setWithImg,
  audioTarget,
  MoreMenuOpen,
  setMoreMenuOpen,
  backImgArea,
}: AudioPlayerPreProps) => {
  return (
    <div>
      <AudioPlayer ref={audioTarget} contentEditable={false}>
        <AudioSubstance
          address={address}
          audioTag={audioTag}
          setTotalTime={setTotalTime}
          setPlaying={setPlaying}
        />
        <Thumbnail />
        <Controls WithImg={WithImg} Playing={Playing}>
          <Intro
            setMoreMenuOpen={setMoreMenuOpen}
            audioTag={audioTag.current}
            setPlaying={setPlaying}
          />
          <Manipulator
            audioTag={audioTag.current}
            TotalTime={TotalTime}
            setPlaying={setPlaying}
            Playing={Playing}
            WithImg={WithImg}
            audioTarget={audioTarget}
          />
          <MoreMenu
            audioTag={audioTag.current}
            WithImg={WithImg}
            MoreMenuOpen={MoreMenuOpen}
            setMoreMenuOpen={setMoreMenuOpen}
            setWithImg={setWithImg}
            backImgArea={backImgArea.current}
          />
        </Controls>
      </AudioPlayer>
    </div>
  );
};
interface AudioPlayerPreProps {
  address: string;
  audioTag: RefObject<HTMLAudioElement>;
  TotalTime: number;
  setTotalTime: Dispatch<SetStateAction<number>>;
  Playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  WithImg: boolean;
  setWithImg: Dispatch<SetStateAction<boolean>>;
  audioTarget: RefObject<HTMLDivElement>;
  MoreMenuOpen: boolean;
  setMoreMenuOpen: Dispatch<SetStateAction<boolean>>;
  backImgArea: RefObject<HTMLDivElement>;
}
