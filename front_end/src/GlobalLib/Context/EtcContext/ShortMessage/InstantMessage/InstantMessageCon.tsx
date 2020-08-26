import React, { useRef, useEffect, useState } from "react";
import InstantMessagePre from "./InstantMessagePre";

const InstantMessageCon = ({ Subject, Message }: InstantMessageConProps) => {
  const TimeSec = 5;
  const progressValue = useRef(1);
  const progressBar = useRef<HTMLDivElement>(null);
  const inteval = useRef(0);
  const [Stop, setStop] = useState(false);
  const statusBarMoving = () => {
    if (progressBar.current) {
      if (progressValue.current > 0) {
        progressValue.current = progressValue.current - TimeSec / 625;
        progressBar.current.style.transform = `scaleY(${progressValue.current})`;
      } else {
        progressValue.current = 0;
        progressBar.current.style.transform = `scaleY(0)`;
        window.clearInterval(inteval.current);
      }
    }
  };
  const ProgressStop = () => {
    if (Stop) {
      setStop(false);
      inteval.current = setInterval(statusBarMoving, TimeSec * 8);
    } else {
      setStop(true);
      window.clearInterval(inteval.current);
    }
  };

  useEffect(() => {
    inteval.current = setInterval(statusBarMoving, TimeSec * 8);
    return () => {
      window.clearInterval(inteval.current);
    };
  }, []);

  return (
    <InstantMessagePre
      Subject={Subject}
      Message={Message}
      progressBar={progressBar}
      ProgressStop={ProgressStop}
      Stop={Stop}
    />
  );
};

interface InstantMessageConProps {
  Subject?: string;
  Message?: string;
}

export default React.memo(InstantMessageCon);
