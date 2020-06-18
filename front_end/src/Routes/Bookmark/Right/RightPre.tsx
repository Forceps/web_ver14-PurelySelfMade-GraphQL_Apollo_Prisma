import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  WH100perInput,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import WritePostCon from "../../../Components/Post/WritePost/WritePostCon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 92vh;
  position: fixed;
  left: calc(50vw - 550px + 790px);
  width: 310px;
  z-index: 0;
`;
const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 35px;
  width: 250px;
  height: 35px;
  margin: 10px 0 10px 8px;
`;
const SearchTxt = styled(WH100perInput)`
  padding: 5px;
  font-size: 1rem;
  border: 0;
  background-color: #fafafa;
  border-left: 2px solid #636e72;
`;
const SearchBtn = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
`;
const Sbj = styled.div`
  padding: 10px;
  font-size: 1rem;
  margin: 10px 0 -5px 0;
`;
const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 35px;
  margin: 8px 0 0 8px;
  font-size: 1.1rem;
  background-color: #dfe6e9;
  &:hover {
    background-color: #b2bec3;
  }
  cursor: pointer;
`;
const RecommendBlock = styled.div`
  display: grid;
  grid-template-rows: 21px 1fr;
  margin: 0 0 10px 10px;
  width: 250px;
`;
const RecommendUser = styled(RecommendBlock)`
  height: 300px;
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
const Icon = styled.i`
  margin: 0 0 0 -8px;
`;

export default ({
  SearchKeyWord,
  Search,
  createPost,
  setCreatePost,
}: RightPreProps) => {
  return (
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
          spellCheck="false"
        />
        <SearchBtn
          onClick={(e: any) => {
            Search(e);
          }}
        >
          <i className="icon-search" />
        </SearchBtn>
      </SearchBox>
      <Post
        onClick={() => {
          setCreatePost(true);
        }}
      >
        <Icon className="icon-plus" /> Post
      </Post>
      <Sbj>Recommend</Sbj>
      <RecommendUser>
        <RSubSbj>Author</RSubSbj>
      </RecommendUser>
      <RecommendPost>
        <RSubSbj>Post</RSubSbj>
      </RecommendPost>
      {createPost && <WritePostCon create_post_toggle={setCreatePost} />}
    </Wrapper>
  );
};

interface RightPreProps {
  SearchKeyWord: any;
  Search: any;
  createPost: boolean;
  setCreatePost: any;
}
