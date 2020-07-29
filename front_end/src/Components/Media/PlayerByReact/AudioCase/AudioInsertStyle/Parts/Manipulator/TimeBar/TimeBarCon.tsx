import React, { RefObject, useRef } from "react";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import TimeBarPre from "./TimeBarPre";

export default ({
  audioTag,
  CurrentTime,
  audioTimeBar,
  audioBarHandle,
  TotalTime,
  audioSetTimeDenote,
  audioGauge_x_axis,
}: TimeBarProps) => {
  const NavigateNumber = useRef<HTMLDivElement>(null);
  const Navigation = useRef<HTMLDivElement>(null);
  const baseNum = useRef<HTMLDivElement>(null);
  const baseBarConRef = useRef<HTMLDivElement>(null);

  const audioCurrentTimeControlMouseMove = (e: any) => {
    if (audioTag) {
      const movedValue = audioGauge_x_axis(
        e,
        audioTimeBar.current,
        e.currentTarget
      );
      audioTag.currentTime = movedValue * TotalTime;
      audioSetTimeDenote();
    }
  };
  const audioTimeNavigate = (e: any) => {
    if (
      NavigateNumber.current &&
      baseNum.current &&
      baseBarConRef.current &&
      Navigation.current
    ) {
      const movedValue = audioGauge_x_axis(e, baseBarConRef.current);
      const virtualTime = MediaClock(movedValue * TotalTime);
      NavigateNumber.current.style.display = "flex";
      NavigateNumber.current.textContent = virtualTime;

      const fullGapSize = baseNum.current.offsetWidth;
      const gapSize = fullGapSize - 9;
      const MousePosition =
        e.pageX - Navigation.current.getBoundingClientRect().left;
      let x = 0;
      if (MousePosition < fullGapSize + gapSize / 2) {
        x = fullGapSize;
      } else if (MousePosition > Navigation.current.clientWidth - gapSize / 2) {
        x = Navigation.current.clientWidth - gapSize;
      } else {
        x = MousePosition - gapSize / 2;
      }
      NavigateNumber.current.style.left = `${x}px`;
    }
  };

  return (
    <TimeBarPre
      CurrentTime={CurrentTime}
      audioTimeBar={audioTimeBar}
      audioBarHandle={audioBarHandle}
      Navigation={Navigation}
      NavigateNumber={NavigateNumber}
      baseNum={baseNum}
      baseBarConRef={baseBarConRef}
      audioCurrentTimeControlMouseMove={audioCurrentTimeControlMouseMove}
      audioTimeNavigate={audioTimeNavigate}
    />
  );
};
interface TimeBarProps {
  audioTag: HTMLAudioElement | null;
  CurrentTime: string;
  audioTimeBar: RefObject<HTMLProgressElement>;
  audioBarHandle: RefObject<HTMLDivElement>;
  TotalTime: number;
  audioSetTimeDenote: () => void;
  audioGauge_x_axis: (e: any, viewNode: any, clickNode?: any) => number;
}
