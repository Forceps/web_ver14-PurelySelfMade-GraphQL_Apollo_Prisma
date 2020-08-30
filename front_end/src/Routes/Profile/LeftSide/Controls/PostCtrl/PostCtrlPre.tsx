import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  WH100perInput,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import WritePostCon from "../../../../../Components/Post/WritePost/WritePostCon";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const Suburb = styled(W100per)`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 30px 10px 0 10px;
`;
const AvailTotal = styled(W100per)`
  padding: 10px 0 15px 0;
`;
const Achievement = styled.div``;
const SearchBox = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 35px;
  height: 35px;
  margin: 10px 0 15px 0;
`;
const SearchTxt = styled(WH100perInput)`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #2d3436;
`;
const SearchBtn = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
`;
const Pagenation = styled(W100per)`
  margin: 10px 0 15px 0;
`;
const PgnSbj = styled(W100per)``;
const PgnNumList = styled(W100per)`
  display: flex;
  justify-content: flex-start;
  margin: 7px 0 12px 0;
`;
const PageNum = styled.div`
  padding: 4px 5px 4px 5px;
  margin: 1px 3px 1px 3px;
  cursor: pointer;
  &:hover {
    background-color: #dfe6e9;
  }
`;
const WrBtn = styled(W100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  padding: 5px;
  margin: 0 15px 10px 0;
  background-color: #dfe6e9;
  cursor: pointer;
  &:hover {
    background-color: #b2bec3;
  }
`;
const Icon = styled.i`
  margin: 0 0 0 8px;
`;
const ScaleInfoSbj = styled(W100per)`
  margin: 0 0 10px 0;
`;
const ScaleInfoMain = styled(W100per)`
  padding: 0 0 0 7px;
`;

export default ({
  data,
  createPost,
  create_post_toggle,
  SearchKeyWord,
  Search,
  PagenationNum,
}: PostCtrlPreProps) => {
  const { postCount } = data;
  return (
    <Suburb>
      <SearchBox>
        <SearchTxt
          type="text"
          placeholder="Search"
          {...SearchKeyWord}
          onKeyUp={(e: any) => {
            if (e.keyCode === 13) {
              Search(e);
            }
          }}
          spellCheck="false"
        />
        <SearchBtn onClick={(e: any) => {}}>
          <i className="icon-search" />
        </SearchBtn>
      </SearchBox>
      <Pagenation>
        <PgnSbj>Pagenation</PgnSbj>
        <PgnNumList>
          {PagenationNum.map((n) => (
            <PageNum key={n}>{n}</PageNum>
          ))}
        </PgnNumList>
      </Pagenation>
      <WrBtn
        onClick={(e) => {
          spaped(e);
          create_post_toggle();
        }}
      >
        Write
        <Icon className="icon-pencil-alt" />
      </WrBtn>
      <Achievement>
        <AvailTotal>
          <ScaleInfoSbj>Scale</ScaleInfoSbj>
          <ScaleInfoMain>
            {postCount} {postCount === 1 ? "post" : "posts"}
          </ScaleInfoMain>
        </AvailTotal>
      </Achievement>
      {createPost && <WritePostCon create_post_toggle={create_post_toggle} />}
    </Suburb>
  );
};

interface PostCtrlPreProps {
  data: any;
  createPost: boolean;
  create_post_toggle: () => void;
  Search: (e: any) => void;
  SearchKeyWord: any;
  PagenationNum: number[];
}
