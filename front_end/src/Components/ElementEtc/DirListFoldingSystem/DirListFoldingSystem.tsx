import React, { useState } from "react";
import styled from "styled-components";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import LayerCon from "./Layer/LayerCon";
import { Bar } from "./Layer/LayerPre";

const Fold = styled(WH100per)`
  display: flex;
  flex-direction: column;
`;

const DirListFoldingSystem = ({
  RootDirData,
  RootDirDataLoad,
  ChoosedDir,
  setChoosedDir,
  hoverBackColor = "#dfe6e9",
}: DirListFoldingSystemProps) => {
  return (
    <Fold>
      {!RootDirDataLoad &&
        RootDirData?.other_directory.map((d: any) => (
          <RootLayer
            key={d.directory_id}
            dirs={d}
            ChoosedDir={ChoosedDir}
            setChoosedDir={setChoosedDir}
            hoverBackColor={hoverBackColor}
          />
        ))}
    </Fold>
  );
};

interface DirListFoldingSystemProps {
  RootDirData: any;
  RootDirDataLoad: boolean;
  ChoosedDir: number;
  setChoosedDir: any;
  hoverBackColor?: string;
}

export default React.memo(DirListFoldingSystem);

const RootLayer = ({
  dirs,
  ChoosedDir,
  setChoosedDir,
  hoverBackColor,
}: RootLayerProps) => {
  const [DirOpen, setDirOpen] = useState(false);
  const FurtherDownExist = dirs.other_directory?.length !== 0;
  const directory_id = S_N_to_N(dirs.directory_id);
  return (
    <div>
      <Bar
        onClick={(e) => {
          spaped(e);
          DirOpen ? setDirOpen(false) : setDirOpen(true);
          ChoosedDir === directory_id
            ? setChoosedDir(0)
            : setChoosedDir(directory_id);
        }}
        NUM={directory_id}
        ChoosedDir={ChoosedDir}
        hoverBackColor={hoverBackColor}
      >
        {FurtherDownExist &&
          (!DirOpen ? (
            <i className="icon-right-dir" />
          ) : (
            <i className="icon-down-dir" />
          ))}
        {dirs.name}
      </Bar>
      {DirOpen && FurtherDownExist && (
        <LayerCon
          ParentId={directory_id}
          setChoosedDir={setChoosedDir}
          ChoosedDir={ChoosedDir}
          hoverBackColor={hoverBackColor}
        />
      )}
    </div>
  );
};
interface RootLayerProps {
  dirs: any;
  ChoosedDir: number;
  setChoosedDir: any;
  hoverBackColor: string;
}
