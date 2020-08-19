import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  W100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Loading from "../../../../Components/ElementEtc/Effect/Loading";
import Tile from "../../../../Components/Post/Shape/Tile/TileCon";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import DirListFoldingSystem from "../../../../Components/ElementEtc/DirListFoldingSystem/DirListFoldingSystem";

const Cover = styled(W100per)`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100px;
  min-height: 100px;
`;
const Category = styled(WH100per)`
  display: grid;
  grid-template-rows: 40px 1fr;
  padding: 10px 5px 0 17px;
`;
const Nucleus = styled(WH100per)`
  display: grid;
  grid-template-rows: 35px 1fr;
`;
const Cells = styled(WH100per)`
  padding: 12px 0 0 0;
  display: flex;
`;
const Sbj = styled(WH100per)`
  padding: 0 0 0 9px;
  font-size: 1.3rem;
  cursor: pointer;
`;
const Sorting = styled(WH100per)`
  display: grid;
  grid-template-columns: 70px 100px 1fr;
`;
const Smode = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0 3px 0;
  cursor: pointer;
`;
interface SmodeProps {
  PostSortBy: string;
}
const Smode1 = styled(Smode)<SmodeProps>`
  ${(p) => {
    if (p.PostSortBy === "recent") {
      return css`
        border-top: 3px solid black;
        padding: 0 0 3px 0;
      `;
    }
  }}
`;
const Smode2 = styled(Smode)<SmodeProps>`
  ${(p) => {
    if (p.PostSortBy === "popularity") {
      return css`
        border-top: 3px solid black;
        padding: 0 0 3px 0;
      `;
    }
  }}
`;

export default ({
  WpData,
  WpLoading,
  RootDirData,
  RootDirDataLoad,
  ChoosedDir,
  setChoosedDir,
  PostSortBy,
  setPostSortBy,
}: DisplayPreProps) => {
  return (
    <Cover>
      <Category>
        <Sbj
          onClick={(e) => {
            spaped(e);
            setChoosedDir([0, "Recent all"]);
          }}
        >
          Category
        </Sbj>
        <DirListFoldingSystem
          RootDirData={RootDirData}
          RootDirDataLoad={RootDirDataLoad}
          ChoosedDir={ChoosedDir}
          setChoosedDir={setChoosedDir}
        />
      </Category>
      <Nucleus>
        <Sorting>
          <Smode1
            onClick={() => {
              setPostSortBy("recent");
            }}
            PostSortBy={PostSortBy}
          >
            Recent
          </Smode1>
          <Smode2
            onClick={() => {
              setPostSortBy("popularity");
            }}
            PostSortBy={PostSortBy}
          >
            Popularity
          </Smode2>
        </Sorting>
        <Cells>
          {WpLoading ? (
            <Loading />
          ) : (
            <>
              {WpData.map((p: any) => (
                <Tile key={p.post_id} post={p} />
              ))}
            </>
          )}
        </Cells>
      </Nucleus>
    </Cover>
  );
};

interface DisplayPreProps {
  WpData: any;
  WpLoading: boolean;
  RootDirData: any;
  RootDirDataLoad: boolean;
  ChoosedDir: [number, string];
  setChoosedDir: any;
  PostSortBy: string;
  setPostSortBy: any;
}
