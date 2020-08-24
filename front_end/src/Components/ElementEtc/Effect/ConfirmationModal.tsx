import React from "react";
import styled from "styled-components";
import TemporaryBackground from "./TemporaryBackground";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per, {
  W100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";

interface EncompassProps {
  zIndex: number;
}
const Encompass = styled(WH100per)<EncompassProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(p) => p.zIndex};
`;
const Consol = styled.div<EncompassProps>`
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  width: 380px;
  min-height: 270px;
  padding: 10px;
  background-color: #fafafa;
  z-index: ${(p) => p.zIndex};
`;
const Sbj = styled(W100per)`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
`;
const Intent = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const Decision = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
`;
const SubSbj = styled.div`
  font-size: 1.1rem;
`;
const BtnGen = styled.button`
  display: flex;
  width: 70px;
  height: 100%;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  user-select: none;
  font-size: 0.9rem;
  outline-style: none;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Submit = styled(BtnGen)`
  background-color: #2d3436;
  color: white;
  border: 0;
  &:hover {
    background-color: #636e72;
  }
`;
const Explain = styled.div`
  padding: 20px 0 20px 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #636e72;
`;

const ConfirmationModal = ({
  subject,
  message,
  setConfirmationModalOpen,
  functionExecute,
  zIndex = 20,
}: DeleteDirPreProps) => {
  return (
    <Encompass zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setConfirmationModalOpen(false);
        }}
        zIndex={zIndex + 1}
      />
      <Consol zIndex={zIndex + 2}>
        <Sbj>Confirmation</Sbj>
        <Intent>
          <SubSbj>{subject ? subject : "Subject"}</SubSbj>
          <Explain>{message ? message : "This is a message"}</Explain>
        </Intent>
        <Decision>
          <Submit
            onClick={(e) => {
              spaped(e);
              functionExecute && functionExecute();
              setConfirmationModalOpen(false);
            }}
          >
            Yes
          </Submit>
          <BtnGen
            onClick={(e) => {
              spaped(e);
              setConfirmationModalOpen(false);
            }}
          >
            Cancel
          </BtnGen>
        </Decision>
      </Consol>
    </Encompass>
  );
};
type DeleteDirPreProps = {
  subject?: string;
  message?: string;
  setConfirmationModalOpen: any;
  functionExecute?: () => void;
  zIndex?: number;
};

export default React.memo(ConfirmationModal);
