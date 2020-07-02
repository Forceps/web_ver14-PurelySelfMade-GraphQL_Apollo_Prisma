import React from "react";
import styled, { css } from "styled-components";
import TemporaryBackground from "../../../Components/Effect/TemporaryBackground";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per, {
  W100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import IncludeScrollBar from "../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import Avatar from "../../../Components/User/Avatar";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import { useDummyState } from "../../../GlobalLib/Context/Lib/DummyState";

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
  width: 620px;
  height: 75vh;
  min-height: 600px;
  background-color: #fafafa;
  overflow: auto;
  z-index: ${(prop) => prop.zIndex};
  display: grid;
  grid-template-rows: 40px 80px 1fr;
`;
const Header = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  font-size: 1.3rem;
`;
const Naming = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
  font-size: 1rem;
`;
const NamingInput = styled.input`
  width: 380px;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #2d3436;
  margin: 0 0 0 10px;
  font-size: 1rem;
  background-color: #fafafa;
`;
const Invite = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const PeopleList = styled(WH100per)`
  display: grid;
  grid-template-rows: 35px 1fr;
`;
const Member = styled(WH100per)`
  display: grid;
  grid-template-rows: 35px 1fr;
`;
const SubSbj = styled(WH100per)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 0 0 0 10px;
`;
const Enumeration = styled(WH100per)`
  padding: 10px 0 0 0;
`;
const SituationMessage = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 0 10px;
`;
const FaceBlock = styled(W100per)`
  display: grid;
  grid-template-columns: 50px 1fr;
  height: 60px;
  padding: 5px 0 5px 5px;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Names = styled(WH100per)`
  display: flex;
  padding: 0 5px 0 10px;
  align-items: center;
`;
interface FaceBlock1Prop {
  choiced: boolean;
}
const FaceBlock1 = styled(FaceBlock)<FaceBlock1Prop>`
  ${(p) => {
    if (p.choiced) {
      return css`
        border-left: 4px solid #2d3436;
      `;
    }
  }}
`;
const FaceBlock2 = styled(FaceBlock)``;
const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  background-color: #dfe6e9;
  margin: 0 0 0 15px;
  cursor: pointer;
`;

export default ({
  zIndex,
  setMakeRoomOpen,
  NameAssign,
  sfLoading,
  sfData,
  Invited,
  include,
  exclude,
  choicedCheck,
  createRoomSubmit,
}: MakeRoomPreProps) => {
  const { setDummyState } = useDummyState();
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setMakeRoomOpen(false);
        }}
        zIndex={zIndex + 1}
      />
      <Template zIndex={zIndex + 2}>
        <Header>Make chat room</Header>
        <Naming>
          Name: <NamingInput {...NameAssign} spellCheck="false" />
          <SubmitBtn
            onClick={(e) => {
              spaped(e);
              createRoomSubmit();
            }}
          >
            Make
          </SubmitBtn>
        </Naming>
        <Invite>
          <PeopleList>
            <SubSbj>Candidate</SubSbj>
            <Enumeration>
              {sfLoading ? (
                <SituationMessage>Loading...</SituationMessage>
              ) : sfData.length === 0 ? (
                <SituationMessage>No friends</SituationMessage>
              ) : (
                sfData.map((d: any) => (
                  <FaceBlock1
                    key={d.user_id}
                    onClick={() => {
                      choicedCheck(d.user_id)
                        ? exclude(S_N_to_N(d.user_id))
                        : include(d);
                      setDummyState((p: number) => p + 1);
                    }}
                    choiced={choicedCheck(d.user_id)}
                  >
                    <Avatar url={d.avatar} size={50} />
                    <Names>{d.username}</Names>
                  </FaceBlock1>
                ))
              )}
            </Enumeration>
          </PeopleList>
          <Member>
            <SubSbj>Invite</SubSbj>
            <Enumeration>
              {Invited.length === 0 ? (
                <SituationMessage>Not yet included</SituationMessage>
              ) : (
                Invited.map((d: any) => (
                  <FaceBlock2
                    key={d.user_id}
                    onClick={() => {
                      exclude(S_N_to_N(d.user_id));
                      setDummyState((p: number) => p + 1);
                    }}
                  >
                    <Avatar url={d.avatar} size={50} />
                    <Names>{d.username}</Names>
                  </FaceBlock2>
                ))
              )}
            </Enumeration>
          </Member>
        </Invite>
      </Template>
    </Wrapper>
  );
};
interface MakeRoomPreProps {
  zIndex: number;
  setMakeRoomOpen: any;
  NameAssign: any;
  sfLoading: boolean;
  sfData: any;
  Invited: any[];
  include: (arg: any) => void;
  exclude: (user_id: number) => void;
  choicedCheck: (user_id: number | string) => boolean;
  createRoomSubmit: () => void;
}
