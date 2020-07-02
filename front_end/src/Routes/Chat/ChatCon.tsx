import React, { useState } from "react";
import ChatPre from "./ChatPre";

export default () => {
  const [MakeRoomOp, setMakeRoomOp] = useState(false);
  return <ChatPre MakeRoomOp={MakeRoomOp} setMakeRoomOp={setMakeRoomOp} />;
};
