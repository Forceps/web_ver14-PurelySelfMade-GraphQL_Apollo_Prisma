import React from "react";
import ChatPre from "./ChatPre";
import { SeeRoomsRequest } from "../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";

export default () => {
  const { loading: srLoading, data: srData } = SeeRoomsRequest(0, 5);
  return <ChatPre srLoading={srLoading} srData={srData} />;
};
