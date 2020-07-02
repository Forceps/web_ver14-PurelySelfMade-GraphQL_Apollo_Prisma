import React from "react";
import styled from "styled-components";
import { W100per } from "../../GlobalLib/Styles/IteratePattern/WH100per";
import MakeRoomCon from "./MakeRoom/MakeRoomCon";
import RoomsCon from "./Rooms/RoomsCon";
import PrivateCon from "./Private/PrivateCon";

const Wapper = styled(W100per)`
  display: flex;
  justify-content: center;
`;
const Invest = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  min-width: 780px;
  max-width: 100%;
`;
const Center = styled(W100per)`
  display: grid;
  grid-template-rows: 60px 1fr;
  min-height: 100px;
`;
const Main = styled(W100per)`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100px;
`;

export default ({ MakeRoomOp, setMakeRoomOp }: ChatPreProps) => {
  return (
    <Wapper>
      <Invest>
        <div />
        <Center>
          <div />
          <Main>
            <PrivateCon />
            <RoomsCon setMakeRoomOp={setMakeRoomOp} />
          </Main>
        </Center>
      </Invest>
      {MakeRoomOp && <MakeRoomCon setMakeRoomOpen={setMakeRoomOp} />}
    </Wapper>
  );
};
interface ChatPreProps {
  MakeRoomOp: boolean;
  setMakeRoomOp: any;
}
