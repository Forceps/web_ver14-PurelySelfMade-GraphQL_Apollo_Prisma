import React from "react";
import styled from "styled-components";
import { useDirMode } from "../../../../GlobalLib/Context/ProfileContext/DirMode";
import { useDirSelectorMode } from "../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import HeadRootSbj from "./HeadRootSbj";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const SbJCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  width: 100%;
  height: 40px;
  align-items: center;
`;
const SbJ = styled.div`
  display: grid;
  align-items: center;
  padding: 0 0 0 10px;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  overflow: hidden;
`;
const Folding = styled.i`
  display: grid;
  height: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SbJCon2 = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 30px;
  width: 100%;
  height: 40px;
  align-items: center;
`;
const BackStep = styled.div`
  display: grid;
  justify-content: center;
  padding: 11px;
  font-size: 1rem;
  height: 100%;
  width: 100%;
  &:hover {
    background-color: rgba(178, 190, 195, 0.5);
  }
  cursor: pointer;
`;

export default () => {
  const { DirData, setLocation } = useDirMode();
  const DirSelectorMode = useDirSelectorMode();
  return (
    <>
      {!DirData || !DirData?.directory ? (
        <SbJCon>
          <HeadRootSbj />
          <Folding
            className="icon-right-open"
            onClick={(e) => {
              spaped(e);
              DirSelectorMode.setMode(false);
            }}
          />
        </SbJCon>
      ) : (
        <SbJCon2>
          <BackStep
            onClick={(e) => {
              spaped(e);
              const Test = parseInt(DirData?.parent_id);
              if (!DirData?.directory.root) {
                setLocation(Test);
              } else {
                setLocation(0);
              }
            }}
          >
            <i className="icon-left-big" />
          </BackStep>
          <SbJ>{DirData?.name}</SbJ>
          <Folding
            className="icon-right-open"
            onClick={(e) => {
              spaped(e);
              DirSelectorMode.setMode(false);
            }}
          />
        </SbJCon2>
      )}
    </>
  );
};
