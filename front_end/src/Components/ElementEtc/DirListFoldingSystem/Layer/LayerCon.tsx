import React from "react";
import LayerPre from "./LayerPre";
import { FindDirByIdRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryR";

export default ({
  ParentId,
  setChoosedDir,
  ChoosedDir,
  hoverBackColor,
}: LayerConProps) => {
  const { data: DirByIdData, loading: DirByIdDataLoad } = FindDirByIdRequest(
    ParentId
  );

  return DirByIdDataLoad ? (
    <div />
  ) : (
    <LayerPre
      DirByIdData={DirByIdData?.findDirById}
      setChoosedDir={setChoosedDir}
      ChoosedDir={ChoosedDir}
      hoverBackColor={hoverBackColor}
    />
  );
};

interface LayerConProps {
  ChoosedDir: [number, string];
  setChoosedDir: any;
  ParentId: number;
  hoverBackColor: string;
}
