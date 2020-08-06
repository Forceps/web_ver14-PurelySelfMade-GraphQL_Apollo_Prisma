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
  const timeBar = useRef<HTMLProgressElement>(null);
  const barHandle = useRef<HTMLDivElement>(null);

  const getcurrentTime = () => {
    if (audioTag) {
      setCurrentTime(MediaClock(Math.floor(audioTag.currentTime)));
    }
  };
  const statusBarMoving = () => {
    if (audioTag && timeBar.current && barHandle.current) {
      const progressRatio = audioTag.currentTime / TotalTime;
      timeBar.current?.setAttribute("value", `${progressRatio}`);
      let HandleLocation = timeBar.current?.clientWidth * progressRatio;
      if (HandleLocation < 4) {
        HandleLocation = 0;
      } else if (HandleLocation > timeBar.current?.clientWidth - 5) {
        HandleLocation = timeBar.current?.clientWidth - 9;
      } else {
        HandleLocation = HandleLocation - 4;
      }
      barHandle.current.style.left = `${HandleLocation}px`;
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
    getcurrentTime();
    statusBarMoving();
  };

  useEffect(() => {
    const timeGo1 = setInterval(getcurrentTime, 1000);
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
        timeBar={timeBar}
        barHandle={barHandle}
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
