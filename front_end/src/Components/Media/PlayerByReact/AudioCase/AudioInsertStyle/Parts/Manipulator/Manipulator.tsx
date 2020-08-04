import React, {
  useState,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch,
  RefObject,
} from "react";
import styled from "styled-components";
import WH100per from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Buttons from "./Pannel/Buttons";
import Volume from "./Pannel/Volume";
import RestZone from "./Pannel/RestZone";
import TimeBar from "./TimeBar/TimeBarCon";
import { MediaClock } from "../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";

const Bottom = styled(WH100per)`
  display: grid;
  grid-template-columns: 125px 130px 1fr;
`;

export default ({
  audioTag,
  TotalTime,
  setPlaying,
  Playing,
  WithImg,
  audioTarget,
}: ManipulatorProps) => {
  const [CurrentTime, setCurrentTime] = useState("0:00");
  const audioTimeBar = useRef<HTMLProgressElement>(null);
  const audioBarHandle = useRef<HTMLDivElement>(null);

  const getAudioCurrentTime = () => {
    if (audioTag) {
      setCurrentTime(MediaClock(Math.floor(audioTag.currentTime)));
    }
  };
  const statusBarMoving = () => {
    if (audioTag && audioTimeBar.current && audioBarHandle.current) {
      const progressRatio = audioTag.currentTime / TotalTime;
      audioTimeBar.current?.setAttribute("value", `${progressRatio}`);
      let HandleLocation = audioTimeBar.current?.clientWidth * progressRatio;
      if (HandleLocation < 4) {
        HandleLocation = 0;
      } else if (HandleLocation > audioTimeBar.current?.clientWidth - 5) {
        HandleLocation = audioTimeBar.current?.clientWidth - 9;
      } else {
        HandleLocation = HandleLocation - 4;
      }
      audioBarHandle.current.style.left = `${HandleLocation}px`;
    }
  };
  const audioGauge_x_axis = (
    e: any,
    viewNode: any,
    clickNode?: any
  ): number => {
    let x = 0;
    x = e.pageX - viewNode.getBoundingClientRect().left;
    x = x / (clickNode ? clickNode.clientWidth : viewNode.clientWidth);
    if (x > 1) {
      x = 1;
    }
    if (x < 0) {
      x = 0;
    }
    return x;
  };
  const audioSetTimeDenote = () => {
    getAudioCurrentTime();
    statusBarMoving();
  };

  useEffect(() => {
    const timeGo1 = setInterval(getAudioCurrentTime, 1000);
    const timeGo2 = setInterval(statusBarMoving, 100);
    return () => {
      window.clearInterval(timeGo1);
      window.clearInterval(timeGo2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TimeBar
        audioTag={audioTag}
        CurrentTime={CurrentTime}
        audioTimeBar={audioTimeBar}
        audioBarHandle={audioBarHandle}
        TotalTime={TotalTime}
        audioSetTimeDenote={audioSetTimeDenote}
        audioGauge_x_axis={audioGauge_x_axis}
      />
      <Bottom className="audioPlayer_controls_manipulator">
        <Buttons
          audioTag={audioTag}
          Playing={Playing}
          setPlaying={setPlaying}
          audioSetTimeDenote={audioSetTimeDenote}
          TotalTime={TotalTime}
        />
        <Volume audioTag={audioTag} audioGauge_x_axis={audioGauge_x_axis} />
        <RestZone
          TotalTime={TotalTime}
          WithImg={WithImg}
          audioTarget={audioTarget.current}
        />
      </Bottom>
    </>
  );
};
interface ManipulatorProps {
  audioTag: HTMLAudioElement | null;
  TotalTime: number;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  Playing: boolean;
  WithImg: boolean;
  audioTarget: RefObject<HTMLDivElement>;
}
