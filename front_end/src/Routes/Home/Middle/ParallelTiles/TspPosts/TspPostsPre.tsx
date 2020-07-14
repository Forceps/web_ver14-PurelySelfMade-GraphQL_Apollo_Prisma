import React from "react";
import styled from "styled-components";
import UpdatePostCon from "../../../../../Components/Post/UpdatePost/UpdatePostCon";
import Tile from "../../../../../Components/Post/Shape/Tile/TileCon";
import Loading from "../../../../../Components/ElementEtc/Effect/Loading";
import PostDetailT from "../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetailT";
import { W100per } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { useSearchUser } from "../../../../../GlobalLib/Context/UserContext/SearchUser";

const Wrapper = styled(W100per)`
  display: grid;
`;
const LoadingWrapper = styled.div`
  display: flex;
  height: 78%;
  justify-content: center;
  align-items: center;
`;
const Posts = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  padding: 11px 11px 0 1px;
`;
const SmallTitle = styled(W100per)`
  display: grid;
  align-items: center;
  padding: 14px 0 0 10px;
  font-size: 1.3rem;
`;

type PostTimelinePreProps = {
  TSP: any;
  PD: any;
  UP: any;
  SeeMode: string;
};
export default ({ TSP, PD, UP, SeeMode }: PostTimelinePreProps) => {
  const SU = useSearchUser();
  return (
    <Wrapper>
      <SmallTitle>
        {SeeMode === "Search" && SU.called ? "Post" : "New"}
      </SmallTitle>
      {!TSP.posts_loading ? (
        <>
          <Posts>
            {TSP.posts?.map((post: any) => (
              <Tile key={post.post_id} post={post} />
            ))}
          </Posts>
          {PD.OpenSeePostDetail && <PostDetailT />}
          {UP.UpdatePost &&
            PD.PostID !== "" &&
            !PD.postLoadingByID &&
            PD.postByID && <UpdatePostCon />}
        </>
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </Wrapper>
  );
};
