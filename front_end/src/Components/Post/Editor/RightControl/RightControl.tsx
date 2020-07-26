import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDirMode } from "../../../../GlobalLib/Context/ProfileContext/DirMode";
import DirAppoint from "./DirSetting/DirAppoint";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { useDummyState } from "../../../../GlobalLib/Context/Lib/DummyState";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import TitleImgAppointmentCon from "./TitleImgAppointment/TitleImgAppointmentCon";

interface ControlsRProps {
  zIndex: number;
}
const ControlsR = styled.div<ControlsRProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  top: 25px;
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

type RightControlProps = {
  Exit: any;
  zIndex: number;
  TitleImg: string;
  setTitleImg: any;
};
export default ({ Exit, zIndex, TitleImg, setTitleImg }: RightControlProps) => {
  const Pmode = useProfileMode();
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
        <RestButn>
          <i className="icon-floppy" />
          Temporary Save
        </RestButn>
        <RestButn
          onClick={(e) => {
            spaped(e);
            Pmode.setMode(Pmode.rememberLatestMode.current);
            DC.setLocation(DC.rememberLocation.current);
            Exit(false);
          }}
        >
          <i className="icon-noun_x_2939490" />
        </RestButn>
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
