import React, { useState } from "react";
import styled from "styled-components";
import WritePostCon from "../../../../../../Components/Post/WritePost/WritePostCon";
import useInput from "../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useTargetsShown } from "../../../../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import WH100per, {
  WH100perInput,
  W100per,
} from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Wrapper = styled(WH100per)`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 10px;
`;
const SearchBox = styled(W100per)`
  display: grid;
  grid-template-columns: 35px 1fr;
  height: 35px;
  margin: 15px 0 0 0;
`;
const SearchTxt = styled(WH100perInput)`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #2d3436;
  margin-bottom: 10px;
`;
const SearchBtn = styled(WH100per)`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
`;
const WrBtn = styled(W100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 5px;
  margin: 20px 0 0 0;
  font-size: 1rem;
  background-color: #dfe6e9;
  cursor: pointer;
  &:hover {
    background-color: #b2bec3;
  }
`;
const Icon = styled.i`
  margin: 0 0 0 8px;
`;

export default () => {
  const TSP = useTargetsShown();
  const [createPost, setCreatePost] = useState(false);
  const SearchKeyWord = useInput("");
  const create_post_toggle = () => {
    setCreatePost((p) => !p);
  };
  const Search = async (e: any) => {
    spaped(e);
    if (SearchKeyWord.value) {
      await TSP.setKeyWord(SearchKeyWord.value);
      await TSP.SrloadGreeting();
      TSP.setPostTargetMode("Search");
    } else {
      TSP.setPostTargetMode("Whose");
    }
  };
  return (
    <Wrapper>
      <SearchBox>
        <SearchBtn
          onClick={(e: any) => {
            Search(e);
          }}
        >
          <i className="icon-search" />
        </SearchBtn>
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
      </SearchBox>
      <WrBtn
        onClick={(e) => {
          spaped(e);
          setCreatePost(true);
        }}
      >
        Write
        <Icon className="icon-pencil-alt" />
      </WrBtn>
      {createPost && <WritePostCon create_post_toggle={create_post_toggle} />}
    </Wrapper>
  );
};
