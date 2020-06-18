import React from "react";
import styled, { css } from "styled-components";
import { S_N_to_N } from "../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { W100per } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import LayerCon from "./LayerCon";
import { useDummyState } from "../../../../../GlobalLib/Context/Lib/DummyState";

export interface BarProps {
  NUM: number;
  ChoosedDir: number;
}
export const Bar = styled(W100per)<BarProps>`
  padding: 8px 0 8px 8px;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
  ${(p) => {
    if (p.NUM === p.ChoosedDir) {
      return css`
        border-right: 3px solid #2d3436;
        background-color: #dfe6e9;
      `;
    }
  }}
`;
const Indent = styled.div`
  padding: 0 0 0 8px;
`;

export default ({
  DirByIdDataLoad,
  DirByIdData,
  DirOpenArr,
  setDirOpenArr,
  ChoosedDir,
  setChoosedDir,
}: LayerPreProps) => {
  const { setDummyState } = useDummyState();
  return (
    !DirByIdDataLoad &&
    DirByIdData?.directory?.map((d: any) => {
      const FurtherDownExist = d.directory?.length !== 0;
      const directory_id = S_N_to_N(d.directory_id);
      const closed = DirOpenArr.includes(directory_id);
      return (
        DirOpenArr.length !== 0 && (
          <Indent key={d.directory_id}>
            <Bar
              onClick={(e) => {
                spaped(e);
                setDummyState((p: number) => p + 1);
                let BAr = DirOpenArr;

                closed && FurtherDownExist
                  ? BAr.splice(BAr.indexOf(directory_id), 1, -directory_id)
                  : BAr.splice(BAr.indexOf(-directory_id), 1, directory_id);
                setDirOpenArr(BAr);

                ChoosedDir === directory_id
                  ? setChoosedDir(0)
                  : setChoosedDir(directory_id);
              }}
              NUM={directory_id}
              ChoosedDir={ChoosedDir}
            >
              {FurtherDownExist &&
                (closed ? (
                  <i className="icon-right-dir" />
                ) : (
                  <i className="icon-down-dir" />
                ))}
              {d.name}
            </Bar>
            {!closed && FurtherDownExist && (
              <LayerCon
                ParentId={directory_id}
                ChoosedDir={ChoosedDir}
                setChoosedDir={setChoosedDir}
              />
            )}
          </Indent>
        )
      );
    })
  );
};
interface LayerPreProps {
  DirByIdDataLoad: boolean;
  DirByIdData: any;
  DirOpenArr: number[];
  setDirOpenArr: any;
  ChoosedDir: number;
  setChoosedDir: any;
}
