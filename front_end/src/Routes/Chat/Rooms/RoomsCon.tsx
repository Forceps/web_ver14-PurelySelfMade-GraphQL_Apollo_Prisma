import React from "react";
import RoomsPre from "./RoomsPre";
import { SeeRoomsRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";

export default ({ setMakeRoomOp }: RoomsConProps) => {
  const { loading: srLoading, data: srData } = SeeRoomsRequest(0, 5);
  return (
    <RoomsPre
      srLoading={srLoading}
      srData={srData?.seeRooms}
      setMakeRoomOp={setMakeRoomOp}
    />
  );
};
interface RoomsConProps {
  setMakeRoomOp: any;
}
