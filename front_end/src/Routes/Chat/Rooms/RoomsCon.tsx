import React from "react";
import RoomsPre from "./RoomsPre";
import { SeeRoomsRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Chat/ChatR";

export default ({ setMakeRoomOp, setRoomEnter }: RoomsConProps) => {
  const { loading: srLoading, data: srData } = SeeRoomsRequest(0, 5);
  return (
    <RoomsPre
      srLoading={srLoading}
      srData={srData?.seeRooms}
      setMakeRoomOp={setMakeRoomOp}
      setRoomEnter={setRoomEnter}
    />
  );
};
interface RoomsConProps {
  setMakeRoomOp: any;
  setRoomEnter: any;
}
