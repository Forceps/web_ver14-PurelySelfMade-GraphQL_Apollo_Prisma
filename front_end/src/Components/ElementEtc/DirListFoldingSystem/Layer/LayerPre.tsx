import React, { useState } from "react";
import styled, { css } from "styled-components";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { W100per } from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import LayerCon from "./LayerCon";
import { useDummyState } from "../../../../GlobalLib/Context/Lib/DummyState";

export interface BarProps {
  NUM: number;
  ChoosedDir: [number, string];
  hoverBackColor: string;
}
export const Bar = styled(W100per)<BarProps>`
  padding: 8px 0 8px 8px;
  &:hover {
    background-color: ${(p) => p.hoverBackColor};
  }
  ${(p) => {
    if (p.NUM === p.ChoosedDir[0]) {
      return css`
        border-right: 3px solid #2d3436;
        background-color: ${p.hoverBackColor};
      `;
    }
  }}
  transition-property: background-color;
  transition-duration: 0.12s;
  transition-timing-function: ease;
  cursor: pointer;
`;
const Indent = styled.div`
  padding: 0 0 0 8px;
`;

export default ({
  DirByIdData,
  ChoosedDir,
  setChoosedDir,
  hoverBackColor,
}: LayerPreProps) => {
  const { setDummyState } = useDummyState();
  return DirByIdData.other_directory?.map((d: any) => {
    const FurtherDownExist = d.other_directory?.length !== 0;
    const directory_id = S_N_to_N(d.directory_id);
    const [Open, setOpen] = useState(false);
    return (
      <Indent key={d.directory_id}>
        <Bar
          onClick={(e) => {
            spaped(e);
            setDummyState((p: number) => p + 1);
            setOpen((p) => !p);

            ChoosedDir[0] === directory_id
              ? setChoosedDir([0, "Recent all"])
              : setChoosedDir([directory_id, d.name]);
          }}
          NUM={directory_id}
          ChoosedDir={ChoosedDir}
          hoverBackColor={hoverBackColor}
        >
          {FurtherDownExist &&
            (!Open ? (
              <i className="icon-right-dir" />
            ) : (
              <i className="icon-down-dir" />
            ))}
          {d.name}
        </Bar>
        {Open && FurtherDownExist && (
          <LayerCon
            ParentId={directory_id}
            ChoosedDir={ChoosedDir}
            setChoosedDir={setChoosedDir}
            hoverBackColor={hoverBackColor}
          />
        )}
      </Indent>
    );
  });
};
interface LayerPreProps {
  DirByIdData: any;
  ChoosedDir: [number, string];
  setChoosedDir: any;
  hoverBackColor: string;
}
