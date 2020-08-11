import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  WH100perInput,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import WritePostCon from "../../../../../Components/Post/WritePost/WritePostCon";

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
const Pagination = styled(W100per)`
  margin: 10px 0 15px 0;
`;

export default ({
  data,
  createPost,
  create_post_toggle,
  SearchKeyWord,
  Search,
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
      <Pagination>Pagination</Pagination>

      <Achievement>
        <AvailTotal>
          {postCount} {"posts"}
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
}
