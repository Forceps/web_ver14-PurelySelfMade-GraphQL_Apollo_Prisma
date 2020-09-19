import { useState, useEffect, useRef } from "react";

export default () => {
  const [Position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [Direction, setDirection] = useState(1);
  const CurrentY = useRef(0);
  const PastY = useRef(0);
  const onScroll = () => {
    setPosition({ y: window.scrollY, x: window.scrollX });
    CurrentY.current = window.scrollY;
    if (CurrentY.current >= PastY.current) {
      setDirection(1); //Down
    } else {
      setDirection(-1); //Up
    }
    PastY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { Position, Direction };
};
