import React from "react";
import ChattingChannelPre from "./ChattingChannelPre";

export default ({ zIndex = 30, setRoomEnter }: ChattingChannelConPorops) => {
  return <ChattingChannelPre zIndex={zIndex} setRoomEnter={setRoomEnter} />;
};
interface ChattingChannelConPorops {
  zIndex?: number;
  setRoomEnter: any;
}
