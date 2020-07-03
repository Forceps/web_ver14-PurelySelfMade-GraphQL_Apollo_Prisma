import React from "react";
import styled from "styled-components";
import TemporaryBackground from "../../../Components/Effect/TemporaryBackground";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";

interface WrapperProps {
  zIndex: number;
}
const Wrapper = styled(WH100per)<WrapperProps>`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: ${(prop) => prop.zIndex};
`;
const Template = styled(IncludeScrollBar)<WrapperProps>`
  position: relative;
  width: 400px;
  height: 85vh;
  min-height: 600px;
  background-color: #fafafa;
  overflow: auto;
  z-index: ${(prop) => prop.zIndex};
  display: grid;
  grid-template-rows: 40px 1fr 150px;
`;
const Header = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  font-size: 1.3rem;
`;

export default ({ zIndex, setRoomEnter }: ChattingChannelPrePorops) => {
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setRoomEnter(false);
        }}
        zIndex={zIndex + 1}
      />
      <Template zIndex={zIndex + 2}>
        <Header>Chat</Header>
      </Template>
    </Wrapper>
  );
};
interface ChattingChannelPrePorops {
  zIndex: number;
  setRoomEnter: any;
}
