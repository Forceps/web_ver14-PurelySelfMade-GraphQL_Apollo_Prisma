import React, { useRef, useEffect, useState } from "react";
import InstantMessagePre from "./InstantMessagePre";

const InstantMessageCon = ({
  myTempId,
  Subject,
  Message,
  setDeleteTarget,
}: InstantMessageConProps) => {
  const BoxEl = useRef<HTMLDivElement>(null);
  const TimeSec = 5;
  const progressValue = useRef(1);
  const progressBar = useRef<HTMLDivElement>(null);
  const inteval = useRef(0);
  const endTimeout = useRef(0);
  const [Show, setShow] = useState(false);
  const [Stop, setStop] = useState(false);
  const [Hide, setHide] = useState(false);
  const [During, setDuring] = useState(false);
  const statusBarMoving = () => {
    if (progressBar.current && !Hide) {
      if (progressValue.current > 0) {
        progressValue.current = progressValue.current - TimeSec / 625;
        progressBar.current.style.transform = `scaleY(${progressValue.current})`;
      } else {
        progressValue.current = 0;
        progressBar.current.style.transform = `scaleY(0)`;
        setHide(true);
        window.clearInterval(inteval.current);
      }
    }
  };
  const ProgressStop = () => {
    if (During) {
      if (Stop) {
        setStop(false);
        inteval.current = setInterval(statusBarMoving, 40);
      } else {
        setStop(true);
        window.clearInterval(inteval.current);
      }
    }
  };
  const end = () => {
    setDeleteTarget(myTempId);
  };

  useEffect(() => {
    setShow(true);
    setDuring(true);
    inteval.current = setInterval(statusBarMoving, 40);
    return () => {
      window.clearInterval(inteval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (Hide) {
      setDuring(false);
      window.clearInterval(inteval.current);
      endTimeout.current = setTimeout(end, 800);
    }
    return () => {
      clearTimeout(endTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Hide]);

  return (
    <InstantMessagePre
      BoxEl={BoxEl}
      Subject={Subject}
      Message={Message}
      progressBar={progressBar}
      ProgressStop={ProgressStop}
      Stop={Stop}
      Show={Show}
      Hide={Hide}
      setHide={setHide}
    />
  );
};

interface InstantMessageConProps {
  myTempId: string;
  Subject?: string;
  Message?: string;
  setDeleteTarget: React.Dispatch<React.SetStateAction<string>>;
}

export default React.memo(InstantMessageCon);
