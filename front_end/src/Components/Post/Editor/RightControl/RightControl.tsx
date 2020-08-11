import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDirMode } from "../../../../GlobalLib/Context/ProfileContext/DirMode";
import DirAppoint from "./DirSetting/DirAppoint";
import { useDummyState } from "../../../../GlobalLib/Context/Lib/DummyState";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import TitleImgAppointmentCon from "./TitleImgAppointment/TitleImgAppointmentCon";
import { EdBtn2 } from "../LeftControl/ButtonPart/GenControls";

interface ControlsRProps {
  zIndex: number;
}
const ControlsR = styled.div<ControlsRProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  top: 30px;
  left: 20px;
  width: 200px;
  z-index: ${(p) => p.zIndex};
`;
const Dmm = styled.div`
  position: relative;
`;
const RestButn = styled.div`
  display: flex;
  flex-direction: row;
  width: 195px;
  height: 60px;
  margin: 0 5px 5px 0;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: white;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const RestButnPGap = styled(RestButn)`
  margin-top: 5px;
`;
const SubmitButton = styled(EdBtn2)`
  background-color: #2d3436;
  color: white;
  &:hover {
    background-color: #636e72;
  }
  outline-style: none;
`;

type RightControlProps = {
  zIndex: number;
  TitleImg: string;
  setTitleImg: any;
  Mutation: any;
  Mode: any;
};
export default ({
  zIndex,
  TitleImg,
  setTitleImg,
  Mutation,
  Mode,
}: RightControlProps) => {
  const DC = useDirMode();
  const DS = useDummyState();
  const [DirApOpen, setDirApOpen] = useState(false);
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DC]);
  return (
    <Dmm>
      <ControlsR zIndex={zIndex}>
        <SubmitButton
          onClick={(e: any) => {
            spaped(e);
            Mutation();
          }}
        >
          {Mode && Mode.current === "update" ? "Update" : "Write"}
        </SubmitButton>
        <EdBtn2>
          <i className="icon-floppy" />
          Save
        </EdBtn2>
        <RestButnPGap
          onClick={(e) => {
            spaped(e);
            setDirApOpen(true);
          }}
        >
          <i className="icon-folder" />
          {DC.DirData?.name}
        </RestButnPGap>
        <TitleImgAppointmentCon
          zIndex={zIndex}
          TitleImg={TitleImg}
          setTitleImg={setTitleImg}
        />
        <RestButnPGap
          onClick={(e) => {
            spaped(e);
          }}
        >
          test
        </RestButnPGap>
      </ControlsR>
      {DirApOpen && <DirAppoint setDirApOpen={setDirApOpen} />}
    </Dmm>
  );
};
