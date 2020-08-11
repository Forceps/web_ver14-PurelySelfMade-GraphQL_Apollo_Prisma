import React from "react";
import styled from "styled-components";
import WH100per, {
  WH100perInput,
  W100per,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import useInput from "../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import OrganizeCon from "./Organize/OrganizeCon";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 35px;
  width: 260px;
  height: 35px;
  margin: 10px 0 0 10px;
`;
const SearchTxt = styled(WH100perInput)`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-left: 2px solid #2d3436;
`;
const SearchBtn = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
`;
const OrganizeBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 35px;
  padding: 5px;
  margin: 20px 0 0 10px;
  font-size: 1rem;
  background-color: #dfe6e9;
  cursor: pointer;
  &:hover {
    background-color: #b2bec3;
  }
`;
const RSbj = styled.div`
  padding: 10px;
  font-size: 1rem;
  margin: 15px 0 -5px 0;
`;
const RecommendBlock = styled.div`
  display: grid;
  grid-template-rows: 21px 1fr;
  margin: 0 0 10px 10px;
  width: 250px;
`;
const RecommendPost = styled(RecommendBlock)`
  height: 340px;
`;
const RSubSbj = styled(W100per)`
  display: grid;
  justify-content: right;
  padding: 0 5px 0 0;
  font-size: 0.85rem;
  border-bottom: 1px solid #b2bec3;
`;

export default ({ GroupMakeOpen, setGroupMakeOpen }: FunctionalityPreProps) => {
  const SearchKeyWord = useInput("");
  const Search = async (e: any) => {
    spaped(e);
    if (SearchKeyWord.value) {
    } else {
    }
  };
  return (
    <>
      <Wrapper>
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
          />
          <SearchBtn
            onClick={(e: any) => {
              Search(e);
            }}
          >
            <i className="icon-search" />
          </SearchBtn>
        </SearchBox>
        <OrganizeBtn
          onClick={() => {
            setGroupMakeOpen(true);
          }}
        >
          Organize
        </OrganizeBtn>
        <RSbj>Recommend</RSbj>
        <RecommendPost>
          <RSubSbj>Community</RSubSbj>
        </RecommendPost>
      </Wrapper>
      {GroupMakeOpen && <OrganizeCon setGroupMakeOpen={setGroupMakeOpen} />}
    </>
  );
};

interface FunctionalityPreProps {
  GroupMakeOpen: boolean;
  setGroupMakeOpen: any;
}
