import React, { useState } from "react";
import ChatPre from "./ChatPre";

export default () => {
  const [MakeRoomOp, setMakeRoomOp] = useState(false);
  const [RoomEnter, setRoomEnter] = useState(true);
  return (
    <ChatPre
      MakeRoomOp={MakeRoomOp}
      setMakeRoomOp={setMakeRoomOp}
      RoomEnter={RoomEnter}
      setRoomEnter={setRoomEnter}
    />
  );
};
