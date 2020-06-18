import React, { useState, useEffect } from "react";
import LayerPre from "./LayerPre";
import { FindDirByIdRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryR";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";

export default ({ ParentId, setChoosedDir, ChoosedDir }: LayerConProps) => {
  const { data: DirByIdData, loading: DirByIdDataLoad } = FindDirByIdRequest(
    ParentId
  );
  const [DirOpenArr, setDirOpenArr] = useState<any[]>([]);
  useEffect(() => {
    if (!DirByIdDataLoad && DirOpenArr.length === 0) {
      let BAr: any[] = [];
      for (let i = 0; i < DirByIdData?.findDirById?.directory.length; i++) {
        BAr = BAr.concat(
          S_N_to_N(DirByIdData?.findDirById?.directory[i].directory_id)
        );
      }
      setDirOpenArr(BAr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DirByIdDataLoad]);

  return (
    <LayerPre
      DirByIdDataLoad={DirByIdDataLoad}
      DirByIdData={DirByIdData?.findDirById}
      DirOpenArr={DirOpenArr}
      setDirOpenArr={setDirOpenArr}
      setChoosedDir={setChoosedDir}
      ChoosedDir={ChoosedDir}
    />
  );
};

interface LayerConProps {
  ChoosedDir: number;
  setChoosedDir: any;
  ParentId: number;
}
