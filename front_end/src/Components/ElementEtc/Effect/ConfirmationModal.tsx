import React from "react";
import styled from "styled-components";
import TemporaryBackground from "./TemporaryBackground";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

interface ConsolProps {
  zIndex: number;
}
const Consol = styled.div<ConsolProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-self: center;
  justify-self: center;
  min-width: 400px;
  min-height: 270px;
  padding: 30px;
  background-color: #fafafa;
  z-index: ${(p) => p.zIndex};
`;
const Sbj = styled.div`
  display: flex;
  text-align: center;
  font-size: 1.4rem;
  width: 100%;
  padding: 10px;
  margin-top: 22px;
`;
const SubSbj = styled.div`
  font-size: 1.2rem;
`;
const Submit = styled.button`
  display: grid;
  width: 100%;
  margin-top: 40px;
  padding: 10px;
  text-align: center;
  align-items: center;
  background-color: #2d3436;
  color: white;
  user-select: none;
  font-size: 0.9rem;
  border: 0;
  outline-style: none;
  &:hover {
    background-color: #636e72;
  }
  cursor: pointer;
`;
const Explain = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #636e72;
`;

const ConfirmationModal = ({
  subject,
  message,
  setConfirmationModalOpen,
  zIndex = 20,
}: DeleteDirPreProps) => {
  return (
    <>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          setConfirmationModalOpen(false);
        }}
        zIndex={zIndex}
      />
      <Consol zIndex={zIndex}>
        <Sbj>
          Confirmation - <SubSbj>{subject}</SubSbj>
        </Sbj>
        <Explain>{message}</Explain>
        <Submit
          onClick={(e) => {
            setConfirmationModalOpen(false);
          }}
        >
          Delete
        </Submit>
      </Consol>
    </>
  );
};
type DeleteDirPreProps = {
  subject: string;
  message: string;
  setConfirmationModalOpen: any;
  zIndex?: number;
};

export default React.memo(ConfirmationModal);
