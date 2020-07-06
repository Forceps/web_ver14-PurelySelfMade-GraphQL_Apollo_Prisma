import React, { useRef, useState } from "react";
import styled from "styled-components";
import TemporaryBackground from "../../../../ElementEtc/Effect/TemporaryBackground";
import Header from "./Header";
import DirList from "./DirList";
import MakeDirCon from "../../../../../Routes/Profile/RightPanel/ToggleScreen/MakeDir/MakeDirCon";
import DirCtrlPanel from "../../../../../Routes/Profile/RightPanel/Section/DirCtrlPanel";
import IncludeScrollBar from "../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { useDirMode } from "../../../../../GlobalLib/Context/ProfileContext/DirMode";

interface ConsolProps {
  zIndex: number;
}
const Consol = styled.div<ConsolProps>`
  display: grid;
  grid-template-columns: 200px 260px;
  position: fixed;
  top: calc(50% - 200px);
  left: calc(50% - 230px);
  height: 400px;
  padding: 10px;
  background-color: white;
  z-index: ${(prop) => prop.zIndex};
`;
const Left = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid #b2bec3;
`;
const Right = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Sbj = styled.div`
  display: grid;
  width: calc(100% - 10px);
  margin-top: 100px;
  height: 40px;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
`;
const ManifestDir = styled.div`
  display: flex;
  width: calc(100% - 10px);
  margin-top: 40px;
  height: 40px;
  background-color: #dfe6e9;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const ScrollArea = styled(IncludeScrollBar)`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
  width: 100%;
  max-height: calc(100% - 60px);
`;

type DirAppointProps = {
  setDirApOpen: any;
  UDirObj?: any;
  zIndex?: number;
  customFunc?: any;
};
export default ({
  setDirApOpen,
  UDirObj,
  zIndex = 20,
  customFunc,
}: DirAppointProps) => {
  const DC = useDirMode();
  const InitialDir = useRef(DC.Location);
  const [MakeDirOpen, setMakeDirOpen] = useState(false);
  return (
    <>
      <TemporaryBackground
        zIndex={zIndex}
        onClick={(e: any) => {
          spaped(e);
          DC.setLocation(InitialDir.current);
          setDirApOpen(false);
        }}
      />
      <Consol zIndex={zIndex + 1}>
        <Left>
          <Sbj>Location</Sbj>
          <ManifestDir
            onClick={(e: any) => {
              spaped(e);
              setDirApOpen(false);
              if (customFunc) {
                customFunc();
              }
            }}
          >
            <i className="icon-folder" />
            {DC?.DirData?.name}
          </ManifestDir>
        </Left>
        <Right>
          <Header />
          <ScrollArea>
            <DirList UDirObj={UDirObj} />
            <DirCtrlPanel setMakeDirOpen={setMakeDirOpen} />
          </ScrollArea>
        </Right>
        {MakeDirOpen && <MakeDirCon setMakeDirOpen={setMakeDirOpen} />}
      </Consol>
    </>
  );
};
